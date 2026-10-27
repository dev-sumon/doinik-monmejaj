import { FlameIcon, HistoryIcon, NotebookPen } from 'lucide-react';
import type { DailyThemeContent } from './types';

export default function DailyThemeBanner({
    dailyTheme,
}: {
    dailyTheme: DailyThemeContent;
}) {
    return (
        <section className="bg-surface-container py-space-lg md:py-space-xl w-full">
            <div className="px-margin-mobile md:px-margin-tablet lg:px-margin mx-auto max-w-[1380px]">
                <div className="bg-tertiary text-on-tertiary p-space-md sm:p-space-lg md:p-space-xl relative overflow-hidden shadow-lg">
                    <div className="bg-on-tertiary-container/10 pointer-events-none absolute -right-12 -bottom-12 hidden h-64 w-64 rounded-full blur-2xl sm:block" />
                    <div className="gap-space-lg relative z-10 grid grid-cols-1 items-center lg:grid-cols-12">
                        <div className="space-y-space-xs min-w-0 lg:col-span-8">
                            <div className="gap-space-xs bg-tertiary-container text-on-tertiary-container px-space-sm font-label-editorial text-label-editorial inline-flex max-w-full items-center py-0.5">
                                <FlameIcon className="h-4 w-4 shrink-0" />
                                <span>{dailyTheme.badge}</span>
                            </div>
                            <h2 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-tertiary font-bold tracking-tight">
                                {dailyTheme.title}
                            </h2>
                            <p className="font-body-md text-body-md md:font-lead md:text-lead text-on-tertiary/90 max-w-2xl">
                                {dailyTheme.lead}
                            </p>
                            <div className="pt-space-xs gap-space-sm sm:gap-space-md text-on-tertiary/80 font-caption text-caption flex flex-col sm:flex-row sm:flex-wrap sm:items-center">
                                {dailyTheme.meta.map((item, index) => (
                                    <span className="contents" key={item}>
                                        {index > 0 && (
                                            <span className="hidden sm:inline">
                                                •
                                            </span>
                                        )}
                                        <span className="flex items-center gap-1">
                                            {index === 0 ? (
                                                <HistoryIcon className="h-4 w-4 shrink-0" />
                                            ) : (
                                                <NotebookPen className="h-4 w-4 shrink-0" />
                                            )}
                                            <span>{item}</span>
                                        </span>
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="gap-space-sm flex w-full flex-col justify-end sm:flex-row lg:col-span-4 lg:flex-col">
                            <a
                                className="bg-surface text-brand hover:bg-surface-container-low px-space-xl py-space-md font-headline-sm text-headline-sm w-full text-center font-bold shadow-sm transition-all sm:w-auto lg:w-full"
                                href={dailyTheme.primaryCta.href}
                            >
                                {dailyTheme.primaryCta.label}
                            </a>
                            <a
                                className="bg-tertiary-container text-on-tertiary-container hover:bg-tertiary-container/80 px-space-md py-space-sm font-label-editorial text-label-editorial w-full text-center transition-colors sm:w-auto lg:w-full"
                                href={dailyTheme.secondaryCta.href}
                            >
                                {dailyTheme.secondaryCta.label}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
