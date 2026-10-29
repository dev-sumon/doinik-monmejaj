import { BookOpenIcon, NewspaperIcon } from 'lucide-react';
import BroadsheetShowcase from './broadsheet-showcase';
import type { BroadsheetContent, HeroContent } from './types';

export default function HeroSection({
    hero,
    broadsheet,
}: {
    hero: HeroContent;
    broadsheet: BroadsheetContent;
}) {
    return (
        <section className="bg-surface py-space-lg md:py-space-xl w-full">
            <div className="px-margin-mobile md:px-margin-tablet lg:px-margin mx-auto max-w-[1380px]">
                <div className="space-y-space-sm mb-space-lg md:mb-space-xl mx-auto max-w-4xl text-center">
                    <div className="gap-space-sm inline-flex max-w-full flex-wrap items-center justify-center">
                        <span className="bg-outline-variant hidden h-px w-8 sm:block" />
                        <span className="font-label-editorial text-label-editorial text-warm max-w-full tracking-wide uppercase sm:tracking-widest">
                            {hero.kicker}
                        </span>
                        <span className="bg-outline-variant hidden h-px w-8 sm:block" />
                    </div>
                    <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-brand leading-tight font-bold tracking-tight">
                        {hero.title}
                    </h1>
                    <p className="font-body-md text-body-md md:font-lead md:text-lead text-on-surface-variant mx-auto max-w-2xl">
                        {hero.lead}
                    </p>
                    <div className="pt-space-sm gap-space-md flex w-full flex-col flex-wrap items-stretch justify-center sm:flex-row sm:items-center">
                        <a
                            className="bg-brand text-on-brand hover:bg-brand-container gap-space-xs px-space-xl py-space-sm font-label-editorial text-label-editorial flex w-full items-center justify-center font-semibold shadow-sm transition-all sm:w-auto"
                            href={hero.primaryCta.href}
                        >
                            <NewspaperIcon className="h-5 w-5" />
                            <span>{hero.primaryCta.label}</span>
                        </a>
                        <a
                            className="bg-surface-container text-on-surface hover:bg-surface-container-high gap-space-xs px-space-xl py-space-sm font-label-editorial text-label-editorial flex w-full items-center justify-center font-semibold shadow-sm transition-all sm:w-auto"
                            href={hero.secondaryCta.href}
                        >
                            <BookOpenIcon className="h-5 w-5" />
                            <span>{hero.secondaryCta.label}</span>
                        </a>
                    </div>
                </div>
                <BroadsheetShowcase broadsheet={broadsheet} />
            </div>
        </section>
    );
}
