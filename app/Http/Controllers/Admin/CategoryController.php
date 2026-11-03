<?php

namespace App\Http\Controllers\Admin;

use App\Enums\Tone;
use App\Http\Controllers\Controller;
use App\Http\Requests\Category\CategoryRequest;
use App\Models\Category;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController extends Controller
{
    public function index(Request $request): Response
    {
        $search = trim((string) $request->query('search', ''));
        $status = trim((string) $request->query('status', ''));

        $categories = Category::query()
            ->withCount(['articles', 'polls'])
            ->when($search !== '', fn ($query) => $query->where('name', 'like', "%{$search}%"))
            ->when($status === 'active', fn ($query) => $query->where('is_active', true))
            ->when($status === 'inactive', fn ($query) => $query->where('is_active', false))
            ->orderBy('sort_order')
            ->orderBy('name')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('admin/categories/index', [
            'categories' => $categories,
            'filters' => ['search' => $search, 'status' => $status],
            'stats' => Inertia::optional(fn (): array => [
                'total' => Category::count(),
                'active' => Category::where('is_active', true)->count(),
                'inactive' => Category::where('is_active', false)->count(),
            ]),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/categories/create', [
            'tones' => Tone::values(),
        ]);
    }

    public function store(CategoryRequest $request): RedirectResponse
    {
        Category::create($this->payload($request));

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Category created successfully.']);

        return redirect()->route('admin.categories.index');
    }

    public function show(Category $category): Response
    {
        $category->loadCount(['articles', 'polls']);

        return Inertia::render('admin/categories/show', [
            'category' => $category,
        ]);
    }

    public function edit(Category $category): Response
    {
        return Inertia::render('admin/categories/edit', [
            'category' => $category,
            'tones' => Tone::values(),
        ]);
    }

    public function update(CategoryRequest $request, Category $category): RedirectResponse
    {
        $category->update($this->payload($request));

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Category updated successfully.']);

        return redirect()->route('admin.categories.index');
    }

    public function destroy(Category $category): RedirectResponse
    {
        $category->delete();

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Category deleted successfully.']);

        return redirect()->back();
    }

    /**
     * @return array<string, mixed>
     */
    private function payload(CategoryRequest $request): array
    {
        $data = $request->validated();
        $data['slug'] = filled($data['slug'] ?? null) ? $data['slug'] : $this->uniqueSlug($data['name'], $request->route('category'));
        $data['sort_order'] = $data['sort_order'] ?? 0;
        $data['is_active'] = $request->boolean('is_active');

        return $data;
    }

    private function uniqueSlug(string $name, ?Category $ignore): string
    {
        $base = Str::slug($name) ?: 'category';
        $slug = $base;
        $counter = 2;

        while (Category::where('slug', $slug)->when($ignore, fn ($query) => $query->whereKeyNot($ignore->id))->exists()) {
            $slug = $base.'-'.$counter++;
        }

        return $slug;
    }
}
