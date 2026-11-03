<?php

namespace App\Http\Requests\Poll;

use App\Enums\PermissionEnum;
use App\Enums\PollStatus;
use App\Enums\Tone;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

/**
 * Validates both creating and updating a poll with its options.
 */
class PollRequest extends FormRequest
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
        $poll = $this->route('poll');
        $canPublish = (bool) $this->user()?->can(PermissionEnum::POLLS_PUBLISH->value);

        return [
            'question' => ['required', 'string', 'max:255'],
            'lead' => ['nullable', 'string', 'max:2000'],
            'category_id' => ['nullable', 'integer', 'exists:categories,id'],
            'image' => ['nullable', 'image', 'max:4096'],
            'remove_image' => ['boolean'],
            'image_caption' => ['nullable', 'string', 'max:255'],
            'status' => [
                'required',
                Rule::enum(PollStatus::class),
                Rule::when(! $canPublish, [Rule::in([PollStatus::DRAFT->value])]),
            ],
            'is_featured' => ['boolean'],
            'starts_at' => ['nullable', 'date'],
            'ends_at' => ['nullable', 'date', 'after:starts_at'],
            'options' => ['required', 'array', 'min:2', 'max:6'],
            'options.*.id' => [
                'nullable',
                'integer',
                Rule::exists('poll_options', 'id')->where('poll_id', $poll?->id ?? 0),
            ],
            'options.*.label' => ['required', 'string', 'max:160', 'distinct'],
            'options.*.tone' => ['required', Rule::enum(Tone::class)],
        ];
    }

    /**
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'options.required' => 'A poll needs at least two options.',
            'options.min' => 'A poll needs at least two options.',
            'options.max' => 'A poll can have at most six options.',
            'options.*.label.required' => 'Every option needs a label.',
            'options.*.label.distinct' => 'Option labels must be different from each other.',
            'status.in' => 'You do not have permission to publish polls.',
            'ends_at.after' => 'The end time must be after the start time.',
        ];
    }
}
