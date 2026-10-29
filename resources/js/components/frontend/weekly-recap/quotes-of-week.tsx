import { ChevronRightIcon, QuoteIcon } from 'lucide-react';
import { quoteToneClass, type QuotesOfWeek } from './types';

export default function QuotesOfWeekSection({
    quotes,
}: {
    quotes: QuotesOfWeek;
}) {
    return (
        <section className="mb-space-xl">
            <div className="mb-space-md flex items-center justify-between">
                <div>
                    <span className="font-label-editorial text-label-editorial text-brand font-bold uppercase">
                        {quotes.eyebrow}
                    </span>
                    <h2 className="font-headline-md text-headline-md text-on-surface mt-0.5 font-bold">
                        {quotes.title}
                    </h2>
                </div>
                <button
                    className="font-label-editorial text-label-editorial text-warm hover:text-brand hidden items-center gap-1 transition-colors md:inline-flex"
                    type="button"
                >
                    <span>{quotes.allLabel}</span>
                    <ChevronRightIcon className="h-4 w-4" />
                </button>
            </div>
            <div className="gap-space-md grid grid-cols-1 md:grid-cols-3">
                {quotes.items.map((item) => (
                    <div
                        className="bg-surface-container-lowest p-space-md hover:bg-surface-container-low flex flex-col justify-between rounded shadow-sm transition-colors"
                        key={item.name}
                    >
                        <div>
                            <div className="text-brand mb-space-xs flex items-center justify-between">
                                <QuoteIcon className="h-7 w-7" />
                                <span className="font-label-dateline text-label-dateline text-warm">
                                    {item.date}
                                </span>
                            </div>
                            <p className="font-body-md text-body-md text-on-surface mb-space-md leading-relaxed italic">
                                {item.body}
                            </p>
                        </div>
                        <div className="gap-space-xs pt-space-xs bg-surface-container-low p-space-xs flex items-center rounded">
                            <div
                                className={`font-body-sm text-body-sm flex h-8 w-8 items-center justify-center rounded-full font-bold ${quoteToneClass[item.tone]}`}
                            >
                                {item.initials}
                            </div>
                            <div>
                                <div className="font-label-editorial text-label-editorial text-on-surface font-bold">
                                    {item.name}
                                </div>
                                <div className="font-caption text-caption text-warm">
                                    {item.meta}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
