import {
    ArrowRightIcon,
    BookmarkIcon,
    ClockIcon,
    HeartIcon,
    MessageCircleIcon,
    Share2Icon,
} from 'lucide-react';
import type { FeaturedPaper } from './types';

export default function FeaturedShowcase({
    featured,
}: {
    featured: FeaturedPaper;
}) {
    return (
        <div className="bg-surface-container-lowest p-space-md md:p-space-lg group relative overflow-hidden rounded-xl shadow-sm">
            <div className="gap-space-xs pb-space-xs flex flex-wrap items-center justify-between">
                <div className="gap-space-xs flex items-center">
                    <span className="bg-brand text-on-brand font-label-editorial text-label-editorial rounded px-2 py-0.5">
                        {featured.badge}
                    </span>
                    <span className="font-label-dateline text-label-dateline text-warm">
                        {featured.editionNo}
                    </span>
                </div>
                <div className="font-label-dateline text-label-dateline text-on-surface-variant flex items-center gap-1">
                    <ClockIcon className="h-[15px] w-[15px]" />
                    <span>{featured.readTime}</span>
                </div>
            </div>
            <div className="mt-space-xs gap-space-md grid grid-cols-1 items-center md:grid-cols-12">
                <div className="space-y-space-xs md:col-span-7">
                    <h2 className="font-headline-lg text-headline-lg text-on-surface group-hover:text-brand leading-tight font-bold transition-colors">
                        {featured.title}
                    </h2>
                    <p className="font-lead text-lead text-on-surface-variant leading-relaxed">
                        {featured.lead}
                    </p>
                    <div className="p-space-xs bg-surface-container-low font-body-sm text-body-sm text-warm rounded italic">
                        {featured.quote}
                    </div>
                    <div className="gap-space-md pt-space-xs font-caption text-caption text-on-surface-variant flex flex-wrap items-center">
                        <span className="text-brand flex items-center gap-1 font-semibold">
                            <HeartIcon className="h-4 w-4" />
                            <span>{featured.hearts}</span>
                        </span>
                        <span className="flex items-center gap-1">
                            <MessageCircleIcon className="h-4 w-4" />
                            <span>{featured.letters}</span>
                        </span>
                        <span className="flex items-center gap-1">
                            <BookmarkIcon className="h-4 w-4" />
                            <span>{featured.bookmarks}</span>
                        </span>
                    </div>
                    <div className="pt-space-xs gap-space-sm flex items-center">
                        <button
                            className="gap-space-xs px-space-md py-space-xs bg-brand text-on-brand hover:bg-brand-container font-label-editorial text-label-editorial inline-flex items-center rounded transition-colors"
                            type="button"
                        >
                            <span>{featured.openLabel}</span>
                            <ArrowRightIcon className="h-4 w-4" />
                        </button>
                        <button
                            className="gap-space-xs px-space-sm py-space-xs bg-surface-container-high text-on-surface hover:bg-surface-dim font-caption text-caption inline-flex items-center rounded transition-colors"
                            type="button"
                        >
                            <Share2Icon className="h-[15px] w-[15px]" />
                            <span>{featured.shareLabel}</span>
                        </button>
                    </div>
                </div>
                <div className="relative md:col-span-5">
                    <div className="bg-surface-container h-64 w-full overflow-hidden rounded-lg shadow-sm md:h-72">
                        <img
                            alt={featured.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            src={featured.image}
                        />
                    </div>
                    <div className="bg-surface-container-lowest/90 font-label-dateline text-label-dateline text-on-surface absolute bottom-2 left-2 rounded px-2 py-1 backdrop-blur-sm">
                        {featured.imageCaption}
                    </div>
                </div>
            </div>
        </div>
    );
}
