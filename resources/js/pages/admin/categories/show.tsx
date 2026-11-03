import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Pencil, Tags } from 'lucide-react';
import { AdminPageHeader } from '@/components/admin/admin-page-header';
import { StatusBadge, formatDate } from '@/components/admin/crud';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { usePermission } from '@/hooks/use-permissions';
import { dashboard } from '@/routes';
import categories from '@/routes/admin/categories';
import type { AdminCategory } from '@/types/admin';
import { PERMISSIONS } from '@/types/permissions';

export default function ShowCategory({
    category,
}: {
    category: AdminCategory;
}) {
    const { can } = usePermission();

    const rows: [string, React.ReactNode][] = [
        ['Slug', `/${category.slug}`],
        [
            'Tone',
            <Badge key="tone" variant="outline" className="capitalize">
                {category.tone}
            </Badge>,
        ],
        ['Sort order', category.sort_order],
        [
            'Status',
            <StatusBadge
                key="status"
                value={category.is_active ? 'active' : 'inactive'}
            />,
        ],
        ['Articles', category.articles_count ?? 0],
        ['Polls', category.polls_count ?? 0],
        ['Created', formatDate(category.created_at)],
    ];

    return (
        <>
            <Head title={category.name} />

            <div className="w-full space-y-6 px-4 py-6 sm:px-6 lg:px-8">
                <AdminPageHeader
                    title={category.name}
                    description="Category details"
                    icon={Tags}
                >
                    <Button variant="outline" asChild>
                        <Link href={categories.index().url}>
                            <ArrowLeft className="h-4 w-4" /> Back
                        </Link>
                    </Button>
                    {can(PERMISSIONS.CATEGORIES.EDIT) && (
                        <Button asChild>
                            <Link href={categories.edit(category.id).url}>
                                <Pencil className="h-4 w-4" /> Edit
                            </Link>
                        </Button>
                    )}
                </AdminPageHeader>

                <dl className="max-w-3xl divide-y rounded-xl border bg-card shadow-sm">
                    {rows.map(([label, value]) => (
                        <div
                            key={label}
                            className="flex items-center justify-between gap-4 px-5 py-3 text-sm"
                        >
                            <dt className="text-muted-foreground">{label}</dt>
                            <dd className="font-medium">{value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </>
    );
}

ShowCategory.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Categories', href: categories.index() },
        { title: 'Details', href: categories.index() },
    ],
};
