import type { LucideIcon } from 'lucide-react';
import {
    BookOpenCheck,
    Heart,
    Pen,
    Share2,
    Smile,
    ThumbsUp,
} from 'lucide-react';

export type Tone = 'brand' | 'warm' | 'tertiary';

export type HomeCta = {
    label: string;
    href: string;
};

export type HeroContent = {
    kicker: string;
    title: string;
    lead: string;
    primaryCta: HomeCta;
    secondaryCta: HomeCta;
};

export type BroadsheetContent = {
    sampleLabel: string;
    priceLabel: string;
    masthead: string;
    subhead: string;
    lead: {
        badge: string;
        title: string;
        byline: string[];
        imageSrc: string;
        imageAlt: string;
        imageCaption: string;
        dropCap: string;
        body: string[];
        pullQuote: string;
    };
    sideArticle: {
        badge: string;
        title: string;
        excerpt: string;
        author: string;
    };
    moodForecast: {
        title: string;
        body: string;
        metrics: string[];
    };
    notice: {
        eyebrow: string;
        title: string;
        body: string;
        ctaLabel: string;
    };
};

export type DailyThemeContent = {
    badge: string;
    title: string;
    lead: string;
    meta: string[];
    primaryCta: HomeCta;
    secondaryCta: HomeCta;
};

export type FeaturedPaper = {
    category: string;
    time: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    excerpt: string;
    authorInitial: string;
    authorName: string;
    authorLocation: string;
    tone: Tone;
    reactionIcon: string;
    reactionLabel: string;
    commentCount: string;
    bookmarked?: boolean;
};

export type HowItWorksStep = {
    step: string;
    title: string;
    description: string;
    footerIcon: string;
    footerLabel: string;
    tone: Tone;
};

export type CommunityContent = {
    stats: {
        value: string;
        label: string;
        caption: string;
    }[];
    cta: {
        title: string;
        lead: string;
        primaryCta: HomeCta;
        secondaryCta: HomeCta;
        footnote: string;
    };
};

export type HomePageProps = {
    hero: HeroContent;
    broadsheet: BroadsheetContent;
    dailyTheme: DailyThemeContent;
    featuredPapers: FeaturedPaper[];
    howItWorksSteps: HowItWorksStep[];
    community: CommunityContent;
};

export const toneBadgeClass: Record<Tone, string> = {
    brand: 'bg-brand text-on-brand',
    warm: 'bg-warm text-on-warm',
    tertiary: 'bg-tertiary text-on-tertiary',
};

const reactionIcons: Record<string, LucideIcon> = {
    smile: Smile,
    'thumbs-up': ThumbsUp,
    heart: Heart,
};

const stepIcons: Record<string, LucideIcon> = {
    pen: Pen,
    'book-open-check': BookOpenCheck,
    'share-2': Share2,
};

export function resolveReactionIcon(name: string): LucideIcon {
    return reactionIcons[name] ?? Smile;
}

export function resolveStepIcon(name: string): LucideIcon {
    return stepIcons[name] ?? Pen;
}
