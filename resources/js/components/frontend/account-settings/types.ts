export type SettingsNavItem = {
    id: string;
    label: string;
    icon: string;
    badge: string | null;
    danger: boolean;
};

export type SettingsHeader = {
    breadcrumbParent: string;
    breadcrumbCurrent: string;
    eyebrowItalic: string;
    badge: string;
    title: string;
    lead: string;
    savedMeta: string;
    viewProfileLabel: string;
};

export type PrintStats = {
    eyebrow: string;
    status: string;
    papers: string;
    papersLabel: string;
    readers: string;
    readersLabel: string;
    acceptance: string;
    acceptanceLabel: string;
    quote: string;
};

export type HelpCard = {
    title: string;
    body: string;
};

export type IdentitySection = {
    number: string;
    title: string;
    subtitle: string;
    sectionBadge: string;
    avatar: string;
    avatarTitle: string;
    avatarHint: string;
    uploadLabel: string;
    removeLabel: string;
    nameLabel: string;
    nameValue: string;
    nameHint: string;
    roleLabel: string;
    roleValue: string;
    roleHint: string;
    locationLabel: string;
    locationValue: string;
    locationHint: string;
    urlLabel: string;
    urlPrefix: string;
    urlSlug: string;
    urlHint: string;
    bioLabel: string;
    bioValue: string;
    bioMeta: string;
};

export type PublishMode = {
    id: string;
    title: string;
    body: string;
    recommended: boolean;
};

export type CommentRule = {
    id: string;
    title: string;
    body: string;
};

export type PrivacySection = {
    number: string;
    title: string;
    subtitle: string;
    sectionBadge: string;
    publishLabel: string;
    publishModes: PublishMode[];
    defaultPublish: string;
    commentsLabel: string;
    commentRules: CommentRule[];
    defaultComments: string;
    socialShare: {
        title: string;
        body: string;
        checked: boolean;
    };
};

export type NotificationPref = {
    id: string;
    title: string;
    body: string;
    checked: boolean;
};

export type NotificationsSection = {
    number: string;
    title: string;
    subtitle: string;
    sectionBadge: string;
    items: NotificationPref[];
};

export type SettingsActions = {
    secureNote: string;
    cancelLabel: string;
    saveLabel: string;
    savingLabel: string;
};

export type DangerZone = {
    title: string;
    subtitle: string;
    badge: string;
    deactivateTitle: string;
    deactivateBody: string;
    deactivateLabel: string;
    deleteTitle: string;
    deleteBody: string;
    downloadLabel: string;
    deleteLabel: string;
};

export type AccountSettingsPageProps = {
    header: SettingsHeader;
    nav: SettingsNavItem[];
    navTitle: string;
    printStats: PrintStats;
    helpCard: HelpCard;
    identity: IdentitySection;
    privacy: PrivacySection;
    notifications: NotificationsSection;
    actions: SettingsActions;
    dangerZone: DangerZone;
    toast: string;
    securityPlaceholder: {
        title: string;
        body: string;
    };
};

export type SettingsFormState = {
    name: string;
    role: string;
    location: string;
    urlSlug: string;
    bio: string;
    publishMode: string;
    commentsRule: string;
    socialShare: boolean;
    notifications: Record<string, boolean>;
};
