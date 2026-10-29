import {
    HeartIcon,
    MailIcon,
    MessagesSquareIcon,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
    toneBar,
    toneFixedBg,
    toneValue,
    toBengaliNumber,
    type NotificationMetric,
} from './types';

const metricIcons: Record<string, LucideIcon> = {
    mail: MailIcon,
    heart: HeartIcon,
    forum: MessagesSquareIcon,
};

export default function NotificationMetrics({
    metrics,
    unreadCount,
}: {
    metrics: NotificationMetric[];
    unreadCount: number;
}) {
    return (
        <div className="gap-space-md mb-space-xl grid grid-cols-1 md:grid-cols-3">
            {metrics.map((metric) => {
                const Icon = metricIcons[metric.icon] ?? MailIcon;
                const displayValue = metric.dynamic
                    ? toBengaliNumber(unreadCount)
                    : metric.value;

                return (
                    <div
                        className="bg-surface-container-lowest p-space-md relative flex items-center justify-between overflow-hidden shadow-sm"
                        key={metric.id}
                    >
                        <div className="gap-space-md flex items-center">
                            <div
                                className={`flex h-12 w-12 items-center justify-center ${toneFixedBg[metric.tone]}`}
                            >
                                <Icon
                                    className={`h-6 w-6 ${metric.icon === 'heart' ? 'fill-current' : ''}`}
                                />
                            </div>
                            <div>
                                <div className="flex items-baseline gap-1">
                                    <span
                                        className={`font-headline-md text-headline-md font-bold ${toneValue[metric.tone]}`}
                                    >
                                        {displayValue}
                                    </span>
                                    <span className="font-label-editorial text-label-editorial text-on-surface-variant">
                                        {metric.unit}
                                    </span>
                                </div>
                                <p className="font-caption text-caption text-warm font-semibold uppercase">
                                    {metric.label}
                                </p>
                            </div>
                        </div>
                        <div
                            className={`h-8 w-1.5 rounded-full ${toneBar[metric.tone]}`}
                        />
                    </div>
                );
            })}
        </div>
    );
}
