import { Head, Link, router } from '@inertiajs/react';
import { ArrowLeft, Lock, Pencil, Vote } from 'lucide-react';
import { AdminPageHeader } from '@/components/admin/admin-page-header';
import { StatusBadge, formatDate } from '@/components/admin/crud';
import { Button } from '@/components/ui/button';
import { usePermission } from '@/hooks/use-permissions';
import { dashboard } from '@/routes';
import polls from '@/routes/admin/polls';
import type { AdminPoll, Tone } from '@/types/admin';
import { PERMISSIONS } from '@/types/permissions';

interface PollResult {
    id: number;
    label: string;
    tone: Tone;
    votes: number;
    percent: number;
}

interface ShowPollProps {
    poll: AdminPoll;
    results: PollResult[];
    totalVotes: number;
}

const BAR_TONES: Record<Tone, string> = {
    brand: 'bg-brand',
    warm: 'bg-warm',
    tertiary: 'bg-tertiary',
};

export default function ShowPoll({ poll, results, totalVotes }: ShowPollProps) {
    const { can } = usePermission();

    const rows: [string, React.ReactNode][] = [
        ['Status', <StatusBadge key="s" value={poll.status} />],
        ['Category', poll.category?.name ?? '—'],
        ['Featured', poll.is_featured ? 'Yes' : 'No'],
        ['Starts', formatDate(poll.starts_at)],
        ['Ends', formatDate(poll.ends_at)],
        ['Total votes', totalVotes],
    ];

    return (
        <>
            <Head title={poll.question} />

            <div className="w-full space-y-6 px-4 py-6 sm:px-6 lg:px-8">
                <AdminPageHeader
                    title={poll.question}
                    description="Poll results"
                    icon={Vote}
                >
                    <Button variant="outline" asChild>
                        <Link href={polls.index().url}>
                            <ArrowLeft className="h-4 w-4" /> Back
                        </Link>
                    </Button>
                    {can(PERMISSIONS.POLLS.PUBLISH) &&
                        poll.status === 'active' && (
                            <Button
                                variant="outline"
                                onClick={() =>
                                    router.patch(
                                        polls.close(poll.id).url,
                                        {},
                                        { preserveScroll: true },
                                    )
                                }
                            >
                                <Lock className="h-4 w-4" /> Close poll
                            </Button>
                        )}
                    {can(PERMISSIONS.POLLS.EDIT) && (
                        <Button asChild>
                            <Link href={polls.edit(poll.id).url}>
                                <Pencil className="h-4 w-4" /> Edit
                            </Link>
                        </Button>
                    )}
                </AdminPageHeader>

                <div className="grid gap-6 lg:grid-cols-3">
                    <dl className="divide-y self-start rounded-xl border bg-card shadow-sm">
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

                    <div className="space-y-5 rounded-xl border bg-card p-5 shadow-sm lg:col-span-2">
                        {poll.lead && (
                            <p className="text-sm text-muted-foreground">
                                {poll.lead}
                            </p>
                        )}
                        {results.map((result) => (
                            <div key={result.id} className="space-y-1.5">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="font-medium">
                                        {result.label}
                                    </span>
                                    <span className="text-muted-foreground">
                                        {result.votes} vote
                                        {result.votes === 1 ? '' : 's'} ·{' '}
                                        {result.percent}%
                                    </span>
                                </div>
                                <div className="h-2.5 overflow-hidden rounded-full bg-muted">
                                    <div
                                        className={`h-full rounded-full ${BAR_TONES[result.tone]}`}
                                        style={{ width: `${result.percent}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

ShowPoll.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Polls', href: polls.index() },
        { title: 'Results', href: polls.index() },
    ],
};
