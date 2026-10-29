import {
    BookOpenIcon,
    HeartIcon,
    SmileIcon,
    TrendingUpIcon,
    UsersIcon,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
    barToneClass,
    iconToneClass,
    type RecapMetric,
} from './types';

const metricIcons: Record<string, LucideIcon> = {
    book: BookOpenIcon,
    group: UsersIcon,
    heart: HeartIcon,
    smile: SmileIcon,
};

export default function RecapMetrics({ metrics }: { metrics: RecapMetric[] }) {
    return (
        <section className="gap-space-md mb-space-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => {
                const Icon = metricIcons[metric.icon] ?? BookOpenIcon;
                const valueClass =
                    metric.valueSize === 'md'
                        ? 'font-headline-md text-headline-md text-brand font-bold'
                        : 'font-headline-xl text-headline-xl text-on-surface font-bold';

                return (
                    <div
                        className="bg-surface-container-lowest p-space-md hover:bg-surface-container-low group relative flex flex-col justify-between rounded shadow-sm transition-colors"
                        key={metric.id}
                    >
                        <div className="mb-space-xs flex items-center justify-between">
                            <span className="font-label-editorial text-label-editorial text-warm font-semibold uppercase">
                                {metric.label}
                            </span>
                            <Icon
                                className={`h-5 w-5 ${iconToneClass[metric.iconTone]} ${
                                    metric.icon === 'heart' ? 'fill-current' : ''
                                }`}
                            />
                        </div>
                        <div>
                            <div className="gap-space-xs flex flex-wrap items-baseline">
                                <span className={valueClass}>
                                    {metric.value}
                                    {metric.valueSuffix ? (
                                        <span className="font-headline-md text-headline-md">
                                            {metric.valueSuffix}
                                        </span>
                                    ) : null}
                                </span>
                                {metric.metaTrend ? (
                                    <span className="font-label-dateline text-label-dateline text-tertiary bg-tertiary-fixed inline-flex items-center rounded px-1.5 py-0.5 font-bold">
                                        <TrendingUpIcon className="h-3.5 w-3.5" />
                                        {metric.meta}
                                    </span>
                                ) : (
                                    <span
                                        className={`font-label-dateline text-label-dateline font-medium ${
                                            metric.valueSize === 'md'
                                                ? 'text-on-surface-variant font-bold'
                                                : 'text-warm'
                                        }`}
                                    >
                                        {metric.meta}
                                    </span>
                                )}
                            </div>
                            <p className="font-caption text-caption text-on-surface-variant mt-1">
                                {metric.hint}
                            </p>
                        </div>
                        <div className="bg-surface-container-high mt-space-sm h-1.5 w-full overflow-hidden rounded-full">
                            <div
                                className={`h-full rounded-full ${barToneClass[metric.barTone]}`}
                                style={{ width: `${metric.bar}%` }}
                            />
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
