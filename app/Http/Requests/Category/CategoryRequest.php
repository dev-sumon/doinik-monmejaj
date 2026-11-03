<?php

namespace App\Http\Requests\Category;

use App\Enums\Tone;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

/**
 * Validates both creating and updating a category.
 */
class CategoryRequest extends FormRequest
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
        $category = $this->route('category');

        return [
            'name' => ['required', 'string', 'max:120'],
            'slug' => [
                'nullable',
                'string',
                'max:150',
                'alpha_dash',
                Rule::unique('categories', 'slug')->ignore($category?->id),
            ],
            'tone' => ['required', Rule::enum(Tone::class)],
            'sort_order' => ['nullable', 'integer', 'min:0', 'max:65535'],
            'is_active' => ['boolean'],
        ];
    }

    /**
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name.required' => 'The category name is required.',
            'slug.unique' => 'This slug is already used by another category.',
            'slug.alpha_dash' => 'The slug may only contain letters, numbers, dashes and underscores.',
        ];
    }
}
