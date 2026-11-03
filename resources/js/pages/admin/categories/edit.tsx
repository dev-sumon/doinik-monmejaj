import { Head, Link, router } from '@inertiajs/react';
import { ArrowLeft, Tags } from 'lucide-react';
import { AdminPageHeader } from '@/components/admin/admin-page-header';
import { CategoryForm } from '@/components/admin/category-form';
import { Button } from '@/components/ui/button';
import { dashboard } from '@/routes';
import categories from '@/routes/admin/categories';
import type { AdminCategory } from '@/types/admin';

interface EditCategoryProps {
    category: AdminCategory;
    tones: string[];
}

export default function EditCategory({ category, tones }: EditCategoryProps) {
    return (
        <>
            <Head title={`Edit ${category.name}`} />

            <div className="w-full space-y-6 px-4 py-6 sm:px-6 lg:px-8">
                <AdminPageHeader
                    title="Edit category"
                    description={`Update ${category.name}.`}
                    icon={Tags}
                >
                    <Button variant="outline" asChild>
                        <Link href={categories.index().url}>
                            <ArrowLeft className="h-4 w-4" /> Back to categories
                        </Link>
                    </Button>
                </AdminPageHeader>

                <div className="max-w-3xl rounded-xl border bg-card p-6 shadow-sm">
                    <CategoryForm
                        action={categories.update(category.id)}
                        tones={tones}
                        category={category}
                        isEdit
                        onCancel={() => router.visit(categories.index().url)}
                    />
                </div>
            </div>
        </>
    );
}

EditCategory.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Categories', href: categories.index() },
        { title: 'Edit', href: categories.index() },
    ],
};
