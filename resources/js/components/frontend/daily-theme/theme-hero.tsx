import {
    BookOpenIcon,
    EyeIcon,
    InfoIcon,
    NewspaperIcon,
    NotebookPenIcon,
    PenLineIcon,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { toneIconClass, type ThemeHero } from './types';

const metricIcons: Record<string, LucideIcon> = {
    book: BookOpenIcon,
    eye: EyeIcon,
    pen: PenLineIcon,
};

export default function ThemeHero({ hero }: { hero: ThemeHero }) {
    return (
        <section className="bg-surface-container-low p-space-md md:p-space-xl mb-space-xl relative overflow-hidden rounded-lg shadow-sm">
            <div className="bg-brand/5 pointer-events-none absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full blur-3xl" />
            <div className="gap-space-lg relative z-10 flex flex-col justify-between lg:flex-row lg:items-center">
                <div className="space-y-space-sm max-w-3xl">
                    <div className="gap-space-xs bg-surface-container-high text-brand font-label-editorial text-label-editorial inline-flex items-center rounded px-space-sm py-1 tracking-wider uppercase">
                        <NewspaperIcon className="h-4 w-4" />
                        <span>{hero.badge}</span>
                    </div>
                    <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface font-bold tracking-tight">
                        {hero.titlePrefix}{' '}
                        <span className="text-brand italic">
                            {hero.highlight}
                        </span>
                    </h1>
                    <p className="font-body-md text-body-md md:font-lead md:text-lead text-on-surface-variant max-w-2xl leading-relaxed">
                        {hero.lead}
                    </p>
                    <div className="pt-space-xs gap-space-md text-on-surface-variant font-label-dateline text-label-dateline flex flex-wrap items-center">
                        {hero.metrics.map((metric) => {
                            const Icon = metricIcons[metric.icon] ?? BookOpenIcon;

                            return (
                                <div
                                    className="bg-surface gap-1.5 flex items-center rounded px-space-sm py-1"
                                    key={metric.parts.join('')}
                                >
                                    <Icon
                                        className={`h-[17px] w-[17px] ${toneIconClass[metric.tone]}`}
                                    />
                                    <span>
                                        {metric.parts.map((part, index) =>
                                            metric.emphasisIndex === index ? (
                                                <strong
                                                    className="text-on-surface font-semibold"
                                                    key={`${part}-${index}`}
                                                >
                                                    {part}
                                                </strong>
                                            ) : (
                                                <span key={`${part}-${index}`}>
                                                    {part}
                                                </span>
                                            ),
                                        )}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="gap-space-sm flex shrink-0 flex-col items-start sm:flex-row lg:flex-col lg:items-end">
                    <button
                        className="group bg-brand hover:bg-brand-container text-on-brand gap-space-sm px-space-lg py-space-md font-label-editorial text-label-editorial relative inline-flex items-center rounded font-bold shadow-md transition-all active:scale-[0.98]"
                        type="button"
                    >
                        <NotebookPenIcon className="h-5 w-5 transition-transform group-hover:rotate-12" />
                        <span>{hero.ctaLabel}</span>
                    </button>
                    <div className="text-warm font-caption text-caption flex items-center gap-2">
                        <InfoIcon className="h-3.5 w-3.5" />
                        <span>{hero.ctaHint}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
