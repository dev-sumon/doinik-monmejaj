import {
    BadgeIcon,
    BellRingIcon,
    BookOpenIcon,
    CoffeeIcon,
    GavelIcon,
    LockIcon,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { HelpCard, PrintStats, SettingsNavItem } from './types';

const navIcons: Record<string, LucideIcon> = {
    badge: BadgeIcon,
    book: BookOpenIcon,
    bell: BellRingIcon,
    lock: LockIcon,
    gavel: GavelIcon,
};

export default function SettingsNav({
    activeNav,
    helpCard,
    nav,
    navTitle,
    printStats,
    onNavChange,
}: {
    activeNav: string;
    helpCard: HelpCard;
    nav: SettingsNavItem[];
    navTitle: string;
    printStats: PrintStats;
    onNavChange: (id: string) => void;
}) {
    return (
        <aside className="gap-space-md sticky top-32 flex flex-col">
            <nav className="bg-surface-container-lowest p-space-md gap-1 flex flex-col rounded-lg shadow-sm">
                <div className="font-label-editorial text-label-editorial text-warm px-space-sm mb-1 py-1 tracking-wider uppercase">
                    {navTitle}
                </div>
                {nav.map((item) => {
                    const Icon = navIcons[item.icon] ?? BadgeIcon;
                    const isActive = activeNav === item.id;

                    return (
                        <button
                            className={`px-space-sm py-space-xs flex w-full items-center justify-between rounded text-left transition-all ${
                                item.danger
                                    ? 'text-error hover:bg-error-container/20'
                                    : isActive
                                      ? 'bg-surface-container text-brand'
                                      : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                            }`}
                            key={item.id}
                            type="button"
                            onClick={() => onNavChange(item.id)}
                        >
                            <div className="gap-space-sm flex items-center">
                                <Icon
                                    className={`h-5 w-5 ${
                                        item.danger
                                            ? 'text-error'
                                            : isActive
                                              ? 'text-brand fill-current'
                                              : ''
                                    }`}
                                />
                                <span
                                    className={`font-body-md text-body-md ${
                                        isActive || item.danger
                                            ? 'font-semibold'
                                            : ''
                                    } ${isActive ? 'font-headline-sm text-headline-sm' : ''}`}
                                >
                                    {item.label}
                                </span>
                            </div>
                            {isActive && !item.danger ? (
                                <span className="bg-brand h-2 w-2 rounded-full" />
                            ) : null}
                            {item.badge ? (
                                <span className="bg-surface-container-high font-caption text-caption text-warm rounded px-1.5 py-0.5">
                                    {item.badge}
                                </span>
                            ) : null}
                        </button>
                    );
                })}
            </nav>

            <div className="bg-surface-container p-space-md gap-space-sm flex flex-col rounded-lg shadow-sm">
                <div className="pb-space-xs flex items-center justify-between">
                    <span className="font-label-editorial text-label-editorial text-warm uppercase">
                        {printStats.eyebrow}
                    </span>
                    <span className="font-caption text-caption text-tertiary bg-tertiary-fixed inline-flex items-center gap-1 rounded px-2 py-0.5 font-bold">
                        <span className="bg-tertiary h-1.5 w-1.5 rounded-full" />{' '}
                        {printStats.status}
                    </span>
                </div>
                <div className="gap-space-md pt-space-xs flex items-center">
                    <div className="flex flex-col">
                        <span className="font-headline-md text-headline-md text-brand font-bold">
                            {printStats.papers}
                        </span>
                        <span className="font-caption text-caption text-on-surface-variant">
                            {printStats.papersLabel}
                        </span>
                    </div>
                    <div className="bg-outline/20 h-8 w-px" />
                    <div className="flex flex-col">
                        <span className="font-headline-md text-headline-md text-brand font-bold">
                            {printStats.readers}
                        </span>
                        <span className="font-caption text-caption text-on-surface-variant">
                            {printStats.readersLabel}
                        </span>
                    </div>
                    <div className="bg-outline/20 h-8 w-px" />
                    <div className="flex flex-col">
                        <span className="font-headline-md text-headline-md text-brand font-bold">
                            {printStats.acceptance}
                        </span>
                        <span className="font-caption text-caption text-on-surface-variant">
                            {printStats.acceptanceLabel}
                        </span>
                    </div>
                </div>
                <p className="font-caption text-caption text-warm mt-1 italic">
                    {printStats.quote}
                </p>
            </div>

            <div className="bg-surface-container-low p-space-md gap-space-sm flex items-start rounded-lg shadow-sm">
                <CoffeeIcon className="text-warm h-6 w-6 shrink-0" />
                <div>
                    <span className="font-label-editorial text-label-editorial text-on-surface font-bold">
                        {helpCard.title}
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        {helpCard.body}
                    </p>
                </div>
            </div>
        </aside>
    );
}
