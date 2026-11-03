import type { UrlMethodPair } from '@inertiajs/core';
import { useForm } from '@inertiajs/react';
import { Loader2, Save } from 'lucide-react';
import { motion } from 'motion/react';
import { Field } from '@/components/admin/crud';
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
import type { AdminCategory } from '@/types/admin';

interface CategoryFormProps {
    action: UrlMethodPair;
    tones: string[];
    isEdit?: boolean;
    category?: AdminCategory;
    onCancel?: () => void;
}

export function CategoryForm({
    action,
    tones,
    isEdit = false,
    category,
    onCancel,
}: CategoryFormProps) {
    const form = useForm(action, {
        name: category?.name ?? '',
        slug: category?.slug ?? '',
        tone: category?.tone ?? 'brand',
        sort_order: String(category?.sort_order ?? 0),
        is_active: category?.is_active ?? true,
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
                <Field label="Name" htmlFor="name" error={form.errors.name}>
                    <Input
                        id="name"
                        value={form.data.name}
                        onChange={(e) => form.setData('name', e.target.value)}
                        onBlur={() => form.validate('name')}
                        aria-invalid={form.invalid('name')}
                        placeholder="e.g. Office life"
                    />
                </Field>

                <Field
                    label="Slug"
                    htmlFor="slug"
                    error={form.errors.slug}
                    hint="Leave blank to generate it from the name."
                >
                    <Input
                        id="slug"
                        value={form.data.slug}
                        onChange={(e) => form.setData('slug', e.target.value)}
                        onBlur={() => form.validate('slug')}
                        aria-invalid={form.invalid('slug')}
                        placeholder="office-life"
                    />
                </Field>

                <Field label="Colour tone" error={form.errors.tone}>
                    <Select
                        value={form.data.tone}
                        onValueChange={(value) =>
                            form.setData('tone', value as typeof form.data.tone)
                        }
                    >
                        <SelectTrigger>
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
                </Field>

                <Field
                    label="Sort order"
                    htmlFor="sort_order"
                    error={form.errors.sort_order}
                >
                    <Input
                        id="sort_order"
                        type="number"
                        min={0}
                        value={form.data.sort_order}
                        onChange={(e) =>
                            form.setData('sort_order', e.target.value)
                        }
                    />
                </Field>
            </div>

            <div className="flex items-center gap-2">
                <Checkbox
                    id="is_active"
                    checked={form.data.is_active}
                    onCheckedChange={(checked) =>
                        form.setData('is_active', checked === true)
                    }
                />
                <Label htmlFor="is_active">Active</Label>
                {form.validating && (
                    <Badge variant="secondary" className="ml-auto gap-1.5">
                        <Loader2 className="h-3 w-3 animate-spin" />
                        Validating…
                    </Badge>
                )}
            </div>

            <div className="flex items-center gap-3 border-t pt-5">
                <Button type="submit" disabled={form.processing}>
                    {form.processing ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        <Save className="h-4 w-4" />
                    )}
                    {isEdit ? 'Save changes' : 'Create category'}
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
            </div>
        </motion.form>
    );
}
