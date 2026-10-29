import {
    CalendarDaysIcon,
    FileTextIcon,
    LoaderCircleIcon,
    NewspaperIcon,
    Share2Icon,
} from 'lucide-react';
import type { RecapHeader as HeaderType } from './types';

type DownloadState = 'idle' | 'loading' | 'done';

export default function RecapHeader({
    downloadState,
    header,
    shareMessage,
    onDownload,
    onShare,
}: {
    downloadState: DownloadState;
    header: HeaderType;
    shareMessage: string | null;
    onDownload: () => void;
    onShare: () => void;
}) {
    const downloadLabel =
        downloadState === 'loading'
            ? header.downloadingLabel
            : downloadState === 'done'
              ? header.downloadDoneLabel
              : header.downloadLabel;

    return (
        <header className="bg-surface-container-low p-space-md md:p-space-lg mb-space-lg relative overflow-hidden rounded shadow-sm">
            <div className="gap-space-sm mb-space-sm flex flex-wrap items-center justify-between">
                <div className="gap-space-xs flex items-center">
                    <span className="bg-brand text-on-brand font-label-editorial text-label-editorial px-space-xs inline-block py-0.5 tracking-wider uppercase">
                        {header.badge}
                    </span>
                    <span className="font-label-dateline text-label-dateline text-warm font-semibold">
                        {header.issueNo}
                    </span>
                </div>
                <div className="gap-space-xs font-label-dateline text-label-dateline text-on-surface-variant bg-surface-container px-space-sm flex items-center rounded py-1">
                    <CalendarDaysIcon className="text-brand h-4 w-4" />
                    <span>{header.dateRange}</span>
                </div>
            </div>
            <div className="gap-space-md grid grid-cols-1 items-end lg:grid-cols-12">
                <div className="lg:col-span-8">
                    <h1 className="font-headline-xl text-headline-xl text-brand mb-space-xs font-bold tracking-tight">
                        {header.title}
                    </h1>
                    <p className="font-lead text-lead text-on-surface-variant max-w-2xl">
                        {header.lead}
                    </p>
                </div>
                <div className="gap-space-sm flex flex-wrap items-center justify-start lg:col-span-4 lg:justify-end">
                    <button
                        className="gap-space-xs px-space-md py-space-xs bg-brand text-on-brand hover:bg-brand-container font-label-editorial text-label-editorial flex items-center rounded shadow-sm transition-all disabled:opacity-70"
                        disabled={downloadState === 'loading'}
                        id="downloadPdfBtn"
                        type="button"
                        onClick={onDownload}
                    >
                        {downloadState === 'loading' ? (
                            <LoaderCircleIcon className="h-[18px] w-[18px] animate-spin" />
                        ) : (
                            <FileTextIcon className="h-[18px] w-[18px]" />
                        )}
                        <span>{downloadLabel}</span>
                    </button>
                    <button
                        className="gap-space-xs px-space-md py-space-xs bg-surface-container-highest text-on-surface hover:bg-warm-container font-label-editorial text-label-editorial flex items-center rounded transition-colors"
                        id="shareRecapBtn"
                        type="button"
                        onClick={onShare}
                    >
                        <Share2Icon className="h-[18px] w-[18px]" />
                        <span>
                            {shareMessage ?? header.shareLabel}
                        </span>
                    </button>
                </div>
            </div>
            <div className="text-brand pointer-events-none absolute -right-8 -bottom-10 opacity-5">
                <NewspaperIcon className="h-[180px] w-[180px]" />
            </div>
        </header>
    );
}
