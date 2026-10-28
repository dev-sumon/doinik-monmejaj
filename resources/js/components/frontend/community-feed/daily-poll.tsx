import { BrainIcon, CoffeeIcon, DropletsIcon } from 'lucide-react';
import { useState } from 'react';
import type { PollContent } from './types';

const pollIcons: Record<string, typeof CoffeeIcon> = {
    coffee: CoffeeIcon,
    water: DropletsIcon,
    psychology: BrainIcon,
};

export default function DailyPoll({ poll }: { poll: PollContent }) {
    const [votedId, setVotedId] = useState<string | null>(null);

    return (
        <div className="bg-surface-container-lowest p-space-md">
            <div className="pb-space-xs mb-space-xs flex items-center justify-between gap-2">
                <span className="font-label-editorial text-label-editorial text-brand font-bold tracking-wider uppercase">
                    {poll.eyebrow}
                </span>
                <span className="bg-error-container text-on-error-container font-label-dateline text-label-dateline px-2 py-0.5 font-semibold">
                    {poll.status}
                </span>
            </div>
            <h4 className="font-headline-sm text-on-surface mb-space-md text-lg leading-snug font-semibold">
                {poll.question}
            </h4>
            <div className="space-y-space-sm">
                {poll.options.map((option) => {
                    const Icon = pollIcons[option.icon] ?? CoffeeIcon;
                    const voted = votedId !== null;
                    const selected = votedId === option.id;

                    return (
                        <button
                            className={`p-space-sm relative w-full overflow-hidden text-left transition-colors ${
                                selected
                                    ? 'bg-warm-container'
                                    : 'bg-surface-container-low hover:bg-surface-container'
                            }`}
                            key={option.id}
                            type="button"
                            onClick={() => {
                                if (votedId) {
                                    return;
                                }

                                setVotedId(option.id);
                            }}
                        >
                            {voted && (
                                <div
                                    className="bg-warm-container/40 absolute inset-y-0 left-0 transition-all duration-700"
                                    style={{ width: `${option.percent}%` }}
                                />
                            )}
                            <div className="font-body-md text-body-md text-on-surface relative flex items-center justify-between gap-2">
                                <span className="gap-space-xs flex min-w-0 items-center">
                                    <Icon
                                        className={`h-[18px] w-[18px] shrink-0 ${
                                            option.icon === 'coffee'
                                                ? 'text-warm'
                                                : option.icon === 'water'
                                                  ? 'text-tertiary'
                                                  : 'text-brand'
                                        }`}
                                    />
                                    <span>{option.label}</span>
                                </span>
                                {voted && (
                                    <span className="font-label-dateline text-label-dateline text-brand shrink-0 font-bold">
                                        {option.percent}%
                                    </span>
                                )}
                            </div>
                        </button>
                    );
                })}
            </div>
            <div className="mt-space-sm pt-space-xs font-label-dateline text-label-dateline text-on-surface-variant flex flex-wrap items-center justify-between gap-2">
                <span>{poll.totalVotesLabel}</span>
                <span className="text-warm italic">{poll.realtimeLabel}</span>
            </div>
        </div>
    );
}
