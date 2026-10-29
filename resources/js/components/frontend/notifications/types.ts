export type Tone = 'brand' | 'warm' | 'tertiary';

export type NotificationFilter = {
    id: string;
    label: string;
    count: number;
};

export type NotificationMetric = {
    id: string;
    icon: string;
    value: string;
    unit: string;
    label: string;
    tone: Tone;
    dynamic: boolean;
};

export type NotificationItem = {
    id: string;
    type: string;
    unread: boolean;
    variant: string;
    author: string | null;
    avatar: string | null;
    actionLabel: string | null;
    time: string;
    paperTitle: string | null;
    quote: string | null;
    body: string | null;
    title: string | null;
    subtitle: string | null;
    badge: string | null;
    countBadge: string | null;
    readActionLabel: string | null;
};

export type NotificationGroup = {
    id: string;
    title: string;
    badge: string | null;
    dateLabel: string;
    items: NotificationItem[];
};

export type NotificationsHeader = {
    eyebrow: string;
    dossierNo: string;
    title: string;
    lead: string;
    markAllLabel: string;
    markAllDoneLabel: string;
    settingsLabel: string;
    liveLabel: string;
};

export type NotificationsSidebar = {
    guidelines: {
        eyebrow: string;
        title: string;
        body: string;
        meterLabel: string;
        meterValue: string;
        meterPercent: number;
        meterLeft: string;
        meterRight: string;
        linkLabel: string;
    };
    preferencesTitle: string;
    preferences: {
        id: string;
        title: string;
        body: string;
        checked: boolean;
    }[];
    preferencesLink: string;
    preferencesNote: string;
    printTeaser: {
        eyebrow: string;
        title: string;
        body: string;
        ctaLabel: string;
    };
};

export type NotificationsFooter = {
    loadMoreLabel: string;
    loadingLabel: string;
    loadedLabel: string;
    archiveMeta: string;
    archiveCleanLabel: string;
};

export type NotificationsPageProps = {
    header: NotificationsHeader;
    filters: NotificationFilter[];
    metrics: NotificationMetric[];
    groups: NotificationGroup[];
    sidebar: NotificationsSidebar;
    footer: NotificationsFooter;
};

export const toneFixedBg: Record<Tone, string> = {
    brand: 'bg-brand-fixed text-brand',
    warm: 'bg-warm-fixed text-warm',
    tertiary: 'bg-tertiary-fixed text-tertiary',
};

export const toneBar: Record<Tone, string> = {
    brand: 'bg-brand',
    warm: 'bg-warm',
    tertiary: 'bg-tertiary',
};

export const toneValue: Record<Tone, string> = {
    brand: 'text-brand',
    warm: 'text-on-surface',
    tertiary: 'text-on-surface',
};

export const bengaliDigits: Record<string, string> = {
    '0': '০',
    '1': '১',
    '2': '২',
    '3': '৩',
    '4': '৪',
    '5': '৫',
    '6': '৬',
    '7': '৭',
    '8': '৮',
    '9': '৯',
};

export function toBengaliNumber(num: number): string {
    return String(num)
        .split('')
        .map((digit) => bengaliDigits[digit] ?? digit)
        .join('');
}
