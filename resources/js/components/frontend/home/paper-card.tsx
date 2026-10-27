import { Icon } from '@/components/ui/icon';
import { BookmarkIcon, LucideIcon, MessageSquareIcon, Share2Icon } from 'lucide-react';
import { useState } from 'react';

export type PaperCardProps = {
    category: string;
    time: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    excerpt: string;
    authorInitial: string;
    authorName: string;
    authorLocation: string;
    authorBadgeClassName: string;
    reactionIcon: LucideIcon;
    reactionLabel: string;
    commentCount: string;
    bookmarked?: boolean;
};

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
    authorBadgeClassName,
    reactionIcon,
    reactionLabel,
    commentCount,
    bookmarked = false,
}: PaperCardProps) {
    const [isBookmarked, setIsBookmarked] = useState(bookmarked);

    return (
        <article className="flex flex-col justify-between bg-surface-container-lowest p-space-md shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="space-y-space-sm">
                <div className="flex items-center justify-between bg-surface-container-low px-space-sm py-1">
                    <span className="font-label-editorial text-label-editorial font-bold text-brand">
                        {category}
                    </span>
                    <span className="font-caption text-caption text-warm">
                        {time}
                    </span>
                </div>
                <div className="h-48 w-full overflow-hidden bg-surface-container">
                    <img
                        alt={imageAlt}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        src={imageSrc}
                    />
                </div>
                <h3 className="cursor-pointer font-headline-sm text-headline-sm leading-snug font-bold text-on-surface transition-colors hover:text-brand">
                    {title}
                </h3>
                <p className="line-clamp-3 text-justify font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                    {excerpt}
                </p>
            </div>
            <div className="-mx-space-md mt-space-md -mb-space-md space-y-space-xs bg-surface-container-low p-space-sm pt-space-md">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                        <div
                            className={`flex h-7 w-7 items-center justify-center font-label-dateline text-label-dateline font-bold ${authorBadgeClassName}`}
                        >
                            {authorInitial}
                        </div>
                        <div className="flex flex-col">
                            <span className="font-label-editorial text-label-editorial leading-none font-bold text-on-surface">
                                {authorName}
                            </span>
                            <span className="font-caption text-caption text-warm">
                                {authorLocation}
                            </span>
                        </div>
                    </div>
                    <button
                        aria-label="সংরক্ষণ"
                        className="text-on-surface-variant transition-colors hover:text-brand"
                        type="button"
                        onClick={() => setIsBookmarked((value) => !value)}
                    >
                        <span
                            className={`material-symbols-outlined text-[19px] ${isBookmarked ? 'text-brand' : ''}`}
                        >
                            {isBookmarked ? (
                                <BookmarkIcon className="h-4 w-4" />
                            ) : (
                                <BookmarkIcon className="h-4 w-4" />
                            )}
                        </span>
                    </button>
                </div>
                <div className="flex items-center justify-between pt-1 font-caption text-caption text-warm">
                    <span className="flex items-center gap-1 font-medium text-brand">
                        <span className="material-symbols-outlined text-[16px]">
                            <Icon iconNode={reactionIcon} />
                        </span>
                        <span>{reactionLabel}</span>
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">
                        <MessageSquareIcon className="w-4 h-4" />
                        </span>
                        <span>{commentCount}</span>
                    </span>
                    <span className="flex cursor-pointer items-center gap-1 hover:text-on-surface">
                        <span className="material-symbols-outlined text-[16px]">
                        <Share2Icon className="w-4 h-4" />
                        </span>
                        <span>ভাগ করুন</span>
                    </span>
                </div>
            </div>
        </article>
    );
}
