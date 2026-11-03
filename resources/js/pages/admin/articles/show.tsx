import { Head, Link, router } from '@inertiajs/react';
import { ArrowLeft, Newspaper, Pencil, Send, Star, Undo2 } from 'lucide-react';
import { AdminPageHeader } from '@/components/admin/admin-page-header';
import { StatusBadge, formatDate } from '@/components/admin/crud';
import { Button } from '@/components/ui/button';
import { usePermission } from '@/hooks/use-permissions';
import { dashboard } from '@/routes';
import articles from '@/routes/admin/articles';
import { imageUrl } from '@/types/admin';
import type { AdminArticle } from '@/types/admin';
import { PERMISSIONS } from '@/types/permissions';

export default function ShowArticle({ article }: { article: AdminArticle }) {
    const { can } = usePermission();
    const patch = (url: string) =>
        router.patch(url, {}, { preserveScroll: true });
    const cover = imageUrl(article.cover_image);

    const rows: [string, React.ReactNode][] = [
        ['Status', <StatusBadge key="s" value={article.status} />],
        ['Visibility', <StatusBadge key="v" value={article.visibility} />],
        ['Author', article.author?.name ?? '—'],
        ['Category', article.category?.name ?? '—'],
        ['Daily theme', article.daily_theme?.title ?? '—'],
        [
            'Style',
            <span key="st" className="capitalize">
                {article.style}
            </span>,
        ],
        ['Edition', article.edition_no ?? '—'],
        ['Read time', article.read_time ? `${article.read_time} min` : '—'],
        ['Published', formatDate(article.published_at)],
        ['Slug', `/${article.slug}`],
    ];

    return (
        <>
            <Head title={article.title} />

            <div className="w-full space-y-6 px-4 py-6 sm:px-6 lg:px-8">
                <AdminPageHeader
                    title={article.title}
                    description={article.masthead}
                    icon={Newspaper}
                >
                    <Button variant="outline" asChild>
                        <Link href={articles.index().url}>
                            <ArrowLeft className="h-4 w-4" /> Back
                        </Link>
                    </Button>
                    {can(PERMISSIONS.ARTICLES.PUBLISH) && (
                        <>
                            <Button
                                variant="outline"
                                onClick={() =>
                                    patch(articles.feature(article.id).url)
                                }
                            >
                                <Star className="h-4 w-4" />
                                {article.is_featured ? 'Unfeature' : 'Feature'}
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() =>
                                    patch(
                                        article.status === 'published'
                                            ? articles.unpublish(article.id).url
                                            : articles.publish(article.id).url,
                                    )
                                }
                            >
                                {article.status === 'published' ? (
                                    <Undo2 className="h-4 w-4" />
                                ) : (
                                    <Send className="h-4 w-4" />
                                )}
                                {article.status === 'published'
                                    ? 'Unpublish'
                                    : 'Publish'}
                            </Button>
                        </>
                    )}
                    {can(PERMISSIONS.ARTICLES.EDIT) && (
                        <Button asChild>
                            <Link href={articles.edit(article.id).url}>
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

                    <div className="space-y-4 lg:col-span-2">
                        {cover && (
                            <img
                                src={cover}
                                alt={article.title}
                                className="max-h-72 w-full rounded-xl border object-cover"
                            />
                        )}
                        {article.excerpt && (
                            <p className="rounded-xl border bg-card p-5 text-sm leading-relaxed shadow-sm">
                                {article.excerpt}
                            </p>
                        )}
                        {article.pull_quote && (
                            <blockquote className="rounded-xl border-l-4 border-primary bg-accent/40 p-5 text-sm italic">
                                {article.pull_quote}
                            </blockquote>
                        )}
                        {article.body && (
                            <div className="rounded-xl border bg-card p-5 text-sm leading-relaxed whitespace-pre-line shadow-sm">
                                {article.body}
                            </div>
                        )}
                        {article.events && article.events.length > 0 && (
                            <div className="rounded-xl border bg-card shadow-sm">
                                <h2 className="border-b px-5 py-3 text-sm font-semibold">
                                    Events of the day
                                </h2>
                                <ol className="list-decimal space-y-3 px-9 py-4 text-sm">
                                    {article.events.map((event, index) => (
                                        <li key={index}>{event}</li>
                                    ))}
                                </ol>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

ShowArticle.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Articles', href: articles.index() },
        { title: 'Details', href: articles.index() },
    ],
};
