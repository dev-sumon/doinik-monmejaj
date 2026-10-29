<?php

use Inertia\Testing\AssertableInertia as Assert;

test('polls page can be rendered', function () {
    $response = $this->get(route('polls'));

    $response->assertOk();

    $response->assertInertia(fn (Assert $page) => $page
        ->component('frontend/polls')
        ->has('masthead.title')
        ->has('featured.options', 4)
        ->has('filters', 3)
        ->has('activePolls', 3)
        ->has('archive.stats', 3)
        ->has('suggest.title'),
    );
});
