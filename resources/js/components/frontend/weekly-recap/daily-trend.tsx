import { ChartLineIcon } from 'lucide-react';
import type { DailyTrend } from './types';

export default function DailyTrendChart({ trend }: { trend: DailyTrend }) {
    return (
        <section className="bg-surface-container-lowest p-space-md md:p-space-lg mb-space-xl rounded shadow-sm">
            <div className="gap-space-sm mb-space-lg flex flex-col justify-between md:flex-row md:items-center">
                <div>
                    <span className="font-label-editorial text-label-editorial text-brand font-bold uppercase">
                        {trend.eyebrow}
                    </span>
                    <h2 className="font-headline-md text-headline-md text-on-surface mt-0.5 font-bold">
                        {trend.title}
                    </h2>
                </div>
                <div className="gap-space-sm font-label-dateline text-label-dateline text-on-surface-variant flex items-center">
                    <div className="flex items-center gap-1">
                        <span className="bg-brand h-3 w-3 rounded-sm" />
                        <span>{trend.legendPeak}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="bg-surface-container-high h-3 w-3 rounded-sm" />
                        <span>{trend.legendAvg}</span>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="gap-2 md:gap-space-md grid h-56 grid-cols-7 items-end pt-6 pb-2">
                    {trend.days.map((day) => (
                        <div
                            className="group flex h-full cursor-pointer flex-col items-center justify-end"
                            key={day.label}
                        >
                            <span
                                className={`font-caption text-caption mb-1 font-semibold ${
                                    day.peak
                                        ? 'text-brand font-bold'
                                        : 'text-warm group-hover:text-brand'
                                }`}
                            >
                                {day.value}
                            </span>
                            <div
                                className={`w-full max-w-[48px] rounded transition-all ${
                                    day.peak
                                        ? 'bg-brand group-hover:bg-brand-container shadow-sm'
                                        : 'bg-surface-container-high group-hover:bg-warm'
                                }`}
                                style={{ height: `${day.height}%` }}
                            />
                            <span
                                className={`font-label-dateline text-label-dateline mt-2 font-medium ${
                                    day.peak
                                        ? 'text-brand font-bold'
                                        : 'text-on-surface'
                                }`}
                            >
                                {day.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-space-md p-space-sm bg-surface-container-low text-on-surface-variant font-caption text-caption flex items-center justify-between rounded">
                <span className="flex items-center gap-1">
                    <ChartLineIcon className="text-tertiary h-4 w-4" />
                    <span>{trend.insight}</span>
                </span>
                <span className="font-label-dateline text-label-dateline text-warm hidden sm:inline">
                    {trend.totalMinutes}
                </span>
            </div>
        </section>
    );
}
