<?php

namespace App\Support\Frontend;

use App\Enums\PollStatus;
use App\Models\Poll;
use App\Models\PollVote;
use App\Models\User;
use Illuminate\Support\Collection;

/**
 * Builds the public polls page from the database.
 *
 * Static copy (masthead text, archive, suggest form) still comes from
 * PollsContent::demo(); the live numbers, featured poll and active poll
 * cards are replaced with real data whenever active polls exist.
 */
class PollsPage
{
    /**
     * @return array<string, mixed>
     */
    public static function build(?User $user): array
    {
        $page = PollsContent::demo();

        $polls = Poll::query()
            ->where('status', PollStatus::ACTIVE->value)
            ->with(['category:id,name,tone', 'options' => fn ($query) => $query->withCount('votes')])
            ->orderByDesc('is_featured')
            ->latest('id')
            ->get();

        $page['featured']['pollId'] = null;

        if ($polls->isEmpty()) {
            return $page;
        }

        $totalVotes = PollVote::count();
        $voters = PollVote::distinct('user_id')->count('user_id');

        $page['masthead']['live']['rows'] = [
            ['label' => 'চলতি ভোট:', 'value' => Bangla::digits($polls->count()).'টি সক্রিয়', 'tone' => 'default'],
            ['label' => 'মোট সংগৃহীত ভোট:', 'value' => Bangla::number($totalVotes).'টি', 'tone' => 'brand'],
            ['label' => 'সক্রিয় ভোটার:', 'value' => Bangla::number($voters).' জন', 'tone' => 'default'],
        ];

        $featured = $polls->first();
        $votedOptionIds = self::votedOptionIds($user, $polls);

        $page['featured'] = array_merge($page['featured'], self::featuredPayload($featured, $votedOptionIds[$featured->id] ?? null));
        $page['activePolls'] = $polls->skip(1)->take(6)->map(fn (Poll $poll) => self::cardPayload($poll))->values()->all();

        return $page;
    }

    /**
     * @param  Collection<int, Poll>  $polls
     * @return array<int, int>
     */
    private static function votedOptionIds(?User $user, Collection $polls): array
    {
        if ($user === null) {
            return [];
        }

        return PollVote::query()
            ->where('user_id', $user->id)
            ->whereIn('poll_id', $polls->pluck('id'))
            ->pluck('poll_option_id', 'poll_id')
            ->all();
    }

    /**
     * @return array<string, mixed>
     */
    private static function featuredPayload(Poll $poll, ?int $votedOptionId): array
    {
        $total = (int) $poll->options->sum('votes_count');
        $leaderVotes = (int) $poll->options->max('votes_count');

        $payload = [
            'pollId' => $poll->id,
            'badge' => $poll->is_featured ? 'আজকের মহা বিতর্ক' : 'সর্বশেষ জনমত',
            'countdown' => 'বাকি আছে: '.Bangla::timeLeft($poll->ends_at),
            'question' => $poll->question,
            'lead' => (string) $poll->lead,
            'selectedOptionId' => $votedOptionId ? (string) $votedOptionId : '',
            'options' => $poll->options->map(fn ($option) => [
                'id' => (string) $option->id,
                'label' => $option->label,
                'percent' => $total > 0 ? (int) round($option->votes_count / $total * 100) : 0,
                'votesLabel' => '('.Bangla::number($option->votes_count).' ভোট)',
                'barTone' => $option->tone->value,
                'isLeader' => $total > 0 && $option->votes_count === $leaderVotes,
            ])->values()->all(),
            'totalVotes' => 'মোট ভোট: '.Bangla::number($total),
        ];

        if ($poll->image) {
            $payload['vignette'] = [
                'image' => str_starts_with($poll->image, 'http') ? $poll->image : '/storage/'.$poll->image,
                'alt' => $poll->question,
                'caption' => (string) $poll->image_caption,
            ];
        }

        return $payload;
    }

    /**
     * @return array<string, mixed>
     */
    private static function cardPayload(Poll $poll): array
    {
        $total = (int) $poll->options->sum('votes_count');
        $leaderVotes = (int) $poll->options->max('votes_count');

        return [
            'id' => (string) $poll->id,
            'category' => $poll->category?->name ?? 'জনমত',
            'categoryTone' => $poll->category?->tone->value ?? 'warm',
            'timeLeft' => Bangla::timeLeft($poll->ends_at),
            'question' => $poll->question,
            'lead' => (string) $poll->lead,
            'options' => $poll->options->map(fn ($option) => [
                'label' => $option->label,
                'percent' => $total > 0 ? (int) round($option->votes_count / $total * 100) : 0,
                'barTone' => $option->tone->value,
                'emphasize' => $total > 0 && $option->votes_count === $leaderVotes,
            ])->values()->all(),
            'totalVotes' => 'মোট ভোট: '.Bangla::number($total).'টি',
            'ctaLabel' => 'ভোট দিন',
        ];
    }
}
