<?php

namespace App\Http\Controllers\Admin;

use App\Enums\ThemeStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\DailyTheme\DailyThemeRequest;
use App\Models\Article;
use App\Models\DailyTheme;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Inertia\Inertia;
use Inertia\Response;

class DailyThemeController extends Controller
{
    public function index(Request $request): Response
    {
        $search = trim((string) $request->query('search', ''));
        $status = trim((string) $request->query('status', ''));

        $themes = DailyTheme::query()
            ->withCount('articles')
            ->when($search !== '', fn ($query) => $query->where('title', 'like', "%{$search}%"))
            ->when(ThemeStatus::tryFrom($status), fn ($query, $value) => $query->where('status', $value->value))
            ->orderByDesc('theme_date')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('admin/daily-themes/index', [
            'themes' => $themes,
            'statuses' => ThemeStatus::values(),
            'filters' => ['search' => $search, 'status' => $status],
            'stats' => Inertia::optional(fn (): array => [
                'total' => DailyTheme::count(),
                'active' => DailyTheme::where('status', ThemeStatus::ACTIVE->value)->count(),
                'upcoming' => DailyTheme::where('status', ThemeStatus::UPCOMING->value)->count(),
            ]),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/daily-themes/create', [
            'statuses' => ThemeStatus::values(),
            'articles' => $this->articleOptions(),
        ]);
    }

    public function store(DailyThemeRequest $request): RedirectResponse
    {
        DailyTheme::create($request->validated());

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Daily theme created successfully.']);

        return redirect()->route('admin.daily-themes.index');
    }

    public function show(DailyTheme $dailyTheme): Response
    {
        $dailyTheme->load('featuredArticle:id,title');

        return Inertia::render('admin/daily-themes/show', [
            'theme' => $dailyTheme,
            'submissions' => $dailyTheme->articles()
                ->with('author:id,name')
                ->latest('id')
                ->limit(10)
                ->get(['id', 'user_id', 'title', 'status', 'published_at']),
            'submissionsCount' => $dailyTheme->articles()->count(),
        ]);
    }

    public function edit(DailyTheme $dailyTheme): Response
    {
        return Inertia::render('admin/daily-themes/edit', [
            'theme' => $dailyTheme,
            'statuses' => ThemeStatus::values(),
            'articles' => $this->articleOptions($dailyTheme),
        ]);
    }

    public function update(DailyThemeRequest $request, DailyTheme $dailyTheme): RedirectResponse
    {
        $dailyTheme->update($request->validated());

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Daily theme updated successfully.']);

        return redirect()->route('admin.daily-themes.index');
    }

    public function destroy(DailyTheme $dailyTheme): RedirectResponse
    {
        $dailyTheme->delete();

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Daily theme deleted successfully.']);

        return redirect()->back();
    }

    /**
     * Published articles that may be picked as the theme's featured paper.
     *
     * @return Collection<int, Article>
     */
    private function articleOptions(?DailyTheme $theme = null)
    {
        return Article::query()
            ->publiclyVisible()
            ->when($theme, fn ($query) => $query->where('daily_theme_id', $theme->id))
            ->latest('published_at')
            ->limit(50)
            ->get(['id', 'title']);
    }
}
