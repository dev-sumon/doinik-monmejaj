<?php

use Inertia\Testing\AssertableInertia as Assert;

test('weekly recap page can be rendered', function () {
    $response = $this->get(route('weekly-recap'));

    $response->assertOk();

    $response->assertInertia(fn (Assert $page) => $page
        ->component('frontend/weekly-recap')
        ->has('header.title')
        ->has('metrics', 4)
        ->has('feature.title')
        ->has('engagement.topics', 3)
        ->has('trend.days', 7)
        ->has('quotes.items', 3)
        ->has('closing.author'),
    );
});
