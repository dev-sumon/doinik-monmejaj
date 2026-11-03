<?php

use App\Enums\RoleEnum;
use App\Models\DailyTheme;
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

test('guests and public users cannot reach daily themes', function () {
    $this->get(route('admin.daily-themes.index'))->assertRedirect(route('login'));

    $user = User::factory()->create();
    $user->assignRole(RoleEnum::USER->value);
    $this->actingAs($user)->get(route('admin.daily-themes.index'))->assertForbidden();
});

test('admins can list daily themes', function () {
    DailyTheme::factory()->count(3)->create();

    $this->actingAs($this->admin)
        ->get(route('admin.daily-themes.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('admin/daily-themes/index')
            ->has('themes.data', 3));
});

test('admins can create, update and delete a daily theme', function () {
    $this->actingAs($this->admin)
        ->post(route('admin.daily-themes.store'), [
            'title' => 'Rainy day stories',
            'theme_date' => '2026-12-01',
            'status' => 'upcoming',
        ])
        ->assertRedirect(route('admin.daily-themes.index'));

    $theme = DailyTheme::firstOrFail();

    $this->actingAs($this->admin)
        ->put(route('admin.daily-themes.update', $theme), [
            'title' => 'Sunny day stories',
            'theme_date' => '2026-12-01',
            'status' => 'active',
        ])
        ->assertRedirect(route('admin.daily-themes.index'));

    expect($theme->fresh()->title)->toBe('Sunny day stories');

    $this->actingAs($this->admin)->delete(route('admin.daily-themes.destroy', $theme))->assertRedirect();

    expect(DailyTheme::count())->toBe(0);
});

test('theme dates must be unique and end after start', function () {
    DailyTheme::factory()->create(['theme_date' => '2026-12-05']);

    $this->actingAs($this->admin)
        ->post(route('admin.daily-themes.store'), [
            'title' => 'Duplicate',
            'theme_date' => '2026-12-05',
            'status' => 'upcoming',
            'starts_at' => '2026-12-05 10:00:00',
            'ends_at' => '2026-12-05 09:00:00',
        ])
        ->assertSessionHasErrors(['theme_date', 'ends_at']);
});

test('admins can view a theme with its submissions', function () {
    $theme = DailyTheme::factory()->create();

    $this->actingAs($this->admin)
        ->get(route('admin.daily-themes.show', $theme))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('admin/daily-themes/show')
            ->where('theme.id', $theme->id));
});
