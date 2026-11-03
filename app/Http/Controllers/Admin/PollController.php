<?php

namespace App\Http\Controllers\Admin;

use App\Enums\PollStatus;
use App\Enums\Tone;
use App\Http\Controllers\Controller;
use App\Http\Requests\Poll\PollRequest;
use App\Models\Category;
use App\Models\Poll;
use App\Models\PollVote;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class PollController extends Controller
{
    public function index(Request $request): Response
    {
        $search = trim((string) $request->query('search', ''));
        $status = trim((string) $request->query('status', ''));

        $polls = Poll::query()
            ->with('category:id,name')
            ->withCount(['options', 'votes'])
            ->when($search !== '', fn ($query) => $query->where('question', 'like', "%{$search}%"))
            ->when(PollStatus::tryFrom($status), fn ($query, $value) => $query->where('status', $value->value))
            ->latest('id')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('admin/polls/index', [
            'polls' => $polls,
            'statuses' => PollStatus::values(),
            'filters' => ['search' => $search, 'status' => $status],
            'stats' => Inertia::optional(fn (): array => [
                'total' => Poll::count(),
                'active' => Poll::where('status', PollStatus::ACTIVE->value)->count(),
                'votes' => PollVote::count(),
            ]),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/polls/create', $this->formOptions());
    }

    public function store(PollRequest $request): RedirectResponse
    {
        DB::transaction(function () use ($request): void {
            $data = $this->payload($request);

            if ($request->hasFile('image')) {
                $data['image'] = $request->file('image')->store('polls', 'public');
            }

            $poll = Poll::create($data);
            $this->syncOptions($poll, $request->validated('options'));
        });

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Poll created successfully.']);

        return redirect()->route('admin.polls.index');
    }

    public function show(Poll $poll): Response
    {
        $poll->load(['category:id,name', 'options' => fn ($query) => $query->withCount('votes')]);

        $total = $poll->options->sum('votes_count');

        return Inertia::render('admin/polls/show', [
            'poll' => $poll,
            'results' => $poll->options->map(fn ($option) => [
                'id' => $option->id,
                'label' => $option->label,
                'tone' => $option->tone,
                'votes' => $option->votes_count,
                'percent' => $total > 0 ? round($option->votes_count / $total * 100, 1) : 0,
            ])->values(),
            'totalVotes' => $total,
        ]);
    }

    public function edit(Poll $poll): Response
    {
        $poll->load('options');

        return Inertia::render('admin/polls/edit', [
            'poll' => $poll,
            ...$this->formOptions(),
        ]);
    }

    public function update(PollRequest $request, Poll $poll): RedirectResponse
    {
        DB::transaction(function () use ($request, $poll): void {
            $data = $this->payload($request);

            if ($request->hasFile('image')) {
                $this->deleteImage($poll);
                $data['image'] = $request->file('image')->store('polls', 'public');
            } elseif ($request->boolean('remove_image')) {
                $this->deleteImage($poll);
                $data['image'] = null;
            }

            $poll->update($data);
            $this->syncOptions($poll, $request->validated('options'));
        });

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Poll updated successfully.']);

        return redirect()->route('admin.polls.index');
    }

    public function destroy(Poll $poll): RedirectResponse
    {
        $this->deleteImage($poll);
        $poll->delete();

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Poll deleted successfully.']);

        return redirect()->back();
    }

    public function close(Poll $poll): RedirectResponse
    {
        $poll->update(['status' => PollStatus::CLOSED]);

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Poll closed.']);

        return redirect()->back();
    }

    /**
     * @return array<string, mixed>
     */
    private function formOptions(): array
    {
        return [
            'categories' => Category::where('is_active', true)->orderBy('name')->get(['id', 'name']),
            'statuses' => PollStatus::values(),
            'tones' => Tone::values(),
        ];
    }

    /**
     * @return array<string, mixed>
     */
    private function payload(PollRequest $request): array
    {
        $data = collect($request->validated())->except(['options', 'image', 'remove_image'])->all();
        $data['is_featured'] = $request->boolean('is_featured');

        return $data;
    }

    /**
     * Create, update and remove options so they match the submitted list.
     *
     * @param  list<array{id?: int|null, label: string, tone: string}>  $options
     */
    private function syncOptions(Poll $poll, array $options): void
    {
        $keptIds = [];

        foreach (array_values($options) as $position => $option) {
            $attributes = [
                'label' => $option['label'],
                'tone' => $option['tone'],
                'sort_order' => $position + 1,
            ];

            if (! empty($option['id'])) {
                $poll->options()->whereKey($option['id'])->update($attributes);
                $keptIds[] = (int) $option['id'];
            } else {
                $keptIds[] = $poll->options()->create($attributes)->id;
            }
        }

        $poll->options()->whereNotIn('id', $keptIds)->delete();
    }

    private function deleteImage(Poll $poll): void
    {
        if ($poll->image && ! str_starts_with($poll->image, 'http')) {
            Storage::disk('public')->delete($poll->image);
        }
    }
}
