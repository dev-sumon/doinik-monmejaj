<?php

namespace App\Models;

use App\Enums\ThemeStatus;
use Database\Factories\DailyThemeFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class DailyTheme extends Model
{
    /** @use HasFactory<DailyThemeFactory> */
    use HasFactory;

    protected $fillable = [
        'title', 'highlight', 'lead', 'theme_date', 'status',
        'starts_at', 'ends_at', 'featured_article_id',
    ];

    /**
     * @return array<string, mixed>
     */
    protected function casts(): array
    {
        return [
            'status' => ThemeStatus::class,
            'theme_date' => 'date:Y-m-d',
            'starts_at' => 'datetime',
            'ends_at' => 'datetime',
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
     * @return BelongsTo<Article, $this>
     */
    public function featuredArticle(): BelongsTo
    {
        return $this->belongsTo(Article::class, 'featured_article_id');
    }
}
