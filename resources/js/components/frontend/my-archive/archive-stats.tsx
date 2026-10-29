import {
    CalendarDaysIcon,
    GlobeIcon,
    HeartIcon,
    LockIcon,
    NewspaperIcon,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { valueToneClass, type ArchiveStat } from './types';

const statIcons: Record<string, LucideIcon> = {
    newspaper: NewspaperIcon,
    calendar: CalendarDaysIcon,
    public: GlobeIcon,
    lock: LockIcon,
    heart: HeartIcon,
};

export default function ArchiveStats({ stats }: { stats: ArchiveStat[] }) {
    return (
        <div className="gap-space-sm pt-space-md grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {stats.map((stat) => {
                const Icon = statIcons[stat.icon] ?? NewspaperIcon;

                return (
                    <div
                        className={`p-space-sm flex flex-col justify-between ${
                            stat.highlight
                                ? 'bg-warm-container text-on-warm-container col-span-2 md:col-span-1'
                                : 'bg-surface-container-low'
                        }`}
                        key={stat.label}
                    >
                        <div
                            className={`flex items-center justify-between ${
                                stat.highlight
                                    ? 'text-on-warm-fixed-variant'
                                    : 'text-warm'
                            }`}
                        >
                            <span className="font-label-dateline text-label-dateline font-semibold">
                                {stat.label}
                            </span>
                            <Icon
                                className={`h-[18px] w-[18px] ${stat.highlight ? 'fill-current' : ''}`}
                            />
                        </div>
                        <div className="mt-space-xs">
                            <span
                                className={`font-headline-md text-headline-md font-bold ${valueToneClass[stat.valueTone]}`}
                            >
                                {stat.value}
                            </span>
                            <span
                                className={`font-caption text-caption block ${
                                    stat.highlight
                                        ? 'text-on-warm-fixed-variant'
                                        : 'text-on-surface-variant'
                                }`}
                            >
                                {stat.hint}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
