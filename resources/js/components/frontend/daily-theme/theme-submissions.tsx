import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';
import SubmissionCard from './submission-card';
import type { ThemeFilter, ThemeSubmission } from './types';

export default function ThemeSubmissions({
    filters,
    submissions,
}: {
    filters: ThemeFilter[];
    submissions: ThemeSubmission[];
}) {
    const [activeFilter, setActiveFilter] = useState(
        filters[0]?.id ?? 'popular',
    );

    return (
        <section className="mb-space-xl">
            <div className="pb-space-sm mb-space-md border-outline-variant gap-space-sm flex flex-col justify-between border-b md:flex-row md:items-end">
                <div>
                    <span className="font-label-editorial text-label-editorial text-warm tracking-wider uppercase">
                        নাগরিক পাতার সমাহার
                    </span>
                    <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface font-bold">
                        আজকের বিষয়ের অন্যান্য পত্রিকা
                    </h2>
                </div>
                <div className="bg-surface-container font-label-editorial text-label-editorial inline-flex overflow-x-auto rounded p-1">
                    {filters.map((filter) => {
                        const isActive = filter.id === activeFilter;

                        return (
                            <button
                                className={`px-space-md shrink-0 rounded py-1 transition-all ${
                                    isActive
                                        ? 'bg-surface-container-lowest text-brand font-semibold shadow-sm'
                                        : 'text-on-surface-variant hover:text-on-surface'
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
                {submissions.map((submission) => (
                    <SubmissionCard
                        key={submission.id}
                        submission={submission}
                    />
                ))}
            </div>
            <div className="mt-space-lg text-center">
                <button
                    className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-editorial text-label-editorial inline-flex items-center gap-2 rounded px-space-lg py-2.5 transition-colors"
                    type="button"
                >
                    <span>আরও ২০টি পত্রিকা দেখুন</span>
                    <ChevronDownIcon className="h-4 w-4" />
                </button>
            </div>
        </section>
    );
}
