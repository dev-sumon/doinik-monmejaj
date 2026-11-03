import { Deferred, Head, Link } from '@inertiajs/react';
import {
    CalendarDays,
    FileText,
    Plus,
    Sparkles,
    Users as UsersIcon,
    Vote,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { StatCard, StatusBadge, formatDate } from '@/components/admin/crud';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { usePermission } from '@/hooks/use-permissions';
import { dashboard } from '@/routes';
import adminArticles from '@/routes/admin/articles';
import adminDailyThemes from '@/routes/admin/daily-themes';
import adminPolls from '@/routes/admin/polls';
import adminUsers from '@/routes/admin/users';
import { PERMISSIONS } from '@/types/permissions';

interface Overview {
    users: {
        total: number;
        newThisWeek: number;
        recent: {
            id: number;
            name: string;
            email: string;
            created_at: string;
        }[];
    } | null;
    articles: {
        total: number;
        featured: number;
        byStatus: { status: string; count: number }[];
        recent: {
            id: number;
            title: string;
            status: string;
            created_at: string;
            author?: { name: string };
        }[];
    } | null;
    polls: {
        total: number;
        active: number;
        votes: number;
        top: {
            id: number;
            question: string;
            status: string;
            votes_count: number;
        }[];
    } | null;
    activeTheme: {
        id: number;
        title: string;
        highlight: string | null;
        theme_date: string;
    } | null;
}

const STATUS_BARS: Record<string, string> = {
    published: 'bg-tertiary',
    draft: 'bg-warm',
    archived: 'bg-outline-variant',
};

function Panel({
    title,
    action,
    children,
}: {
    title: string;
    action?: ReactNode;
    children: ReactNode;
}) {
    return (
        <section className="rounded-xl border bg-card shadow-sm">
            <header className="flex items-center justify-between border-b px-5 py-3">
                <h2 className="text-sm font-semibold">{title}</h2>
                {action}
            </header>
            {children}
        </section>
    );
}

function DashboardSkeleton() {
    return (
        <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {[0, 1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-24 rounded-xl" />
                ))}
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
                <Skeleton className="h-72 rounded-xl" />
                <Skeleton className="h-72 rounded-xl" />
            </div>
        </div>
    );
}

function EmptyRow({ children }: { children: ReactNode }) {
    return (
        <p className="px-5 py-8 text-center text-sm text-muted-foreground">
            {children}
        </p>
    );
}

