<?php

use App\Enums\PermissionEnum;
use App\Http\Controllers\Admin\ArticleController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DailyThemeController;
use App\Http\Controllers\Admin\PollController;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Admin content management routes
|--------------------------------------------------------------------------
|
| Required from the `admin` group in routes/web.php, so every route here is
| already behind `auth` + `verified` and named `admin.*`. Each CRUD module
| follows the Users module: one permission per action, and Precognition on
| the write routes.
*/

/**
 * Register index / create / store / show / edit / update / destroy routes.
 *
 * @param  array{index: PermissionEnum, view: PermissionEnum, create: PermissionEnum, edit: PermissionEnum, delete: PermissionEnum}  $permissions
 */
$registerCrud = function (string $uri, string $parameter, string $controller, array $permissions) {
    $name = $uri;

    Route::controller($controller)->group(function () use ($uri, $name, $parameter, $permissions) {
        Route::get($uri, 'index')->name("$name.index")
            ->middleware('permission:'.$permissions['index']->value);
        Route::get("$uri/create", 'create')->name("$name.create")
            ->middleware('permission:'.$permissions['create']->value);
        Route::post($uri, 'store')->name("$name.store")
            ->middleware(['permission:'.$permissions['create']->value, HandlePrecognitiveRequests::class]);
        Route::get("$uri/{{$parameter}}", 'show')->name("$name.show")
            ->middleware('permission:'.$permissions['view']->value);
        Route::get("$uri/{{$parameter}}/edit", 'edit')->name("$name.edit")
            ->middleware('permission:'.$permissions['edit']->value);
        Route::put("$uri/{{$parameter}}", 'update')->name("$name.update")
            ->middleware(['permission:'.$permissions['edit']->value, HandlePrecognitiveRequests::class]);
        Route::delete("$uri/{{$parameter}}", 'destroy')->name("$name.destroy")
            ->middleware('permission:'.$permissions['delete']->value);
    });
};

$registerCrud('categories', 'category', CategoryController::class, [
    'index' => PermissionEnum::CATEGORIES_INDEX,
    'view' => PermissionEnum::CATEGORIES_VIEW,
    'create' => PermissionEnum::CATEGORIES_CREATE,
    'edit' => PermissionEnum::CATEGORIES_EDIT,
    'delete' => PermissionEnum::CATEGORIES_DELETE,
]);

$registerCrud('daily-themes', 'daily_theme', DailyThemeController::class, [
    'index' => PermissionEnum::DAILY_THEMES_INDEX,
    'view' => PermissionEnum::DAILY_THEMES_VIEW,
    'create' => PermissionEnum::DAILY_THEMES_CREATE,
    'edit' => PermissionEnum::DAILY_THEMES_EDIT,
    'delete' => PermissionEnum::DAILY_THEMES_DELETE,
]);

$registerCrud('articles', 'article', ArticleController::class, [
    'index' => PermissionEnum::ARTICLES_INDEX,
    'view' => PermissionEnum::ARTICLES_VIEW,
    'create' => PermissionEnum::ARTICLES_CREATE,
    'edit' => PermissionEnum::ARTICLES_EDIT,
    'delete' => PermissionEnum::ARTICLES_DELETE,
]);

Route::controller(ArticleController::class)->group(function () {
    Route::patch('articles/{article}/publish', 'publish')->name('articles.publish')
        ->middleware('permission:'.PermissionEnum::ARTICLES_PUBLISH->value);
    Route::patch('articles/{article}/unpublish', 'unpublish')->name('articles.unpublish')
        ->middleware('permission:'.PermissionEnum::ARTICLES_PUBLISH->value);
    Route::patch('articles/{article}/feature', 'feature')->name('articles.feature')
        ->middleware('permission:'.PermissionEnum::ARTICLES_PUBLISH->value);
});

$registerCrud('polls', 'poll', PollController::class, [
    'index' => PermissionEnum::POLLS_INDEX,
    'view' => PermissionEnum::POLLS_VIEW,
    'create' => PermissionEnum::POLLS_CREATE,
    'edit' => PermissionEnum::POLLS_EDIT,
    'delete' => PermissionEnum::POLLS_DELETE,
]);

Route::patch('polls/{poll}/close', [PollController::class, 'close'])->name('polls.close')
    ->middleware('permission:'.PermissionEnum::POLLS_PUBLISH->value);
