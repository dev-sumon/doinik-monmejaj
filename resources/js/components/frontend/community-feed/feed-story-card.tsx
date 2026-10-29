import {
    BadgeCheckIcon,
    BookmarkIcon,
    CheckCircle2Icon,
    HeartIcon,
    HandshakeIcon,
    MessageCircleIcon,
    MessagesSquareIcon,
    Share2Icon,
    SmileIcon,
    UtensilsIcon,
} from 'lucide-react';
import { useState } from 'react';
import {
    toneCategoryClass,
    toneTextClass,
    type FeedStory,
} from './types';

const reactionIcons: Record<string, typeof SmileIcon> = {
    smile: SmileIcon,
    handshake: HandshakeIcon,
    comment: MessageCircleIcon,
    heart: HeartIcon,
    forum: MessagesSquareIcon,
    restaurant: UtensilsIcon,
};

function banglaIncrement(value: string): string {
    const digits = '০১২৩৪৫৬৭৮৯';
    const western = value.replace(/[০-৯]/g, (d) =>
        String(digits.indexOf(d)),
    );
    const next = Number.parseInt(western, 10) + 1;

    if (Number.isNaN(next)) {
        return value;
    }

    return String(next).replace(/[0-9]/g, (d) => digits[Number(d)] ?? d);
}

