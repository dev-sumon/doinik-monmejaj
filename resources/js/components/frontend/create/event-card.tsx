import {
    CoffeeIcon,
    LightbulbIcon,
    NewspaperIcon,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
    formatWordCounter,
    toneBadgeClass,
    toneBgClass,
    type CreateEvent,
} from './types';

const hintIcons: Record<string, LucideIcon> = {
    tips: LightbulbIcon,
    newspaper: NewspaperIcon,
    coffee: CoffeeIcon,
};

export default function EventCard({
    event,
    value,
    category,
    onChange,
    onCategoryChange,
}: {
    event: CreateEvent;
    value: string;
    category?: string;
    onChange: (value: string) => void;
    onCategoryChange?: (value: string) => void;
}) {
    const HintIcon = hintIcons[event.hintIcon] ?? LightbulbIcon;

    return (
        <div className="bg-surface-container-lowest p-space-lg relative overflow-hidden rounded shadow-sm transition-all duration-300 focus-within:shadow-md">
            <div className="mb-space-sm gap-space-sm flex items-center justify-between">
                <div className="gap-space-sm flex min-w-0 items-center">
                    <span
                        className={`font-headline-sm text-body-sm flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-bold ${toneBgClass[event.tone]}`}
                    >
                        {event.number}
                    </span>
                    <label
                        className="font-headline-sm text-headline-sm text-on-surface font-semibold"
                        htmlFor={event.id}
                    >
                        {event.label}
                    </label>
                </div>
                <span
                    className={`font-label-editorial text-label-editorial shrink-0 rounded px-space-xs py-0.5 ${toneBadgeClass[event.tone]}`}
                >
                    {event.badge}
                </span>
            </div>
            {event.categoryOptions && onCategoryChange && (
                <div className="mb-space-md">
                    <select
                        className="bg-surface-container-low text-on-surface font-body-sm text-body-sm hover:bg-surface-container w-full cursor-pointer rounded px-space-md py-space-xs outline-none transition-colors"
                        id={`${event.id}-category`}
                        value={category}
                        onChange={(e) => onCategoryChange(e.target.value)}
                    >
                        {event.categoryOptions.map((option) => (
                            <option key={option} value={option}>
                                বিষয়বস্তু: {option}
                            </option>
                        ))}
                    </select>
                </div>
            )}
            <textarea
                className="bg-surface text-on-surface font-body-md text-body-md placeholder:text-outline-paper w-full resize-y rounded p-space-md outline-none transition-all"
                id={event.id}
                placeholder={event.placeholder}
                rows={event.id === 'event1' ? 4 : 3}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <div className="mt-space-sm flex items-center justify-between gap-space-sm">
                <div className="text-warm font-label-dateline text-label-dateline flex items-center gap-1">
                    <HintIcon className="h-[15px] w-[15px] shrink-0" />
                    <span>{event.hint}</span>
                </div>
                <span className="font-label-dateline text-label-dateline text-on-surface-variant shrink-0 font-medium">
                    {formatWordCounter(value, event.maxWords)}
                </span>
            </div>
        </div>
    );
}
