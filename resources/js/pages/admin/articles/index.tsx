import { Head, Link, WhenVisible, router } from '@inertiajs/react';
import {
    CheckCircle2,
    FileText,
    Newspaper,
    PenLine,
    Plus,
    Send,
    Star,
    Undo2,
} from 'lucide-react';
import { AdminPageHeader } from '@/components/admin/admin-page-header';
import {
    ALL,
    EmptyState,
    RowActions,
    SearchBox,
    StatCard,
    StatusBadge,
    formatDate,
    useListFilters,
} from '@/components/admin/crud';
import { DataPagination } from '@/components/admin/data-pagination';
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
import articles from '@/routes/admin/articles';
import type { AdminArticle, Paginated, SelectOption } from '@/types/admin';
import { PERMISSIONS } from '@/types/permissions';

interface ArticlesIndexProps {
    articles: Paginated<AdminArticle>;
    statuses: string[];
    categories: SelectOption[];
    filters: { search: string; status: string; category: string };
    stats?: { total: number; published: number; drafts: number };
}

export default function ArticlesIndex({
    articles: paginated,
    statuses,
    categories,
    filters,
    stats,
}: ArticlesIndexProps) {
    const { can } = usePermission();
    const list = useListFilters(articles.index().url, {
        search: filters.search,
        status: filters.status || ALL,
        category: filters.category || ALL,
    });

    const patch = (url: string) =>
        router.patch(url, {}, { preserveScroll: true });

    return (
        <>
            <Head title="Articles" />

            <div className="w-full space-y-6 px-4 py-6 sm:px-6 lg:px-8">
                <AdminPageHeader
                    title="Articles"
                    description="Newspapers written by the community and the editorial team."
                    icon={Newspaper}
                >
                    {can(PERMISSIONS.ARTICLES.CREATE) && (
                        <Button asChild>
                            <Link href={articles.create().url}>
                                <Plus className="h-4 w-4" /> Add article
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
                                label="Total articles"
                                value={stats.total}
                                icon={FileText}
                            />
                            <StatCard
                                label="Published"
                                value={stats.published}
                                icon={CheckCircle2}
                            />
                            <StatCard
                                label="Drafts"
                                value={stats.drafts}
                                icon={PenLine}
                            />
                        </div>
                    )}
                </WhenVisible>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <SearchBox
                        value={list.values.search}
                        onChange={(value) => list.set('search', value)}
                        placeholder="Search by headline or masthead…"
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
                    <Select
                        value={list.values.category || ALL}
                        onValueChange={(value) => list.set('category', value)}
                    >
                        <SelectTrigger className="w-full sm:w-48">
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={ALL}>All categories</SelectItem>
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
                </div>

                <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-muted/50 hover:bg-muted/50">
                                    <TableHead>Article</TableHead>
                                    <TableHead className="hidden md:table-cell">
                                        Author
                                    </TableHead>
                                    <TableHead className="hidden lg:table-cell">
                                        Category
                                    </TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="hidden sm:table-cell">
                                        Visibility
                                    </TableHead>
                                    <TableHead className="hidden lg:table-cell">
                                        Published
                                    </TableHead>
                                    <TableHead className="text-right">
                                        Actions
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {paginated.data.map((article) => (
                                    <TableRow
                                        key={article.id}
                                        className="hover:bg-muted/30"
                                    >
                                        <TableCell className="max-w-xs">
                                            <div className="flex items-center gap-1.5 font-medium">
                                                <span className="truncate">
                                                    {article.title}
                                                </span>
                                                {article.is_featured && (
                                                    <Star className="h-3.5 w-3.5 shrink-0 fill-warm text-warm" />
                                                )}
                                            </div>
                                            <div className="truncate text-xs text-muted-foreground">
                                                {article.masthead}
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            {article.author?.name}
                                        </TableCell>
                                        <TableCell className="hidden lg:table-cell">
                                            {article.category?.name ?? '—'}
                                        </TableCell>
                                        <TableCell>
                                            <StatusBadge
                                                value={article.status}
                                            />
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">
                                            <StatusBadge
                                                value={article.visibility}
                                            />
                                        </TableCell>
                                        <TableCell className="hidden lg:table-cell">
                                            {formatDate(article.published_at)}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <RowActions
                                                showHref={
                                                    can(
                                                        PERMISSIONS.ARTICLES
                                                            .VIEW,
                                                    )
                                                        ? articles.show(
                                                              article.id,
                                                          ).url
                                                        : undefined
                                                }
                                                editHref={
                                                    articles.edit(article.id)
                                                        .url
                                                }
                                                canEdit={can(
                                                    PERMISSIONS.ARTICLES.EDIT,
                                                )}
                                                canDelete={can(
                                                    PERMISSIONS.ARTICLES.DELETE,
                                                )}
                                                deleteUrl={
                                                    articles.destroy(article.id)
                                                        .url
                                                }
                                                deleteDescription={
                                                    <>
                                                        Delete{' '}
                                                        <strong>
                                                            {article.title}
                                                        </strong>
                                                        ?
                                                    </>
                                                }
                                                extra={
                                                    can(
                                                        PERMISSIONS.ARTICLES
                                                            .PUBLISH,
                                                    ) && (
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            title={
                                                                article.status ===
                                                                'published'
                                                                    ? 'Unpublish'
                                                                    : 'Publish'
                                                            }
                                                            onClick={() =>
                                                                patch(
                                                                    article.status ===
                                                                        'published'
                                                                        ? articles.unpublish(
                                                                              article.id,
                                                                          ).url
                                                                        : articles.publish(
                                                                              article.id,
                                                                          ).url,
                                                                )
                                                            }
                                                        >
                                                            {article.status ===
                                                            'published' ? (
                                                                <Undo2 className="h-4 w-4" />
                                                            ) : (
                                                                <Send className="h-4 w-4" />
                                                            )}
                                                        </Button>
                                                    )
                                                }
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                        {paginated.data.length === 0 && (
                            <EmptyState
                                icon={Newspaper}
                                title="No articles found"
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

ArticlesIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Articles', href: articles.index() },
    ],
};
