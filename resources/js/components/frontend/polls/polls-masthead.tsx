import { VoteIcon } from 'lucide-react';
import { valueToneClass, type PollsMasthead } from './types';

export default function PollsMasthead({ masthead }: { masthead: PollsMasthead }) {
    return (
        <div className="bg-surface-container-low px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl w-full">
            <div className="gap-space-lg mx-auto flex max-w-[1380px] flex-col justify-between md:flex-row md:items-end">
                <div className="max-w-3xl">
                    <div className="gap-space-xs bg-brand/10 text-brand font-label-editorial text-label-editorial mb-space-sm inline-flex items-center rounded px-space-sm py-0.5">
                        <VoteIcon className="h-4 w-4" />
                        <span>{masthead.badge}</span>
                    </div>
                    <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface mb-space-xs font-bold tracking-tight">
                        {masthead.title}
                    </h1>
                    <p className="font-body-md text-body-md md:font-lead md:text-lead text-on-surface-variant leading-relaxed">
                        {masthead.lead}
                    </p>
                </div>
                <div className="bg-surface-container p-space-md gap-space-xs flex min-w-0 flex-col rounded-lg shadow-sm sm:min-w-[260px]">
                    <div className="text-on-surface-variant font-caption text-caption flex items-center justify-between">
                        <span className="text-brand flex items-center gap-1 font-semibold">
                            <span className="bg-brand h-2 w-2 animate-pulse rounded-full" />
                            {masthead.live.status}
                        </span>
                        <span className="font-label-dateline text-label-dateline">
                            {masthead.live.dateLabel}
                        </span>
                    </div>
                    <div className="space-y-1">
                        {masthead.live.rows.map((row) => (
                            <div
                                className="font-body-sm text-body-sm text-on-surface flex justify-between gap-space-sm"
                                key={row.label}
                            >
                                <span className="text-on-surface-variant">
                                    {row.label}
                                </span>
                                <span
                                    className={`font-semibold ${valueToneClass[row.tone]}`}
                                >
                                    {row.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
