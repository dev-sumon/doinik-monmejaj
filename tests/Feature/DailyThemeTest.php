<?php

use Inertia\Testing\AssertableInertia as Assert;

test('daily theme page can be rendered', function () {
    $response = $this->get(route('daily-theme'));

    $response->assertOk();

    $response->assertInertia(fn (Assert $page) => $page
        ->component('frontend/daily-theme')
        ->has('subBar.eyebrow')
        ->has('hero.highlight')
        ->has('sparks', 3)
        ->has('featured.title')
        ->has('filters', 3)
        ->has('submissions', 6)
        ->has('upcoming', 2),
    );
});
