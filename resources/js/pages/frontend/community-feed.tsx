import FeedPageHeader from '@/components/frontend/community-feed/feed-page-header';
import FeedSidebar from '@/components/frontend/community-feed/feed-sidebar';
import FeedStream from '@/components/frontend/community-feed/feed-stream';
import type { CommunityFeedPageProps } from '@/components/frontend/community-feed/types';

export default function CommunityFeed({
    header,
    tabs,
    topics,
    stories,
    writePrompt,
    poll,
    editorsPicks,
    writers,
    motto,
}: CommunityFeedPageProps) {
    return (
        <div className="flex w-full flex-col">
            <div className="px-margin-mobile md:px-margin-tablet lg:px-margin py-space-md mx-auto w-full max-w-[1380px]">
                <FeedPageHeader
                    header={header}
                    tabs={tabs}
                    topics={topics}
                />
                <div className="gap-space-lg grid grid-cols-1 items-start lg:grid-cols-12">
                    <FeedStream stories={stories} />
                    <FeedSidebar
                        editorsPicks={editorsPicks}
                        motto={motto}
                        poll={poll}
                        writePrompt={writePrompt}
                        writers={writers}
                    />
                </div>
            </div>
        </div>
    );
}
