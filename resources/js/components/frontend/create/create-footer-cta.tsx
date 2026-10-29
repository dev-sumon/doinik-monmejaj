import { ImagesIcon } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { communityFeed, myArchive } from '@/routes';
import type { CreateFooterCta } from './types';

export default function CreateFooterCta({
    footerCta,
}: {
    footerCta: CreateFooterCta;
}) {
    return (
        <div className="mt-space-xl bg-surface-container-low p-space-lg gap-space-md flex flex-col items-center justify-between rounded md:flex-row">
            <div className="gap-space-md flex items-center">
                <div className="bg-brand/10 text-brand flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                    <ImagesIcon className="h-7 w-7" />
                </div>
                <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        {footerCta.title}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {footerCta.lead}
                    </p>
                </div>
            </div>
            <div className="gap-space-sm flex flex-wrap items-center">
                <Link
                    className="bg-surface-container-highest text-on-surface hover:bg-surface-container font-label-editorial text-label-editorial rounded px-space-md py-space-xs transition-colors"
                    href={myArchive.url()}
                >
                    {footerCta.archiveLabel}
                </Link>
                <Link
                    className="bg-warm text-on-warm hover:bg-on-warm-container font-label-editorial text-label-editorial rounded px-space-md py-space-xs transition-colors"
                    href={communityFeed.url()}
                >
                    {footerCta.bestLabel}
                </Link>
            </div>
        </div>
    );
}
