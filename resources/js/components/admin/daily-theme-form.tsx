import type { UrlMethodPair } from '@inertiajs/core';
import { useForm } from '@inertiajs/react';
import { Loader2, Save } from 'lucide-react';
import { motion } from 'motion/react';
import { Field, toDateTimeLocal } from '@/components/admin/crud';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import type { AdminDailyTheme } from '@/types/admin';

const NONE = 'none';

interface DailyThemeFormProps {
    action: UrlMethodPair;
    statuses: string[];
    articles: { id: number; title: string }[];
    theme?: AdminDailyTheme;
    isEdit?: boolean;
    onCancel?: () => void;
}

export function DailyThemeForm({
    action,
    statuses,
    articles,
    theme,
    isEdit = false,
    onCancel,
}: DailyThemeFormProps) {
    const form = useForm(action, {
        title: theme?.title ?? '',
        highlight: theme?.highlight ?? '',
        lead: theme?.lead ?? '',
        theme_date: theme?.theme_date?.slice(0, 10) ?? '',
        status: theme?.status ?? 'upcoming',
        starts_at: toDateTimeLocal(theme?.starts_at),
        ends_at: toDateTimeLocal(theme?.ends_at),
        featured_article_id: theme?.featured_article_id
            ? String(theme.featured_article_id)
            : '',
    });

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
            className="space-y-6"
        >
            <div className="grid gap-6 sm:grid-cols-2">
                <Field
                    label="Title"
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
                        placeholder="e.g. A rainy day at the office"
                    />
                </Field>

                <Field
                    label="Highlighted word"
                    htmlFor="highlight"
                    error={form.errors.highlight}
                    hint="Shown in an accent colour in the theme headline."
                >
                    <Input
                        id="highlight"
                        value={form.data.highlight}
                        onChange={(e) =>
                            form.setData('highlight', e.target.value)
                        }
                    />
                </Field>

                <Field
                    label="Theme date"
                    htmlFor="theme_date"
                    error={form.errors.theme_date}
                >
                    <Input
                        id="theme_date"
                        type="date"
                        value={form.data.theme_date}
                        onChange={(e) =>
                            form.setData('theme_date', e.target.value)
                        }
                        onBlur={() => form.validate('theme_date')}
                        aria-invalid={form.invalid('theme_date')}
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
                        rows={4}
                        value={form.data.lead}
                        onChange={(e) => form.setData('lead', e.target.value)}
                    />
                </Field>

                <Field label="Status" error={form.errors.status}>
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
                                >
                                    {status}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </Field>

                <Field
                    label="Featured paper"
                    error={form.errors.featured_article_id}
                    hint="Only published articles can be featured."
                >
                    <Select
                        value={form.data.featured_article_id || NONE}
                        onValueChange={(value) =>
                            form.setData(
                                'featured_article_id',
                                value === NONE ? '' : value,
                            )
                        }
                    >
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={NONE}>None</SelectItem>
                            {articles.map((article) => (
                                <SelectItem
                                    key={article.id}
                                    value={String(article.id)}
                                >
                                    {article.title}
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
            </div>

            <div className="flex items-center gap-3 border-t pt-5">
                <Button type="submit" disabled={form.processing}>
                    {form.processing ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        <Save className="h-4 w-4" />
                    )}
                    {isEdit ? 'Save changes' : 'Create theme'}
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
