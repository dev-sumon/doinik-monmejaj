import { Icon } from '@/components/ui/icon';
import { BookmarkIcon, MessageSquareIcon, Share2Icon } from 'lucide-react';
import { useState } from 'react';
import {
    resolveReactionIcon,
    toneBadgeClass,
    type FeaturedPaper,
} from './types';

export default function PaperCard({
    category,
    time,
    imageSrc,
    imageAlt,
    title,
    excerpt,
    authorInitial,
    authorName,
    authorLocation,
    tone,
    reactionIcon,
    reactionLabel,
    commentCount,
    bookmarked = false,
}: FeaturedPaper) {
    const [isBookmarked, setIsBookmarked] = useState(bookmarked);
    const ReactionIcon = resolveReactionIcon(reactionIcon);

    return (
        <article className="bg-surface-container-lowest p-space-md flex flex-col justify-between shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="space-y-space-sm">
                <div className="bg-surface-container-low flex flex-wrap items-center justify-between gap-1 px-space-sm py-1">
                    <span className="font-label-editorial text-label-editorial text-brand min-w-0 font-bold">
                        {category}
                    </span>
                    <span className="font-caption text-caption text-warm shrink-0">
                        {time}
                    </span>
                </div>
                <div className="bg-surface-container h-48 w-full overflow-hidden">
                    <img
                        alt={imageAlt}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        src={imageSrc}
                    />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface hover:text-brand cursor-pointer leading-snug font-bold transition-colors">
                    {title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 text-justify leading-relaxed">
                    {excerpt}
                </p>
            </div>
            <div className="-mx-space-md mt-space-md -mb-space-md space-y-space-xs bg-surface-container-low p-space-sm pt-space-md">
                <div className="flex items-center justify-between">
                    <div className="gap-space-xs flex items-center">
                        <div
                            className={`font-label-dateline text-label-dateline flex h-7 w-7 items-center justify-center font-bold ${toneBadgeClass[tone]}`}
                        >
                            {authorInitial}
                        </div>
                        <div className="flex flex-col">
                            <span className="font-label-editorial text-label-editorial text-on-surface leading-none font-bold">
                                {authorName}
                            </span>
                            <span className="font-caption text-caption text-warm">
                                {authorLocation}
                            </span>
                        </div>
                    </div>
                    <button
                        aria-label="সংরক্ষণ"
                        className="text-on-surface-variant hover:text-brand transition-colors"
                        type="button"
                        onClick={() => setIsBookmarked((value) => !value)}
                    >
                        <BookmarkIcon
                            className={`h-4 w-4 ${isBookmarked ? 'text-brand' : ''}`}
                        />
                    </button>
                </div>
                <div className="font-caption text-caption text-warm flex flex-wrap items-center justify-between gap-x-2 gap-y-1 pt-1">
                    <span className="text-brand flex items-center gap-1 font-medium">
                        <Icon className="h-4 w-4" iconNode={ReactionIcon} />
                        <span>{reactionLabel}</span>
                    </span>
                    <span className="flex items-center gap-1">
                        <MessageSquareIcon className="h-4 w-4" />
                        <span>{commentCount}</span>
                    </span>
                    <span className="hover:text-on-surface flex cursor-pointer items-center gap-1">
                        <Share2Icon className="h-4 w-4" />
                        <span>ভাগ করুন</span>
                    </span>
                </div>
            </div>
        </article>
    );
}
