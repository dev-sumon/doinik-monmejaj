import { BookOpenIcon, HeartIcon, MessageCircleIcon } from 'lucide-react';
import {
    categoryToneClass,
    type PortfolioPaper,
} from './types';

export default function PortfolioGrid({
    papers,
    readLabel,
    showingLabel,
    subtitle,
    title,
}: {
    papers: PortfolioPaper[];
    readLabel: string;
    showingLabel: string;
    subtitle: string;
    title: string;
}) {
    return (
        <div className="space-y-space-md">
            <div className="pt-space-xs flex items-center justify-between">
                <div>
                    <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                        {title}
                    </h3>
                    <p className="font-caption text-caption text-warm">
                        {subtitle}
                    </p>
                </div>
                <span className="font-label-dateline text-label-dateline text-brand font-semibold">
                    {showingLabel}
                </span>
            </div>
            <div className="gap-space-md grid grid-cols-1 md:grid-cols-2">
                {papers.map((paper) => (
                    <article
                        className="bg-surface-container-lowest p-space-md group flex flex-col justify-between rounded-xl shadow-sm transition-shadow hover:shadow-md"
                        key={paper.id}
                    >
                        <div className="space-y-space-xs">
                            <div className="text-warm font-label-dateline text-label-dateline flex items-center justify-between">
                                <span>{paper.editionNo}</span>
                                <span>{paper.date}</span>
                            </div>
                            <div className="bg-surface-container mt-1 h-44 w-full overflow-hidden rounded-lg">
                                <img
                                    alt={paper.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    src={paper.image}
                                />
                            </div>
                            <div className="pt-1">
                                <span
                                    className={`font-label-dateline text-label-dateline rounded px-2 py-0.5 ${categoryToneClass[paper.categoryTone]}`}
                                >
                                    {paper.category}
                                </span>
                                <h4 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-brand mt-1 font-semibold transition-colors">
                                    {paper.title}
                                </h4>
                                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                                    {paper.excerpt}
                                </p>
                            </div>
                        </div>
                        <div className="pt-space-md flex items-center justify-between">
                            <div className="gap-space-sm font-caption text-caption text-warm flex items-center">
                                <span className="flex items-center gap-0.5">
                                    <HeartIcon className="h-3.5 w-3.5" />{' '}
                                    {paper.hearts}
                                </span>
                                <span className="flex items-center gap-0.5">
                                    <MessageCircleIcon className="h-3.5 w-3.5" />{' '}
                                    {paper.comments}
                                </span>
                            </div>
                            <button
                                className="font-label-editorial text-label-editorial text-brand inline-flex items-center gap-1 font-semibold hover:underline"
                                type="button"
                            >
                                <span>{readLabel}</span>
                                <BookOpenIcon className="h-4 w-4" />
                            </button>
                        </div>
                    </article>
                ))}
            </div>
            {papers.length === 0 ? (
                <p className="font-body-md text-body-md text-on-surface-variant py-space-lg text-center">
                    এই বিভাগে এখনো কোনো পত্রিকা নেই।
                </p>
            ) : null}
        </div>
    );
}
