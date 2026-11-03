<?php

namespace App\Http\Requests\DailyTheme;

use App\Enums\ThemeStatus;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

/**
 * Validates both creating and updating a daily theme.
 */
class DailyThemeRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $theme = $this->route('daily_theme');

        return [
            'title' => ['required', 'string', 'max:200'],
            'highlight' => ['nullable', 'string', 'max:120'],
            'lead' => ['nullable', 'string', 'max:2000'],
            'theme_date' => [
                'required',
                'date',
                Rule::unique('daily_themes', 'theme_date')->ignore($theme?->id),
            ],
            'status' => ['required', Rule::enum(ThemeStatus::class)],
            'starts_at' => ['nullable', 'date'],
            'ends_at' => ['nullable', 'date', 'after:starts_at'],
            'featured_article_id' => ['nullable', 'integer', 'exists:articles,id'],
        ];
    }

    /**
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'theme_date.unique' => 'A theme is already scheduled for this date.',
            'ends_at.after' => 'The end time must be after the start time.',
        ];
    }
}
