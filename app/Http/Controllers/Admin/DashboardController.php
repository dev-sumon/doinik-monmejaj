<?php

namespace App\Http\Controllers\Admin;

use App\Enums\ArticleStatus;
use App\Enums\PermissionEnum;
use App\Enums\PollStatus;
use App\Enums\ThemeStatus;
use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\DailyTheme;
use App\Models\Poll;
use App\Models\PollVote;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(Request $request): Response
    {
        $user = $request->user();

        return Inertia::render('dashboard', [
            // Deferred so the shell renders instantly while the queries run.
            'overview' => Inertia::defer(fn (): array => [
                'users' => $user->can(PermissionEnum::USERS_INDEX->value) ? $this->userStats() : null,
                'articles' => $user->can(PermissionEnum::ARTICLES_INDEX->value) ? $this->articleStats() : null,
                'polls' => $user->can(PermissionEnum::POLLS_INDEX->value) ? $this->pollStats() : null,
                'activeTheme' => $user->can(PermissionEnum::DAILY_THEMES_INDEX->value) ? $this->activeTheme() : null,
            ]),
        ]);
    }

    /**
     * @return array{total: int, newThisWeek: int, recent: mixed}
     */
    private function userStats(): array
    {
        return [
            'total' => User::count(),
            'newThisWeek' => User::where('created_at', '>=', now()->subWeek())->count(),
            'recent' => User::latest('id')->limit(5)->get(['id', 'name', 'email', 'created_at']),
        ];
    }

    /**
     * @return array<string, mixed>
     */
    private function articleStats(): array
    {
        $counts = Article::query()
            ->selectRaw('status, count(*) as total')
            ->groupBy('status')
            ->pluck('total', 'status');

        return [
            'total' => (int) $counts->sum(),
            'byStatus' => collect(ArticleStatus::cases())->map(fn (ArticleStatus $status) => [
                'status' => $status->value,
                'count' => (int) ($counts[$status->value] ?? 0),
            ])->values(),
            'featured' => Article::where('is_featured', true)->count(),
            'recent' => Article::with('author:id,name')
                ->latest('id')
                ->limit(5)
                ->get(['id', 'user_id', 'title', 'status', 'created_at']),
        ];
    }

    /**
     * @return array<string, mixed>
     */
    private function pollStats(): array
    {
        return [
            'total' => Poll::count(),
            'active' => Poll::where('status', PollStatus::ACTIVE->value)->count(),
            'votes' => PollVote::count(),
            'top' => Poll::withCount('votes')
                ->orderByDesc('votes_count')
                ->limit(5)
                ->get(['id', 'question', 'status']),
        ];
    }

    private function activeTheme(): ?DailyTheme
    {
        return DailyTheme::where('status', ThemeStatus::ACTIVE->value)
            ->orderByDesc('theme_date')
            ->first(['id', 'title', 'highlight', 'theme_date']);
    }
}
