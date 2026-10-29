import type { ArchiveHeader as ArchiveHeaderType } from './types';

export default function ArchiveHeader({
    header,
}: {
    header: ArchiveHeaderType;
}) {
    return (
        <div className="gap-space-md pb-space-md flex flex-col justify-between lg:flex-row lg:items-center">
            <div className="space-y-space-xs max-w-2xl">
                <div className="gap-space-xs flex flex-wrap items-center">
                    <span className="bg-brand-fixed text-on-brand-fixed font-label-editorial text-label-editorial px-space-xs py-0.5 tracking-wider uppercase">
                        {header.badge}
                    </span>
                    <span className="text-outline-paper font-caption text-caption">
                        •
                    </span>
                    <span className="font-label-dateline text-label-dateline text-warm">
                        {header.dossierNo}
                    </span>
                </div>
                <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-brand tracking-tight">
                    {header.title}
                </h1>
                <p className="font-body-md text-body-md md:font-lead md:text-lead text-on-surface-variant">
                    {header.lead}
                </p>
            </div>
            <div className="bg-surface-container-low p-space-sm gap-space-md flex items-center self-start lg:self-auto">
                <div className="bg-brand text-on-brand font-headline-md text-headline-md flex h-12 w-12 items-center justify-center font-bold">
                    {header.printStamp.count}
                </div>
                <div className="flex flex-col">
                    <span className="font-label-editorial text-label-editorial text-on-surface font-semibold">
                        {header.printStamp.label}
                    </span>
                    <span className="font-caption text-caption text-warm">
                        {header.printStamp.meta}
                    </span>
                </div>
            </div>
        </div>
    );
}
