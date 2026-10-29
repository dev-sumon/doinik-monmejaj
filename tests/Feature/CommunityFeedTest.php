<?php

use Inertia\Testing\AssertableInertia as Assert;

test('community feed page can be rendered', function () {
    $response = $this->get(route('community-feed'));

    $response->assertOk();

    $response->assertInertia(fn (Assert $page) => $page
        ->component('frontend/community-feed')
        ->has('header.title')
        ->has('tabs', 3)
        ->has('topics', 8)
        ->has('stories', 3)
        ->has('poll.options', 3)
        ->has('editorsPicks', 3)
        ->has('writers', 3)
        ->has('motto.body')
        ->has('writePrompt.title'),
    );
});
