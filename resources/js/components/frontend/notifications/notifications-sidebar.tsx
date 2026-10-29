import {
    ArrowRightIcon,
    BellRingIcon,
    BookmarkIcon,
    PinIcon,
} from 'lucide-react';
import type { NotificationsSidebar as SidebarType } from './types';

export default function NotificationsSidebar({
    preferences,
    sidebar,
    onPreferenceToggle,
}: {
    preferences: Record<string, boolean>;
    sidebar: SidebarType;
    onPreferenceToggle: (id: string) => void;
}) {
    const { guidelines, printTeaser } = sidebar;

    return (
        <aside className="space-y-space-md">
            <div className="bg-surface-container-lowest p-space-md shadow-sm">
                <div className="mb-space-sm pb-space-xs flex items-center justify-between">
                    <span className="font-label-editorial text-label-editorial text-brand font-bold uppercase">
                        {guidelines.eyebrow}
                    </span>
                    <PinIcon className="text-warm h-[18px] w-[18px]" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs leading-snug font-bold">
                    {guidelines.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                    {guidelines.body}
                </p>
                <div className="bg-surface-container-low p-space-sm mb-space-md">
                    <div className="font-label-dateline text-label-dateline mb-1 flex justify-between">
                        <span className="text-warm font-medium">
                            {guidelines.meterLabel}
                        </span>
                        <span className="text-brand font-bold">
                            {guidelines.meterValue}
                        </span>
                    </div>
                    <div className="bg-surface-container-highest flex h-2 w-full overflow-hidden rounded-full">
                        <div
                            className="bg-brand h-full"
                            style={{ width: `${guidelines.meterPercent}%` }}
                        />
                        <div
                            className="bg-warm h-full"
                            style={{
                                width: `${100 - guidelines.meterPercent}%`,
                            }}
                        />
                    </div>
                    <div className="font-caption text-caption text-warm mt-1 flex justify-between">
                        <span>{guidelines.meterLeft}</span>
                        <span>{guidelines.meterRight}</span>
                    </div>
                </div>
                <button
                    className="text-brand font-label-editorial text-label-editorial inline-flex items-center gap-1 font-semibold hover:underline"
                    type="button"
                >
                    <span>{guidelines.linkLabel}</span>
                    <ArrowRightIcon className="h-[15px] w-[15px]" />
                </button>
            </div>

            <div className="bg-surface-container-lowest p-space-md shadow-sm">
                <div className="gap-space-xs mb-space-sm pb-space-xs flex items-center">
                    <BellRingIcon className="text-brand h-5 w-5" />
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        {sidebar.preferencesTitle}
                    </h3>
                </div>
                <div className="space-y-space-sm font-body-sm text-body-sm">
                    {sidebar.preferences.map((pref) => (
                        <label
                            className="gap-space-sm flex cursor-pointer items-start justify-between py-1"
                            key={pref.id}
                        >
                            <div>
                                <span className="text-on-surface block font-medium">
                                    {pref.title}
                                </span>
                                <span className="font-caption text-caption text-warm">
                                    {pref.body}
                                </span>
                            </div>
                            <input
                                checked={preferences[pref.id] ?? pref.checked}
                                className="accent-brand mt-1 h-4 w-4 cursor-pointer rounded-none"
                                type="checkbox"
                                onChange={() => onPreferenceToggle(pref.id)}
                            />
                        </label>
                    ))}
                </div>
                <div className="mt-space-md pt-space-sm flex items-center justify-between">
                    <button
                        className="text-brand font-label-editorial text-label-editorial font-semibold hover:underline"
                        type="button"
                    >
                        {sidebar.preferencesLink}
                    </button>
                    <span className="font-label-dateline text-label-dateline text-warm">
                        {sidebar.preferencesNote}
                    </span>
                </div>
            </div>

            <div className="bg-surface-container-high p-space-md relative overflow-hidden shadow-sm">
                <div className="gap-space-xs font-label-dateline text-label-dateline text-warm mb-1 flex items-center">
                    <BookmarkIcon className="h-4 w-4" />
                    <span>{printTeaser.eyebrow}</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-bold">
                    {printTeaser.title}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                    {printTeaser.body}
                </p>
                <button
                    className="bg-on-surface text-surface hover:bg-brand font-label-editorial text-label-editorial py-space-xs w-full text-center transition-colors"
                    type="button"
                >
                    {printTeaser.ctaLabel}
                </button>
            </div>
        </aside>
    );
}
