<?php

namespace Database\Factories;

use App\Enums\ThemeStatus;
use App\Models\DailyTheme;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<DailyTheme>
 */
class DailyThemeFactory extends Factory
{
    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(4),
            'highlight' => fake()->word(),
            'lead' => fake()->paragraph(),
            'theme_date' => fake()->unique()->dateTimeBetween('+1 day', '+2 years')->format('Y-m-d'),
            'status' => ThemeStatus::UPCOMING,
            'starts_at' => null,
            'ends_at' => null,
            'featured_article_id' => null,
        ];
    }

    public function active(): static
    {
        return $this->state(fn () => [
            'status' => ThemeStatus::ACTIVE,
            'theme_date' => now()->toDateString(),
        ]);
    }
}
