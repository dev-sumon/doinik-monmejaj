<?php

use Inertia\Testing\AssertableInertia as Assert;

test('returns a successful response', function () {
    $response = $this->get(route('home'));

    $response->assertOk();

    $response->assertInertia(fn (Assert $page) => $page
        ->component('frontend/home')
        ->has('hero.title')
        ->has('broadsheet.masthead')
        ->has('dailyTheme.title')
        ->has('featuredPapers', 3)
        ->has('howItWorksSteps', 3)
        ->has('community.stats', 3)
        ->has('community.cta.title'),
    );
});
