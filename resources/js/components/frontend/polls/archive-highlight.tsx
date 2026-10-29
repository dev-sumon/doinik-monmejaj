import { BadgeCheckIcon, AwardIcon } from 'lucide-react';
import { valueToneClass, type ArchiveHighlight as ArchiveType } from './types';

export default function ArchiveHighlight({
    archive,
}: {
    archive: ArchiveType;
}) {
    const primary = archive.donut.primaryPercent;
    const secondary = 100 - primary;

    return (
        <section className="bg-surface-container p-space-lg md:p-space-xl rounded-xl">
            <div className="gap-space-sm mb-space-md flex items-center">
                <BadgeCheckIcon className="text-brand h-7 w-7 shrink-0" />
                <div>
                    <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                        {archive.title}
                    </h2>
                    <span className="font-label-dateline text-label-dateline text-warm">
                        {archive.meta}
                    </span>
                </div>
            </div>
            <div className="gap-space-lg grid grid-cols-1 items-center lg:grid-cols-12">
                <div className="space-y-space-sm lg:col-span-7">
                    <div className="font-label-editorial text-label-editorial text-brand inline-flex items-center gap-1 font-semibold">
                        <AwardIcon className="h-4 w-4" />
                        <span>{archive.eyebrow}</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        {archive.headline}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {archive.body}
                    </p>
                    <div className="gap-space-md pt-space-xs flex flex-wrap items-center">
                        {archive.stats.map((stat) => (
                            <div
                                className="bg-surface-container-lowest px-space-md py-space-xs rounded-lg shadow-sm"
                                key={stat.label}
                            >
                                <span className="font-caption text-caption text-warm block">
                                    {stat.label}
                                </span>
                                <span
                                    className={`font-headline-sm text-headline-sm font-bold ${valueToneClass[stat.tone]}`}
                                >
                                    {stat.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-surface-container-lowest p-space-md flex flex-col items-center justify-center rounded-xl text-center shadow-sm lg:col-span-5">
                    <span className="font-label-editorial text-label-editorial text-warm mb-2">
                        চূড়ান্ত ভোট বিভাজন অনুপাত
                    </span>
                    <div className="relative my-2 flex h-44 w-44 items-center justify-center">
                        <svg
                            className="h-full w-full -rotate-90 transform"
                            viewBox="0 0 36 36"
                        >
                            <path
                                className="text-surface-container-high"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="4.5"
                            />
                            <path
                                className="text-warm"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="currentColor"
                                strokeDasharray={`${secondary}, 100`}
                                strokeWidth="4.5"
                            />
                            <path
                                className="text-brand"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="currentColor"
                                strokeDasharray={`${primary}, 100`}
                                strokeWidth="4.5"
                            />
                        </svg>
                        <div className="absolute flex flex-col items-center justify-center">
                            <span className="font-headline-md text-headline-md text-brand font-bold">
                                {archive.donut.centerPercent}
                            </span>
                            <span className="font-caption text-caption text-on-surface-variant font-medium">
                                {archive.donut.centerLabel}
                            </span>
                        </div>
                    </div>
                    <div className="gap-space-lg font-caption text-caption mt-1 flex items-center justify-center">
                        {archive.donut.legend.map((item) => (
                            <div
                                className="gap-1.5 flex items-center"
                                key={item.label}
                            >
                                <span
                                    className={`inline-block h-3 w-3 rounded-full ${
                                        item.tone === 'brand'
                                            ? 'bg-brand'
                                            : 'bg-warm'
                                    }`}
                                />
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
