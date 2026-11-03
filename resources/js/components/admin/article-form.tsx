import type { UrlMethodPair } from '@inertiajs/core';
import { useForm } from '@inertiajs/react';
import { Loader2, Save } from 'lucide-react';
import { motion } from 'motion/react';
import { Field } from '@/components/admin/crud';
import FileUpload from '@/components/file-upload';
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
import type { AdminArticle, SelectOption } from '@/types/admin';
import { PERMISSIONS } from '@/types/permissions';

const NONE = 'none';
const EVENT_LABELS = ['Main event', 'Second event', 'Third event'];

interface ArticleFormProps {
    action: UrlMethodPair;
    categories: SelectOption[];
    themes: { id: number; title: string }[];
    styles: string[];
    visibilities: string[];
    statuses: string[];
    article?: AdminArticle;
    isEdit?: boolean;
    onCancel?: () => void;
}

function EnumSelect({
    value,
    options,
    onChange,
    disabledValues = [],
}: {
    value: string;
    options: string[];
    onChange: (value: string) => void;
    disabledValues?: string[];
}) {
    return (
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger>
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {options.map((option) => (
                    <SelectItem
                        key={option}
                        value={option}
                        className="capitalize"
                        disabled={disabledValues.includes(option)}
                    >
                        {option}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}

export function ArticleForm({
    action,
    categories,
    themes,
    styles,
    visibilities,
    statuses,
    article,
    isEdit = false,
    onCancel,
}: ArticleFormProps) {
    const { can } = usePermission();
    const canPublish = can(PERMISSIONS.ARTICLES.PUBLISH);

    const form = useForm(action, {
        masthead: article?.masthead ?? '',
        byline: article?.byline ?? '',
        title: article?.title ?? '',
        slug: article?.slug ?? '',
        excerpt: article?.excerpt ?? '',
        body: article?.body ?? '',
        pull_quote: article?.pull_quote ?? '',
        events: [0, 1, 2].map((i) => article?.events?.[i] ?? ''),
        cover_image: null as File | null,
        remove_cover_image: false,
        category_id: article?.category_id ? String(article.category_id) : '',
        daily_theme_id: article?.daily_theme_id
            ? String(article.daily_theme_id)
            : '',
        style: article?.style ?? 'funny',
        visibility: article?.visibility ?? 'public',
        status: article?.status ?? 'draft',
        is_featured: article?.is_featured ?? false,
        edition_no: article?.edition_no ? String(article.edition_no) : '',
        read_time: article?.read_time ? String(article.read_time) : '',
    });

    const existingCover =
        isEdit &&
        article?.cover_image &&
        !form.data.cover_image &&
        !form.data.remove_cover_image
            ? [
                  {
                      id: 'current',
                      path: article.cover_image,
                      url: imageUrl(article.cover_image) ?? '',
                      mime_type: 'image/*',
                  },
              ]
            : [];

    const setEvent = (index: number, value: string) =>
        form.setData(
            'events',
            form.data.events.map((event, i) => (i === index ? value : event)),
        );

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

    const eventError = (index: number) =>
        (form.errors as Record<string, string | undefined>)[`events.${index}`];

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
                    label="Newspaper name (masthead)"
                    htmlFor="masthead"
                    error={form.errors.masthead}
                >
                    <Input
                        id="masthead"
                        value={form.data.masthead}
                        onChange={(e) =>
                            form.setData('masthead', e.target.value)
                        }
                        onBlur={() => form.validate('masthead')}
                        aria-invalid={form.invalid('masthead')}
                    />
                </Field>
                <Field
                    label="Byline"
                    htmlFor="byline"
                    error={form.errors.byline}
                >
                    <Input
                        id="byline"
                        value={form.data.byline}
                        onChange={(e) => form.setData('byline', e.target.value)}
                    />
                </Field>
                <Field
                    label="Headline"
                    htmlFor="title"
                    error={form.errors.title}
                    className="sm:col-span-2"
                >
                    <Input
                        id="title"
                        value={form.data.title}
                        onChange={(e) => form.setData('title', e.target.value)}
                        onBlur={() => form.validate('title')}
                        aria-invalid={form.invalid('title')}
                    />
                </Field>
                <Field
                    label="Slug"
                    htmlFor="slug"
                    error={form.errors.slug}
                    hint="Leave blank to generate it from the headline."
                    className="sm:col-span-2"
                >
                    <Input
                        id="slug"
                        value={form.data.slug}
                        onChange={(e) => form.setData('slug', e.target.value)}
                        onBlur={() => form.validate('slug')}
                        aria-invalid={form.invalid('slug')}
                    />
                </Field>
                <Field
                    label="Excerpt"
                    htmlFor="excerpt"
                    error={form.errors.excerpt}
                    className="sm:col-span-2"
                >
                    <Textarea
                        id="excerpt"
                        rows={3}
                        value={form.data.excerpt}
                        onChange={(e) =>
                            form.setData('excerpt', e.target.value)
                        }
                    />
                </Field>
                <Field
                    label="Body"
                    htmlFor="body"
                    error={form.errors.body}
                    className="sm:col-span-2"
                >
                    <Textarea
                        id="body"
                        rows={8}
                        value={form.data.body}
                        onChange={(e) => form.setData('body', e.target.value)}
                    />
                </Field>
                <Field
                    label="Pull quote"
                    htmlFor="pull_quote"
                    error={form.errors.pull_quote}
                    className="sm:col-span-2"
                >
                    <Textarea
                        id="pull_quote"
                        rows={2}
                        value={form.data.pull_quote}
                        onChange={(e) =>
                            form.setData('pull_quote', e.target.value)
                        }
                    />
                </Field>
            </section>

            <section className="space-y-4">
                <div>
                    <h3 className="text-sm font-semibold">Events of the day</h3>
                    <p className="text-xs text-muted-foreground">
                        Up to three events, 300 words each.
                    </p>
                </div>
                {EVENT_LABELS.map((label, index) => (
                    <Field
                        key={label}
                        label={label}
                        htmlFor={`event-${index}`}
                        error={eventError(index)}
                    >
                        <Textarea
                            id={`event-${index}`}
                            rows={3}
                            value={form.data.events[index]}
                            onChange={(e) => setEvent(index, e.target.value)}
                            onBlur={() => form.validate(`events.${index}`)}
                        />
                    </Field>
                ))}
            </section>

            <section className="grid gap-2">
                <Label>Cover image</Label>
                <FileUpload
                    accept="image/*"
                    maxSize={4}
                    value={form.data.cover_image}
                    onChange={(file) => {
                        form.setData(
                            'cover_image',
                            (file as File | null) ?? null,
                        );
                        form.setData('remove_cover_image', false);
                    }}
                    existingFiles={existingCover}
                    onRemoveExisting={() =>
                        form.setData('remove_cover_image', true)
                    }
                    placeholder="Drag & drop a cover image, or click to browse"
                    hint="PNG, JPG or WEBP, up to 4 MB"
                    error={form.errors.cover_image}
                    classNames={{ wrapper: 'sm:max-w-md' }}
                />
            </section>

            <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                <Field label="Daily theme" error={form.errors.daily_theme_id}>
                    <Select
                        value={form.data.daily_theme_id || NONE}
                        onValueChange={(value) =>
                            form.setData(
                                'daily_theme_id',
                                value === NONE ? '' : value,
                            )
                        }
                    >
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={NONE}>No theme</SelectItem>
                            {themes.map((theme) => (
                                <SelectItem
                                    key={theme.id}
                                    value={String(theme.id)}
                                >
                                    {theme.title}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </Field>
                <Field label="Writing style" error={form.errors.style}>
                    <EnumSelect
                        value={form.data.style}
                        options={styles}
                        onChange={(value) =>
                            form.setData(
                                'style',
                                value as typeof form.data.style,
                            )
                        }
                    />
                </Field>
                <Field label="Visibility" error={form.errors.visibility}>
                    <EnumSelect
                        value={form.data.visibility}
                        options={visibilities}
                        onChange={(value) =>
                            form.setData(
                                'visibility',
                                value as typeof form.data.visibility,
                            )
                        }
                    />
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
                    <EnumSelect
                        value={form.data.status}
                        options={statuses}
                        disabledValues={
                            canPublish ? [] : ['published', 'archived']
                        }
                        onChange={(value) =>
                            form.setData(
                                'status',
                                value as typeof form.data.status,
                            )
                        }
                    />
                </Field>
                <Field
                    label="Edition number"
                    htmlFor="edition_no"
                    error={form.errors.edition_no}
                >
                    <Input
                        id="edition_no"
                        type="number"
                        min={1}
                        value={form.data.edition_no}
                        onChange={(e) =>
                            form.setData('edition_no', e.target.value)
                        }
                    />
                </Field>
                <Field
                    label="Read time (minutes)"
                    htmlFor="read_time"
                    error={form.errors.read_time}
                >
                    <Input
                        id="read_time"
                        type="number"
                        min={1}
                        value={form.data.read_time}
                        onChange={(e) =>
                            form.setData('read_time', e.target.value)
                        }
                    />
                </Field>
                {canPublish && (
                    <div className="flex items-end gap-2 pb-2">
                        <Checkbox
                            id="is_featured"
                            checked={form.data.is_featured}
                            onCheckedChange={(checked) =>
                                form.setData('is_featured', checked === true)
                            }
                        />
                        <Label htmlFor="is_featured">
                            Feature on home page
                        </Label>
                    </div>
                )}
            </section>

            <div className="flex items-center gap-3 border-t pt-5">
                <Button type="submit" disabled={form.processing}>
                    {form.processing ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        <Save className="h-4 w-4" />
                    )}
                    {isEdit ? 'Save changes' : 'Create article'}
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
