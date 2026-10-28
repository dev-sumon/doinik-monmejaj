import { ClockIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { formatCountdown, type ThemeSubBar } from './types';

export default function ThemeSubBar({ subBar }: { subBar: ThemeSubBar }) {
    const [minutesLeft, setMinutesLeft] = useState(subBar.countdownMinutes);

    useEffect(() => {
        setMinutesLeft(subBar.countdownMinutes);

        const timer = window.setInterval(() => {
            setMinutesLeft((current) => (current > 0 ? current - 1 : 0));
        }, 60_000);

        return () => window.clearInterval(timer);
    }, [subBar.countdownMinutes]);

    return (
        <div className="border-outline-variant text-on-surface-variant font-label-dateline text-label-dateline pb-space-sm mb-space-md flex flex-wrap items-center justify-between gap-space-sm border-b">
            <div className="gap-space-xs flex items-center">
                <span className="bg-brand inline-block h-2 w-2 animate-pulse rounded-full" />
                <span className="text-brand font-semibold tracking-widest uppercase">
                    {subBar.eyebrow}
                </span>
                <span className="text-outline-variant">/</span>
                <span>{subBar.issue}</span>
            </div>
            <div className="gap-space-md flex items-center">
                <span className="text-warm flex items-center gap-1">
                    <ClockIcon className="h-[15px] w-[15px]" />
                    {subBar.dateLabel} • সময় বাকি:{' '}
                    <strong className="text-on-surface font-semibold">
                        {formatCountdown(minutesLeft)}
                    </strong>
                </span>
            </div>
        </div>
    );
}
