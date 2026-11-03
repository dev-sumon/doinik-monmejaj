<?php

namespace App\Models;

use App\Enums\ArticleStatus;
use App\Enums\ArticleStyle;
use App\Enums\ArticleVisibility;
use Database\Factories\ArticleFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Article extends Model
{
    /** @use HasFactory<ArticleFactory> */
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id', 'category_id', 'daily_theme_id', 'masthead', 'byline', 'title', 'slug',
        'excerpt', 'body', 'pull_quote', 'cover_image', 'events', 'style', 'visibility',
        'status', 'is_featured', 'edition_no', 'read_time', 'published_at',
    ];

    /**
     * @return array<string, mixed>
     */
    protected function casts(): array
    {
        return [
            'events' => 'array',
            'style' => ArticleStyle::class,
            'visibility' => ArticleVisibility::class,
            'status' => ArticleStatus::class,
            'is_featured' => 'boolean',
            'published_at' => 'datetime',
        ];
    }

    /**
     * Published articles that any visitor may read.
     *
     * @param  Builder<Article>  $query
     * @return Builder<Article>
     */
    public function scopePubliclyVisible(Builder $query): Builder
    {
        return $query
            ->where('status', ArticleStatus::PUBLISHED->value)
            ->where('visibility', ArticleVisibility::PUBLIC->value);
    }

    /**
     * @return BelongsTo<User, $this>
     */
    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * @return BelongsTo<Category, $this>
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * @return BelongsTo<DailyTheme, $this>
     */
    public function dailyTheme(): BelongsTo
    {
        return $this->belongsTo(DailyTheme::class);
    }
}
