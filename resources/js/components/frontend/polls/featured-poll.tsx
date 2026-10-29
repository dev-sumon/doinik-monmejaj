import {
    HourglassIcon,
    MessageCircleIcon,
    MessagesSquareIcon,
    SendIcon,
    Share2Icon,
    UsersIcon,
} from 'lucide-react';
import { useState } from 'react';
import PollOptionBar from './poll-option-bar';
import type { FeaturedPoll as FeaturedPollType } from './types';

export default function FeaturedPoll({
    featured,
}: {
    featured: FeaturedPollType;
}) {
    const [selectedId, setSelectedId] = useState(featured.selectedOptionId);
    const [opinion, setOpinion] = useState('');

    return (
        <section className="bg-surface-container-lowest overflow-hidden rounded-xl shadow-md">
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
                <div className="p-space-lg md:p-space-xl flex flex-col justify-between lg:col-span-7">
                    <div>
                        <div className="mb-space-sm gap-space-sm flex flex-wrap items-center justify-between">
                            <span className="bg-brand text-on-brand font-label-editorial text-label-editorial rounded px-space-sm py-0.5">
                                {featured.badge}
                            </span>
                            <div className="text-warm font-label-dateline text-label-dateline flex items-center gap-1">
                                <HourglassIcon className="h-4 w-4" />
                                <span>{featured.countdown}</span>
                            </div>
                        </div>
                        <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-space-sm font-bold leading-snug">
                            {featured.question}
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                            {featured.lead}
                        </p>
                        <div className="space-y-space-md">
                            {featured.options.map((option, index) => (
                                <PollOptionBar
                                    key={option.id}
                                    barTone={option.barTone}
                                    emphasize={option.isLeader}
                                    index={index + 1}
                                    label={option.label}
                                    percent={option.percent}
                                    selected={selectedId === option.id}
                                    votesLabel={option.votesLabel}
                                    onSelect={() => setSelectedId(option.id)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="mt-space-lg pt-space-md bg-surface-container-low p-space-md gap-space-md flex flex-wrap items-center justify-between rounded-lg">
                        <div className="gap-space-md text-on-surface-variant font-caption text-caption flex flex-wrap items-center">
                            <span className="text-on-surface flex items-center gap-1 font-semibold">
                                <UsersIcon className="text-brand h-4 w-4" />
                                {featured.totalVotes}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                                <MessagesSquareIcon className="text-warm h-4 w-4" />
                                {featured.commentsCount}
                            </span>
                        </div>
                        <div className="gap-space-sm flex flex-wrap items-center">
                            <button
                                className="bg-surface-container hover:bg-surface-container-high text-on-surface font-label-editorial text-label-editorial inline-flex items-center gap-1 rounded px-space-md py-space-xs transition-colors"
                                type="button"
                                onClick={() =>
                                    window.alert('ভোটের লিংক কপি করা হয়েছে!')
                                }
                            >
                                <Share2Icon className="h-4 w-4" />
                                <span>শেয়ার করুন</span>
                            </button>
                            <button
                                className="bg-brand text-on-brand hover:bg-brand-container font-label-editorial text-label-editorial inline-flex items-center gap-1 rounded px-space-md py-space-xs transition-colors"
                                type="button"
                            >
                                <MessageCircleIcon className="h-4 w-4" />
                                <span>যুক্তিতর্ক লিখুন</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-surface-container-low p-space-lg md:p-space-xl flex flex-col justify-between lg:col-span-5">
                    <div>
                        <div className="mb-space-md relative h-48 w-full overflow-hidden rounded-lg shadow-sm">
                            <img
                                alt={featured.vignette.alt}
                                className="h-full w-full object-cover"
                                src={featured.vignette.image}
                            />
                            <div className="from-inverse-surface/80 via-inverse-surface/20 absolute inset-0 flex items-end bg-gradient-to-t to-transparent p-space-md">
                                <p className="text-surface-bright font-caption text-caption italic">
                                    {featured.vignette.caption}
                                </p>
                            </div>
                        </div>
                        <div className="mb-space-sm flex items-center justify-between">
                            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                                {featured.opinionsTitle}
                            </h3>
                            <span className="font-label-dateline text-label-dateline text-brand">
                                {featured.opinionsStatus}
                            </span>
                        </div>
                        <div className="space-y-space-sm">
                            {featured.opinions.map((item) => (
                                <div
                                    className="p-space-sm bg-surface-container-lowest rounded-lg shadow-sm"
                                    key={`${item.author}-${item.time}`}
                                >
                                    <div className="mb-1 flex items-center justify-between gap-space-xs">
                                        <span className="font-body-sm text-body-sm text-on-surface font-bold">
                                            {item.author}
                                        </span>
                                        <span className="font-caption text-caption text-warm shrink-0">
                                            {item.time}
                                        </span>
                                    </div>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                                        {item.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-space-md pt-space-sm">
                        <div className="gap-space-xs bg-surface-container-lowest p-space-xs flex items-center rounded-lg shadow-sm">
                            <input
                                className="font-body-sm text-body-sm text-on-surface px-space-xs w-full bg-transparent py-1 focus:outline-none"
                                placeholder={featured.opinionPlaceholder}
                                type="text"
                                value={opinion}
                                onChange={(event) =>
                                    setOpinion(event.target.value)
                                }
                            />
                            <button
                                className="bg-brand text-on-brand hover:bg-brand-container flex shrink-0 items-center gap-1 rounded px-space-sm py-1 text-sm font-medium transition-colors"
                                type="button"
                                onClick={() => {
                                    if (opinion.trim()) {
                                        setOpinion('');
                                    }
                                }}
                            >
                                <span>পাঠান</span>
                                <SendIcon className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
