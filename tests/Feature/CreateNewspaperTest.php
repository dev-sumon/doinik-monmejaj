<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;

uses(RefreshDatabase::class);

test('create newspaper page can be rendered', function () {
    $response = $this->actingAs(User::factory()->create())->get(route('create'));

    $response->assertOk();

    $response->assertInertia(fn (Assert $page) => $page
        ->component('frontend/create')
        ->has('hero.title')
        ->has('events', 3)
        ->has('styles', 3)
        ->has('visibility', 2)
        ->has('preview.defaultHeadline')
        ->has('meta.generateLabel'),
    );
});

test('guests are redirected to login from create', function () {
    $this->get(route('create'))->assertRedirect(route('login'));
});
