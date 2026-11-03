import { Head, Link, router } from '@inertiajs/react';
import { ArrowLeft, Vote } from 'lucide-react';
import { AdminPageHeader } from '@/components/admin/admin-page-header';
import { PollForm } from '@/components/admin/poll-form';
import { Button } from '@/components/ui/button';
import { dashboard } from '@/routes';
import polls from '@/routes/admin/polls';
import type { SelectOption } from '@/types/admin';

interface CreatePollProps {
    categories: SelectOption[];
    statuses: string[];
    tones: string[];
}

export default function CreatePoll(props: CreatePollProps) {
    return (
        <>
            <Head title="Create poll" />

            <div className="w-full space-y-6 px-4 py-6 sm:px-6 lg:px-8">
                <AdminPageHeader
                    title="Create poll"
                    description="Ask the community a question."
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
                        action={polls.store()}
                        {...props}
                        onCancel={() => router.visit(polls.index().url)}
                    />
                </div>
            </div>
        </>
    );
}

CreatePoll.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Polls', href: polls.index() },
        { title: 'Create', href: polls.create() },
    ],
};
