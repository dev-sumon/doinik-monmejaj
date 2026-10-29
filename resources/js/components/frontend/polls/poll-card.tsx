import { ClockIcon } from 'lucide-react';
import PollOptionBar from './poll-option-bar';
import { categoryToneClass, type ActivePoll } from './types';

export default function PollCard({ poll }: { poll: ActivePoll }) {
    return (
        <div className="bg-surface-container-lowest p-space-lg flex flex-col justify-between rounded-xl shadow-sm transition-shadow hover:shadow-md">
            <div>
                <div className="mb-space-sm flex items-center justify-between gap-space-xs">
                    <span
                        className={`font-label-editorial text-label-editorial rounded px-space-xs py-0.5 ${categoryToneClass[poll.categoryTone]}`}
                    >
                        {poll.category}
                    </span>
                    <span className="font-caption text-caption text-warm flex items-center gap-0.5">
                        <ClockIcon className="h-3.5 w-3.5" />
                        {poll.timeLeft}
                    </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm font-bold">
                    {poll.question}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md line-clamp-2">
                    {poll.lead}
                </p>
                <div className="space-y-space-sm mb-space-md">
                    {poll.options.map((option) => (
                        <PollOptionBar
                            key={option.label}
                            barTone={option.barTone}
                            compact
                            emphasize={option.emphasize}
                            label={option.label}
                            percent={option.percent}
                        />
                    ))}
                </div>
            </div>
            <div className="pt-space-sm font-caption text-caption text-on-surface-variant flex items-center justify-between gap-space-sm">
                <span>{poll.totalVotes}</span>
                <button
                    className="bg-brand text-on-brand hover:bg-brand-container font-label-editorial text-label-editorial rounded px-space-md py-space-xs transition-colors"
                    type="button"
                >
                    {poll.ctaLabel}
                </button>
            </div>
        </div>
    );
}
