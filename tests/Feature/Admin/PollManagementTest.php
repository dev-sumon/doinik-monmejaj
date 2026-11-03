<?php

use App\Enums\PollStatus;
use App\Enums\RoleEnum;
use App\Models\Poll;
use App\Models\PollVote;
use App\Models\User;
use Database\Seeders\PermissionSeeder;
use Database\Seeders\RoleSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;

uses(RefreshDatabase::class);

beforeEach(function () {
    $this->seed([PermissionSeeder::class, RoleSeeder::class]);

    $this->admin = User::factory()->create();
    $this->admin->assignRole(RoleEnum::ADMIN->value);
});

/**
 * @return array<string, mixed>
 */
function pollPayload(array $overrides = []): array
{
    return array_merge([
        'question' => 'Tea or coffee?',
        'status' => 'active',
        'options' => [
            ['label' => 'Tea', 'tone' => 'warm'],
            ['label' => 'Coffee', 'tone' => 'brand'],
        ],
    ], $overrides);
}

test('guests and public users cannot reach polls', function () {
    $this->get(route('admin.polls.index'))->assertRedirect(route('login'));

    $user = User::factory()->create();
    $user->assignRole(RoleEnum::USER->value);
    $this->actingAs($user)->get(route('admin.polls.index'))->assertForbidden();
});

test('admins can list polls with vote counts', function () {
    $poll = Poll::factory()->active()->withOptions(2)->create();
    PollVote::create(['poll_id' => $poll->id, 'poll_option_id' => $poll->options()->first()->id, 'user_id' => $this->admin->id]);

    $this->actingAs($this->admin)
        ->get(route('admin.polls.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('admin/polls/index')
            ->where('polls.data.0.votes_count', 1)
            ->where('polls.data.0.options_count', 2));
});

test('admins can create a poll with options', function () {
    $this->actingAs($this->admin)
        ->post(route('admin.polls.store'), pollPayload())
        ->assertRedirect(route('admin.polls.index'));

    $poll = Poll::firstOrFail();

    expect($poll->status)->toBe(PollStatus::ACTIVE)
        ->and($poll->options()->pluck('label')->all())->toBe(['Tea', 'Coffee']);
});

test('a poll needs at least two distinct options', function () {
    $this->actingAs($this->admin)
        ->post(route('admin.polls.store'), pollPayload(['options' => [['label' => 'Only', 'tone' => 'brand']]]))
        ->assertSessionHasErrors('options');

    $this->actingAs($this->admin)
        ->post(route('admin.polls.store'), pollPayload(['options' => [
            ['label' => 'Same', 'tone' => 'brand'],
            ['label' => 'Same', 'tone' => 'warm'],
        ]]))
        ->assertSessionHasErrors('options.0.label');
});

test('updating a poll keeps existing options and removes dropped ones', function () {
    $poll = Poll::factory()->withOptions(3)->create();
    [$first, $second] = $poll->options()->get();

    $this->actingAs($this->admin)
        ->put(route('admin.polls.update', $poll), pollPayload([
            'status' => 'draft',
            'options' => [
                ['id' => $first->id, 'label' => 'Renamed', 'tone' => 'brand'],
                ['id' => $second->id, 'label' => 'Kept', 'tone' => 'warm'],
            ],
        ]))
        ->assertRedirect(route('admin.polls.index'));

    expect($poll->options()->count())->toBe(2)
        ->and($first->fresh()->label)->toBe('Renamed');
});

test('admins can view results, close and delete a poll', function () {
    $poll = Poll::factory()->active()->withOptions(2)->create();
    $option = $poll->options()->first();
    PollVote::create(['poll_id' => $poll->id, 'poll_option_id' => $option->id, 'user_id' => $this->admin->id]);

    $this->actingAs($this->admin)
        ->get(route('admin.polls.show', $poll))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('admin/polls/show')
            ->where('totalVotes', 1)
            ->where('results.0.percent', 100));

    $this->actingAs($this->admin)->patch(route('admin.polls.close', $poll))->assertRedirect();
    expect($poll->fresh()->status)->toBe(PollStatus::CLOSED);

    $this->actingAs($this->admin)->delete(route('admin.polls.destroy', $poll))->assertRedirect();
    expect(Poll::count())->toBe(0)->and(PollVote::count())->toBe(0);
});
