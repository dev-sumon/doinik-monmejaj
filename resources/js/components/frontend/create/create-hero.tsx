import { BookOpenIcon, ScrollTextIcon } from 'lucide-react';
import type { CreateHero } from './types';

export default function CreateHero({ hero }: { hero: CreateHero }) {
    return (
        <div className="mb-space-xl gap-space-md flex flex-col justify-between md:flex-row md:items-end">
            <div className="space-y-space-xs max-w-3xl">
                <div className="gap-space-xs bg-surface-container text-brand font-label-editorial text-label-editorial inline-flex items-center rounded px-space-sm py-1 tracking-wider uppercase">
                    <ScrollTextIcon className="h-4 w-4" />
                    <span>{hero.badge}</span>
                </div>
                <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface font-bold tracking-tight">
                    {hero.title}
                </h1>
                <p className="font-body-md text-body-md md:font-lead md:text-lead text-on-surface-variant">
                    {hero.lead}
                </p>
            </div>
            <div className="bg-surface-container-low px-space-md py-space-sm gap-space-md flex items-center rounded">
                <div className="flex flex-col text-right">
                    <span className="font-label-dateline text-label-dateline text-warm uppercase">
                        {hero.editionLabel}
                    </span>
                    <span className="font-headline-sm text-headline-sm text-brand font-bold">
                        {hero.editionValue}
                    </span>
                </div>
                <div className="bg-brand/10 text-brand flex h-10 w-10 items-center justify-center rounded-full">
                    <BookOpenIcon className="h-5 w-5" />
                </div>
            </div>
        </div>
    );
}
