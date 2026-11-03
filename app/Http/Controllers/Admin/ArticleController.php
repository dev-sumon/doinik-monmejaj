<?php

namespace App\Http\Controllers\Admin;

use App\Enums\ArticleStatus;
use App\Enums\ArticleStyle;
use App\Enums\ArticleVisibility;
use App\Http\Controllers\Controller;
use App\Http\Requests\Article\ArticleRequest;
use App\Models\Article;
use App\Models\Category;
use App\Models\DailyTheme;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class ArticleController extends Controller
{
    public function index(Request $request): Response
    {
        $search = trim((string) $request->query('search', ''));
        $status = trim((string) $request->query('status', ''));
        $categoryId = trim((string) $request->query('category', ''));

        $articles = Article::query()
            ->with(['author:id,name', 'category:id,name,tone'])
            ->when($search !== '', function ($query) use ($search): void {
                $query->where(function ($query) use ($search): void {
                    $query->where('title', 'like', "%{$search}%")
                        ->orWhere('masthead', 'like', "%{$search}%");
                });
            })
            ->when(ArticleStatus::tryFrom($status), fn ($query, $value) => $query->where('status', $value->value))
            ->when($categoryId !== '', fn ($query) => $query->where('category_id', (int) $categoryId))
            ->latest('id')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('admin/articles/index', [
            'articles' => $articles,
            'statuses' => ArticleStatus::values(),
            'categories' => Category::orderBy('name')->get(['id', 'name']),
            'filters' => ['search' => $search, 'status' => $status, 'category' => $categoryId],
            'stats' => Inertia::optional(fn (): array => [
                'total' => Article::count(),
                'published' => Article::where('status', ArticleStatus::PUBLISHED->value)->count(),
                'drafts' => Article::where('status', ArticleStatus::DRAFT->value)->count(),
            ]),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/articles/create', $this->formOptions());
    }

    public function store(ArticleRequest $request): RedirectResponse
    {
        $data = $this->payload($request);
        $data['user_id'] = $request->user()->id;

        if ($request->hasFile('cover_image')) {
            $data['cover_image'] = $request->file('cover_image')->store('articles', 'public');
        }

        Article::create($data);

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Article created successfully.']);

        return redirect()->route('admin.articles.index');
    }

    public function show(Article $article): Response
    {
        $article->load(['author:id,name,email', 'category:id,name', 'dailyTheme:id,title']);

        return Inertia::render('admin/articles/show', [
            'article' => $article,
        ]);
    }

    public function edit(Article $article): Response
    {
        $this->authorize('update', $article);

        return Inertia::render('admin/articles/edit', [
            'article' => $article,
            ...$this->formOptions(),
        ]);
    }

    public function update(ArticleRequest $request, Article $article): RedirectResponse
    {
        $this->authorize('update', $article);

        $data = $this->payload($request, $article);

        if ($request->hasFile('cover_image')) {
            $this->deleteCover($article);
            $data['cover_image'] = $request->file('cover_image')->store('articles', 'public');
        } elseif ($request->boolean('remove_cover_image')) {
            $this->deleteCover($article);
            $data['cover_image'] = null;
        }

        $article->update($data);

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Article updated successfully.']);

        return redirect()->route('admin.articles.index');
    }

    public function destroy(Article $article): RedirectResponse
    {
        $this->authorize('delete', $article);

        $article->delete();

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Article deleted successfully.']);

        return redirect()->back();
    }

    public function publish(Article $article): RedirectResponse
    {
        $article->update([
            'status' => ArticleStatus::PUBLISHED,
            'published_at' => $article->published_at ?? now(),
        ]);

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Article published.']);

        return redirect()->back();
    }

    public function unpublish(Article $article): RedirectResponse
    {
        $article->update(['status' => ArticleStatus::DRAFT]);

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Article moved back to drafts.']);

        return redirect()->back();
    }

    public function feature(Article $article): RedirectResponse
    {
        $article->update(['is_featured' => ! $article->is_featured]);

        Inertia::flash('toast', [
            'type' => 'success',
            'message' => $article->is_featured ? 'Article featured.' : 'Article removed from featured.',
        ]);

        return redirect()->back();
    }

    /**
     * @return array<string, mixed>
     */
    private function formOptions(): array
    {
        return [
            'categories' => Category::where('is_active', true)->orderBy('name')->get(['id', 'name']),
            'themes' => DailyTheme::orderByDesc('theme_date')->limit(60)->get(['id', 'title', 'theme_date']),
            'styles' => ArticleStyle::values(),
            'visibilities' => ArticleVisibility::values(),
            'statuses' => ArticleStatus::values(),
        ];
    }

    /**
     * @return array<string, mixed>
     */
    private function payload(ArticleRequest $request, ?Article $article = null): array
    {
        $data = collect($request->validated())->except(['cover_image', 'remove_cover_image'])->all();

        $data['slug'] = filled($data['slug'] ?? null)
            ? $data['slug']
            : ($article?->slug ?? $this->uniqueSlug($data['title']));
        $data['events'] = array_values(array_filter($data['events'] ?? [], fn ($event) => filled($event)));
        $data['is_featured'] = $request->boolean('is_featured');

        if ($data['status'] === ArticleStatus::PUBLISHED->value) {
            $data['published_at'] = $article?->published_at ?? now();
        }

        return $data;
    }

    private function uniqueSlug(string $title): string
    {
        $base = Str::slug($title) ?: 'article';
        $slug = $base;
        $counter = 2;

        while (Article::withTrashed()->where('slug', $slug)->exists()) {
            $slug = $base.'-'.$counter++;
        }

        return $slug;
    }

    private function deleteCover(Article $article): void
    {
        if ($article->cover_image && ! str_starts_with($article->cover_image, 'http')) {
            Storage::disk('public')->delete($article->cover_image);
        }
    }
}
