<?php

namespace App\Models;

use App\Enums\Tone;
use Database\Factories\PollOptionFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PollOption extends Model
{
    /** @use HasFactory<PollOptionFactory> */
    use HasFactory;

    protected $fillable = ['poll_id', 'label', 'tone', 'sort_order'];

    /**
     * @return array<string, mixed>
     */
    protected function casts(): array
    {
        return ['tone' => Tone::class, 'sort_order' => 'integer'];
    }

    /**
     * @return BelongsTo<Poll, $this>
     */
    public function poll(): BelongsTo
    {
        return $this->belongsTo(Poll::class);
    }

    /**
     * @return HasMany<PollVote, $this>
     */
    public function votes(): HasMany
    {
        return $this->hasMany(PollVote::class);
    }
}
