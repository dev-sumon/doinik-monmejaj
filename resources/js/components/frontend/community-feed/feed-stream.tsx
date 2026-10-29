import { HistoryIcon } from 'lucide-react';
import FeedStoryCard from './feed-story-card';
import type { FeedStory } from './types';

export default function FeedStream({ stories }: { stories: FeedStory[] }) {
    return (
        <section className="space-y-space-lg lg:col-span-8">
            {stories.map((story) => (
                <FeedStoryCard key={story.id} story={story} />
            ))}
            <div className="py-space-md text-center">
                <button
                    className="bg-surface-container text-on-surface hover:bg-surface-container-high px-space-xl py-space-sm font-label-editorial text-label-editorial gap-space-xs inline-flex items-center transition-colors"
                    type="button"
                >
                    <HistoryIcon className="h-[18px] w-[18px]" />
                    <span>আরও পুরনো খবর উল্টান</span>
                </button>
            </div>
        </section>
    );
}
