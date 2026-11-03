<?php

use App\Enums\RoleEnum;
use App\Models\User;
use Database\Seeders\PermissionSeeder;
use Database\Seeders\RoleSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

beforeEach(function () {
    $this->seed([PermissionSeeder::class, RoleSeeder::class]);
});

test('guests are redirected to the login page', function () {
    $response = $this->get(route('dashboard'));
    $response->assertRedirect(route('login'));
});

test('admin roles can visit the dashboard', function () {
    $user = User::factory()->create();
    $user->assignRole(RoleEnum::ADMIN->value);

    $this->actingAs($user)->get(route('dashboard'))->assertOk();
});

test('public users cannot visit the dashboard', function () {
    $user = User::factory()->create();
    $user->assignRole(RoleEnum::USER->value);

    $this->actingAs($user)->get(route('dashboard'))->assertForbidden();
});
