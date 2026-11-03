<?php

use App\Enums\ArticleStatus;
use App\Enums\RoleEnum;
use App\Models\Article;
use App\Models\User;
use Database\Seeders\PermissionSeeder;
use Database\Seeders\RoleSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;

uses(RefreshDatabase::class);

beforeEach(function () {
    $this->seed([PermissionSeeder::class, RoleSeeder::class]);

    $this->admin = User::factory()->create();
    $this->admin->assignRole(RoleEnum::ADMIN->value);
});

/**
 * @return array<string, mixed>
 */
function articlePayload(array $overrides = []): array
{
    return array_merge([
        'masthead' => 'Daily Chronicle',
        'title' => 'A rainy Monday at the office',
        'style' => 'funny',
        'visibility' => 'public',
        'status' => 'draft',
        'events' => ['First event', 'Second event', 'Third event'],
    ], $overrides);
}

test('guests and public users cannot reach articles', function () {
    $this->get(route('admin.articles.index'))->assertRedirect(route('login'));

    $user = User::factory()->create();
    $user->assignRole(RoleEnum::USER->value);
    $this->actingAs($user)->get(route('admin.articles.index'))->assertForbidden();
});

test('admins can list and filter articles by status', function () {
    Article::factory()->published()->create();
    Article::factory()->count(2)->create();

    $this->actingAs($this->admin)
        ->get(route('admin.articles.index', ['status' => 'published']))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('admin/articles/index')
            ->has('articles.data', 1));
});

test('admins can create a published article with a generated slug', function () {
    $this->actingAs($this->admin)
        ->post(route('admin.articles.store'), articlePayload(['status' => 'published']))
        ->assertRedirect(route('admin.articles.index'));

    $article = Article::firstOrFail();

    expect($article->slug)->toBe('a-rainy-monday-at-the-office')
        ->and($article->status)->toBe(ArticleStatus::PUBLISHED)
        ->and($article->published_at)->not->toBeNull()
        ->and($article->user_id)->toBe($this->admin->id);
});

test('events are limited to 300 words each', function () {
    $this->actingAs($this->admin)
        ->post(route('admin.articles.store'), articlePayload(['events' => [str_repeat('word ', 301)]]))
        ->assertSessionHasErrors('events.0');
});

test('authors cannot publish and cannot edit other peoples articles', function () {
    $author = User::factory()->create();
    $author->assignRole(RoleEnum::AUTHOR->value);

    $this->actingAs($author)
        ->post(route('admin.articles.store'), articlePayload(['status' => 'published']))
        ->assertSessionHasErrors('status');

    $someoneElses = Article::factory()->create();

    $this->actingAs($author)->get(route('admin.articles.edit', $someoneElses))->assertForbidden();

    $own = Article::factory()->for($author, 'author')->create();

    $this->actingAs($author)->get(route('admin.articles.edit', $own))->assertOk();
});

test('editors can publish, unpublish and feature an article', function () {
    $article = Article::factory()->create();
    $editor = User::factory()->create();
    $editor->assignRole(RoleEnum::EDITOR->value);

    $this->actingAs($editor)->patch(route('admin.articles.publish', $article))->assertRedirect();
    expect($article->fresh()->status)->toBe(ArticleStatus::PUBLISHED);

    $this->actingAs($editor)->patch(route('admin.articles.feature', $article))->assertRedirect();
    expect($article->fresh()->is_featured)->toBeTrue();

    $this->actingAs($editor)->patch(route('admin.articles.unpublish', $article))->assertRedirect();
    expect($article->fresh()->status)->toBe(ArticleStatus::DRAFT);
});

test('admins can update and soft delete an article', function () {
    $article = Article::factory()->create();

    $this->actingAs($this->admin)
        ->put(route('admin.articles.update', $article), articlePayload(['title' => 'Renamed']))
        ->assertRedirect(route('admin.articles.index'));

    expect($article->fresh()->title)->toBe('Renamed');

    $this->actingAs($this->admin)->delete(route('admin.articles.destroy', $article))->assertRedirect();

    expect(Article::count())->toBe(0)->and(Article::withTrashed()->count())->toBe(1);
});
