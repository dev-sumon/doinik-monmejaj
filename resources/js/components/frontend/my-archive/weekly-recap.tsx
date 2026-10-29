import {
    ArrowRightIcon,
    DownloadIcon,
    Share2Icon,
} from 'lucide-react';
import { badgeToneClass, type WeeklyRecap as WeeklyRecapType } from './types';

export default function WeeklyRecap({
    weeklyRecap,
}: {
    weeklyRecap: WeeklyRecapType;
}) {
    return (
        <div className="bg-surface-container-lowest p-space-lg mb-space-lg shadow-sm">
            <div className="gap-space-lg grid grid-cols-1 items-center lg:grid-cols-12">
                <div className="bg-surface-container-low p-space-md relative flex flex-col justify-between lg:col-span-4">
                    <div className="pb-space-xs flex items-center justify-between">
                        <span className="font-label-editorial text-label-editorial text-brand tracking-widest uppercase font-bold">
                            {weeklyRecap.eyebrow}
                        </span>
                        <span className="font-label-dateline text-label-dateline text-warm">
                            {weeklyRecap.issue}
                        </span>
                    </div>
                    <div className="py-space-md">
                        <div className="mb-space-xs relative h-44 w-full overflow-hidden">
                            <img
                                alt={weeklyRecap.imageAlt}
                                className="h-full w-full object-cover"
                                src={weeklyRecap.image}
                            />
                            <div className="from-inverse-surface/80 absolute inset-0 flex items-end bg-gradient-to-t via-transparent to-transparent p-space-xs">
                                <span className="font-caption text-caption text-on-brand">
                                    {weeklyRecap.imageCaption}
                                </span>
                            </div>
                        </div>
                        <p className="font-caption text-caption text-warm text-center italic">
                            {weeklyRecap.imageQuote}
                        </p>
                    </div>
                    <div className="pt-space-xs text-on-surface-variant font-label-dateline text-label-dateline flex items-center justify-between">
                        <span>{weeklyRecap.pagesMeta}</span>
                        <span className="text-brand font-semibold">
                            {weeklyRecap.savedMeta}
                        </span>
                    </div>
                </div>
                <div className="space-y-space-md flex flex-col justify-between lg:col-span-8">
                    <div className="space-y-space-xs">
                        <div className="gap-space-xs flex flex-wrap items-center">
                            {weeklyRecap.badges.map((badge) => (
                                <span
                                    className={`font-label-editorial text-label-editorial px-space-xs py-0.5 ${badgeToneClass[badge.tone]}`}
                                    key={badge.label}
                                >
                                    {badge.label}
                                </span>
                            ))}
                        </div>
                        <h2 className="font-headline-md text-headline-md text-on-surface hover:text-brand pt-space-xs cursor-pointer transition-colors">
                            {weeklyRecap.title}
                        </h2>
                        <p className="font-body-md text-body-md md:font-body-lg md:text-body-lg text-on-surface-variant leading-relaxed">
                            {weeklyRecap.body}
                        </p>
                    </div>
                    <div className="bg-surface-container p-space-sm">
                        <div className="font-caption text-caption text-on-surface mb-1 flex items-center justify-between">
                            <span>{weeklyRecap.progressLabel}</span>
                            <span className="text-brand font-semibold">
                                {weeklyRecap.progressValue}
                            </span>
                        </div>
                        <div className="bg-surface-dim h-2 w-full overflow-hidden rounded-full">
                            <div
                                className="bg-brand h-full rounded-full transition-all duration-500"
                                style={{
                                    width: `${weeklyRecap.progressPercent}%`,
                                }}
                            />
                        </div>
                    </div>
                    <div className="gap-space-sm pt-space-xs flex flex-wrap items-center">
                        <button
                            className="gap-space-xs bg-brand text-on-brand hover:bg-brand-container font-label-editorial text-label-editorial inline-flex items-center px-space-md py-space-xs shadow-sm transition-colors"
                            type="button"
                            onClick={() =>
                                window.alert(
                                    'সাপ্তাহিক ব্রডশীট PDF আকারে প্রস্তুত হচ্ছে...',
                                )
                            }
                        >
                            <DownloadIcon className="h-[18px] w-[18px]" />
                            <span>{weeklyRecap.primaryAction}</span>
                        </button>
                        <button
                            className="gap-space-xs bg-surface-container-high text-on-surface hover:bg-surface-dim font-label-editorial text-label-editorial inline-flex items-center px-space-md py-space-xs transition-colors"
                            type="button"
                            onClick={() =>
                                window.alert('স্মৃতির লিঙ্ক কপি করা হয়েছে!')
                            }
                        >
                            <Share2Icon className="h-[18px] w-[18px]" />
                            <span>{weeklyRecap.secondaryAction}</span>
                        </button>
                        <button
                            className="gap-space-xs text-warm hover:text-brand font-label-editorial text-label-editorial ml-auto inline-flex items-center px-space-sm py-space-xs transition-colors"
                            type="button"
                            onClick={() =>
                                window.alert(
                                    'গত সপ্তাহের আর্কাইভ খোলা হচ্ছে...',
                                )
                            }
                        >
                            <span>{weeklyRecap.tertiaryAction}</span>
                            <ArrowRightIcon className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
