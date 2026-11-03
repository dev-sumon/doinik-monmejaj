import { Head, Link, router } from '@inertiajs/react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { AdminPageHeader } from '@/components/admin/admin-page-header';
import { DailyThemeForm } from '@/components/admin/daily-theme-form';
import { Button } from '@/components/ui/button';
import { dashboard } from '@/routes';
import dailyThemes from '@/routes/admin/daily-themes';

interface CreateDailyThemeProps {
    statuses: string[];
    articles: { id: number; title: string }[];
}

export default function CreateDailyTheme({
    statuses,
    articles,
}: CreateDailyThemeProps) {
    return (
        <>
            <Head title="Create daily theme" />

            <div className="w-full space-y-6 px-4 py-6 sm:px-6 lg:px-8">
                <AdminPageHeader
                    title="Create daily theme"
                    description="Schedule a theme for a specific day."
                    icon={Sparkles}
                >
                    <Button variant="outline" asChild>
                        <Link href={dailyThemes.index().url}>
                            <ArrowLeft className="h-4 w-4" /> Back to themes
                        </Link>
                    </Button>
                </AdminPageHeader>

                <div className="max-w-3xl rounded-xl border bg-card p-6 shadow-sm">
                    <DailyThemeForm
                        action={dailyThemes.store()}
                        statuses={statuses}
                        articles={articles}
                        onCancel={() => router.visit(dailyThemes.index().url)}
                    />
                </div>
            </div>
        </>
    );
}

CreateDailyTheme.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Daily themes', href: dailyThemes.index() },
        { title: 'Create', href: dailyThemes.create() },
    ],
};
