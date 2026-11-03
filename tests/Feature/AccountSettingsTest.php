<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;

uses(RefreshDatabase::class);

test('account settings page can be rendered', function () {
    $response = $this->actingAs(User::factory()->create())->get(route('account-settings'));

    $response->assertOk();

    $response->assertInertia(fn (Assert $page) => $page
        ->component('frontend/account-settings')
        ->has('header.title')
        ->has('nav', 5)
        ->has('notifications.items', 4)
        ->has('privacy.publishModes', 2)
        ->has('privacy.commentRules', 3)
        ->has('dangerZone.title'),
    );
});

test('guests are redirected to login from account-settings', function () {
    $this->get(route('account-settings'))->assertRedirect(route('login'));
});
