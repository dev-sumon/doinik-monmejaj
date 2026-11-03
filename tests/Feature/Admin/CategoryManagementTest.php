<?php

use App\Enums\RoleEnum;
use App\Models\Category;
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

test('guests cannot access categories', function () {
    $this->get(route('admin.categories.index'))->assertRedirect(route('login'));
});

test('users without permission are forbidden', function () {
    $user = User::factory()->create();
    $user->assignRole(RoleEnum::USER->value);

    $this->actingAs($user)->get(route('admin.categories.index'))->assertForbidden();
});

test('admins can list and search categories', function () {
    Category::factory()->create(['name' => 'Office Life']);
    Category::factory()->create(['name' => 'Street Food']);

    $this->actingAs($this->admin)
        ->get(route('admin.categories.index', ['search' => 'Office']))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('admin/categories/index')
            ->has('categories.data', 1)
            ->where('categories.data.0.name', 'Office Life'));
});

test('admins can create a category with a generated slug', function () {
    $this->actingAs($this->admin)
        ->post(route('admin.categories.store'), [
            'name' => 'City Life',
            'tone' => 'brand',
            'is_active' => true,
        ])
        ->assertRedirect(route('admin.categories.index'));

    expect(Category::where('slug', 'city-life')->exists())->toBeTrue();
});

test('category name and tone are validated', function () {
    $this->actingAs($this->admin)
        ->post(route('admin.categories.store'), ['name' => '', 'tone' => 'purple'])
        ->assertSessionHasErrors(['name', 'tone']);
});

test('category slugs must be unique', function () {
    Category::factory()->create(['slug' => 'taken']);

    $this->actingAs($this->admin)
        ->post(route('admin.categories.store'), ['name' => 'X', 'slug' => 'taken', 'tone' => 'warm'])
        ->assertSessionHasErrors('slug');
});

test('admins can update and delete a category', function () {
    $category = Category::factory()->create(['name' => 'Old']);

    $this->actingAs($this->admin)
        ->put(route('admin.categories.update', $category), ['name' => 'New', 'tone' => 'tertiary', 'is_active' => false])
        ->assertRedirect(route('admin.categories.index'));

    expect($category->fresh()->name)->toBe('New')->and($category->fresh()->is_active)->toBeFalse();

    $this->actingAs($this->admin)->delete(route('admin.categories.destroy', $category))->assertRedirect();

    expect(Category::count())->toBe(0);
});

test('viewers can list but not create categories', function () {
    $viewer = User::factory()->create();
    $viewer->assignRole(RoleEnum::VIEWER->value);

    $this->actingAs($viewer)->get(route('admin.categories.index'))->assertOk();
    $this->actingAs($viewer)->get(route('admin.categories.create'))->assertForbidden();
});
