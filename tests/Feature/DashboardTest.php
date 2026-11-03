<?php

use App\Enums\RoleEnum;
use App\Models\Article;
use App\Models\Poll;
use App\Models\PollVote;
use App\Models\User;
use Database\Seeders\PermissionSeeder;
use Database\Seeders\RoleSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;

uses(RefreshDatabase::class);

beforeEach(function () {
    $this->seed([PermissionSeeder::class, RoleSeeder::class]);
});

test('guests are redirected to the login page', function () {
    $response = $this->get(route('dashboard'));
    $response->assertRedirect(route('login'));
});

test('admin roles can visit the dashboard', function () {
    $user = User::factory()->create();
    $user->assignRole(RoleEnum::ADMIN->value);

    $this->actingAs($user)->get(route('dashboard'))->assertOk();
});

test('public users cannot visit the dashboard', function () {
    $user = User::factory()->create();
    $user->assignRole(RoleEnum::USER->value);

    $this->actingAs($user)->get(route('dashboard'))->assertForbidden();
});

test('the dashboard overview is loaded deferred with real numbers', function () {
    $admin = User::factory()->create();
    $admin->assignRole(RoleEnum::ADMIN->value);

    Article::factory()->published()->count(2)->create();
    Article::factory()->create();
    $poll = Poll::factory()->active()->withOptions(2)->create();
    PollVote::create([
        'poll_id' => $poll->id,
        'poll_option_id' => $poll->options()->first()->id,
        'user_id' => $admin->id,
    ]);

    $this->actingAs($admin)
        ->get(route('dashboard'))
        ->assertInertia(fn (Assert $page) => $page
            ->component('dashboard')
            ->missing('overview')
            ->loadDeferredProps(fn (Assert $reloaded) => $reloaded
                ->where('overview.articles.total', 3)
                ->where('overview.polls.votes', 1)
                ->where('overview.polls.active', 1)
                ->has('overview.users.recent')));
});

test('the dashboard only includes sections the role may see', function () {
    $author = User::factory()->create();
    $author->assignRole(RoleEnum::AUTHOR->value);

    $this->actingAs($author)
        ->get(route('dashboard'))
        ->assertInertia(fn (Assert $page) => $page
            ->loadDeferredProps(fn (Assert $reloaded) => $reloaded
                ->where('overview.users', null)
                ->where('overview.polls', null)
                ->has('overview.articles')));
});
