import { Head, Link, WhenVisible } from '@inertiajs/react';
import { CheckCircle2, Layers, Plus, Tags, XCircle } from 'lucide-react';
import { AdminPageHeader } from '@/components/admin/admin-page-header';
import {
    ALL,
    EmptyState,
    RowActions,
    SearchBox,
    StatCard,
    StatusBadge,
    useListFilters,
} from '@/components/admin/crud';
import { DataPagination } from '@/components/admin/data-pagination';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { usePermission } from '@/hooks/use-permissions';
import { dashboard } from '@/routes';
import categories from '@/routes/admin/categories';
import type { AdminCategory, Paginated } from '@/types/admin';
import { PERMISSIONS } from '@/types/permissions';

interface CategoriesIndexProps {
    categories: Paginated<AdminCategory>;
    filters: { search: string; status: string };
    stats?: { total: number; active: number; inactive: number };
}

export default function CategoriesIndex({
    categories: paginated,
    filters,
    stats,
}: CategoriesIndexProps) {
    const { can } = usePermission();
    const list = useListFilters(categories.index().url, {
        search: filters.search,
        status: filters.status || ALL,
    });

    return (
        <>
            <Head title="Categories" />

            <div className="w-full space-y-6 px-4 py-6 sm:px-6 lg:px-8">
                <AdminPageHeader
                    title="Categories"
                    description="Topics used to organise articles and polls."
                    icon={Tags}
                >
                    {can(PERMISSIONS.CATEGORIES.CREATE) && (
                        <Button asChild>
                            <Link href={categories.create().url}>
                                <Plus className="h-4 w-4" /> Add category
                            </Link>
                        </Button>
                    )}
                </AdminPageHeader>

                <WhenVisible
                    data="stats"
                    fallback={
                        <div className="grid gap-4 sm:grid-cols-3">
                            {[0, 1, 2].map((i) => (
                                <Skeleton key={i} className="h-24 rounded-xl" />
                            ))}
                        </div>
                    }
                >
                    {stats && (
                        <div className="grid gap-4 sm:grid-cols-3">
                            <StatCard
                                label="Total categories"
                                value={stats.total}
                                icon={Layers}
                            />
                            <StatCard
                                label="Active"
                                value={stats.active}
                                icon={CheckCircle2}
                            />
                            <StatCard
                                label="Inactive"
                                value={stats.inactive}
                                icon={XCircle}
                            />
                        </div>
                    )}
                </WhenVisible>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <SearchBox
                        value={list.values.search}
                        onChange={(value) => list.set('search', value)}
                        placeholder="Search categories…"
                    />
                    <Select
                        value={list.values.status || ALL}
                        onValueChange={(value) => list.set('status', value)}
                    >
                        <SelectTrigger className="w-full sm:w-44">
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={ALL}>All statuses</SelectItem>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-muted/50 hover:bg-muted/50">
                                    <TableHead>Category</TableHead>
                                    <TableHead className="hidden sm:table-cell">
                                        Tone
                                    </TableHead>
                                    <TableHead className="hidden md:table-cell">
                                        Articles
                                    </TableHead>
                                    <TableHead className="hidden md:table-cell">
                                        Polls
                                    </TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">
                                        Actions
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {paginated.data.map((category) => (
                                    <TableRow
                                        key={category.id}
                                        className="hover:bg-muted/30"
                                    >
                                        <TableCell>
                                            <div className="font-medium">
                                                {category.name}
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                /{category.slug}
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">
                                            <Badge
                                                variant="outline"
                                                className="capitalize"
                                            >
                                                {category.tone}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            {category.articles_count ?? 0}
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            {category.polls_count ?? 0}
                                        </TableCell>
                                        <TableCell>
                                            <StatusBadge
                                                value={
                                                    category.is_active
                                                        ? 'active'
                                                        : 'inactive'
                                                }
                                            />
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <RowActions
                                                showHref={
                                                    can(
                                                        PERMISSIONS.CATEGORIES
                                                            .VIEW,
                                                    )
                                                        ? categories.show(
                                                              category.id,
                                                          ).url
                                                        : undefined
                                                }
                                                editHref={
                                                    categories.edit(category.id)
                                                        .url
                                                }
                                                canEdit={can(
                                                    PERMISSIONS.CATEGORIES.EDIT,
                                                )}
                                                canDelete={can(
                                                    PERMISSIONS.CATEGORIES
                                                        .DELETE,
                                                )}
                                                deleteUrl={
                                                    categories.destroy(
                                                        category.id,
                                                    ).url
                                                }
                                                deleteDescription={
                                                    <>
                                                        Delete{' '}
                                                        <strong>
                                                            {category.name}
                                                        </strong>
                                                        ? Articles and polls in
                                                        it will become
                                                        uncategorised.
                                                    </>
                                                }
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                        {paginated.data.length === 0 && (
                            <EmptyState
                                icon={Tags}
                                title="No categories found"
                                description="Try adjusting your search or filters."
                            />
                        )}
                    </div>

                    <DataPagination meta={paginated} />
                </div>
            </div>
        </>
    );
}

CategoriesIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Categories', href: categories.index() },
    ],
};
