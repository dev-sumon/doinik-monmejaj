<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;

uses(RefreshDatabase::class);

test('profile page can be rendered', function () {
    $response = $this->actingAs(User::factory()->create())->get(route('profile'));

    $response->assertOk();

    $response->assertInertia(fn (Assert $page) => $page
        ->component('frontend/profile')
        ->has('pressPass.name')
        ->has('metrics', 4)
        ->has('tabs', 4)
        ->has('portfolio.papers', 4)
        ->has('featured.title')
        ->has('sidebar.topics', 7),
    );
});

test('guests are redirected to login from profile', function () {
    $this->get(route('profile'))->assertRedirect(route('login'));
});
