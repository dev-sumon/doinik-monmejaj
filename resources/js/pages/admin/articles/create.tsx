import { Head, Link, router } from '@inertiajs/react';
import { ArrowLeft, Newspaper } from 'lucide-react';
import { AdminPageHeader } from '@/components/admin/admin-page-header';
import { ArticleForm } from '@/components/admin/article-form';
import { Button } from '@/components/ui/button';
import { dashboard } from '@/routes';
import articles from '@/routes/admin/articles';
import type { SelectOption } from '@/types/admin';

interface CreateArticleProps {
    categories: SelectOption[];
    themes: { id: number; title: string }[];
    styles: string[];
    visibilities: string[];
    statuses: string[];
}

export default function CreateArticle(props: CreateArticleProps) {
    return (
        <>
            <Head title="Create article" />

            <div className="w-full space-y-6 px-4 py-6 sm:px-6 lg:px-8">
                <AdminPageHeader
                    title="Create article"
                    description="Write a new newspaper edition."
                    icon={Newspaper}
                >
                    <Button variant="outline" asChild>
                        <Link href={articles.index().url}>
                            <ArrowLeft className="h-4 w-4" /> Back to articles
                        </Link>
                    </Button>
                </AdminPageHeader>

                <div className="max-w-4xl rounded-xl border bg-card p-6 shadow-sm">
                    <ArticleForm
                        action={articles.store()}
                        {...props}
                        onCancel={() => router.visit(articles.index().url)}
                    />
                </div>
            </div>
        </>
    );
}

CreateArticle.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Articles', href: articles.index() },
        { title: 'Create', href: articles.create() },
    ],
};
