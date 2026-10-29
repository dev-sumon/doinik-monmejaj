import { Link } from '@inertiajs/react';
import { EyeIcon } from 'lucide-react';
import { profile } from '@/routes';
import type { SettingsHeader as HeaderType } from './types';

export default function SettingsHeader({ header }: { header: HeaderType }) {
    return (
        <section className="mb-space-lg">
            <div className="gap-space-xs font-label-dateline text-label-dateline text-warm mb-space-xs flex flex-wrap items-center">
                <span className="hover:text-brand transition-colors">
                    {header.breadcrumbParent}
                </span>
                <span className="text-outline">/</span>
                <span className="text-on-surface font-semibold">
                    {header.breadcrumbCurrent}
                </span>
                <span className="text-outline">|</span>
                <span className="text-brand italic">{header.eyebrowItalic}</span>
            </div>
            <div className="gap-space-md pb-space-sm bg-surface-container-low p-space-md flex flex-col justify-between rounded-lg shadow-sm md:flex-row md:items-end">
                <div>
                    <span className="bg-brand/10 text-brand font-label-editorial text-label-editorial mb-space-xs inline-block px-space-xs py-0.5 font-bold tracking-wider">
                        {header.badge}
                    </span>
                    <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                        {header.title}
                    </h1>
                    <p className="font-lead text-lead text-on-surface-variant mt-1">
                        {header.lead}
                    </p>
                </div>
                <div className="gap-space-sm flex items-center">
                    <span className="font-label-dateline text-label-dateline text-warm hidden sm:inline">
                        {header.savedMeta}
                    </span>
                    <Link
                        className="gap-space-xs px-space-md py-space-xs bg-brand text-on-brand hover:bg-brand-container font-label-editorial text-label-editorial inline-flex items-center shadow-sm transition-colors"
                        href={profile.url()}
                    >
                        <EyeIcon className="h-4 w-4" />
                        <span>{header.viewProfileLabel}</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
