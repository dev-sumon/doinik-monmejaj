export type Tone =
    | 'brand'
    | 'warm'
    | 'tertiary'
    | 'outline'
    | 'default'
    | 'warm-fixed';

export type ArchiveHeader = {
    badge: string;
    dossierNo: string;
    title: string;
    lead: string;
    printStamp: {
        count: string;
        label: string;
        meta: string;
    };
};

export type ArchiveStat = {
    label: string;
    icon: string;
    value: string;
    hint: string;
    valueTone: Tone;
    highlight: boolean;
};

export type WeeklyRecap = {
    eyebrow: string;
    issue: string;
    image: string;
    imageAlt: string;
    imageCaption: string;
    imageQuote: string;
    pagesMeta: string;
    savedMeta: string;
    badges: {
        label: string;
        tone: Tone;
    }[];
    title: string;
    body: string;
    progressLabel: string;
    progressValue: string;
    progressPercent: number;
    primaryAction: string;
    secondaryAction: string;
    tertiaryAction: string;
};

export type ArchiveToolbar = {
    primaryCta: string;
    secondaryCta: string;
    searchPlaceholder: string;
    countSuffix: string;
};

export type ArchiveFilter = {
    id: string;
    label: string;
};

export type ArchiveMonth = {
    id: string;
    label: string;
};

export type PaperMeta = {
    icon: string;
    label: string;
};

export type NewspaperPaper = {
    id: string;
    date: string;
    status: string;
    month: string;
    masthead: string;
    edition: string;
    image: string;
    imageAlt: string;
    readTime: string;
    title: string;
    excerpt: string;
    metaLeft: PaperMeta;
    metaRight: PaperMeta;
    actions: string[];
};

export type ArchivePagination = {
    pageLabel: string;
    pages: (number | null)[];
    currentPage: number;
    quote: string;
};

export type MyArchivePageProps = {
    header: ArchiveHeader;
    stats: ArchiveStat[];
    weeklyRecap: WeeklyRecap;
    toolbar: ArchiveToolbar;
    filters: ArchiveFilter[];
    months: ArchiveMonth[];
    papers: NewspaperPaper[];
    pagination: ArchivePagination;
};

export const valueToneClass: Record<Tone, string> = {
    brand: 'text-brand',
    warm: 'text-warm',
    tertiary: 'text-tertiary',
    outline: 'text-outline-paper',
    default: 'text-on-surface',
    'warm-fixed': 'text-on-warm-fixed',
};

export const badgeToneClass: Record<Tone, string> = {
    brand: 'bg-brand text-on-brand',
    warm: 'bg-warm text-on-warm',
    tertiary: 'bg-tertiary text-on-tertiary',
    outline: 'bg-outline-paper text-surface',
    default: 'bg-surface-container text-on-surface',
    'warm-fixed': 'bg-warm-fixed text-on-warm-fixed',
};
