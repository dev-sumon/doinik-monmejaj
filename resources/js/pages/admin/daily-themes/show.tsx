import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Pencil, Sparkles } from 'lucide-react';
import { AdminPageHeader } from '@/components/admin/admin-page-header';
import { StatusBadge, formatDate } from '@/components/admin/crud';
import { Button } from '@/components/ui/button';
import { usePermission } from '@/hooks/use-permissions';
import { dashboard } from '@/routes';
import articles from '@/routes/admin/articles';
import dailyThemes from '@/routes/admin/daily-themes';
import type { AdminDailyTheme } from '@/types/admin';
import { PERMISSIONS } from '@/types/permissions';

interface Submission {
    id: number;
    title: string;
    status: string;
    published_at: string | null;
    author?: { id: number; name: string };
}

interface ShowDailyThemeProps {
    theme: AdminDailyTheme;
    submissions: Submission[];
    submissionsCount: number;
}

export default function ShowDailyTheme({
    theme,
    submissions,
    submissionsCount,
}: ShowDailyThemeProps) {
    const { can } = usePermission();

    const rows: [string, React.ReactNode][] = [
        ['Date', formatDate(theme.theme_date)],
        ['Status', <StatusBadge key="s" value={theme.status} />],
        ['Highlighted word', theme.highlight ?? '—'],
        ['Starts at', formatDate(theme.starts_at)],
        ['Ends at', formatDate(theme.ends_at)],
        ['Featured paper', theme.featured_article?.title ?? '—'],
        ['Submissions', submissionsCount],
    ];

    return (
        <>
            <Head title={theme.title} />

            <div className="w-full space-y-6 px-4 py-6 sm:px-6 lg:px-8">
                <AdminPageHeader
                    title={theme.title}
                    description="Daily theme details"
                    icon={Sparkles}
                >
                    <Button variant="outline" asChild>
                        <Link href={dailyThemes.index().url}>
                            <ArrowLeft className="h-4 w-4" /> Back
                        </Link>
                    </Button>
                    {can(PERMISSIONS.DAILY_THEMES.EDIT) && (
                        <Button asChild>
                            <Link href={dailyThemes.edit(theme.id).url}>
                                <Pencil className="h-4 w-4" /> Edit
                            </Link>
                        </Button>
                    )}
                </AdminPageHeader>

                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="space-y-4">
                        <dl className="divide-y rounded-xl border bg-card shadow-sm">
                            {rows.map(([label, value]) => (
                                <div
                                    key={label}
                                    className="flex items-center justify-between gap-4 px-5 py-3 text-sm"
                                >
                                    <dt className="text-muted-foreground">
                                        {label}
                                    </dt>
                                    <dd className="font-medium">{value}</dd>
                                </div>
                            ))}
                        </dl>
                        {theme.lead && (
                            <p className="rounded-xl border bg-card p-5 text-sm leading-relaxed text-muted-foreground shadow-sm">
                                {theme.lead}
                            </p>
                        )}
                    </div>

                    <div className="rounded-xl border bg-card shadow-sm">
                        <h2 className="border-b px-5 py-3 text-sm font-semibold">
                            Latest submissions
                        </h2>
                        {submissions.length === 0 ? (
                            <p className="px-5 py-8 text-center text-sm text-muted-foreground">
                                No articles submitted for this theme yet.
                            </p>
                        ) : (
                            <ul className="divide-y">
                                {submissions.map((article) => (
                                    <li
                                        key={article.id}
                                        className="flex items-center justify-between gap-3 px-5 py-3 text-sm"
                                    >
                                        <div className="min-w-0">
                                            <Link
                                                href={
                                                    articles.show(article.id)
                                                        .url
                                                }
                                                className="block truncate font-medium hover:text-primary"
                                            >
                                                {article.title}
                                            </Link>
                                            <span className="text-xs text-muted-foreground">
                                                {article.author?.name}
                                            </span>
                                        </div>
                                        <StatusBadge value={article.status} />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

ShowDailyTheme.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Daily themes', href: dailyThemes.index() },
        { title: 'Details', href: dailyThemes.index() },
    ],
};
