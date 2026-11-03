<?php

namespace Database\Factories;

use App\Enums\ArticleStatus;
use App\Enums\ArticleStyle;
use App\Enums\ArticleVisibility;
use App\Models\Article;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Article>
 */
class ArticleFactory extends Factory
{
    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->sentence(6);

        return [
            'user_id' => User::factory(),
            'category_id' => null,
            'daily_theme_id' => null,
            'masthead' => fake()->words(3, true),
            'byline' => fake()->name(),
            'title' => $title,
            'slug' => Str::slug($title).'-'.fake()->unique()->numberBetween(1, 999999),
            'excerpt' => fake()->paragraph(),
            'body' => fake()->paragraphs(3, true),
            'pull_quote' => fake()->sentence(),
            'cover_image' => null,
            'events' => [fake()->sentence(), fake()->sentence(), fake()->sentence()],
            'style' => ArticleStyle::FUNNY,
            'visibility' => ArticleVisibility::PUBLIC,
            'status' => ArticleStatus::DRAFT,
            'is_featured' => false,
            'edition_no' => fake()->numberBetween(1, 200),
            'read_time' => fake()->numberBetween(1, 12),
            'published_at' => null,
        ];
    }

    public function published(): static
    {
        return $this->state(fn () => [
            'status' => ArticleStatus::PUBLISHED,
            'published_at' => now()->subHour(),
        ]);
    }

    public function private(): static
    {
        return $this->state(fn () => ['visibility' => ArticleVisibility::PRIVATE]);
    }
}
