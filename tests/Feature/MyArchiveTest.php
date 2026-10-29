<?php

use Inertia\Testing\AssertableInertia as Assert;

test('my archive page can be rendered', function () {
    $response = $this->get(route('my-archive'));

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
