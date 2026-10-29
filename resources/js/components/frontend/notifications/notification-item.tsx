import {
    ArrowRightIcon,
    CheckIcon,
    ExternalLinkIcon,
    HeartIcon,
    MessageCircleIcon,
    MessageSquareIcon,
    NewspaperIcon,
    ReplyIcon,
    BookOpenIcon,
    AwardIcon,
} from 'lucide-react';
import type { NotificationItem as ItemType } from './types';

export default function NotificationItem({
    item,
    onMarkRead,
}: {
    item: ItemType;
    onMarkRead: (id: string) => void;
}) {
    const unreadBar = item.unread ? (
        <div className="bg-brand absolute top-0 bottom-0 left-0 w-1.5" />
    ) : null;

    const unreadDot = item.unread ? (
        <span
            className="bg-brand inline-block h-2 w-2 rounded-full"
            title="অপঠিত"
        />
    ) : null;

    const markReadButton =
        item.unread && item.readActionLabel ? (
            <button
                className="font-label-dateline text-label-dateline text-warm hover:text-brand ml-auto flex items-center gap-1"
                type="button"
                onClick={() => onMarkRead(item.id)}
            >
                <CheckIcon className="h-3.5 w-3.5" />
                <span>{item.readActionLabel}</span>
            </button>
        ) : null;

    if (item.variant === 'comment') {
        return (
            <article className="bg-surface-container-lowest p-space-md relative shadow-sm transition-shadow hover:shadow-md">
                {unreadBar}
                <div className="gap-space-md flex items-start">
                    <div className="relative shrink-0">
                        {item.avatar ? (
                            <img
                                alt={item.author ?? ''}
                                className="h-12 w-12 rounded-full object-cover"
                                src={item.avatar}
                            />
                        ) : null}
                        <span className="bg-brand text-on-brand absolute -right-1 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full">
                            <MessageSquareIcon className="h-3 w-3" />
                        </span>
                    </div>
                    <div className="min-w-0 flex-1">
                        <div className="gap-space-xs mb-1 flex items-center justify-between">
                            <div className="gap-space-xs flex flex-wrap items-center">
                                <span className="font-label-editorial text-label-editorial text-on-surface font-bold">
                                    {item.author}
                                </span>
                                <span className="font-caption text-caption text-warm">
                                    {item.actionLabel}
                                </span>
                                {unreadDot}
                            </div>
                            <time className="font-label-dateline text-label-dateline text-warm shrink-0">
                                {item.time}
                            </time>
                        </div>
                        {item.paperTitle ? (
                            <p className="font-caption text-caption text-warm mb-space-xs">
                                লেখা:{' '}
                                <span className="text-on-surface font-semibold italic">
                                    &quot;{item.paperTitle}&quot;
                                </span>
                            </p>
                        ) : null}
                        {item.quote ? (
                            <div className="bg-surface-container-low p-space-sm mb-space-sm text-on-surface font-body-sm text-body-sm italic">
                                {item.quote}
                            </div>
                        ) : null}
                        <div className="gap-space-sm flex flex-wrap items-center justify-between">
                            <div className="gap-space-sm flex items-center">
                                <button
                                    className="text-brand font-label-editorial text-label-editorial inline-flex items-center gap-1 font-semibold hover:underline"
                                    type="button"
                                >
                                    <ReplyIcon className="h-4 w-4" />
                                    <span>উত্তর দিন</span>
                                </button>
                                <span className="text-outline">·</span>
                                <button
                                    className="font-label-editorial text-label-editorial text-on-surface-variant hover:text-on-surface"
                                    type="button"
                                >
                                    পত্রিকায় যান
                                </button>
                            </div>
                            {markReadButton}
                        </div>
                    </div>
                </div>
            </article>
        );
    }

    if (item.variant === 'reaction') {
        return (
            <article className="bg-surface-container-lowest p-space-md relative shadow-sm transition-shadow hover:shadow-md">
                {unreadBar}
                <div className="gap-space-md flex items-start">
                    <div className="relative shrink-0">
                        <div className="bg-warm-container text-on-warm-container flex h-12 w-12 items-center justify-center rounded-full font-bold">
                            <HeartIcon className="h-6 w-6 fill-current" />
                        </div>
                        {item.countBadge ? (
                            <span className="bg-error text-on-error font-caption absolute -right-1 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold">
                                {item.countBadge}
                            </span>
                        ) : null}
                    </div>
                    <div className="min-w-0 flex-1">
                        <div className="gap-space-xs mb-1 flex items-center justify-between">
                            <div className="gap-space-xs flex flex-wrap items-center">
                                <span className="font-label-editorial text-label-editorial text-on-surface font-bold">
                                    {item.author}
                                </span>
                                {item.subtitle ? (
                                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                                        {item.subtitle}
                                    </span>
                                ) : null}
                                {unreadDot}
                            </div>
                            <time className="font-label-dateline text-label-dateline text-warm shrink-0">
                                {item.time}
                            </time>
                        </div>
                        {item.body ? (
                            <p className="font-body-sm text-body-sm text-on-surface mb-space-sm">
                                {item.body}
                            </p>
                        ) : null}
                        <div className="flex items-center justify-between">
                            <button
                                className="font-label-editorial text-label-editorial text-warm hover:text-brand flex items-center gap-1 font-medium"
                                type="button"
                            >
                                <span>
                                    পাঠক তালিকা ও প্রতিক্রিয়া বিশদ দেখুন
                                </span>
                                <ArrowRightIcon className="h-[15px] w-[15px]" />
                            </button>
                            {markReadButton}
                        </div>
                    </div>
                </div>
            </article>
        );
    }

    if (item.variant === 'editorial-call') {
        return (
            <article className="bg-surface-container-low p-space-md relative overflow-hidden shadow-sm">
                {unreadBar}
                <div className="gap-space-md flex items-start">
                    <div className="bg-brand text-on-brand flex h-12 w-12 shrink-0 items-center justify-center">
                        <NewspaperIcon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <div className="gap-space-xs mb-1 flex items-center justify-between">
                            <div className="gap-space-xs flex items-center">
                                {item.badge ? (
                                    <span className="bg-brand-fixed text-brand font-label-editorial text-label-editorial px-space-xs py-0.5 font-bold uppercase">
                                        {item.badge}
                                    </span>
                                ) : null}
                                {unreadDot}
                            </div>
                            <time className="font-label-dateline text-label-dateline text-warm shrink-0">
                                {item.time}
                            </time>
                        </div>
                        {item.title ? (
                            <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 mb-1 font-bold">
                                {item.title}
                            </h3>
                        ) : null}
                        {item.body ? (
                            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                                {item.body}
                            </p>
                        ) : null}
                        <div className="gap-space-sm flex flex-wrap items-center">
                            <button
                                className="gap-space-xs px-space-md py-space-xs bg-brand text-on-brand hover:bg-brand-container font-label-editorial text-label-editorial inline-flex items-center transition-colors"
                                type="button"
                            >
                                <MessageCircleIcon className="h-4 w-4" />
                                <span>লিখতে যান</span>
                            </button>
                            <button
                                className="gap-space-xs px-space-sm py-space-xs bg-surface-container text-on-surface hover:bg-surface-container-high font-label-editorial text-label-editorial inline-flex items-center transition-colors"
                                type="button"
                            >
                                নিয়মাবলী পড়ুন
                            </button>
                            {markReadButton}
                        </div>
                    </div>
                </div>
            </article>
        );
    }

    if (item.variant === 'award') {
        return (
            <article className="bg-surface-container-lowest p-space-md relative opacity-95 shadow-sm transition-opacity hover:opacity-100">
                <div className="gap-space-md flex items-start">
                    <div className="bg-warm-fixed text-on-warm-fixed flex h-12 w-12 shrink-0 items-center justify-center">
                        <AwardIcon className="h-6 w-6 fill-current" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <div className="gap-space-xs mb-1 flex items-center justify-between">
                            <div className="gap-space-xs flex items-center">
                                <span className="font-label-editorial text-label-editorial text-warm font-bold">
                                    {item.subtitle}
                                </span>
                                <span className="font-caption text-caption text-outline">
                                    · পঠিত
                                </span>
                            </div>
                            <time className="font-label-dateline text-label-dateline text-warm shrink-0">
                                {item.time}
                            </time>
                        </div>
                        {item.paperTitle ? (
                            <p className="font-body-md text-body-md text-on-surface mb-space-xs">
                                আপনার পত্রিকা{' '}
                                <span className="text-brand font-bold">
                                    &quot;{item.paperTitle}&quot;
                                </span>{' '}
                                সম্পাদকের বিশেষ নির্বাচনে স্থান পেয়েছে!
                            </p>
                        ) : null}
                        {item.body ? (
                            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                                {item.body}
                            </p>
                        ) : null}
                        <div className="gap-space-md flex items-center">
                            <button
                                className="text-brand font-label-editorial text-label-editorial flex items-center gap-1 font-semibold hover:underline"
                                type="button"
                            >
                                <span>বিশেষ প্রদর্শনী পাতা দেখুন</span>
                                <ExternalLinkIcon className="h-3.5 w-3.5" />
                            </button>
                            <button
                                className="font-label-editorial text-label-editorial text-warm hover:text-on-surface"
                                type="button"
                            >
                                সনদপত্র ডাউনলোড
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        );
    }

    if (item.variant === 'reply') {
        return (
            <article className="bg-surface-container-lowest p-space-md relative shadow-sm">
                <div className="gap-space-md flex items-start">
                    {item.avatar ? (
                        <img
                            alt={item.author ?? ''}
                            className="h-12 w-12 shrink-0 rounded-full object-cover"
                            src={item.avatar}
                        />
                    ) : null}
                    <div className="min-w-0 flex-1">
                        <div className="gap-space-xs mb-1 flex items-center justify-between">
                            <div className="gap-space-xs flex items-center">
                                <span className="font-label-editorial text-label-editorial text-on-surface font-bold">
                                    {item.author}
                                </span>
                                <span className="font-caption text-caption text-warm">
                                    {item.actionLabel}
                                </span>
                            </div>
                            <time className="font-label-dateline text-label-dateline text-warm shrink-0">
                                {item.time}
                            </time>
                        </div>
                        {item.quote ? (
                            <div className="bg-surface-container-low p-space-sm mb-space-xs text-on-surface font-body-sm text-body-sm">
                                {item.quote}
                            </div>
                        ) : null}
                        <button
                            className="text-brand font-label-editorial text-label-editorial flex items-center gap-1 font-semibold hover:underline"
                            type="button"
                        >
                            <MessageCircleIcon className="h-[15px] w-[15px]" />
                            <span>কথোপকথন চালিয়ে যান</span>
                        </button>
                    </div>
                </div>
            </article>
        );
    }

    if (item.variant === 'digest') {
        return (
            <article className="bg-surface-container-lowest p-space-md relative shadow-sm">
                <div className="gap-space-md flex items-start">
                    <div className="bg-surface-container text-on-surface-variant flex h-12 w-12 shrink-0 items-center justify-center">
                        <BookOpenIcon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <div className="gap-space-xs mb-1 flex items-center justify-between">
                            <span className="font-label-editorial text-label-editorial text-on-surface font-bold">
                                {item.subtitle}
                            </span>
                            <time className="font-label-dateline text-label-dateline text-warm shrink-0">
                                {item.time}
                            </time>
                        </div>
                        {item.body ? (
                            <p className="font-body-md text-body-md text-on-surface mb-space-xs">
                                {item.body}
                            </p>
                        ) : null}
                        <div className="gap-space-md mt-space-xs flex items-center">
                            <button
                                className="text-brand font-label-editorial text-label-editorial font-semibold hover:underline"
                                type="button"
                            >
                                সংকলন ও পরিসংখ্যান উল্টান
                            </button>
                            <span className="text-outline">·</span>
                            <button
                                className="font-label-editorial text-label-editorial text-warm hover:text-on-surface"
                                type="button"
                            >
                                পিডিএফ ডাউনলোড
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        );
    }

    return (
        <article className="bg-surface-container-lowest p-space-md relative shadow-sm">
            <div className="gap-space-md flex items-center">
                {item.avatar ? (
                    <img
                        alt={item.author ?? ''}
                        className="h-12 w-12 shrink-0 rounded-full object-cover"
                        src={item.avatar}
                    />
                ) : null}
                <div className="min-w-0 flex-1">
                    <div className="gap-space-xs flex items-center justify-between">
                        <div>
                            <span className="font-label-editorial text-label-editorial text-on-surface font-bold">
                                {item.author}
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                                {' '}
                                {item.actionLabel}
                            </span>
                        </div>
                        <time className="font-label-dateline text-label-dateline text-warm shrink-0">
                            {item.time}
                        </time>
                    </div>
                    {item.subtitle ? (
                        <p className="font-caption text-caption text-warm">
                            {item.subtitle}
                        </p>
                    ) : null}
                </div>
                <div className="shrink-0">
                    <button
                        className="px-space-sm bg-surface-container hover:bg-surface-container-high text-on-surface font-label-editorial text-label-editorial py-1 transition-colors"
                        type="button"
                    >
                        প্রোফাইল
                    </button>
                </div>
            </div>
        </article>
    );
}
