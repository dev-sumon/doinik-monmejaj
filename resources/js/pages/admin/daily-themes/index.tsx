import { Head, Link, WhenVisible } from '@inertiajs/react';
import { CalendarClock, CalendarDays, Plus, Sparkles } from 'lucide-react';
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
import dailyThemes from '@/routes/admin/daily-themes';
import type { AdminDailyTheme, Paginated } from '@/types/admin';
import { PERMISSIONS } from '@/types/permissions';

interface DailyThemesIndexProps {
    themes: Paginated<AdminDailyTheme>;
    statuses: string[];
    filters: { search: string; status: string };
    stats?: { total: number; active: number; upcoming: number };
}

export default function DailyThemesIndex({
    themes: paginated,
    statuses,
    filters,
    stats,
}: DailyThemesIndexProps) {
    const { can } = usePermission();
    const list = useListFilters(dailyThemes.index().url, {
        search: filters.search,
        status: filters.status || ALL,
    });

    return (
        <>
            <Head title="Daily themes" />

            <div className="w-full space-y-6 px-4 py-6 sm:px-6 lg:px-8">
                <AdminPageHeader
                    title="Daily themes"
                    description="Schedule the writing theme for each day."
                    icon={Sparkles}
                >
                    {can(PERMISSIONS.DAILY_THEMES.CREATE) && (
                        <Button asChild>
                            <Link href={dailyThemes.create().url}>
                                <Plus className="h-4 w-4" /> Add theme
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
                                label="Total themes"
                                value={stats.total}
                                icon={CalendarDays}
                            />
                            <StatCard
                                label="Active today"
                                value={stats.active}
                                icon={Sparkles}
                            />
                            <StatCard
                                label="Upcoming"
                                value={stats.upcoming}
                                icon={CalendarClock}
                            />
                        </div>
                    )}
                </WhenVisible>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <SearchBox
                        value={list.values.search}
                        onChange={(value) => list.set('search', value)}
                        placeholder="Search themes…"
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
                </div>

                <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-muted/50 hover:bg-muted/50">
                                    <TableHead>Theme</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead className="hidden md:table-cell">
                                        Submissions
                                    </TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">
                                        Actions
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {paginated.data.map((theme) => (
                                    <TableRow
                                        key={theme.id}
                                        className="hover:bg-muted/30"
                                    >
                                        <TableCell>
                                            <div className="font-medium">
                                                {theme.title}
                                            </div>
                                            {theme.highlight && (
                                                <div className="text-xs text-muted-foreground">
                                                    {theme.highlight}
                                                </div>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            {formatDate(theme.theme_date)}
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            {theme.articles_count ?? 0}
                                        </TableCell>
                                        <TableCell>
                                            <StatusBadge value={theme.status} />
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <RowActions
                                                showHref={
                                                    can(
                                                        PERMISSIONS.DAILY_THEMES
                                                            .VIEW,
                                                    )
                                                        ? dailyThemes.show(
                                                              theme.id,
                                                          ).url
                                                        : undefined
                                                }
                                                editHref={
                                                    dailyThemes.edit(theme.id)
                                                        .url
                                                }
                                                canEdit={can(
                                                    PERMISSIONS.DAILY_THEMES
                                                        .EDIT,
                                                )}
                                                canDelete={can(
                                                    PERMISSIONS.DAILY_THEMES
                                                        .DELETE,
                                                )}
                                                deleteUrl={
                                                    dailyThemes.destroy(
                                                        theme.id,
                                                    ).url
                                                }
                                                deleteDescription={
                                                    <>
                                                        Delete the theme{' '}
                                                        <strong>
                                                            {theme.title}
                                                        </strong>
                                                        ? Submitted articles are
                                                        kept.
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
                                icon={Sparkles}
                                title="No daily themes found"
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

DailyThemesIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Daily themes', href: dailyThemes.index() },
    ],
};
