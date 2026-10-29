<?php

use Inertia\Testing\AssertableInertia as Assert;

test('account settings page can be rendered', function () {
    $response = $this->get(route('account-settings'));

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
