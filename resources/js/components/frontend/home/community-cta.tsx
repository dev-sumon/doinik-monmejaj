import { FileClock, PencilRuler } from 'lucide-react';
import type { CommunityContent } from './types';

export default function CommunityCta({
    community,
}: {
    community: CommunityContent;
}) {
    const { stats, cta } = community;

    return (
        <section className="bg-surface py-space-lg md:py-space-xl w-full">
            <div className="px-margin-mobile md:px-margin-tablet lg:px-margin space-y-space-lg md:space-y-space-xl mx-auto max-w-[1380px]">
                <div className="bg-surface-container-low p-space-md sm:p-space-lg shadow-sm">
                    <div className="gap-space-lg grid grid-cols-1 items-center text-center md:grid-cols-3">
                        {stats.map((stat) => (
                            <div className="space-y-1" key={stat.label}>
                                <div className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-brand font-bold tracking-tight">
                                    {stat.value}
                                </div>
                                <div className="font-label-editorial text-label-editorial text-on-surface font-semibold">
                                    {stat.label}
                                </div>
                                <div className="font-caption text-caption text-warm">
                                    {stat.caption}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-surface-container-lowest p-space-md sm:p-space-lg md:p-space-xl space-y-space-md relative mx-auto max-w-4xl overflow-hidden text-center shadow-md">
                    <div className="bg-brand/10 text-brand mb-space-xs mx-auto flex h-12 w-12 items-center justify-center rounded-full">
                        <PencilRuler className="h-6 w-6" />
                    </div>
                    <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mx-auto max-w-xl leading-snug font-bold">
                        {cta.title}
                    </h2>
                    <p className="font-body-md text-body-md md:font-lead md:text-lead text-on-surface-variant mx-auto max-w-lg">
                        {cta.lead}
                    </p>
                    <div className="pt-space-sm gap-space-md flex w-full flex-col items-stretch justify-center sm:flex-row sm:items-center">
                        <a
                            className="bg-brand text-on-brand hover:bg-brand-container gap-space-xs px-space-xl py-space-sm font-headline-sm text-headline-sm flex w-full items-center justify-center font-bold shadow-md transition-all sm:w-auto"
                            href={cta.primaryCta.href}
                        >
                            <FileClock className="h-5 w-5" />
                            <span>{cta.primaryCta.label}</span>
                        </a>
                        <a
                            className="bg-surface-container text-warm hover:bg-surface-container-high px-space-lg py-space-sm font-label-editorial text-label-editorial w-full text-center font-bold transition-colors sm:w-auto"
                            href={cta.secondaryCta.href}
                        >
                            {cta.secondaryCta.label}
                        </a>
                    </div>
                    <div className="pt-space-sm font-label-dateline text-label-dateline text-warm px-space-xs italic">
                        {cta.footnote}
                    </div>
                </div>
            </div>
        </section>
    );
}
