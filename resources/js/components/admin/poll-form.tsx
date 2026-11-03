import type { UrlMethodPair } from '@inertiajs/core';
import { useForm } from '@inertiajs/react';
import { Loader2, Plus, Save, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Field, toDateTimeLocal } from '@/components/admin/crud';
import FileUpload from '@/components/file-upload';
import InputError from '@/components/input-error';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { usePermission } from '@/hooks/use-permissions';
import { imageUrl } from '@/types/admin';
import type {
    AdminPoll,
    AdminPollOption,
    SelectOption,
    Tone,
} from '@/types/admin';
import { PERMISSIONS } from '@/types/permissions';

const NONE = 'none';
const MAX_OPTIONS = 6;
const MIN_OPTIONS = 2;

interface PollFormProps {
    action: UrlMethodPair;
    categories: SelectOption[];
    statuses: string[];
    tones: string[];
    poll?: AdminPoll;
    isEdit?: boolean;
    onCancel?: () => void;
}

export function PollForm({
    action,
    categories,
    statuses,
    tones,
    poll,
    isEdit = false,
    onCancel,
}: PollFormProps) {
    const { can } = usePermission();
    const canPublish = can(PERMISSIONS.POLLS.PUBLISH);

    const form = useForm(action, {
        question: poll?.question ?? '',
        lead: poll?.lead ?? '',
        category_id: poll?.category_id ? String(poll.category_id) : '',
        image: null as File | null,
        remove_image: false,
        image_caption: poll?.image_caption ?? '',
        status: poll?.status ?? 'draft',
        is_featured: poll?.is_featured ?? false,
        starts_at: toDateTimeLocal(poll?.starts_at),
        ends_at: toDateTimeLocal(poll?.ends_at),
        options: (poll?.options?.length
            ? poll.options.map((option) => ({
                  id: option.id,
                  label: option.label,
                  tone: option.tone,
              }))
            : [
                  { label: '', tone: 'brand' },
                  { label: '', tone: 'warm' },
              ]) as AdminPollOption[],
    });

    const errors = form.errors as Record<string, string | undefined>;

    const updateOption = (index: number, changes: Partial<AdminPollOption>) =>
        form.setData(
            'options',
            form.data.options.map((option, i) =>
                i === index ? { ...option, ...changes } : option,
            ),
        );

    const addOption = () =>
        form.setData('options', [
            ...form.data.options,
            { label: '', tone: 'tertiary' as Tone },
        ]);

    const removeOption = (index: number) =>
        form.setData(
            'options',
            form.data.options.filter((_, i) => i !== index),
        );

    const existingImage =
        isEdit && poll?.image && !form.data.image && !form.data.remove_image
            ? [
                  {
                      id: 'current',
                      path: poll.image,
                      url: imageUrl(poll.image) ?? '',
                      mime_type: 'image/*',
                  },
              ]
            : [];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        form.submit({
            preserveScroll: true,
            onSuccess: () => {
                if (!isEdit) {
                    form.reset();
                }
            },
        });
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            onSubmit={handleSubmit}
            className="space-y-8"
        >
            <section className="grid gap-6 sm:grid-cols-2">
                <Field
                    label="Question"
                    htmlFor="question"
                    error={form.errors.question}
                    className="sm:col-span-2"
                >
                    <Input
                        id="question"
                        value={form.data.question}
                        onChange={(e) =>
                            form.setData('question', e.target.value)
                        }
                        onBlur={() => form.validate('question')}
                        aria-invalid={form.invalid('question')}
                        placeholder="e.g. Tea or coffee?"
                    />
                </Field>
                <Field
                    label="Lead"
                    htmlFor="lead"
                    error={form.errors.lead}
                    className="sm:col-span-2"
                >
                    <Textarea
                        id="lead"
                        rows={3}
                        value={form.data.lead}
                        onChange={(e) => form.setData('lead', e.target.value)}
                    />
                </Field>
                <Field label="Category" error={form.errors.category_id}>
                    <Select
                        value={form.data.category_id || NONE}
                        onValueChange={(value) =>
                            form.setData(
                                'category_id',
                                value === NONE ? '' : value,
                            )
                        }
                    >
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={NONE}>Uncategorised</SelectItem>
                            {categories.map((category) => (
                                <SelectItem
                                    key={category.id}
                                    value={String(category.id)}
                                >
                                    {category.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </Field>
                <Field
                    label="Status"
                    error={form.errors.status}
                    hint={
                        canPublish
                            ? undefined
                            : 'You can only save drafts. An editor will publish it.'
                    }
                >
                    <Select
                        value={form.data.status}
                        onValueChange={(value) =>
                            form.setData(
                                'status',
                                value as typeof form.data.status,
                            )
                        }
                    >
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {statuses.map((status) => (
                                <SelectItem
                                    key={status}
                                    value={status}
                                    className="capitalize"
                                    disabled={!canPublish && status !== 'draft'}
                                >
                                    {status}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </Field>
                <Field
                    label="Starts at"
                    htmlFor="starts_at"
                    error={form.errors.starts_at}
                >
                    <Input
                        id="starts_at"
                        type="datetime-local"
                        value={form.data.starts_at}
                        onChange={(e) =>
                            form.setData('starts_at', e.target.value)
                        }
                    />
                </Field>
                <Field
                    label="Ends at"
                    htmlFor="ends_at"
                    error={form.errors.ends_at}
                >
                    <Input
                        id="ends_at"
                        type="datetime-local"
                        value={form.data.ends_at}
                        onChange={(e) =>
                            form.setData('ends_at', e.target.value)
                        }
                        onBlur={() => form.validate('ends_at')}
                    />
                </Field>
                <div className="flex items-center gap-2 sm:col-span-2">
                    <Checkbox
                        id="is_featured"
                        checked={form.data.is_featured}
                        onCheckedChange={(checked) =>
                            form.setData('is_featured', checked === true)
                        }
                    />
                    <Label htmlFor="is_featured">Feature this poll</Label>
                </div>
            </section>

            <section className="space-y-3">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-sm font-semibold">Options</h3>
                        <p className="text-xs text-muted-foreground">
                            Between {MIN_OPTIONS} and {MAX_OPTIONS} options.
                            Removing an option deletes its votes.
                        </p>
                    </div>
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={addOption}
                        disabled={form.data.options.length >= MAX_OPTIONS}
                    >
                        <Plus className="h-4 w-4" /> Add option
                    </Button>
                </div>

                <div className="space-y-3">
                    {form.data.options.map((option, index) => (
                        <div key={option.id ?? `new-${index}`}>
                            <div className="flex items-center gap-2">
                                <span className="w-5 text-xs text-muted-foreground">
                                    {index + 1}.
                                </span>
                                <Input
                                    value={option.label}
                                    onChange={(e) =>
                                        updateOption(index, {
                                            label: e.target.value,
                                        })
                                    }
                                    onBlur={() =>
                                        form.validate(`options.${index}.label`)
                                    }
                                    placeholder={`Option ${index + 1}`}
                                    aria-invalid={
                                        !!errors[`options.${index}.label`]
                                    }
                                />
                                <Select
                                    value={option.tone}
                                    onValueChange={(value) =>
                                        updateOption(index, {
                                            tone: value as Tone,
                                        })
                                    }
                                >
                                    <SelectTrigger className="w-32">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {tones.map((tone) => (
                                            <SelectItem
                                                key={tone}
                                                value={tone}
                                                className="capitalize"
                                            >
                                                {tone}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="text-muted-foreground hover:text-destructive"
                                    onClick={() => removeOption(index)}
                                    disabled={
                                        form.data.options.length <= MIN_OPTIONS
                                    }
                                    title="Remove option"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                            <InputError
                                message={errors[`options.${index}.label`]}
                                className="mt-1 ml-7"
                            />
                        </div>
                    ))}
                </div>
                <InputError message={form.errors.options} />
            </section>

            <section className="grid gap-4">
                <div className="grid gap-2">
                    <Label>Image</Label>
                    <FileUpload
                        accept="image/*"
                        maxSize={4}
                        value={form.data.image}
                        onChange={(file) => {
                            form.setData(
                                'image',
                                (file as File | null) ?? null,
                            );
                            form.setData('remove_image', false);
                        }}
                        existingFiles={existingImage}
                        onRemoveExisting={() =>
                            form.setData('remove_image', true)
                        }
                        placeholder="Drag & drop an image, or click to browse"
                        hint="PNG, JPG or WEBP, up to 4 MB"
                        error={form.errors.image}
                        classNames={{ wrapper: 'sm:max-w-md' }}
                    />
                </div>
                <Field
                    label="Image caption"
                    htmlFor="image_caption"
                    error={form.errors.image_caption}
                    className="sm:max-w-md"
                >
                    <Input
                        id="image_caption"
                        value={form.data.image_caption}
                        onChange={(e) =>
                            form.setData('image_caption', e.target.value)
                        }
                    />
                </Field>
            </section>

            <div className="flex items-center gap-3 border-t pt-5">
                <Button type="submit" disabled={form.processing}>
                    {form.processing ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        <Save className="h-4 w-4" />
                    )}
                    {isEdit ? 'Save changes' : 'Create poll'}
                </Button>
                {onCancel && (
                    <Button
                        type="button"
                        variant="outline"
                        onClick={onCancel}
                        disabled={form.processing}
                    >
                        Cancel
                    </Button>
                )}
                {form.validating && (
                    <Badge variant="secondary" className="ml-auto gap-1.5">
                        <Loader2 className="h-3 w-3 animate-spin" />
                        Validating…
                    </Badge>
                )}
            </div>
        </motion.form>
    );
}
