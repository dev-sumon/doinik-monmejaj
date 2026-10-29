import {
    ChevronDownIcon,
    CirclePlusIcon,
    FileTextIcon,
    SearchIcon,
} from 'lucide-react';
import type { ArchiveFilter, ArchiveMonth, ArchiveToolbar as ToolbarType } from './types';

export default function ArchiveToolbar({
    toolbar,
    filters,
    months,
    activeFilter,
    activeMonth,
    search,
    visibleCount,
    onFilterChange,
    onMonthChange,
    onSearchChange,
}: {
    toolbar: ToolbarType;
    filters: ArchiveFilter[];
    months: ArchiveMonth[];
    activeFilter: string;
    activeMonth: string;
    search: string;
    visibleCount: number;
    onFilterChange: (id: string) => void;
    onMonthChange: (id: string) => void;
    onSearchChange: (value: string) => void;
}) {
    return (
        <div className="bg-surface-container-lowest p-space-md mb-space-lg space-y-space-md shadow-sm">
            <div className="gap-space-md flex flex-col justify-between md:flex-row md:items-center">
                <div className="gap-space-sm flex flex-wrap items-center">
                    <button
                        className="gap-space-xs bg-brand text-on-brand hover:bg-brand-container font-label-editorial text-label-editorial inline-flex items-center px-space-lg py-space-sm tracking-wide shadow-sm transition-colors"
                        type="button"
                    >
                        <CirclePlusIcon className="h-5 w-5" />
                        <span className="font-bold">{toolbar.primaryCta}</span>
                    </button>
                    <button
                        className="gap-space-xs bg-surface-container-low text-warm hover:text-brand hover:bg-surface-container font-label-editorial text-label-editorial inline-flex items-center px-space-md py-space-sm transition-colors"
                        type="button"
                    >
                        <FileTextIcon className="h-[18px] w-[18px]" />
                        <span>{toolbar.secondaryCta}</span>
                    </button>
                </div>
                <div className="font-caption text-caption text-warm">
                    প্রদর্শিত হচ্ছে:{' '}
                    <span className="text-brand font-semibold">
                        {visibleCount}
                        {toolbar.countSuffix}
                    </span>
                </div>
            </div>
            <div className="pt-space-xs gap-space-md flex flex-col items-stretch justify-between lg:flex-row lg:items-center">
                <div className="gap-space-xs flex items-center overflow-x-auto pb-1 lg:pb-0">
                    {filters.map((filter) => {
                        const isActive = filter.id === activeFilter;

                        return (
                            <button
                                className={`font-label-editorial text-label-editorial shrink-0 whitespace-nowrap px-space-sm py-1.5 transition-colors ${
                                    isActive
                                        ? 'bg-brand text-on-brand'
                                        : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
                                }`}
                                key={filter.id}
                                type="button"
                                onClick={() => onFilterChange(filter.id)}
                            >
                                {filter.label}
                            </button>
                        );
                    })}
                </div>
                <div className="gap-space-xs flex flex-1 flex-col items-stretch sm:flex-row sm:items-center lg:max-w-md">
                    <div className="relative flex-1">
                        <SearchIcon className="text-on-surface-variant absolute top-1/2 left-space-xs h-[18px] w-[18px] -translate-y-1/2" />
                        <input
                            className="bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant/70 focus:bg-surface-container-lowest w-full py-1.5 pr-space-sm pl-8 transition-colors focus:outline-none"
                            placeholder={toolbar.searchPlaceholder}
                            type="text"
                            value={search}
                            onChange={(event) =>
                                onSearchChange(event.target.value)
                            }
                        />
                    </div>
                    <div className="relative min-w-[140px]">
                        <select
                            className="bg-surface-container-low font-label-editorial text-label-editorial text-on-surface focus:bg-surface-container-lowest w-full cursor-pointer appearance-none px-space-sm py-1.5 pr-8 focus:outline-none"
                            value={activeMonth}
                            onChange={(event) =>
                                onMonthChange(event.target.value)
                            }
                        >
                            {months.map((month) => (
                                <option key={month.id} value={month.id}>
                                    {month.label}
                                </option>
                            ))}
                        </select>
                        <ChevronDownIcon className="text-on-surface-variant pointer-events-none absolute top-1/2 right-2 h-[18px] w-[18px] -translate-y-1/2" />
                    </div>
                </div>
            </div>
        </div>
    );
}
