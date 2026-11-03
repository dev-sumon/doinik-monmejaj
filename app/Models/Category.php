<?php

namespace App\Models;

use App\Enums\Tone;
use Database\Factories\CategoryFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    /** @use HasFactory<CategoryFactory> */
    use HasFactory;

    protected $fillable = ['name', 'slug', 'tone', 'sort_order', 'is_active'];

    /**
     * @return array<string, mixed>
     */
    protected function casts(): array
    {
        return [
            'tone' => Tone::class,
            'is_active' => 'boolean',
            'sort_order' => 'integer',
        ];
    }

    /**
     * @return HasMany<Article, $this>
     */
    public function articles(): HasMany
    {
        return $this->hasMany(Article::class);
    }

    /**
     * @return HasMany<Poll, $this>
     */
    public function polls(): HasMany
    {
        return $this->hasMany(Poll::class);
    }
}
