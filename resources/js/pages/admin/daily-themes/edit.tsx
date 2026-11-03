import { Head, Link, router } from '@inertiajs/react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { AdminPageHeader } from '@/components/admin/admin-page-header';
import { DailyThemeForm } from '@/components/admin/daily-theme-form';
import { Button } from '@/components/ui/button';
import { dashboard } from '@/routes';
import dailyThemes from '@/routes/admin/daily-themes';
import type { AdminDailyTheme } from '@/types/admin';

interface EditDailyThemeProps {
    theme: AdminDailyTheme;
    statuses: string[];
    articles: { id: number; title: string }[];
}

export default function EditDailyTheme({
    theme,
    statuses,
    articles,
}: EditDailyThemeProps) {
    return (
        <>
            <Head title={`Edit ${theme.title}`} />

            <div className="w-full space-y-6 px-4 py-6 sm:px-6 lg:px-8">
                <AdminPageHeader
                    title="Edit daily theme"
                    description={`Update “${theme.title}”.`}
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
                        action={dailyThemes.update(theme.id)}
                        statuses={statuses}
                        articles={articles}
                        theme={theme}
                        isEdit
                        onCancel={() => router.visit(dailyThemes.index().url)}
                    />
                </div>
            </div>
        </>
    );
}

EditDailyTheme.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Daily themes', href: dailyThemes.index() },
        { title: 'Edit', href: dailyThemes.index() },
    ],
};
