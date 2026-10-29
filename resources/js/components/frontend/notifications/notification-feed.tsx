import { HistoryIcon, LoaderCircleIcon } from 'lucide-react';
import NotificationItem from './notification-item';
import {
    toBengaliNumber,
    type NotificationGroup,
    type NotificationsFooter,
} from './types';

type LoadMoreState = 'idle' | 'loading' | 'done';

export default function NotificationFeed({
    footer,
    groups,
    loadMoreState,
    onLoadMore,
    onMarkRead,
}: {
    footer: NotificationsFooter;
    groups: NotificationGroup[];
    loadMoreState: LoadMoreState;
    onLoadMore: () => void;
    onMarkRead: (id: string) => void;
}) {
    const loadMoreLabel =
        loadMoreState === 'loading'
            ? footer.loadingLabel
            : loadMoreState === 'done'
              ? footer.loadedLabel
              : footer.loadMoreLabel;

    return (
        <div className="space-y-space-xl">
            {groups.map((group) => {
                if (group.items.length === 0) {
                    return null;
                }

                const unreadInGroup = group.items.filter(
                    (item) => item.unread,
                ).length;

                return (
                    <section
                        className="space-y-space-md"
                        key={group.id}
                    >
                        <div
                            className={`pb-space-xs flex items-center justify-between ${
                                group.id !== 'today' ? 'pt-space-sm' : ''
                            }`}
                        >
                            <div className="gap-space-sm flex items-center">
                                <span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">
                                    {group.title}
                                </span>
                                {group.badge && unreadInGroup > 0 ? (
                                    <span className="bg-brand text-on-brand font-caption text-caption px-space-xs inline-flex items-center rounded-full py-0.5">
                                        {toBengaliNumber(unreadInGroup)} নতুন
                                    </span>
                                ) : null}
                            </div>
                            <span className="font-label-dateline text-label-dateline text-warm">
                                {group.dateLabel}
                            </span>
                        </div>
                        {group.items.map((item) => (
                            <NotificationItem
                                item={item}
                                key={item.id}
                                onMarkRead={onMarkRead}
                            />
                        ))}
                    </section>
                );
            })}

            <div className="pt-space-md gap-space-md bg-surface-container-lowest p-space-md flex flex-col items-center justify-between shadow-sm sm:flex-row">
                <button
                    className="gap-space-xs px-space-lg py-space-xs bg-surface-container hover:bg-surface-container-high text-on-surface font-label-editorial text-label-editorial inline-flex w-full items-center justify-center transition-colors disabled:cursor-default disabled:opacity-70 sm:w-auto"
                    disabled={loadMoreState !== 'idle'}
                    type="button"
                    onClick={onLoadMore}
                >
                    {loadMoreState === 'loading' ? (
                        <LoaderCircleIcon className="h-[18px] w-[18px] animate-spin" />
                    ) : (
                        <HistoryIcon className="h-[18px] w-[18px]" />
                    )}
                    <span>{loadMoreLabel}</span>
                </button>
                <div className="gap-space-sm font-label-dateline text-label-dateline text-warm flex items-center">
                    <span>{footer.archiveMeta}</span>
                    <span>•</span>
                    <button
                        className="text-brand font-semibold hover:underline"
                        type="button"
                    >
                        {footer.archiveCleanLabel}
                    </button>
                </div>
            </div>
        </div>
    );
}
