import {
    BadgeCheckIcon,
    BookmarkIcon,
    CoffeeIcon,
    MoonIcon,
    ThermometerIcon,
} from 'lucide-react';
import type { BroadsheetContent } from './types';

export default function BroadsheetShowcase({
    broadsheet,
}: {
    broadsheet: BroadsheetContent;
}) {
    const { lead, sideArticle, moodForecast, notice } = broadsheet;

    return (
        <div className="bg-surface-container-lowest p-space-md sm:p-space-lg md:p-space-xl relative mx-auto max-w-5xl shadow-xl">
            <div className="bg-surface-container-low mb-space-sm flex flex-col gap-1 px-space-md py-space-xs sm:flex-row sm:items-center sm:justify-between">
                <div className="gap-space-xs text-warm font-label-dateline text-label-dateline flex min-w-0 items-center">
                    <BadgeCheckIcon className="h-4 w-4 shrink-0" />
                    <span className="min-w-0">{broadsheet.sampleLabel}</span>
                </div>
                <div className="font-label-dateline text-label-dateline text-on-surface-variant shrink-0">
                    {broadsheet.priceLabel}
                </div>
            </div>
            <div className="bg-surface-container-low/60 mb-space-md px-space-xs py-space-sm text-center sm:px-0">
                <div className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-brand font-bold tracking-tight">
                    {broadsheet.masthead}
                </div>
                <div className="font-caption text-caption text-warm mt-1 tracking-wider uppercase">
                    {broadsheet.subhead}
                </div>
            </div>
            <div className="gap-space-lg grid grid-cols-1 items-start lg:grid-cols-12">
                <div className="space-y-space-md flex min-w-0 flex-col lg:col-span-8">
                    <div className="space-y-space-xs">
                        <span className="bg-brand/10 text-brand font-label-editorial text-label-editorial inline-block px-space-xs py-0.5 font-semibold tracking-wider uppercase">
                            {lead.badge}
                        </span>
                        <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface hover:text-brand cursor-pointer leading-tight font-bold transition-colors">
                            {lead.title}
                        </h2>
                        <div className="gap-x-space-sm gap-y-1 font-label-dateline text-label-dateline text-warm flex flex-wrap items-center pt-1">
                            {lead.byline.map((item, index) => (
                                <span className="contents" key={item}>
                                    {index > 0 && (
                                        <span className="hidden sm:inline">
                                            •
                                        </span>
                                    )}
                                    <span>{item}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-space-xs">
                        <div className="bg-surface-container h-48 w-full overflow-hidden sm:h-64 md:h-72">
                            <img
                                alt={lead.imageAlt}
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                src={lead.imageSrc}
                            />
                        </div>
                        <p className="font-caption text-caption text-on-surface-variant px-space-xs italic">
                            {lead.imageCaption}
                        </p>
                    </div>
                    <div className="gap-space-md font-body-md text-body-md text-on-surface grid grid-cols-1 text-justify leading-relaxed md:grid-cols-2">
                        {lead.body.map((paragraph, index) => (
                            <p key={paragraph.slice(0, 24)}>
                                {index === 0 && (
                                    <span className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-brand float-left mr-2 leading-none font-bold">
                                        {lead.dropCap}
                                    </span>
                                )}
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    <div className="bg-surface-container-low p-space-md my-space-xs text-center">
                        <p className="font-headline-sm text-headline-sm text-brand font-serif italic">
                            {lead.pullQuote}
                        </p>
                    </div>
                </div>
                <div className="space-y-space-lg bg-surface-container-low p-space-md flex min-w-0 flex-col lg:col-span-4">
                    <div className="space-y-space-xs">
                        <span className="bg-warm/15 text-warm font-label-editorial text-label-editorial inline-block px-space-xs py-0.5 font-semibold">
                            {sideArticle.badge}
                        </span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface leading-snug font-bold">
                            {sideArticle.title}
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                            {sideArticle.excerpt}
                        </p>
                        <div className="pt-space-xs text-warm font-label-dateline text-label-dateline flex items-center justify-between gap-2">
                            <span className="min-w-0">{sideArticle.author}</span>
                            <BookmarkIcon className="h-4 w-4 shrink-0" />
                        </div>
                    </div>
                    <div className="bg-surface-container-lowest p-space-md space-y-space-xs shadow-sm">
                        <div className="gap-space-xs text-brand font-headline-sm text-headline-sm flex items-center font-bold">
                            <MoonIcon className="h-4 w-4 shrink-0" />
                            <span>{moodForecast.title}</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                            {moodForecast.body}
                        </p>
                        <div className="pt-space-xs gap-space-sm text-warm font-caption text-caption flex flex-wrap items-center">
                            {moodForecast.metrics.map((metric, index) => (
                                <span
                                    className="flex items-center gap-1"
                                    key={metric}
                                >
                                    {index === 0 ? (
                                        <ThermometerIcon className="h-4 w-4" />
                                    ) : (
                                        <CoffeeIcon className="h-4 w-4" />
                                    )}
                                    {metric}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-brand/5 p-space-md space-y-space-xs text-center">
                        <span className="font-label-dateline text-label-dateline text-brand font-bold uppercase">
                            {notice.eyebrow}
                        </span>
                        <h4 className="font-headline-sm text-headline-sm text-brand font-bold">
                            {notice.title}
                        </h4>
                        <p className="font-caption text-caption text-on-surface-variant">
                            {notice.body}
                        </p>
                        <button
                            className="mt-space-xs bg-brand text-on-brand px-space-md font-label-editorial text-label-editorial w-full py-1 uppercase sm:w-auto"
                            type="button"
                        >
                            {notice.ctaLabel}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
