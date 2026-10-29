import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import type { ArchivePagination as PaginationType } from './types';

export default function ArchivePagination({
    pagination,
}: {
    pagination: PaginationType;
}) {
    return (
        <div className="bg-surface-container-lowest p-space-md gap-space-md flex flex-col items-center justify-between shadow-sm sm:flex-row">
            <div className="font-label-dateline text-label-dateline text-on-surface-variant">
                {pagination.pageLabel}
            </div>
            <div className="font-label-editorial text-label-editorial flex items-center gap-1">
                <button
                    className="bg-surface-container text-on-surface-variant flex h-8 w-8 items-center justify-center transition-colors"
                    disabled
                    type="button"
                >
                    <ChevronLeftIcon className="h-[18px] w-[18px]" />
                </button>
                {pagination.pages.map((page, index) =>
                    page === null ? (
                        <span
                            className="text-outline-paper px-2"
                            key={`ellipsis-${index}`}
                        >
                            ...
                        </span>
                    ) : (
                        <button
                            className={`flex h-8 w-8 items-center justify-center transition-colors ${
                                page === pagination.currentPage
                                    ? 'bg-brand text-on-brand font-semibold'
                                    : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
                            }`}
                            key={page}
                            type="button"
                        >
                            {page}
                        </button>
                    ),
                )}
                <button
                    className="bg-surface-container text-on-surface hover:bg-surface-dim flex h-8 w-8 items-center justify-center transition-colors"
                    type="button"
                >
                    <ChevronRightIcon className="h-[18px] w-[18px]" />
                </button>
            </div>
            <div className="font-caption text-caption text-warm italic">
                {pagination.quote}
            </div>
        </div>
    );
}
