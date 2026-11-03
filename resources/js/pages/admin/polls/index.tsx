import { Head, Link, WhenVisible, router } from '@inertiajs/react';
import { BarChart3, Lock, Plus, Vote, Zap } from 'lucide-react';
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
import polls from '@/routes/admin/polls';
import type { AdminPoll, Paginated } from '@/types/admin';
import { PERMISSIONS } from '@/types/permissions';

interface PollsIndexProps {
    polls: Paginated<AdminPoll>;
    statuses: string[];
    filters: { search: string; status: string };
    stats?: { total: number; active: number; votes: number };
}

export default function PollsIndex({
    polls: paginated,
    statuses,
    filters,
    stats,
}: PollsIndexProps) {
    const { can } = usePermission();
    const list = useListFilters(polls.index().url, {
        search: filters.search,
        status: filters.status || ALL,
    });

    return (
        <>
            <Head title="Polls" />

            <div className="w-full space-y-6 px-4 py-6 sm:px-6 lg:px-8">
                <AdminPageHeader
                    title="Polls"
                    description="Public opinion polls and their results."
                    icon={Vote}
                >
                    {can(PERMISSIONS.POLLS.CREATE) && (
                        <Button asChild>
                            <Link href={polls.create().url}>
                                <Plus className="h-4 w-4" /> Add poll
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
                                label="Total polls"
                                value={stats.total}
                                icon={BarChart3}
                            />
                            <StatCard
                                label="Active"
                                value={stats.active}
                                icon={Zap}
                            />
                            <StatCard
                                label="Total votes"
                                value={stats.votes}
                                icon={Vote}
                            />
                        </div>
                    )}
                </WhenVisible>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <SearchBox
                        value={list.values.search}
                        onChange={(value) => list.set('search', value)}
                        placeholder="Search polls…"
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
                                    <TableHead>Poll</TableHead>
                                    <TableHead className="hidden lg:table-cell">
                                        Category
                                    </TableHead>
                                    <TableHead className="hidden sm:table-cell">
                                        Options
                                    </TableHead>
                                    <TableHead>Votes</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="hidden md:table-cell">
                                        Ends
                                    </TableHead>
                                    <TableHead className="text-right">
                                        Actions
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {paginated.data.map((poll) => (
                                    <TableRow
                                        key={poll.id}
                                        className="hover:bg-muted/30"
                                    >
                                        <TableCell className="max-w-xs">
                                            <div className="truncate font-medium">
                                                {poll.question}
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden lg:table-cell">
                                            {poll.category?.name ?? '—'}
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">
                                            {poll.options_count ?? 0}
                                        </TableCell>
                                        <TableCell>
                                            {poll.votes_count ?? 0}
                                        </TableCell>
                                        <TableCell>
                                            <StatusBadge value={poll.status} />
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            {formatDate(poll.ends_at)}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <RowActions
                                                showHref={
                                                    can(PERMISSIONS.POLLS.VIEW)
                                                        ? polls.show(poll.id)
                                                              .url
                                                        : undefined
                                                }
                                                editHref={
                                                    polls.edit(poll.id).url
                                                }
                                                canEdit={can(
                                                    PERMISSIONS.POLLS.EDIT,
                                                )}
                                                canDelete={can(
                                                    PERMISSIONS.POLLS.DELETE,
                                                )}
                                                deleteUrl={
                                                    polls.destroy(poll.id).url
                                                }
                                                deleteDescription={
                                                    <>
                                                        Delete{' '}
                                                        <strong>
                                                            {poll.question}
                                                        </strong>
                                                        ? All of its votes will
                                                        be removed.
                                                    </>
                                                }
                                                extra={
                                                    can(
                                                        PERMISSIONS.POLLS
                                                            .PUBLISH,
                                                    ) &&
                                                    poll.status ===
                                                        'active' && (
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            title="Close poll"
                                                            onClick={() =>
                                                                router.patch(
                                                                    polls.close(
                                                                        poll.id,
                                                                    ).url,
                                                                    {},
                                                                    {
                                                                        preserveScroll: true,
                                                                    },
                                                                )
                                                            }
                                                        >
                                                            <Lock className="h-4 w-4" />
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
                                icon={Vote}
                                title="No polls found"
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

PollsIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Polls', href: polls.index() },
    ],
};
