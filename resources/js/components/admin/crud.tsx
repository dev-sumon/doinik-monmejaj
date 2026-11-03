import { Link, router } from '@inertiajs/react';
import { Eye, Pencil, Search, Trash2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { ConfirmDeleteDialog } from '@/components/admin/confirm-delete-dialog';
import InputError from '@/components/input-error';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

/** Sentinel for the "no filter" option of a shadcn Select. */
export const ALL = 'all';

/**
 * Keep a debounced search box and extra filters in sync with the URL.
 * Mirrors the Users index behaviour (350ms debounce, no first-render fetch).
 */
export function useListFilters(
    url: string,
    initial: Record<string, string | undefined>,
) {
    const [values, setValues] = useState<Record<string, string>>(() =>
        Object.fromEntries(
            Object.entries(initial).map(([key, value]) => [key, value ?? '']),
        ),
    );
    const firstRender = useRef(true);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;

            return;
        }

        const timeout = setTimeout(() => {
            router.get(
                url,
                Object.fromEntries(
                    Object.entries(values).map(([key, value]) => [
                        key,
                        value && value !== ALL ? value : undefined,
                    ]),
                ),
                { preserveState: true, preserveScroll: true, replace: true },
            );
        }, 350);

        return () => clearTimeout(timeout);
    }, [url, values]);

    const set = (key: string, value: string) =>
        setValues((current) => ({ ...current, [key]: value }));

    return { values, set };
}

export function SearchBox({
    value,
    onChange,
    placeholder,
}: {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
}) {
    return (
        <div className="relative w-full sm:max-w-xs">
            <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="pl-9"
            />
        </div>
    );
}

export function StatCard({
    label,
    value,
    icon: Icon,
}: {
    label: string;
    value: number | string;
    icon: LucideIcon;
}) {
    return (
        <div className="flex items-center gap-4 rounded-xl border bg-card p-4 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
            </div>
            <div>
                <p className="text-2xl leading-none font-bold">{value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{label}</p>
            </div>
        </div>
    );
}

export function EmptyState({
    icon: Icon,
    title,
    description,
}: {
    icon: LucideIcon;
    title: string;
    description?: string;
}) {
    return (
        <div className="px-4 py-16 text-center">
            <Icon className="mx-auto h-10 w-10 text-muted-foreground/40" />
            <h3 className="mt-4 text-sm font-semibold">{title}</h3>
            {description && (
                <p className="mt-1 text-sm text-muted-foreground">
                    {description}
                </p>
            )}
        </div>
    );
}

/** Coloured badge for a status-like string. */
export function StatusBadge({ value }: { value: string }) {
    const tones: Record<string, string> = {
        published: 'bg-tertiary-fixed text-tertiary',
        active: 'bg-tertiary-fixed text-tertiary',
        draft: 'bg-warm-container text-warm',
        upcoming: 'bg-warm-container text-warm',
        archived: 'bg-muted text-muted-foreground',
        closed: 'bg-muted text-muted-foreground',
        past: 'bg-muted text-muted-foreground',
        inactive: 'bg-muted text-muted-foreground',
        public: 'bg-tertiary-fixed text-tertiary',
        private: 'bg-brand-fixed text-brand',
    };

    return (
        <Badge
            variant="secondary"
            className={`capitalize ${tones[value] ?? ''}`}
        >
            {value}
        </Badge>
    );
}

interface RowActionsProps {
    showHref?: string;
    editHref?: string;
    canEdit?: boolean;
    canDelete?: boolean;
    deleteUrl?: string;
    deleteDescription: ReactNode;
    extra?: ReactNode;
}

/** View / Edit / Delete icon buttons, gated by the caller's permissions. */
export function RowActions({
    showHref,
    editHref,
    canEdit = false,
    canDelete = false,
    deleteUrl,
    deleteDescription,
    extra,
}: RowActionsProps) {
    return (
        <div className="flex items-center justify-end gap-1">
            {extra}
            {showHref && (
                <Button asChild variant="ghost" size="icon">
                    <Link href={showHref} title="View">
                        <Eye className="h-4 w-4" />
                    </Link>
                </Button>
            )}
            {canEdit && editHref && (
                <Button asChild variant="ghost" size="icon">
                    <Link href={editHref} title="Edit">
                        <Pencil className="h-4 w-4" />
                    </Link>
                </Button>
            )}
            {canDelete && deleteUrl && (
                <ConfirmDeleteDialog
                    description={deleteDescription}
                    onConfirm={() =>
                        router.delete(deleteUrl, { preserveScroll: true })
                    }
                >
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground hover:text-destructive"
                        title="Delete"
                    >
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </ConfirmDeleteDialog>
            )}
        </div>
    );
}

/** Label + control + validation error, as a single form row. */
export function Field({
    label,
    htmlFor,
    error,
    hint,
    className,
    children,
}: {
    label: string;
    htmlFor?: string;
    error?: string;
    hint?: string;
    className?: string;
    children: ReactNode;
}) {
    return (
        <div className={`grid gap-2 ${className ?? ''}`}>
            <Label htmlFor={htmlFor}>{label}</Label>
            {children}
            {hint && !error && (
                <p className="text-xs text-muted-foreground">{hint}</p>
            )}
            <InputError message={error} />
        </div>
    );
}

/** Format an ISO date/time for the admin tables. */
export function formatDate(value: string | null | undefined): string {
    if (!value) {
        return '—';
    }

    return new Date(value).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });
}

/** Convert an ISO timestamp to a `datetime-local` input value. */
export function toDateTimeLocal(value: string | null | undefined): string {
    if (!value) {
        return '';
    }

    const date = new Date(value);
    const pad = (n: number) => String(n).padStart(2, '0');

    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}
