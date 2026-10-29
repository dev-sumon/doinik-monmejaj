import { LightbulbIcon, SendIcon } from 'lucide-react';
import { type FormEvent, useState } from 'react';
import type { SuggestPoll as SuggestPollType } from './types';

export default function SuggestPoll({ suggest }: { suggest: SuggestPollType }) {
    const [question, setQuestion] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        window.alert(suggest.successMessage);
        setQuestion('');
        setOption1('');
        setOption2('');
        setName('');
        setLocation('');
    }

    return (
        <section className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-xl shadow-md">
            <div className="space-y-space-md mx-auto max-w-3xl text-center">
                <div className="bg-brand/10 text-brand mx-auto flex h-12 w-12 items-center justify-center rounded-full">
                    <LightbulbIcon className="h-7 w-7" />
                </div>
                <div className="space-y-space-xs">
                    <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface font-bold">
                        {suggest.title}
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mx-auto max-w-xl">
                        {suggest.lead}
                    </p>
                </div>
                <form
                    className="space-y-space-md pt-space-xs text-left"
                    onSubmit={handleSubmit}
                >
                    <div className="space-y-1">
                        <label className="font-label-editorial text-label-editorial text-on-surface block font-semibold">
                            {suggest.questionLabel}
                        </label>
                        <input
                            className="bg-surface-container-low px-space-md py-space-sm font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:ring-brand w-full rounded-lg transition-all focus:ring-1 focus:outline-none"
                            placeholder={suggest.questionPlaceholder}
                            required
                            type="text"
                            value={question}
                            onChange={(event) =>
                                setQuestion(event.target.value)
                            }
                        />
                    </div>
                    <div className="gap-space-md grid grid-cols-1 md:grid-cols-2">
                        <div className="space-y-1">
                            <label className="font-label-editorial text-label-editorial text-on-surface block font-semibold">
                                {suggest.option1Label}
                            </label>
                            <input
                                className="bg-surface-container-low px-space-md py-space-sm font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:ring-brand w-full rounded-lg transition-all focus:ring-1 focus:outline-none"
                                placeholder={suggest.option1Placeholder}
                                type="text"
                                value={option1}
                                onChange={(event) =>
                                    setOption1(event.target.value)
                                }
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="font-label-editorial text-label-editorial text-on-surface block font-semibold">
                                {suggest.option2Label}
                            </label>
                            <input
                                className="bg-surface-container-low px-space-md py-space-sm font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:ring-brand w-full rounded-lg transition-all focus:ring-1 focus:outline-none"
                                placeholder={suggest.option2Placeholder}
                                type="text"
                                value={option2}
                                onChange={(event) =>
                                    setOption2(event.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="gap-space-md grid grid-cols-1 md:grid-cols-2">
                        <div className="space-y-1">
                            <label className="font-label-editorial text-label-editorial text-on-surface block font-semibold">
                                {suggest.nameLabel}
                            </label>
                            <input
                                className="bg-surface-container-low px-space-md py-space-sm font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:ring-brand w-full rounded-lg transition-all focus:ring-1 focus:outline-none"
                                placeholder={suggest.namePlaceholder}
                                type="text"
                                value={name}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="font-label-editorial text-label-editorial text-on-surface block font-semibold">
                                {suggest.locationLabel}
                            </label>
                            <input
                                className="bg-surface-container-low px-space-md py-space-sm font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:ring-brand w-full rounded-lg transition-all focus:ring-1 focus:outline-none"
                                placeholder={suggest.locationPlaceholder}
                                type="text"
                                value={location}
                                onChange={(event) =>
                                    setLocation(event.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="pt-space-xs text-center">
                        <button
                            className="gap-space-xs bg-brand text-on-brand hover:bg-brand-container font-headline-sm text-headline-sm inline-flex items-center justify-center rounded-lg px-space-xl py-space-sm shadow-sm transition-all"
                            type="submit"
                        >
                            <SendIcon className="h-5 w-5" />
                            <span>{suggest.submitLabel}</span>
                        </button>
                        <p className="font-caption text-caption text-warm mt-space-xs">
                            {suggest.note}
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}
