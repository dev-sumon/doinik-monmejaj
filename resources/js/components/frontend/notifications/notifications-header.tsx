import { CheckCheckIcon, MailOpenIcon, RefreshCwIcon, SlidersHorizontalIcon } from 'lucide-react';
import type { NotificationFilter, NotificationsHeader as HeaderType } from './types';
import { toBengaliNumber } from './types';

export default function NotificationsHeader({
    activeFilter,
    allRead,
    filters,
    header,
    onFilterChange,
    onMarkAllRead,
}: {
    activeFilter: string;
    allRead: boolean;
    filters: NotificationFilter[];
    header: HeaderType;
    onFilterChange: (id: string) => void;
    onMarkAllRead: () => void;
}) {
    return (
        <div className="bg-surface-container-lowest p-space-lg mb-space-lg relative overflow-hidden shadow-sm">
            <div className="bg-brand/5 pointer-events-none absolute -top-8 -right-8 h-44 w-44 rounded-full" />
            <div className="gap-space-md relative z-10 flex flex-col justify-between lg:flex-row lg:items-end">
                <div>
                    <div className="gap-space-xs font-label-dateline text-label-dateline text-warm mb-1 flex items-center tracking-widest uppercase">
                        <MailOpenIcon className="text-brand h-4 w-4 fill-current" />
                        <span>{header.eyebrow}</span>
                        <span className="text-outline">/</span>
                        <span>{header.dossierNo}</span>
                    </div>
                    <h1 className="font-headline-lg text-headline-lg text-brand font-bold tracking-tight">
                        {header.title}
                    </h1>
                    <p className="font-lead text-lead text-on-surface-variant mt-1 max-w-2xl">
                        {header.lead}
                    </p>
                </div>
                <div className="gap-space-sm pt-space-xs lg:pt-0 flex flex-wrap items-center">
                    <button
                        className="gap-space-xs px-space-md py-space-xs bg-surface-container hover:bg-surface-container-high text-on-surface font-label-editorial text-label-editorial inline-flex cursor-pointer items-center transition-all disabled:cursor-default disabled:opacity-70"
                        disabled={allRead}
                        type="button"
                        onClick={onMarkAllRead}
                    >
                        <CheckCheckIcon className="text-brand h-[17px] w-[17px]" />
                        <span>
                            {allRead
                                ? header.markAllDoneLabel
                                : header.markAllLabel}
                        </span>
                    </button>
                    <button
                        className="gap-space-xs px-space-sm py-space-xs bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-editorial text-label-editorial inline-flex items-center transition-all"
                        type="button"
                    >
                        <SlidersHorizontalIcon className="h-[18px] w-[18px]" />
                        <span className="hidden sm:inline">
                            {header.settingsLabel}
                        </span>
                    </button>
                </div>
            </div>
            <div className="mt-space-lg pt-space-md gap-space-md flex flex-wrap items-center justify-between">
                <div className="gap-space-xs flex flex-wrap items-center">
                    {filters.map((filter) => {
                        const isActive = activeFilter === filter.id;

                        return (
                            <button
                                className={`px-space-md font-label-editorial text-label-editorial py-1 transition-colors ${
                                    isActive
                                        ? 'bg-brand text-on-brand'
                                        : 'bg-surface-container-low hover:bg-surface-container text-on-surface-variant'
                                }`}
                                key={filter.id}
                                type="button"
                                onClick={() => onFilterChange(filter.id)}
                            >
                                {filter.label} ({toBengaliNumber(filter.count)})
                            </button>
                        );
                    })}
                </div>
                <div className="gap-space-xs font-label-dateline text-label-dateline text-warm flex items-center">
                    <RefreshCwIcon className="text-tertiary h-[15px] w-[15px]" />
                    <span>{header.liveLabel}</span>
                </div>
            </div>
        </div>
    );
}
