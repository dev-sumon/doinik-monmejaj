import { toBengaliNumber, type ProfileTab, type SortOption } from './types';

export default function ProfileTabs({
    activeSort,
    activeTab,
    sortLabel,
    sortOptions,
    tabs,
    onSortChange,
    onTabChange,
}: {
    activeSort: string;
    activeTab: string;
    sortLabel: string;
    sortOptions: SortOption[];
    tabs: ProfileTab[];
    onSortChange: (id: string) => void;
    onTabChange: (id: string) => void;
}) {
    return (
        <div className="mt-space-lg pb-space-xs flex items-center justify-between overflow-x-auto">
            <div className="gap-space-xs flex min-w-max items-center">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;

                    return (
                        <button
                            className={`px-space-md py-space-xs font-label-editorial text-label-editorial flex items-center gap-1 rounded-full transition-colors ${
                                isActive
                                    ? 'bg-brand text-on-brand font-semibold shadow-sm'
                                    : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
                            }`}
                            key={tab.id}
                            type="button"
                            onClick={() => onTabChange(tab.id)}
                        >
                            <span>{tab.label}</span>
                            {tab.count !== null ? (
                                <span
                                    className={`rounded-full px-1.5 text-[11px] ${
                                        isActive
                                            ? 'bg-brand-container'
                                            : 'bg-surface-container'
                                    }`}
                                >
                                    {toBengaliNumber(tab.count)}
                                </span>
                            ) : null}
                        </button>
                    );
                })}
            </div>
            <div className="gap-space-xs font-label-dateline text-label-dateline text-warm hidden items-center sm:flex">
                <span>{sortLabel}</span>
                <select
                    className="bg-surface-container-low text-on-surface font-caption text-caption px-space-xs cursor-pointer rounded py-0.5 outline-none"
                    value={activeSort}
                    onChange={(event) => onSortChange(event.target.value)}
                >
                    {sortOptions.map((option) => (
                        <option key={option.id} value={option.id}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
