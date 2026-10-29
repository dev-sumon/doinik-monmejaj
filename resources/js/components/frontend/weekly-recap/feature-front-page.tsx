import {
    ArrowRightIcon,
    AwardIcon,
    BookmarkIcon,
    BookOpenIcon,
    ChartPieIcon,
    MessageCircleIcon,
    MoonIcon,
    QuoteIcon,
    SunIcon,
} from 'lucide-react';
import {
    barToneClass,
    iconToneClass,
    type EngagementSidebar,
    type FeatureFrontPage,
} from './types';

export default function FeatureFrontPageSection({
    engagement,
    feature,
}: {
    engagement: EngagementSidebar;
    feature: FeatureFrontPage;
}) {
    return (
        <section className="gap-space-lg mb-space-xl grid grid-cols-1 lg:grid-cols-12">
            <div className="flex flex-col lg:col-span-8">
                <div className="mb-space-xs flex items-center justify-between">
                    <div className="gap-space-xs flex items-center">
                        <AwardIcon className="text-brand h-5 w-5 fill-current" />
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            {feature.sectionTitle}
                        </h2>
                    </div>
                    <span className="font-label-dateline text-label-dateline text-brand bg-brand-fixed px-space-xs rounded py-0.5 font-semibold">
                        {feature.sectionBadge}
                    </span>
                </div>
                <article className="bg-surface-container-lowest p-space-md md:p-space-lg relative flex flex-1 flex-col justify-between overflow-hidden rounded shadow-md">
                    <div>
                        <div className="gap-space-xs pb-space-xs mb-space-md bg-surface-container-low px-space-sm font-label-dateline text-label-dateline text-on-surface-variant flex flex-wrap items-center justify-between rounded py-1">
                            <span>{feature.printMeta}</span>
                            <span className="text-brand font-bold">
                                {feature.readersMeta}
                            </span>
                        </div>
                        <h3 className="font-headline-lg text-headline-lg text-on-surface hover:text-brand mb-space-sm cursor-pointer leading-tight font-bold transition-colors">
                            {feature.title}
                        </h3>
                        <p className="font-lead text-lead text-warm mb-space-md italic">
                            {feature.dek}
                        </p>
                        <div className="gap-space-md mb-space-md grid grid-cols-1 items-start md:grid-cols-12">
                            <div className="overflow-hidden rounded shadow-sm md:col-span-5">
                                <img
                                    alt={feature.title}
                                    className="h-56 w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                                    src={feature.image}
                                />
                                <div className="bg-surface-container-high p-space-xs font-caption text-caption text-on-surface-variant text-center italic">
                                    {feature.imageCaption}
                                </div>
                            </div>
                            <div className="flex flex-col justify-between md:col-span-7">
                                <div className="space-y-space-xs font-body-md text-body-md text-on-surface text-justify leading-relaxed">
                                    <p className="first-letter:float-left first-letter:font-headline-xl first-letter:text-headline-xl first-letter:text-brand first-letter:pr-2 first-letter:leading-none">
                                        {feature.body}
                                    </p>
                                    <p className="text-on-surface-variant">
                                        {feature.bodyNote}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-surface-container-low p-space-md gap-space-sm mb-space-xs flex items-start rounded">
                            <QuoteIcon className="text-brand h-7 w-7 shrink-0" />
                            <div>
                                <p className="font-body-md text-body-md text-on-surface italic">
                                    {feature.quote}
                                </p>
                                <span className="font-label-dateline text-label-dateline text-warm mt-1 block font-semibold">
                                    {feature.quoteAuthor}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="pt-space-md mt-space-md gap-space-sm bg-surface-container-lowest flex flex-wrap items-center justify-between">
                        <div className="gap-space-xs flex items-center">
                            <span className="font-label-dateline text-label-dateline text-on-surface bg-surface-container inline-flex items-center gap-1 rounded px-2 py-1">
                                <BookmarkIcon className="text-brand h-[15px] w-[15px]" />
                                <span>{feature.bookmarks}</span>
                            </span>
                            <span className="font-label-dateline text-label-dateline text-on-surface bg-surface-container inline-flex items-center gap-1 rounded px-2 py-1">
                                <MessageCircleIcon className="text-tertiary h-[15px] w-[15px]" />
                                <span>{feature.discussions}</span>
                            </span>
                        </div>
                        <button
                            className="font-label-editorial text-label-editorial text-brand hover:text-brand-container inline-flex items-center gap-1 font-bold transition-colors"
                            type="button"
                        >
                            <span>{feature.readCta}</span>
                            <ArrowRightIcon className="h-4 w-4" />
                        </button>
                    </div>
                </article>
            </div>

            <div className="flex flex-col justify-between lg:col-span-4">
                <div>
                    <div className="gap-space-xs mb-space-xs flex items-center">
                        <ChartPieIcon className="text-warm h-5 w-5" />
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            {engagement.sectionTitle}
                        </h2>
                    </div>
                    <div className="bg-surface-container-lowest p-space-md mb-space-md rounded shadow-sm">
                        <h3 className="font-label-editorial text-label-editorial text-brand mb-space-sm font-bold uppercase">
                            {engagement.topicsTitle}
                        </h3>
                        <div className="space-y-space-md">
                            {engagement.topics.map((topic) => (
                                <div key={topic.label}>
                                    <div className="font-label-dateline text-label-dateline mb-1 flex items-center justify-between">
                                        <span className="text-on-surface font-semibold">
                                            {topic.label}
                                        </span>
                                        <span
                                            className={`font-bold ${iconToneClass[topic.tone]}`}
                                        >
                                            {topic.value}
                                        </span>
                                    </div>
                                    <div className="bg-surface-container-high h-2 w-full overflow-hidden rounded-full">
                                        <div
                                            className={`h-full rounded-full ${barToneClass[topic.tone]}`}
                                            style={{
                                                width: `${topic.percent}%`,
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-surface-container-lowest p-space-md mb-space-md rounded shadow-sm">
                        <h3 className="font-label-editorial text-label-editorial text-warm mb-space-sm font-bold uppercase">
                            {engagement.peakTitle}
                        </h3>
                        <div className="gap-space-sm grid grid-cols-2">
                            {engagement.peakHours.map((peak) => {
                                const PeakIcon =
                                    peak.icon === 'moon' ? MoonIcon : SunIcon;

                                return (
                                    <div
                                        className={`p-space-sm rounded text-center ${
                                            peak.highlight
                                                ? 'bg-surface-container'
                                                : 'bg-surface-container-low'
                                        }`}
                                        key={peak.time}
                                    >
                                        <PeakIcon
                                            className={`mx-auto h-6 w-6 ${
                                                peak.highlight
                                                    ? 'text-brand'
                                                    : 'text-warm'
                                            }`}
                                        />
                                        <div className="font-label-dateline text-label-dateline text-on-surface-variant mt-1">
                                            {peak.time}
                                        </div>
                                        <div
                                            className={`font-headline-sm text-headline-sm font-bold ${
                                                peak.highlight
                                                    ? 'text-brand'
                                                    : 'text-on-surface'
                                            }`}
                                        >
                                            {peak.percent}
                                        </div>
                                        <span
                                            className={`font-caption text-caption ${
                                                peak.highlight
                                                    ? 'text-brand'
                                                    : 'text-warm'
                                            }`}
                                        >
                                            {peak.hint}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="bg-surface-container-high p-space-md rounded">
                    <div className="text-warm mb-1 flex items-center gap-1">
                        <BookOpenIcon className="h-4 w-4" />
                        <span className="font-label-dateline text-label-dateline font-semibold">
                            {engagement.archivalLabel}
                        </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                        {engagement.archivalNote}
                    </p>
                </div>
            </div>
        </section>
    );
}
