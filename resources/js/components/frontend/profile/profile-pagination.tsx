import {
    toBengaliNumber,
    type ProfilePagination as PaginationType,
} from './types';

export default function ProfilePagination({
    currentPage,
    pagination,
    onPageChange,
}: {
    currentPage: number;
    pagination: PaginationType;
    onPageChange: (page: number) => void;
}) {
    return (
        <div className="p-space-md gap-space-sm bg-surface-container-low flex flex-col items-center justify-between rounded-xl sm:flex-row">
            <span className="font-caption text-caption text-on-surface-variant">
                {pagination.meta}
            </span>
            <div className="gap-space-xs flex items-center">
                <button
                    className="px-space-md py-space-xs bg-surface-container-highest text-on-surface hover:bg-surface-dim font-label-editorial text-label-editorial rounded transition-colors disabled:opacity-50"
                    disabled={currentPage <= 1}
                    type="button"
                    onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                >
                    {pagination.prevLabel}
                </button>
                {pagination.pages.map((page, index) =>
                    page === null ? (
                        <span
                            className="font-caption text-caption text-warm px-1"
                            key={`ellipsis-${index}`}
                        >
                            ...
                        </span>
                    ) : (
                        <button
                            className={`font-caption text-caption h-8 w-8 rounded ${
                                currentPage === page
                                    ? 'bg-brand text-on-brand font-bold'
                                    : 'bg-surface-container text-on-surface hover:bg-surface-container-highest'
                            }`}
                            key={page}
                            type="button"
                            onClick={() => onPageChange(page)}
                        >
                            {toBengaliNumber(page)}
                        </button>
                    ),
                )}
                <button
                    className="px-space-md py-space-xs bg-brand text-on-brand hover:bg-brand-container font-label-editorial text-label-editorial rounded transition-colors"
                    type="button"
                    onClick={() => onPageChange(currentPage + 1)}
                >
                    {pagination.nextLabel}
                </button>
            </div>
        </div>
    );
}
