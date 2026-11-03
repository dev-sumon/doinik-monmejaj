import { Head, Link, router } from '@inertiajs/react';
import { ArrowLeft, Vote } from 'lucide-react';
import { AdminPageHeader } from '@/components/admin/admin-page-header';
import { PollForm } from '@/components/admin/poll-form';
import { Button } from '@/components/ui/button';
import { dashboard } from '@/routes';
import polls from '@/routes/admin/polls';
import type { AdminPoll, SelectOption } from '@/types/admin';

interface EditPollProps {
    poll: AdminPoll;
    categories: SelectOption[];
    statuses: string[];
    tones: string[];
}

export default function EditPoll({ poll, ...options }: EditPollProps) {
    return (
        <>
            <Head title="Edit poll" />

            <div className="w-full space-y-6 px-4 py-6 sm:px-6 lg:px-8">
                <AdminPageHeader
                    title="Edit poll"
                    description={poll.question}
                    icon={Vote}
                >
                    <Button variant="outline" asChild>
                        <Link href={polls.index().url}>
                            <ArrowLeft className="h-4 w-4" /> Back to polls
                        </Link>
                    </Button>
                </AdminPageHeader>

                <div className="max-w-4xl rounded-xl border bg-card p-6 shadow-sm">
                    <PollForm
                        action={polls.update(poll.id)}
                        poll={poll}
                        isEdit
                        {...options}
                        onCancel={() => router.visit(polls.index().url)}
                    />
                </div>
            </div>
        </>
    );
}

EditPoll.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Polls', href: polls.index() },
        { title: 'Edit', href: polls.index() },
    ],
};
