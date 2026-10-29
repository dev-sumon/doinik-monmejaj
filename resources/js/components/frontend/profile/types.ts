export type Tone = 'brand' | 'warm' | 'tertiary' | 'default';

export type PressPass = {
    avatar: string;
    avatarAlt: string;
    verifiedTitle: string;
    passNo: string;
    statusBadge: string;
    name: string;
    role: string;
    org: string;
    bio: string;
    joined: string;
    location: string;
    editionCount: string;
    writeCta: string;
    editCta: string;
    shareTitle: string;
    settingsTitle: string;
};

export type ProfileMetric = {
    id: string;
    icon: string;
    label: string;
    value: string;
    hint: string;
    tone: Tone;
};

export type ProfileTab = {
    id: string;
    label: string;
    count: number | null;
};

export type SortOption = {
    id: string;
    label: string;
};

export type FeaturedPaper = {
    badge: string;
    editionNo: string;
    readTime: string;
    title: string;
    lead: string;
    quote: string;
    hearts: string;
    letters: string;
    bookmarks: string;
    openLabel: string;
    shareLabel: string;
    image: string;
    imageCaption: string;
};

export type PortfolioPaper = {
    id: string;
    editionNo: string;
    date: string;
    category: string;
    categoryTone: 'brand' | 'warm' | 'tertiary';
    tab: string;
    title: string;
    excerpt: string;
    image: string;
    hearts: string;
    comments: string;
    heartsNum: number;
    commentsNum: number;
    sortDate: number;
};

export type ProfilePagination = {
    meta: string;
    prevLabel: string;
    nextLabel: string;
    pages: (number | null)[];
    current: number;
};

export type ProfileSidebar = {
    topicsTitle: string;
    topicsMeta: string;
    topics: string[];
    activityLabel: string;
    activityDelta: string;
    activityBars: { day: string; height: number; title: string }[];
    commentsTitle: string;
    commentsAllLabel: string;
    comments: {
        initials: string;
        tone: 'brand' | 'warm' | 'tertiary';
        name: string;
        meta: string;
        body: string;
        paper: string;
    }[];
    recapsTitle: string;
    recapsBadge: string;
    recapsLead: string;
    recaps: { title: string; meta: string }[];
    pledgeTitle: string;
    pledgeBody: string;
};

export type ProfilePageProps = {
    pressPass: PressPass;
    metrics: ProfileMetric[];
    tabs: ProfileTab[];
    sortOptions: SortOption[];
    sortLabel: string;
    featured: FeaturedPaper;
    portfolio: {
        title: string;
        subtitle: string;
        showingLabel: string;
        readLabel: string;
        papers: PortfolioPaper[];
    };
    pagination: ProfilePagination;
    sidebar: ProfileSidebar;
};

export const categoryToneClass: Record<
    'brand' | 'warm' | 'tertiary',
    string
> = {
    brand: 'bg-brand-container/15 text-brand',
    warm: 'bg-warm-container/20 text-on-warm-container',
    tertiary: 'bg-tertiary-container/20 text-tertiary',
};

export const commentToneClass: Record<'brand' | 'warm' | 'tertiary', string> = {
    brand: 'bg-brand-container text-on-brand',
    warm: 'bg-warm-container text-on-warm-container',
    tertiary: 'bg-tertiary-container text-on-tertiary-container',
};

export const metricValueClass: Record<Tone, string> = {
    brand: 'text-brand',
    warm: 'text-warm',
    tertiary: 'text-tertiary',
    default: 'text-on-surface',
};
