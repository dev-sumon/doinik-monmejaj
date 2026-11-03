<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;

uses(RefreshDatabase::class);

test('my archive page can be rendered', function () {
    $response = $this->actingAs(User::factory()->create())->get(route('my-archive'));

    $response->assertOk();

    $response->assertInertia(fn (Assert $page) => $page
        ->component('frontend/my-archive')
        ->has('header.title')
        ->has('stats', 5)
        ->has('weeklyRecap.title')
        ->has('filters', 4)
        ->has('papers', 4)
        ->has('pagination.pageLabel'),
    );
});

test('guests are redirected to login from my-archive', function () {
    $this->get(route('my-archive'))->assertRedirect(route('login'));
});
