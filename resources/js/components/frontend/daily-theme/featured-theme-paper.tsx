import {
    BookmarkIcon,
    BookOpenIcon,
    HeartIcon,
    MessageSquareIcon,
    StarIcon,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { FeaturedThemePaper as FeaturedThemePaperType } from './types';

const reactionIcons: Record<string, LucideIcon> = {
    heart: HeartIcon,
    forum: MessageSquareIcon,
    bookmark: BookmarkIcon,
};

export default function FeaturedThemePaper({
    featured,
}: {
    featured: FeaturedThemePaperType;
}) {
    return (
        <section className="mb-space-xl">
            <div className="mb-space-sm flex flex-col gap-space-xs sm:flex-row sm:items-center sm:justify-between">
                <div className="gap-space-xs flex flex-wrap items-center">
                    <span className="bg-brand text-on-brand font-label-editorial text-label-editorial rounded px-2 py-0.5">
                        {featured.badge}
                    </span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        {featured.sectionTitle}
                    </h2>
                </div>
                <div className="font-label-dateline text-label-dateline text-warm flex items-center gap-1">
                    <StarIcon className="h-4 w-4" />
                    <span>{featured.ratingLabel}</span>
                </div>
            </div>
            <div className="bg-surface-container-lowest overflow-hidden rounded-lg shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="bg-surface-container-high p-space-md relative flex flex-col justify-between lg:col-span-5">
                        <div className="bg-surface-container-lowest space-y-space-xs w-full rounded p-space-sm shadow-sm">
                            <div className="text-warm border-outline-variant font-label-dateline text-label-dateline flex items-center justify-between border-b pb-1">
                                <span>{featured.paperMeta}</span>
                                <span>{featured.paperDate}</span>
                            </div>
                            <div className="bg-surface-container relative h-48 w-full overflow-hidden rounded">
                                <img
                                    alt={featured.image.alt}
                                    className="h-full w-full object-cover"
                                    src={featured.image.src}
                                />
                                <div className="bg-inverse-surface/80 text-inverse-on-surface font-caption text-caption absolute bottom-2 left-2 rounded px-2 py-0.5">
                                    {featured.image.caption}
                                </div>
                            </div>
                            <div className="pt-1">
                                <span className="font-headline-sm text-headline-sm text-on-surface line-clamp-2 font-bold">
                                    {featured.previewTitle}
                                </span>
                                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 pt-1">
                                    {featured.previewExcerpt}
                                </p>
                            </div>
                        </div>
                        <div className="mt-space-sm pt-space-xs text-on-surface-variant font-caption text-caption flex items-center justify-between">
                            <span>{featured.formatLabel}</span>
                            <span className="text-brand font-semibold">
                                {featured.pagesLabel}
                            </span>
                        </div>
                    </div>
                    <div className="p-space-lg md:p-space-xl space-y-space-md flex flex-col justify-between lg:col-span-7">
                        <div>
                            <div className="mb-space-xs gap-space-xs flex flex-wrap items-center justify-between">
                                <div className="gap-space-xs flex items-center">
                                    <img
                                        alt={featured.author.name}
                                        className="h-10 w-10 rounded-full object-cover"
                                        src={featured.author.avatar}
                                    />
                                    <div>
                                        <h4 className="font-headline-sm text-headline-sm text-on-surface leading-tight font-bold">
                                            {featured.author.name}
                                        </h4>
                                        <p className="font-caption text-caption text-warm">
                                            {featured.author.meta}
                                        </p>
                                    </div>
                                </div>
                                <span className="bg-surface-container font-label-dateline text-label-dateline text-on-surface rounded px-2 py-1">
                                    {featured.publishedAt}
                                </span>
                            </div>
                            <h3 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-space-xs font-bold tracking-tight">
                                {featured.title}
                            </h3>
                            <div className="pl-space-md space-y-space-xs border-brand my-space-sm relative border-l-2">
                                <p className="font-body-md text-body-md md:font-lead md:text-lead text-on-surface-variant leading-relaxed italic">
                                    {featured.pullQuote}
                                </p>
                            </div>
                            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                {featured.body}
                            </p>
                        </div>
                        <div className="pt-space-md border-outline-variant gap-space-sm flex flex-wrap items-center justify-between border-t">
                            <div className="gap-space-md flex flex-wrap items-center">
                                {featured.reactions.map((reaction) => {
                                    const Icon =
                                        reactionIcons[reaction.icon] ??
                                        HeartIcon;
                                    const filled = reaction.icon === 'heart';

                                    return (
                                        <button
                                            className="text-on-surface-variant hover:text-brand font-label-editorial text-label-editorial gap-1.5 flex items-center transition-colors"
                                            key={reaction.label}
                                            type="button"
                                        >
                                            <Icon
                                                className={`h-[18px] w-[18px] ${filled ? 'fill-brand text-brand' : ''}`}
                                            />
                                            <span>{reaction.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                            <button
                                className="gap-space-xs bg-on-surface text-surface hover:bg-brand font-label-editorial text-label-editorial inline-flex items-center rounded px-space-md py-2 transition-colors"
                                type="button"
                            >
                                <span>{featured.ctaLabel}</span>
                                <BookOpenIcon className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
