export type Tone = 'brand' | 'warm' | 'tertiary';

export type FeedHeader = {
    eyebrow: string;
    title: string;
    lead: string;
    counters: {
        label: string;
        value: string;
        tone: Tone;
    }[];
};

export type FeedTab = {
    id: string;
    label: string;
};

export type StoryReaction = {
    icon: string;
    count: string;
    label: string;
};

export type FeedStory = {
    id: string;
    author: {
        name: string;
        avatar: string;
        verified: boolean;
        verifyTone: Tone;
        time: string;
        location: string;
    };
    category: string;
    categoryTone: Tone;
    kicker: string;
    edition: string;
    title: string;
    deck: string;
    layout: 'image-right' | 'image-left' | 'text-only';
    body: string[];
    quote: string | null;
    notice: {
        icon: string;
        text: string;
        badge: string;
    } | null;
    image: {
        src: string;
        alt: string;
        caption: string;
    } | null;
    reactions: StoryReaction[];
};

export type WritePrompt = {
    eyebrow: string;
    title: string;
    body: string;
    cta: {
        label: string;
        href: string;
    };
};

export type PollOption = {
    id: string;
    icon: string;
    label: string;
    percent: number;
    votes: number;
};

export type PollContent = {
    eyebrow: string;
    status: string;
    question: string;
    totalVotesLabel: string;
    realtimeLabel: string;
    options: PollOption[];
};

export type EditorsPick = {
    meta: string;
    metaTone: Tone;
    title: string;
    excerpt: string;
    href: string;
};

export type Writer = {
    name: string;
    avatar: string;
    bio: string;
    readers: string;
};

export type Motto = {
    eyebrow: string;
    body: string;
};

export type CommunityFeedPageProps = {
    header: FeedHeader;
    tabs: FeedTab[];
    topics: string[];
    stories: FeedStory[];
    writePrompt: WritePrompt;
    poll: PollContent;
    editorsPicks: EditorsPick[];
    writers: Writer[];
    motto: Motto;
};

export const toneTextClass: Record<Tone, string> = {
    brand: 'text-brand',
    warm: 'text-warm',
    tertiary: 'text-tertiary',
};

export const toneCategoryClass: Record<Tone, string> = {
    brand: 'text-brand',
    warm: 'text-warm',
    tertiary: 'text-tertiary',
};