function OverviewContent({ overview }: { overview: Overview }) {
    const { users, articles, polls, activeTheme } = overview;
    const statusTotal = Math.max(articles?.total ?? 0, 1);
    const topVotes = Math.max(polls?.top[0]?.votes_count ?? 0, 1);

    return (
        <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {users && (
                    <StatCard
                        label={`Total users · ${users.newThisWeek} new this week`}
                        value={users.total}
                        icon={UsersIcon}
                    />
                )}
                {articles && (
                    <StatCard
                        label={`Articles · ${articles.featured} featured`}
                        value={articles.total}
                        icon={FileText}
                    />
                )}
                {polls && (
                    <StatCard
                        label={`Polls · ${polls.active} active`}
                        value={polls.total}
                        icon={Vote}
                    />
                )}
                {polls && (
                    <StatCard
                        label="Total votes"
                        value={polls.votes}
                        icon={Vote}
                    />
                )}
            </div>

            {activeTheme && (
                <div className="flex items-center gap-4 rounded-xl border border-primary/20 bg-accent/50 p-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Sparkles className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">
                            Today&apos;s theme ·{' '}
                            {formatDate(activeTheme.theme_date)}
                        </p>
                        <Link
                            href={adminDailyThemes.show(activeTheme.id).url}
                            className="block truncate font-semibold hover:text-primary"
                        >
                            {activeTheme.title}
                        </Link>
                    </div>
                </div>
            )}

            <div className="grid gap-6 lg:grid-cols-2">
                {articles && (
                    <Panel
                        title="Articles by status"
                        action={
                            <Link
                                href={adminArticles.index().url}
                                className="text-xs font-medium text-primary hover:underline"
                            >
                                View all
                            </Link>
                        }
                    >
                        <div className="space-y-4 p-5">
                            {articles.byStatus.map((item) => (
                                <div key={item.status} className="space-y-1.5">
                                    <div className="flex justify-between text-sm">
                                        <span className="capitalize">
                                            {item.status}
                                        </span>
                                        <span className="text-muted-foreground">
                                            {item.count}
                                        </span>
                                    </div>
                                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                                        <div
                                            className={`h-full rounded-full ${STATUS_BARS[item.status] ?? 'bg-primary'}`}
                                            style={{
                                                width: `${(item.count / statusTotal) * 100}%`,
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Panel>
                )}

                {polls && (
                    <Panel
                        title="Top polls by votes"
                        action={
                            <Link
                                href={adminPolls.index().url}
                                className="text-xs font-medium text-primary hover:underline"
                            >
                                View all
                            </Link>
                        }
                    >
                        {polls.top.length === 0 ? (
                            <EmptyRow>No polls yet.</EmptyRow>
                        ) : (
                            <ul className="space-y-4 p-5">
                                {polls.top.map((poll) => (
                                    <li key={poll.id} className="space-y-1.5">
                                        <div className="flex items-center justify-between gap-3 text-sm">
                                            <Link
                                                href={
                                                    adminPolls.show(poll.id).url
                                                }
                                                className="truncate font-medium hover:text-primary"
                                            >
                                                {poll.question}
                                            </Link>
                                            <span className="shrink-0 text-muted-foreground">
                                                {poll.votes_count}
                                            </span>
                                        </div>
                                        <div className="h-2 overflow-hidden rounded-full bg-muted">
                                            <div
                                                className="h-full rounded-full bg-brand"
                                                style={{
                                                    width: `${(poll.votes_count / topVotes) * 100}%`,
                                                }}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </Panel>
                )}

                {articles && (
                    <Panel title="Recent articles">
                        {articles.recent.length === 0 ? (
                            <EmptyRow>No articles yet.</EmptyRow>
                        ) : (
                            <ul className="divide-y">
                                {articles.recent.map((article) => (
                                    <li
                                        key={article.id}
                                        className="flex items-center justify-between gap-3 px-5 py-3 text-sm"
                                    >
                                        <div className="min-w-0">
                                            <Link
                                                href={
                                                    adminArticles.show(
                                                        article.id,
                                                    ).url
                                                }
                                                className="block truncate font-medium hover:text-primary"
                                            >
                                                {article.title}
                                            </Link>
                                            <span className="text-xs text-muted-foreground">
                                                {article.author?.name} ·{' '}
                                                {formatDate(article.created_at)}
                                            </span>
                                        </div>
                                        <StatusBadge value={article.status} />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </Panel>
                )}

                {users && (
                    <Panel
                        title="Newest users"
                        action={
                            <Link
                                href={adminUsers.index().url}
                                className="text-xs font-medium text-primary hover:underline"
                            >
                                View all
                            </Link>
                        }
                    >
                        <ul className="divide-y">
                            {users.recent.map((user) => (
                                <li
                                    key={user.id}
                                    className="flex items-center justify-between gap-3 px-5 py-3 text-sm"
                                >
                                    <div className="min-w-0">
                                        <span className="block truncate font-medium">
                                            {user.name}
                                        </span>
                                        <span className="block truncate text-xs text-muted-foreground">
                                            {user.email}
                                        </span>
                                    </div>
                                    <span className="shrink-0 text-xs text-muted-foreground">
                                        {formatDate(user.created_at)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </Panel>
                )}
            </div>
        </div>
    );
}

export default function Dashboard({ overview }: { overview?: Overview }) {
    const { can } = usePermission();

    return (
        <>
            <Head title="Dashboard" />

            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">
                            Dashboard
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            A quick look at what is happening on Ajker Kagoj.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {can(PERMISSIONS.ARTICLES.CREATE) && (
                            <Button asChild size="sm">
                                <Link href={adminArticles.create().url}>
                                    <Plus className="h-4 w-4" /> New article
                                </Link>
                            </Button>
                        )}
                        {can(PERMISSIONS.POLLS.CREATE) && (
                            <Button asChild size="sm" variant="outline">
                                <Link href={adminPolls.create().url}>
                                    <Vote className="h-4 w-4" /> New poll
                                </Link>
                            </Button>
                        )}
                        {can(PERMISSIONS.DAILY_THEMES.CREATE) && (
                            <Button asChild size="sm" variant="outline">
                                <Link href={adminDailyThemes.create().url}>
                                    <CalendarDays className="h-4 w-4" /> New
                                    theme
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>

                <Deferred data="overview" fallback={<DashboardSkeleton />}>
                    {overview ? (
                        <OverviewContent overview={overview} />
                    ) : (
                        <DashboardSkeleton />
                    )}
                </Deferred>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
