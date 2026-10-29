import { barToneClass, type Tone } from './types';

export default function PollOptionBar({
    label,
    percent,
    votesLabel,
    barTone,
    index,
    selected = false,
    compact = false,
    emphasize = false,
    onSelect,
}: {
    label: string;
    percent: number;
    votesLabel?: string;
    barTone: Tone;
    index?: number;
    selected?: boolean;
    compact?: boolean;
    emphasize?: boolean;
    onSelect?: () => void;
}) {
    const Wrapper = onSelect ? 'button' : 'div';

    return (
        <Wrapper
            className={`bg-surface-container-low hover:bg-surface-container p-space-md group relative w-full rounded-lg text-left transition-all ${
                onSelect ? 'cursor-pointer' : ''
            } ${compact ? 'p-space-xs' : 'p-space-md'}`}
            type={onSelect ? 'button' : undefined}
            onClick={onSelect}
        >
            <div
                className={`mb-space-xs relative z-10 flex items-center justify-between ${compact ? 'mb-1' : ''}`}
            >
                <div className="gap-space-sm flex min-w-0 items-center">
                    {!compact && (
                        <span
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[12px] font-bold ${
                                selected
                                    ? 'bg-brand text-on-brand'
                                    : 'bg-surface-container-high text-on-surface-variant'
                            }`}
                        >
                            {selected ? '✓' : (index ?? '')}
                        </span>
                    )}
                    <span
                        className={`min-w-0 ${
                            compact
                                ? 'font-body-sm text-body-sm text-on-surface font-medium'
                                : `font-body-lg text-body-lg text-on-surface ${selected ? 'font-semibold' : ''}`
                        }`}
                    >
                        {label}
                    </span>
                </div>
                <div className="shrink-0 text-right">
                    <span
                        className={`${
                            compact
                                ? `font-body-sm text-body-sm font-bold ${emphasize ? 'text-brand' : 'text-on-surface'}`
                                : `font-headline-sm text-headline-sm ${selected ? 'text-brand font-bold' : 'text-on-surface font-semibold'}`
                        }`}
                    >
                        {percent}%
                    </span>
                    {votesLabel && (
                        <span className="font-caption text-caption text-on-surface-variant ml-1">
                            {votesLabel}
                        </span>
                    )}
                </div>
            </div>
            <div
                className={`bg-surface-container-high relative z-10 w-full overflow-hidden rounded-full ${
                    compact ? 'h-1.5' : selected ? 'h-2.5' : 'h-2'
                }`}
            >
                <div
                    className={`${barToneClass[barTone]} h-full rounded-full transition-all duration-700`}
                    style={{ width: `${percent}%` }}
                />
            </div>
            {selected && !compact && (
                <span className="font-caption text-caption text-brand relative z-10 mt-2 inline-block font-medium">
                    ● আপনার নির্বাচিত মতামত
                    {emphasize ? ' (সর্বাধিক রায়)' : ''}
                </span>
            )}
        </Wrapper>
    );
}
