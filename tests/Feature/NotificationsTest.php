<?php

use Inertia\Testing\AssertableInertia as Assert;

test('notifications page can be rendered', function () {
    $response = $this->get(route('notifications'));

    $response->assertOk();

    $response->assertInertia(fn (Assert $page) => $page
        ->component('frontend/notifications')
        ->has('header.title')
        ->has('metrics', 3)
        ->has('filters', 5)
        ->has('groups', 3)
        ->has('groups.0.items', 3)
        ->has('groups.1.items', 2)
        ->has('groups.2.items', 2)
        ->has('sidebar.guidelines.title')
        ->has('footer.loadMoreLabel'),
    );
});
