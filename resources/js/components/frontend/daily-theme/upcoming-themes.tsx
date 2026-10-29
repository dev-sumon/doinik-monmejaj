import {
    BellPlusIcon,
    CalendarDaysIcon,
    PencilIcon,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { UpcomingTheme } from './types';

const ctaIcons: Record<string, LucideIcon> = {
    edit: PencilIcon,
    notify: BellPlusIcon,
};

const dayToneClass: Record<string, string> = {
    warm: 'bg-warm-container text-on-warm-container',
    muted: 'bg-surface-container text-on-surface-variant',
    brand: 'bg-brand-container text-on-brand',
    tertiary: 'bg-tertiary-container text-on-tertiary-container',
};

const badgeToneClass: Record<string, string> = {
    warm: 'bg-tertiary/10 text-tertiary',
    muted: 'bg-surface-container-high text-on-surface-variant',
    brand: 'bg-brand/10 text-brand',
    tertiary: 'bg-tertiary/10 text-tertiary',
};

export default function UpcomingThemes({
    upcoming,
}: {
    upcoming: UpcomingTheme[];
}) {
    return (
        <section className="bg-surface-container-low p-space-md md:p-space-lg mb-space-lg rounded-lg">
            <div className="pb-space-sm mb-space-md border-outline-variant gap-space-xs flex flex-col justify-between border-b sm:flex-row sm:items-center">
                <div className="gap-space-xs flex items-center">
                    <CalendarDaysIcon className="text-warm h-5 w-5" />
                    <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        আসন্ন বিষয়সূচি ও সম্পাদকীয় অগ্রিম প্রস্তুতি
                    </h2>
                </div>
                <span className="font-caption text-caption text-warm">
                    প্রতিদিন রাত ১২:০১ মিনিটে নতুন বিষয় উন্মোচিত হয়
                </span>
            </div>
            <div className="gap-space-md grid grid-cols-1 md:grid-cols-2">
                {upcoming.map((theme) => {
                    const CtaIcon = ctaIcons[theme.ctaIcon] ?? PencilIcon;

                    return (
                        <div
                            className="bg-surface-container-lowest p-space-md gap-space-md flex flex-col items-start rounded-lg shadow-sm sm:flex-row"
                            key={theme.dayNumber}
                        >
                            <div
                                className={`flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded font-bold ${dayToneClass[theme.tone]}`}
                            >
                                <span className="font-caption text-caption tracking-wider">
                                    {theme.dayLabel}
                                </span>
                                <span className="font-headline-sm text-headline-sm leading-none">
                                    {theme.dayNumber}
                                </span>
                                <span className="font-caption text-caption">
                                    {theme.month}
                                </span>
                            </div>
                            <div className="space-y-space-xs min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span
                                        className={`font-label-editorial text-label-editorial rounded px-2 py-0.5 ${badgeToneClass[theme.tone]}`}
                                    >
                                        {theme.badge}
                                    </span>
                                    <span className="font-caption text-caption text-on-surface-variant">
                                        {theme.timing}
                                    </span>
                                </div>
                                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                                    {theme.title}
                                </h3>
                                <p className="font-body-sm text-body-sm text-on-surface-variant">
                                    {theme.body}
                                </p>
                                <div className="gap-space-xs flex flex-col items-start justify-between pt-1 sm:flex-row sm:items-center">
                                    <span className="font-caption text-caption text-warm">
                                        {theme.meta}
                                    </span>
                                    <button
                                        className="text-brand hover:underline font-label-editorial text-label-editorial inline-flex items-center gap-1"
                                        type="button"
                                    >
                                        <span>{theme.ctaLabel}</span>
                                        <CtaIcon className="h-3.5 w-3.5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