export default function FeedStoryCard({ story }: { story: FeedStory }) {
    const [bookmarked, setBookmarked] = useState(false);
    const [reacted, setReacted] = useState<Record<number, boolean>>({});
    const [counts, setCounts] = useState(
        story.reactions.map((reaction) => reaction.count),
    );

    const VerifyIcon =
        story.author.verifyTone === 'tertiary' ? CheckCircle2Icon : BadgeCheckIcon;

    return (
        <article className="bg-surface-container-lowest p-space-md md:p-space-lg transition-transform hover:-translate-y-0.5">
            <div className="gap-space-sm pb-space-sm mb-space-sm flex items-center justify-between">
                <div className="gap-space-sm flex min-w-0 items-center">
                    <img
                        alt={story.author.name}
                        className="h-10 w-10 shrink-0 rounded-full object-cover"
                        src={story.author.avatar}
                    />
                    <div className="min-w-0">
                        <div className="flex items-center gap-1">
                            <span className="font-headline-sm text-on-surface text-base leading-tight font-semibold">
                                {story.author.name}
                            </span>
                            {story.author.verified && (
                                <VerifyIcon
                                    className={`h-4 w-4 ${toneTextClass[story.author.verifyTone]}`}
                                />
                            )}
                        </div>
                        <div className="gap-space-xs font-label-dateline text-label-dateline text-on-surface-variant flex flex-wrap items-center">
                            <span>{story.author.time}</span>
                            <span>•</span>
                            <span>{story.author.location}</span>
                        </div>
                    </div>
                </div>
                <span
                    className={`bg-surface-container px-space-xs font-label-editorial text-label-editorial shrink-0 py-0.5 font-semibold ${toneCategoryClass[story.categoryTone]}`}
                >
                    {story.category}
                </span>
            </div>

            <div className="bg-surface-container-low p-space-md">
                <div className="mb-space-xs flex flex-wrap items-center justify-between gap-2">
                    <span className="font-label-editorial text-label-editorial text-brand font-bold tracking-wider uppercase">
                        {story.kicker}
                    </span>
                    <span className="font-label-dateline text-label-dateline text-warm italic">
                        {story.edition}
                    </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface hover:text-brand mb-space-xs cursor-pointer leading-tight font-bold transition-colors">
                    {story.title}
                </h2>
                <h3 className="font-lead text-lead text-on-surface-variant mb-space-md font-medium italic">
                    {story.deck}
                </h3>

                {story.layout === 'image-right' && story.image && (
                    <div className="gap-space-md mb-space-md grid grid-cols-1 items-center md:grid-cols-5">
                        <div className="md:col-span-3">
                            {story.body.map((paragraph, index) => (
                                <p
                                    className={
                                        index === 0
                                            ? 'font-body-md text-body-md text-on-surface mb-space-xs text-justify leading-relaxed'
                                            : 'font-body-sm text-body-sm text-on-surface-variant leading-normal'
                                    }
                                    key={paragraph.slice(0, 32)}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        <div className="md:col-span-2">
                            <div className="bg-surface relative p-space-xs">
                                <img
                                    alt={story.image.alt}
                                    className="h-36 w-full object-cover"
                                    src={story.image.src}
                                />
                                <div className="font-caption text-caption text-warm mt-1 text-center italic">
                                    {story.image.caption}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {story.layout === 'image-left' && story.image && (
                    <div className="gap-space-md mb-space-md grid grid-cols-1 items-center md:grid-cols-12">
                        <div className="md:col-span-5">
                            <div className="bg-surface relative p-space-xs">
                                <img
                                    alt={story.image.alt}
                                    className="h-40 w-full object-cover"
                                    src={story.image.src}
                                />
                                <div className="font-caption text-caption text-warm mt-1 text-center italic">
                                    {story.image.caption}
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-7">
                            {story.body.map((paragraph) => (
                                <p
                                    className="font-body-md text-body-md text-on-surface mb-space-xs text-justify leading-relaxed"
                                    key={paragraph.slice(0, 32)}
                                >
                                    {paragraph}
                                </p>
                            ))}
                            {story.quote && (
                                <div className="bg-surface-container p-space-xs font-body-sm text-body-sm text-warm italic">
                                    {story.quote}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {story.layout === 'text-only' && (
                    <>
                        {story.body.map((paragraph) => (
                            <p
                                className="font-body-md text-body-md text-on-surface mb-space-md text-justify leading-relaxed"
                                key={paragraph.slice(0, 32)}
                            >
                                {paragraph}
                            </p>
                        ))}
                        {story.notice && (
                            <div className="bg-surface-container p-space-sm gap-space-md flex flex-col items-start justify-between sm:flex-row sm:items-center">
                                <div className="gap-space-xs font-label-editorial text-label-editorial text-warm flex items-center">
                                    <UtensilsIcon className="h-5 w-5 shrink-0" />
                                    <span>{story.notice.text}</span>
                                </div>
                                <span className="font-label-dateline text-label-dateline text-brand font-bold">
                                    {story.notice.badge}
                                </span>
                            </div>
                        )}
                    </>
                )}

                <div
                    className={`font-caption text-caption text-outline-variant text-center ${story.layout === 'text-only' ? 'mt-space-md' : ''}`}
                >
                    ❦ ❦ ❦
                </div>
            </div>

            <div className="pt-space-sm mt-space-sm font-label-editorial text-label-editorial text-on-surface-variant flex items-center justify-between gap-2">
                <div className="gap-space-md flex flex-wrap items-center">
                    {story.reactions.map((reaction, index) => {
                        const Icon =
                            reactionIcons[reaction.icon] ?? SmileIcon;
                        const isReacted = reacted[index];

                        return (
                            <button
                                className={`flex items-center gap-1 px-2 py-1 transition-colors hover:bg-surface-container hover:text-brand ${
                                    isReacted
                                        ? 'bg-warm-container text-brand'
                                        : ''
                                }`}
                                key={`${reaction.icon}-${reaction.label}`}
                                type="button"
                                onClick={() => {
                                    if (isReacted) {
                                        return;
                                    }

                                    setReacted((prev) => ({
                                        ...prev,
                                        [index]: true,
                                    }));
                                    setCounts((prev) =>
                                        prev.map((count, i) =>
                                            i === index
                                                ? banglaIncrement(count)
                                                : count,
                                        ),
                                    );
                                }}
                            >
                                <Icon className="h-[18px] w-[18px]" />
                                <span>{counts[index]}</span>
                                <span className="hidden sm:inline">
                                    {reaction.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
                <div className="gap-space-xs flex items-center">
                    <button
                        className={`hover:bg-surface-container hover:text-brand p-1.5 transition-colors ${
                            bookmarked ? 'text-brand' : 'text-on-surface-variant'
                        }`}
                        title="সংরক্ষণ"
                        type="button"
                        onClick={() => setBookmarked((value) => !value)}
                    >
                        <BookmarkIcon className="h-[19px] w-[19px]" />
                    </button>
                    <button
                        className="text-on-surface-variant hover:bg-surface-container hover:text-brand p-1.5 transition-colors"
                        title="শেয়ার"
                        type="button"
                    >
                        <Share2Icon className="h-[19px] w-[19px]" />
                    </button>
                </div>
            </div>
        </article>
    );
}
