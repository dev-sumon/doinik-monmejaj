import { useMemo, useState } from 'react';
import ArchiveHeader from '@/components/frontend/my-archive/archive-header';
import ArchivePagination from '@/components/frontend/my-archive/archive-pagination';
import ArchiveStats from '@/components/frontend/my-archive/archive-stats';
import ArchiveToolbar from '@/components/frontend/my-archive/archive-toolbar';
import NewspaperGrid from '@/components/frontend/my-archive/newspaper-grid';
import type { MyArchivePageProps } from '@/components/frontend/my-archive/types';
import WeeklyRecap from '@/components/frontend/my-archive/weekly-recap';

export default function MyArchive({
    header,
    stats,
    weeklyRecap,
    toolbar,
    filters,
    months,
    papers,
    pagination,
}: MyArchivePageProps) {
    const [activeFilter, setActiveFilter] = useState(
        filters[0]?.id ?? 'all',
    );
    const [activeMonth, setActiveMonth] = useState(months[0]?.id ?? 'all');
    const [search, setSearch] = useState('');

    const visiblePapers = useMemo(() => {
        const term = search.trim().toLowerCase();

        return papers.filter((paper) => {
            const matchesFilter =
                activeFilter === 'all' || paper.status === activeFilter;
            const matchesMonth =
                activeMonth === 'all' || paper.month === activeMonth;
            const matchesSearch =
                term === '' ||
                paper.title.toLowerCase().includes(term) ||
                paper.date.toLowerCase().includes(term) ||
                paper.excerpt.toLowerCase().includes(term);

            return matchesFilter && matchesMonth && matchesSearch;
        });
    }, [papers, activeFilter, activeMonth, search]);

    return (
        <div className="flex w-full flex-col">
            <div className="px-margin-mobile md:px-margin-tablet lg:px-margin py-space-lg relative mx-auto w-full max-w-[1380px]">
                <div className="bg-surface-container-lowest p-space-lg md:p-space-xl mb-space-lg relative shadow-sm">
                    <ArchiveHeader header={header} />
                    <ArchiveStats stats={stats} />
                </div>
                <WeeklyRecap weeklyRecap={weeklyRecap} />
                <ArchiveToolbar
                    activeFilter={activeFilter}
                    activeMonth={activeMonth}
                    filters={filters}
                    months={months}
                    search={search}
                    toolbar={toolbar}
                    visibleCount={visiblePapers.length}
                    onFilterChange={setActiveFilter}
                    onMonthChange={setActiveMonth}
                    onSearchChange={setSearch}
                />
                <NewspaperGrid papers={visiblePapers} />
                <ArchivePagination pagination={pagination} />
            </div>
        </div>
    );
}
