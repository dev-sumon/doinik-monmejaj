import { useMemo, useState } from 'react';
import NotificationFeed from '@/components/frontend/notifications/notification-feed';
import NotificationMetrics from '@/components/frontend/notifications/notification-metrics';
import NotificationsHeader from '@/components/frontend/notifications/notifications-header';
import NotificationsSidebar from '@/components/frontend/notifications/notifications-sidebar';
import type {
    NotificationGroup,
    NotificationsPageProps,
} from '@/components/frontend/notifications/types';

type LoadMoreState = 'idle' | 'loading' | 'done';

export default function Notifications({
    header,
    filters,
    metrics,
    groups: initialGroups,
    sidebar,
    footer,
}: NotificationsPageProps) {
    const [activeFilter, setActiveFilter] = useState(
        filters[0]?.id ?? 'all',
    );
    const [groups, setGroups] = useState<NotificationGroup[]>(initialGroups);
    const [loadMoreState, setLoadMoreState] = useState<LoadMoreState>('idle');
    const [preferences, setPreferences] = useState<Record<string, boolean>>(
        () =>
            Object.fromEntries(
                sidebar.preferences.map((pref) => [pref.id, pref.checked]),
            ),
    );

    const unreadCount = useMemo(
        () =>
            groups.reduce(
                (total, group) =>
                    total + group.items.filter((item) => item.unread).length,
                0,
            ),
        [groups],
    );

    const filteredGroups = useMemo(() => {
        if (activeFilter === 'all') {
            return groups;
        }

        return groups
            .map((group) => ({
                ...group,
                items: group.items.filter(
                    (item) => item.type === activeFilter,
                ),
            }))
            .filter((group) => group.items.length > 0);
    }, [activeFilter, groups]);

    function markRead(id: string): void {
        setGroups((current) =>
            current.map((group) => ({
                ...group,
                items: group.items.map((item) =>
                    item.id === id ? { ...item, unread: false } : item,
                ),
            })),
        );
    }

    function markAllRead(): void {
        setGroups((current) =>
            current.map((group) => ({
                ...group,
                items: group.items.map((item) => ({
                    ...item,
                    unread: false,
                })),
            })),
        );
    }

    function togglePreference(id: string): void {
        setPreferences((current) => ({
            ...current,
            [id]: !current[id],
        }));
    }

    function handleLoadMore(): void {
        if (loadMoreState !== 'idle') {
            return;
        }

        setLoadMoreState('loading');
        window.setTimeout(() => {
            setLoadMoreState('done');
        }, 900);
    }

    return (
        <div className="flex w-full flex-col">
            <div className="px-margin-mobile md:px-margin-tablet lg:px-margin py-space-lg mx-auto w-full max-w-[1380px]">
                <NotificationsHeader
                    activeFilter={activeFilter}
                    allRead={unreadCount === 0}
                    filters={filters}
                    header={header}
                    onFilterChange={setActiveFilter}
                    onMarkAllRead={markAllRead}
                />
                <NotificationMetrics
                    metrics={metrics}
                    unreadCount={unreadCount}
                />
                <div className="gap-space-lg grid grid-cols-1 items-start lg:grid-cols-12">
                    <div className="lg:col-span-8">
                        <NotificationFeed
                            footer={footer}
                            groups={filteredGroups}
                            loadMoreState={loadMoreState}
                            onLoadMore={handleLoadMore}
                            onMarkRead={markRead}
                        />
                    </div>
                    <div className="lg:col-span-4">
                        <NotificationsSidebar
                            preferences={preferences}
                            sidebar={sidebar}
                            onPreferenceToggle={togglePreference}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
