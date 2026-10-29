export type Tone = 'brand' | 'warm' | 'tertiary';

export type RecapHeader = {
    badge: string;
    issueNo: string;
    dateRange: string;
    title: string;
    lead: string;
    downloadLabel: string;
    downloadingLabel: string;
    downloadDoneLabel: string;
    shareLabel: string;
    shareCopiedLabel: string;
};

export type RecapMetric = {
    id: string;
    label: string;
    icon: string;
    value: string;
    valueSuffix?: string;
    valueSize?: 'md' | 'xl';
    meta: string;
    metaTrend?: boolean;
    hint: string;
    bar: number;
    barTone: Tone;
    iconTone: Tone;
};

export type FeatureFrontPage = {
    sectionIcon: string;
    sectionTitle: string;
    sectionBadge: string;
    printMeta: string;
    readersMeta: string;
    title: string;
    dek: string;
    image: string;
    imageCaption: string;
    body: string;
    bodyNote: string;
    quote: string;
    quoteAuthor: string;
    bookmarks: string;
    discussions: string;
    readCta: string;
};

export type EngagementTopic = {
    label: string;
    value: string;
    percent: number;
    tone: Tone;
};

export type PeakHour = {
    icon: string;
    time: string;
    percent: string;
    hint: string;
    highlight: boolean;
};

export type EngagementSidebar = {
    sectionTitle: string;
    topicsTitle: string;
    topics: EngagementTopic[];
    peakTitle: string;
    peakHours: PeakHour[];
    archivalLabel: string;
    archivalNote: string;
};

export type TrendDay = {
    label: string;
    value: string;
    height: number;
    peak: boolean;
};

export type DailyTrend = {
    eyebrow: string;
    title: string;
    legendPeak: string;
    legendAvg: string;
    days: TrendDay[];
    insight: string;
    totalMinutes: string;
};

export type QuoteItem = {
    date: string;
    body: string;
    initials: string;
    tone: Tone;
    name: string;
    meta: string;
};

export type QuotesOfWeek = {
    eyebrow: string;
    title: string;
    allLabel: string;
    items: QuoteItem[];
};

export type EditorsClosing = {
    eyebrow: string;
    title: string;
    body: string;
    author: string;
    role: string;
    writeCta: string;
    archiveCta: string;
};

export type WeeklyRecapPageProps = {
    header: RecapHeader;
    metrics: RecapMetric[];
    feature: FeatureFrontPage;
    engagement: EngagementSidebar;
    trend: DailyTrend;
    quotes: QuotesOfWeek;
    closing: EditorsClosing;
};

export const barToneClass: Record<Tone, string> = {
    brand: 'bg-brand',
    warm: 'bg-warm',
    tertiary: 'bg-tertiary',
};

export const iconToneClass: Record<Tone, string> = {
    brand: 'text-brand',
    warm: 'text-warm',
    tertiary: 'text-tertiary',
};

export const quoteToneClass: Record<Tone, string> = {
    brand: 'bg-brand-fixed text-brand',
    warm: 'bg-warm-container text-on-warm-container',
    tertiary: 'bg-tertiary-fixed text-on-tertiary-fixed',
};
