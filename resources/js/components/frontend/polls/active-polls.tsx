import { VoteIcon } from 'lucide-react';
import { useState } from 'react';
import PollCard from './poll-card';
import type { ActivePoll, PollFilter } from './types';

export default function ActivePolls({
    filters,
    activePolls,
}: {
    filters: PollFilter[];
    activePolls: ActivePoll[];
}) {
    const [activeFilter, setActiveFilter] = useState(filters[0]?.id ?? 'all');

    return (
        <section className="space-y-space-md">
            <div className="gap-space-xs flex flex-col justify-between sm:flex-row sm:items-end">
                <div>
                    <div className="font-label-editorial text-label-editorial text-warm mb-1 inline-flex items-center gap-1">
                        <VoteIcon className="h-4 w-4" />
                        <span>জনপ্রিয় বিতর্কাবলি</span>
                    </div>
                    <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface font-bold">
                        চলতি অন্যান্য ভোট
                    </h2>
                </div>
                <div className="gap-space-sm flex flex-wrap items-center">
                    <span className="font-caption text-caption text-on-surface-variant">
                        ফিল্টার:
                    </span>
                    {filters.map((filter) => {
                        const isActive = filter.id === activeFilter;

                        return (
                            <button
                                className={`font-caption text-caption rounded px-space-sm py-1 transition-colors ${
                                    isActive
                                        ? 'bg-brand text-on-brand font-semibold'
                                        : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
                                }`}
                                key={filter.id}
                                type="button"
                                onClick={() => setActiveFilter(filter.id)}
                            >
                                {filter.label}
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className="gap-space-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {activePolls.map((poll) => (
                    <PollCard key={poll.id} poll={poll} />
                ))}
            </div>
        </section>
    );
}
