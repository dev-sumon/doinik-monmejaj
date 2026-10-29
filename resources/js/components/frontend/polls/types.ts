export type Tone = 'brand' | 'warm' | 'tertiary' | 'outline' | 'default' | 'warm-container';

export type MastheadLiveRow = {
    label: string;
    value: string;
    tone: Tone;
};

export type PollsMasthead = {
    badge: string;
    title: string;
    lead: string;
    live: {
        status: string;
        dateLabel: string;
        rows: MastheadLiveRow[];
    };
};

export type PollOption = {
    id: string;
    label: string;
    percent: number;
    votesLabel: string;
    barTone: Tone;
    isLeader: boolean;
};

export type FeaturedOpinion = {
    author: string;
    time: string;
    body: string;
};

export type FeaturedPoll = {
    badge: string;
    countdown: string;
    question: string;
    lead: string;
    selectedOptionId: string;
    options: PollOption[];
    totalVotes: string;
    commentsCount: string;
    vignette: {
        image: string;
        alt: string;
        caption: string;
    };
    opinionsTitle: string;
    opinionsStatus: string;
    opinions: FeaturedOpinion[];
    opinionPlaceholder: string;
};

export type PollFilter = {
    id: string;
    label: string;
};

export type ActivePollOption = {
    label: string;
    percent: number;
    barTone: Tone;
    emphasize: boolean;
};

export type ActivePoll = {
    id: string;
    category: string;
    categoryTone: Tone;
    timeLeft: string;
    question: string;
    lead: string;
    options: ActivePollOption[];
    totalVotes: string;
    ctaLabel: string;
};

export type ArchiveStat = {
    label: string;
    value: string;
    tone: Tone;
};

export type ArchiveHighlight = {
    title: string;
    meta: string;
    eyebrow: string;
    headline: string;
    body: string;
    stats: ArchiveStat[];
    donut: {
        centerPercent: string;
        centerLabel: string;
        primaryPercent: number;
        legend: {
            label: string;
            tone: Tone;
        }[];
    };
};

export type SuggestPoll = {
    title: string;
    lead: string;
    questionLabel: string;
    questionPlaceholder: string;
    option1Label: string;
    option1Placeholder: string;
    option2Label: string;
    option2Placeholder: string;
    nameLabel: string;
    namePlaceholder: string;
    locationLabel: string;
    locationPlaceholder: string;
    submitLabel: string;
    note: string;
    successMessage: string;
};

export type PollsPageProps = {
    masthead: PollsMasthead;
    featured: FeaturedPoll;
    filters: PollFilter[];
    activePolls: ActivePoll[];
    archive: ArchiveHighlight;
    suggest: SuggestPoll;
};

export const barToneClass: Record<Tone, string> = {
    brand: 'bg-brand',
    warm: 'bg-warm',
    tertiary: 'bg-tertiary',
    outline: 'bg-outline-paper',
    default: 'bg-on-surface',
    'warm-container': 'bg-warm-container',
};

export const valueToneClass: Record<Tone, string> = {
    brand: 'text-brand',
    warm: 'text-warm',
    tertiary: 'text-tertiary',
    outline: 'text-outline-paper',
    default: 'text-on-surface',
    'warm-container': 'text-on-warm-container',
};

export const categoryToneClass: Record<Tone, string> = {
    brand: 'bg-brand/10 text-brand',
    warm: 'bg-warm/15 text-warm',
    tertiary: 'bg-tertiary-container/30 text-tertiary',
    outline: 'bg-surface-container text-on-surface-variant',
    default: 'bg-surface-container text-on-surface',
    'warm-container': 'bg-warm-container text-on-warm-container',
};
