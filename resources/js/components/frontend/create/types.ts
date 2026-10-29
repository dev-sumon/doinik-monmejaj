export type Tone = 'brand' | 'warm' | 'tertiary';

export type CreateHero = {
    badge: string;
    title: string;
    lead: string;
    editionLabel: string;
    editionValue: string;
};

export type CreateEvent = {
    id: string;
    number: string;
    label: string;
    badge: string;
    tone: Tone;
    placeholder: string;
    defaultValue: string;
    hint: string;
    hintIcon: string;
    maxWords: number;
    categoryOptions: string[] | null;
    defaultCategory: string | null;
};

export type CreateMeta = {
    sectionTitle: string;
    mastheadLabel: string;
    mastheadDefault: string;
    bylineLabel: string;
    bylinePlaceholder: string;
    bylineDefault: string;
    styleLabel: string;
    visibilityLabel: string;
    generateLabel: string;
    generateHint: string;
    generatingLabel: string;
    doneLabel: string;
    successMessage: string;
};

export type CreateStyle = {
    id: string;
    icon: string;
    title: string;
    body: string;
    tag: string;
    tone: Tone;
    previewLabel: string;
};

export type CreateVisibility = {
    id: string;
    title: string;
    body: string;
};

export type CreatePreview = {
    liveLabel: string;
    draftLabel: string;
    issueLeft: string;
    issueDate: string;
    issuePrice: string;
    tagline: string;
    defaultHeadline: string;
    fallbackHeadline: string;
    image: string;
    imageAlt: string;
    imageCaption: string;
    col2Title: string;
    col2Meta: string;
    col3Title: string;
    col3Meta: string;
    pendingLabel: string;
    tip: string;
};

export type CreateFooterCta = {
    title: string;
    lead: string;
    archiveLabel: string;
    bestLabel: string;
};

export type CreatePageProps = {
    hero: CreateHero;
    events: CreateEvent[];
    meta: CreateMeta;
    styles: CreateStyle[];
    visibility: CreateVisibility[];
    preview: CreatePreview;
    footerCta: CreateFooterCta;
};

export type CreateFormState = {
    masthead: string;
    byline: string;
    category: string;
    event1: string;
    event2: string;
    event3: string;
    styleId: string;
    visibilityId: string;
};

export const toneBgClass: Record<Tone, string> = {
    brand: 'bg-brand text-on-brand',
    warm: 'bg-warm text-on-warm',
    tertiary: 'bg-tertiary text-on-tertiary',
};

export const toneBadgeClass: Record<Tone, string> = {
    brand: 'bg-brand/10 text-brand',
    warm: 'bg-warm/15 text-warm',
    tertiary: 'bg-tertiary/15 text-tertiary',
};

export const toneTextClass: Record<Tone, string> = {
    brand: 'text-brand',
    warm: 'text-warm',
    tertiary: 'text-tertiary',
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

export function getWordCount(value: string): number {
    const trimmed = value.trim();

    if (!trimmed) {
        return 0;
    }

    return trimmed.split(/\s+/).length;
}

export function formatWordCounter(value: string, maxWords: number): string {
    return `${toBengaliNumber(getWordCount(value))} / ${toBengaliNumber(maxWords)} শব্দ`;
}
