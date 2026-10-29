import { Link } from '@inertiajs/react';
import { CirclePlusIcon, HistoryIcon, NotebookPenIcon } from 'lucide-react';
import { create, myArchive } from '@/routes';
import type { EditorsClosing } from './types';

export default function EditorsClosingNote({
    closing,
}: {
    closing: EditorsClosing;
}) {
    return (
        <section className="bg-surface-container-high p-space-md md:p-space-xl mb-space-lg relative overflow-hidden rounded shadow-sm">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                <div className="bg-surface-container-lowest text-brand mb-space-sm flex h-12 w-12 items-center justify-center rounded-full shadow-sm">
                    <NotebookPenIcon className="h-[26px] w-[26px]" />
                </div>
                <span className="font-label-editorial text-label-editorial text-warm mb-space-xs font-semibold tracking-widest uppercase">
                    {closing.eyebrow}
                </span>
                <h3 className="font-headline-lg text-headline-lg text-brand mb-space-md leading-snug font-bold">
                    {closing.title}
                </h3>
                <p className="font-lead text-lead text-on-surface mb-space-md leading-relaxed italic">
                    {closing.body}
                </p>
                <div className="gap-space-sm font-label-dateline text-label-dateline text-on-surface-variant flex items-center">
                    <span className="text-on-surface font-semibold">
                        {closing.author}
                    </span>
                    <span>•</span>
                    <span className="text-warm italic">{closing.role}</span>
                </div>
                <div className="mt-space-md gap-space-sm flex flex-wrap items-center justify-center">
                    <Link
                        className="px-space-md py-space-xs bg-brand text-on-brand hover:bg-brand-container font-label-editorial text-label-editorial inline-flex items-center gap-1 rounded shadow-sm transition-colors"
                        href={create.url()}
                    >
                        <CirclePlusIcon className="h-[18px] w-[18px]" />
                        <span>{closing.writeCta}</span>
                    </Link>
                    <Link
                        className="px-space-md py-space-xs bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-editorial text-label-editorial inline-flex items-center gap-1 rounded transition-colors"
                        href={myArchive.url()}
                    >
                        <HistoryIcon className="h-[18px] w-[18px]" />
                        <span>{closing.archiveCta}</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
