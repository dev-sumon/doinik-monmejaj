<?php

use Inertia\Testing\AssertableInertia as Assert;

test('profile page can be rendered', function () {
    $response = $this->get(route('profile'));

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
