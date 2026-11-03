import {
    HourglassIcon,
    MessageCircleIcon,
    MessagesSquareIcon,
    SendIcon,
    Share2Icon,
    UsersIcon,
} from 'lucide-react';
import { router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { login } from '@/routes';
import { vote } from '@/routes/polls';
import PollOptionBar from './poll-option-bar';
import type { FeaturedPoll as FeaturedPollType } from './types';

export default function FeaturedPoll({
    featured,
}: {
    featured: FeaturedPollType;
}) {
    const { props } = usePage();
    const isSignedIn = Boolean(props.auth?.user);
    const [localSelectedId, setLocalSelectedId] = useState(
        featured.selectedOptionId,
    );
    const [opinion, setOpinion] = useState('');

    // Real polls are voted on the server; the demo poll stays client-side.
    const isLivePoll = typeof featured.pollId === 'number';
    const selectedId = isLivePoll ? featured.selectedOptionId : localSelectedId;

    const handleSelect = (optionId: string): void => {
        if (!isLivePoll) {
            setLocalSelectedId(optionId);

            return;
        }

        if (!isSignedIn) {
            router.visit(login());

            return;
        }

        if (featured.selectedOptionId) {
            return;
        }

        router.post(
            vote.url(featured.pollId as number),
            { option_id: Number(optionId) },
            { preserveScroll: true },
        );
    };

    return (
        <section className="overflow-hidden rounded-xl bg-surface-container-lowest shadow-md">
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
                <div className="flex flex-col justify-between p-space-lg md:p-space-xl lg:col-span-7">
                    <div>
                        <div className="mb-space-sm flex flex-wrap items-center justify-between gap-space-sm">
                            <span className="rounded bg-brand px-space-sm py-0.5 font-label-editorial text-label-editorial text-on-brand">
                                {featured.badge}
                            </span>
                            <div className="flex items-center gap-1 font-label-dateline text-label-dateline text-warm">
                                <HourglassIcon className="h-4 w-4" />
                                <span>{featured.countdown}</span>
                            </div>
                        </div>
                        <h2 className="mb-space-sm font-headline-lg-mobile text-headline-lg-mobile leading-snug font-bold text-on-surface md:font-headline-lg md:text-headline-lg">
                            {featured.question}
                        </h2>
                        <p className="mb-space-lg font-body-md text-body-md text-on-surface-variant">
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
                                    onSelect={() => handleSelect(option.id)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="mt-space-lg flex flex-wrap items-center justify-between gap-space-md rounded-lg bg-surface-container-low p-space-md pt-space-md">
                        <div className="flex flex-wrap items-center gap-space-md font-caption text-caption text-on-surface-variant">
                            <span className="flex items-center gap-1 font-semibold text-on-surface">
                                <UsersIcon className="h-4 w-4 text-brand" />
                                {featured.totalVotes}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                                <MessagesSquareIcon className="h-4 w-4 text-warm" />
                                {featured.commentsCount}
                            </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-space-sm">
                            <button
                                className="inline-flex items-center gap-1 rounded bg-surface-container px-space-md py-space-xs font-label-editorial text-label-editorial text-on-surface transition-colors hover:bg-surface-container-high"
                                type="button"
                                onClick={() =>
                                    window.alert('ভোটের লিংক কপি করা হয়েছে!')
                                }
                            >
                                <Share2Icon className="h-4 w-4" />
                                <span>শেয়ার করুন</span>
                            </button>
                            <button
                                className="inline-flex items-center gap-1 rounded bg-brand px-space-md py-space-xs font-label-editorial text-label-editorial text-on-brand transition-colors hover:bg-brand-container"
                                type="button"
                            >
                                <MessageCircleIcon className="h-4 w-4" />
                                <span>যুক্তিতর্ক লিখুন</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between bg-surface-container-low p-space-lg md:p-space-xl lg:col-span-5">
                    <div>
                        <div className="relative mb-space-md h-48 w-full overflow-hidden rounded-lg shadow-sm">
                            <img
                                alt={featured.vignette.alt}
                                className="h-full w-full object-cover"
                                src={featured.vignette.image}
                            />
                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent p-space-md">
                                <p className="font-caption text-caption text-surface-bright italic">
                                    {featured.vignette.caption}
                                </p>
                            </div>
                        </div>
                        <div className="mb-space-sm flex items-center justify-between">
                            <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                                {featured.opinionsTitle}
                            </h3>
                            <span className="font-label-dateline text-label-dateline text-brand">
                                {featured.opinionsStatus}
                            </span>
                        </div>
                        <div className="space-y-space-sm">
                            {featured.opinions.map((item) => (
                                <div
                                    className="rounded-lg bg-surface-container-lowest p-space-sm shadow-sm"
                                    key={`${item.author}-${item.time}`}
                                >
                                    <div className="mb-1 flex items-center justify-between gap-space-xs">
                                        <span className="font-body-sm text-body-sm font-bold text-on-surface">
                                            {item.author}
                                        </span>
                                        <span className="shrink-0 font-caption text-caption text-warm">
                                            {item.time}
                                        </span>
                                    </div>
                                    <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                                        {item.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-space-md pt-space-sm">
                        <div className="flex items-center gap-space-xs rounded-lg bg-surface-container-lowest p-space-xs shadow-sm">
                            <input
                                className="w-full bg-transparent px-space-xs py-1 font-body-sm text-body-sm text-on-surface focus:outline-none"
                                placeholder={featured.opinionPlaceholder}
                                type="text"
                                value={opinion}
                                onChange={(event) =>
                                    setOpinion(event.target.value)
                                }
                            />
                            <button
                                className="flex shrink-0 items-center gap-1 rounded bg-brand px-space-sm py-1 text-sm font-medium text-on-brand transition-colors hover:bg-brand-container"
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
