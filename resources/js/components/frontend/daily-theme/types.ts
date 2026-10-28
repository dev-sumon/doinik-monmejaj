export type Tone = 'brand' | 'warm' | 'tertiary' | 'muted';

export type ThemeSubBar = {
    eyebrow: string;
    issue: string;
    dateLabel: string;
    countdownMinutes: number;
};

export type ThemeMetric = {
    icon: string;
    tone: Tone;
    parts: string[];
    emphasisIndex: number | null;
};

export type ThemeHero = {
    badge: string;
    titlePrefix: string;
    highlight: string;
    lead: string;
    metrics: ThemeMetric[];
    ctaLabel: string;
    ctaHint: string;
};

export type WritingSpark = {
    label: string;
    icon: string;
    title: string;
    body: string;
    writersCount: string;
};

export type FeaturedThemePaper = {
    badge: string;
    sectionTitle: string;
    ratingLabel: string;
    paperMeta: string;
    paperDate: string;
    image: {
        src: string;
        alt: string;
        caption: string;
    };
    previewTitle: string;
    previewExcerpt: string;
    formatLabel: string;
    pagesLabel: string;
    author: {
        name: string;
        avatar: string;
        meta: string;
    };
    publishedAt: string;
    title: string;
    pullQuote: string;
    body: string;
    reactions: {
        icon: string;
        label: string;
    }[];
    ctaLabel: string;
};

export type ThemeFilter = {
    id: string;
    label: string;
};

export type ThemeSubmission = {
    id: string;
    author: string;
    avatar: string;
    meta: string;
    badge: string;
    image: {
        src: string;
        alt: string;
    };
    title: string;
    excerpt: string;
    readers: string;
    comments: string;
    href: string;
};

export type UpcomingTheme = {
    dayLabel: string;
    dayNumber: string;
    month: string;
    tone: Tone;
    badge: string;
    timing: string;
    title: string;
    body: string;
    meta: string;
    ctaLabel: string;
    ctaIcon: string;
};

export type DailyThemePageProps = {
    subBar: ThemeSubBar;
    hero: ThemeHero;
    sparks: WritingSpark[];
    featured: FeaturedThemePaper;
    filters: ThemeFilter[];
    submissions: ThemeSubmission[];
    upcoming: UpcomingTheme[];
};

export const toneIconClass: Record<Tone, string> = {
    brand: 'text-brand',
    warm: 'text-warm',
    tertiary: 'text-tertiary',
    muted: 'text-on-surface-variant',
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

export function toBengaliNumber(num: number, pad = 2): string {
    return String(num)
        .padStart(pad, '0')
        .split('')
        .map((digit) => bengaliDigits[digit] ?? digit)
        .join('');
}

export function formatCountdown(totalMinutes: number): string {
    const hours = Math.floor(Math.max(totalMinutes, 0) / 60);
    const mins = Math.max(totalMinutes, 0) % 60;

    return `${toBengaliNumber(hours)} ঘণ্টা ${toBengaliNumber(mins)} মিনিট`;
}
