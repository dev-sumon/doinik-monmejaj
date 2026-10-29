import { useState } from 'react';
import { toneTextClass, type FeedHeader, type FeedTab } from './types';

export default function FeedPageHeader({
    header,
    tabs,
    topics,
}: {
    header: FeedHeader;
    tabs: FeedTab[];
    topics: string[];
}) {
    const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? 'all');
    const [activeTopic, setActiveTopic] = useState(topics[0] ?? '');

    return (
        <div className="bg-surface-container-low p-space-md md:p-space-lg mb-space-lg relative overflow-hidden">
            <div className="gap-space-md flex flex-col justify-between md:flex-row md:items-end">
                <div className="max-w-3xl">
                    <div className="gap-space-xs font-label-editorial text-label-editorial text-brand mb-space-xs inline-flex items-center tracking-widest uppercase">
                        <span className="bg-brand h-2 w-2" />
                        <span>{header.eyebrow}</span>
                    </div>
                    <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface mb-space-xs font-bold tracking-tight">
                        {header.title}
                    </h1>
                    <p className="font-body-md text-body-md md:font-lead md:text-lead text-on-surface-variant leading-relaxed">
                        {header.lead}
                    </p>
                </div>
                <div className="gap-space-md bg-surface-container px-space-md py-space-sm flex items-center self-start md:self-auto">
                    {header.counters.map((counter, index) => (
                        <div className="contents" key={counter.label}>
                            {index > 0 && (
                                <div className="bg-outline-variant h-8 w-px" />
                            )}
                            <div className="text-left">
                                <span className="font-label-dateline text-label-dateline text-warm block uppercase">
                                    {counter.label}
                                </span>
                                <span
                                    className={`font-headline-sm text-headline-sm font-bold ${toneTextClass[counter.tone]}`}
                                >
                                    {counter.value}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-space-lg pt-space-md gap-space-md flex flex-col">
                <div className="gap-space-lg flex items-center overflow-x-auto pb-1">
                    {tabs.map((tab) => {
                        const isActive = tab.id === activeTab;

                        return (
                            <button
                                className={`font-label-editorial text-label-editorial relative shrink-0 whitespace-nowrap py-space-xs transition-colors ${
                                    isActive
                                        ? 'text-brand font-bold'
                                        : 'text-on-surface-variant hover:text-on-surface'
                                }`}
                                key={tab.id}
                                type="button"
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                                {isActive && (
                                    <span className="bg-brand absolute right-0 bottom-0 left-0 h-[2px]" />
                                )}
                            </button>
                        );
                    })}
                </div>
                <div className="gap-space-xs flex flex-wrap items-center pt-space-xs">
                    {topics.map((topic) => {
                        const isActive = topic === activeTopic;

                        return (
                            <button
                                className={`px-space-sm font-label-editorial text-label-editorial py-1 transition-colors ${
                                    isActive
                                        ? 'bg-brand text-on-brand'
                                        : 'bg-surface-container text-on-surface hover:bg-warm-container'
                                }`}
                                key={topic}
                                type="button"
                                onClick={() => setActiveTopic(topic)}
                            >
                                {topic}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
