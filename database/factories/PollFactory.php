<?php

namespace Database\Factories;

use App\Enums\PollStatus;
use App\Models\Poll;
use App\Models\PollOption;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Poll>
 */
class PollFactory extends Factory
{
    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'question' => rtrim(fake()->sentence(8), '.').'?',
            'lead' => fake()->sentence(),
            'category_id' => null,
            'image' => null,
            'image_caption' => null,
            'status' => PollStatus::DRAFT,
            'is_featured' => false,
            'starts_at' => null,
            'ends_at' => null,
        ];
    }

    public function active(): static
    {
        return $this->state(fn () => ['status' => PollStatus::ACTIVE]);
    }

    public function closed(): static
    {
        return $this->state(fn () => ['status' => PollStatus::CLOSED]);
    }

    /**
     * Attach the given number of options after creation.
     */
    public function withOptions(int $count = 3): static
    {
        return $this->afterCreating(function (Poll $poll) use ($count) {
            foreach (range(1, $count) as $position) {
                PollOption::factory()->for($poll)->create(['sort_order' => $position]);
            }
        });
    }
}
