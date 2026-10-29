import ActivePolls from '@/components/frontend/polls/active-polls';
import ArchiveHighlight from '@/components/frontend/polls/archive-highlight';
import FeaturedPoll from '@/components/frontend/polls/featured-poll';
import PollsMasthead from '@/components/frontend/polls/polls-masthead';
import SuggestPoll from '@/components/frontend/polls/suggest-poll';
import type { PollsPageProps } from '@/components/frontend/polls/types';

export default function Polls({
    masthead,
    featured,
    filters,
    activePolls,
    archive,
    suggest,
}: PollsPageProps) {
    return (
        <div className="flex w-full flex-col">
            <PollsMasthead masthead={masthead} />
            <div className="px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl space-y-space-xl mx-auto w-full max-w-[1380px]">
                <FeaturedPoll featured={featured} />
                <ActivePolls
                    activePolls={activePolls}
                    filters={filters}
                />
                <ArchiveHighlight archive={archive} />
                <SuggestPoll suggest={suggest} />
            </div>
        </div>
    );
}
