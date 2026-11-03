<?php

namespace App\Http\Requests\Article;

use App\Enums\ArticleStatus;
use App\Enums\ArticleStyle;
use App\Enums\ArticleVisibility;
use App\Enums\PermissionEnum;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

/**
 * Validates both creating and updating an article.
 */
class ArticleRequest extends FormRequest
{
    public const MAX_EVENT_WORDS = 300;

    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $article = $this->route('article');
        $canPublish = (bool) $this->user()?->can(PermissionEnum::ARTICLES_PUBLISH->value);

        return [
            'masthead' => ['required', 'string', 'max:120'],
            'byline' => ['nullable', 'string', 'max:120'],
            'title' => ['required', 'string', 'max:200'],
            'slug' => [
                'nullable',
                'string',
                'max:220',
                'alpha_dash',
                Rule::unique('articles', 'slug')->ignore($article?->id),
            ],
            'excerpt' => ['nullable', 'string', 'max:1000'],
            'body' => ['nullable', 'string', 'max:50000'],
            'pull_quote' => ['nullable', 'string', 'max:500'],
            'cover_image' => ['nullable', 'image', 'max:4096'],
            'remove_cover_image' => ['boolean'],
            'events' => ['nullable', 'array', 'max:3'],
            'events.*' => ['nullable', 'string', $this->maxWords(self::MAX_EVENT_WORDS)],
            'category_id' => ['nullable', 'integer', 'exists:categories,id'],
            'daily_theme_id' => ['nullable', 'integer', 'exists:daily_themes,id'],
            'style' => ['required', Rule::enum(ArticleStyle::class)],
            'visibility' => ['required', Rule::enum(ArticleVisibility::class)],
            // Only users with the publish permission may publish or archive.
            'status' => [
                'required',
                Rule::enum(ArticleStatus::class),
                Rule::when(! $canPublish, [Rule::in([ArticleStatus::DRAFT->value])]),
            ],
            'is_featured' => ['boolean'],
            'edition_no' => ['nullable', 'integer', 'min:1', 'max:1000000'],
            'read_time' => ['nullable', 'integer', 'min:1', 'max:600'],
        ];
    }

    /**
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'title.required' => 'The article title is required.',
            'slug.unique' => 'This slug is already used by another article.',
            'status.in' => 'You do not have permission to publish articles.',
            'events.max' => 'An article can have at most three events.',
        ];
    }

    /**
     * Rule that rejects text with more than the given number of words.
     */
    private function maxWords(int $limit): Closure
    {
        return function (string $attribute, mixed $value, Closure $fail) use ($limit): void {
            $words = preg_split('/\s+/u', trim((string) $value), -1, PREG_SPLIT_NO_EMPTY);

            if (count($words ?: []) > $limit) {
                $fail("Each event may contain at most {$limit} words.");
            }
        };
    }
}
