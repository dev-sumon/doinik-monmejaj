import { CheckCheckIcon, LoaderCircleIcon, Settings2Icon, SparklesIcon, ShieldCheckIcon } from 'lucide-react';
import { useState } from 'react';
import EventCard from './event-card';
import StylePicker from './style-picker';
import type {
    CreateEvent,
    CreateFormState,
    CreateMeta,
    CreateStyle,
    CreateVisibility,
} from './types';

export default function CreateForm({
    events,
    meta,
    styles,
    visibility,
    form,
    onChange,
}: {
    events: CreateEvent[];
    meta: CreateMeta;
    styles: CreateStyle[];
    visibility: CreateVisibility[];
    form: CreateFormState;
    onChange: (patch: Partial<CreateFormState>) => void;
}) {
    const [generateState, setGenerateState] = useState<
        'idle' | 'loading' | 'done'
    >('idle');

    function handleGenerate(): void {
        if (generateState !== 'idle') {
            return;
        }

        setGenerateState('loading');

        window.setTimeout(() => {
            setGenerateState('done');

            window.setTimeout(() => {
                window.alert(meta.successMessage);
                setGenerateState('idle');
            }, 900);
        }, 1800);
    }

    const eventValues: Record<string, string> = {
        event1: form.event1,
        event2: form.event2,
        event3: form.event3,
    };

    return (
        <div className="gap-space-lg flex flex-col">
            {events.map((event) => (
                <EventCard
                    key={event.id}
                    category={
                        event.id === 'event1' ? form.category : undefined
                    }
                    event={event}
                    value={eventValues[event.id] ?? ''}
                    onCategoryChange={
                        event.id === 'event1'
                            ? (category) => onChange({ category })
                            : undefined
                    }
                    onChange={(value) =>
                        onChange({ [event.id]: value } as Partial<CreateFormState>)
                    }
                />
            ))}
            <div className="bg-surface-container-low p-space-lg space-y-space-md rounded">
                <div className="gap-space-xs pb-space-xs flex items-center">
                    <Settings2Icon className="text-brand h-5 w-5" />
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        {meta.sectionTitle}
                    </h3>
                </div>
                <div className="gap-space-md grid grid-cols-1 md:grid-cols-2">
                    <div className="space-y-1">
                        <label
                            className="font-label-editorial text-label-editorial text-on-surface-variant font-semibold"
                            htmlFor="masthead-name-input"
                        >
                            {meta.mastheadLabel}
                        </label>
                        <input
                            className="bg-surface-container-lowest text-on-surface font-headline-sm text-headline-sm w-full rounded px-space-md py-space-xs outline-none"
                            id="masthead-name-input"
                            type="text"
                            value={form.masthead}
                            onChange={(e) =>
                                onChange({ masthead: e.target.value })
                            }
                        />
                    </div>
                    <div className="space-y-1">
                        <label
                            className="font-label-editorial text-label-editorial text-on-surface-variant font-semibold"
                            htmlFor="author-byline-input"
                        >
                            {meta.bylineLabel}
                        </label>
                        <input
                            className="bg-surface-container-lowest text-on-surface font-body-md text-body-md w-full rounded px-space-md py-space-xs outline-none"
                            id="author-byline-input"
                            placeholder={meta.bylinePlaceholder}
                            type="text"
                            value={form.byline}
                            onChange={(e) =>
                                onChange({ byline: e.target.value })
                            }
                        />
                    </div>
                </div>
                <div className="space-y-space-xs pt-space-xs">
                    <span className="font-label-editorial text-label-editorial text-on-surface-variant block font-semibold">
                        {meta.styleLabel}
                    </span>
                    <StylePicker
                        selectedId={form.styleId}
                        styles={styles}
                        onSelect={(styleId) => onChange({ styleId })}
                    />
                </div>
                <div className="space-y-space-xs pt-space-xs">
                    <span className="font-label-editorial text-label-editorial text-on-surface-variant block font-semibold">
                        {meta.visibilityLabel}
                    </span>
                    <div className="gap-space-sm grid grid-cols-1 sm:grid-cols-2">
                        {visibility.map((option) => (
                            <label
                                className="gap-space-sm bg-surface-container-lowest hover:bg-surface-bright p-space-md flex cursor-pointer items-center rounded transition-colors"
                                key={option.id}
                            >
                                <input
                                    checked={form.visibilityId === option.id}
                                    className="accent-brand h-4 w-4 cursor-pointer"
                                    name="visibility"
                                    type="radio"
                                    value={option.id}
                                    onChange={() =>
                                        onChange({ visibilityId: option.id })
                                    }
                                />
                                <div className="flex flex-col">
                                    <span className="font-headline-sm text-body-md text-on-surface font-bold">
                                        {option.title}
                                    </span>
                                    <span className="font-caption text-caption text-on-surface-variant">
                                        {option.body}
                                    </span>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>
                <div className="pt-space-md gap-space-xs flex flex-col">
                    <button
                        className="bg-brand text-on-brand hover:bg-brand-container font-headline-sm text-headline-sm group gap-space-sm flex w-full items-center justify-center rounded px-space-xl py-space-md font-bold shadow-md transition-all disabled:opacity-80"
                        disabled={generateState !== 'idle'}
                        type="button"
                        onClick={handleGenerate}
                    >
                        {generateState === 'loading' ? (
                            <>
                                <LoaderCircleIcon className="h-6 w-6 animate-spin" />
                                <span>{meta.generatingLabel}</span>
                            </>
                        ) : generateState === 'done' ? (
                            <>
                                <CheckCheckIcon className="h-6 w-6" />
                                <span>{meta.doneLabel}</span>
                            </>
                        ) : (
                            <>
                                <SparklesIcon className="h-[26px] w-[26px] transition-transform group-hover:rotate-12" />
                                <span>{meta.generateLabel}</span>
                            </>
                        )}
                    </button>
                    <div className="text-warm font-label-dateline text-label-dateline gap-space-xs flex items-center justify-center pt-1 text-center">
                        <ShieldCheckIcon className="h-[15px] w-[15px] shrink-0" />
                        <span>{meta.generateHint}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
