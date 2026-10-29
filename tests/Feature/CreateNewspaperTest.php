<?php

use Inertia\Testing\AssertableInertia as Assert;

test('create newspaper page can be rendered', function () {
    $response = $this->get(route('create'));

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
