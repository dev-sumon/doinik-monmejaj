import { useMemo, useState } from 'react';
import FeaturedShowcase from '@/components/frontend/profile/featured-showcase';
import PortfolioGrid from '@/components/frontend/profile/portfolio-grid';
import PressPassCard from '@/components/frontend/profile/press-pass-card';
import ProfilePagination from '@/components/frontend/profile/profile-pagination';
import ProfileSidebar from '@/components/frontend/profile/profile-sidebar';
import ProfileTabs from '@/components/frontend/profile/profile-tabs';
import type { ProfilePageProps } from '@/components/frontend/profile/types';

export default function Profile({
    pressPass,
    metrics,
    tabs,
    sortOptions,
    sortLabel,
    featured,
    portfolio,
    pagination,
    sidebar,
}: ProfilePageProps) {
    const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? 'all');
    const [activeSort, setActiveSort] = useState(
        sortOptions[0]?.id ?? 'newest',
    );
    const [currentPage, setCurrentPage] = useState(pagination.current);

    const visiblePapers = useMemo(() => {
        let papers = [...portfolio.papers];

        if (activeTab === 'comments') {
            return [];
        }

        if (activeTab !== 'all') {
            papers = papers.filter((paper) => paper.tab === activeTab);
        }

        papers.sort((a, b) => {
            if (activeSort === 'popular') {
                return b.heartsNum - a.heartsNum;
            }

            if (activeSort === 'comments') {
                return b.commentsNum - a.commentsNum;
            }

            return b.sortDate - a.sortDate;
        });

        return papers;
    }, [activeSort, activeTab, portfolio.papers]);

    return (
        <div className="flex w-full flex-col">
            <div className="px-margin-mobile md:px-margin-tablet lg:px-margin py-space-md mx-auto w-full max-w-[1380px]">
                <PressPassCard metrics={metrics} pressPass={pressPass} />
                <ProfileTabs
                    activeSort={activeSort}
                    activeTab={activeTab}
                    sortLabel={sortLabel}
                    sortOptions={sortOptions}
                    tabs={tabs}
                    onSortChange={setActiveSort}
                    onTabChange={setActiveTab}
                />
                <div className="mt-space-md gap-space-lg grid grid-cols-1 items-start lg:grid-cols-12">
                    <div className="space-y-space-lg lg:col-span-8">
                        {activeTab === 'all' || activeTab === 'featured' ? (
                            <FeaturedShowcase featured={featured} />
                        ) : null}
                        <PortfolioGrid
                            papers={visiblePapers}
                            readLabel={portfolio.readLabel}
                            showingLabel={portfolio.showingLabel}
                            subtitle={portfolio.subtitle}
                            title={portfolio.title}
                        />
                        <ProfilePagination
                            currentPage={currentPage}
                            pagination={pagination}
                            onPageChange={setCurrentPage}
                        />
                    </div>
                    <div className="lg:col-span-4">
                        <ProfileSidebar sidebar={sidebar} />
                    </div>
                </div>
            </div>
        </div>
    );
}
