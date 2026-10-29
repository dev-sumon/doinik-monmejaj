import { Link } from '@inertiajs/react';
import {
    BadgeCheckIcon,
    BookOpenIcon,
    CalendarIcon,
    EyeIcon,
    FilePlusIcon,
    MapPinIcon,
    MessageSquareIcon,
    NewspaperIcon,
    PencilIcon,
    SettingsIcon,
    Share2Icon,
    SmileIcon,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { accountSettings, create } from '@/routes';
import {
    metricValueClass,
    type PressPass,
    type ProfileMetric,
} from './types';

const metricIcons: Record<string, LucideIcon> = {
    newspaper: NewspaperIcon,
    eye: EyeIcon,
    comment: MessageSquareIcon,
    smile: SmileIcon,
};

export default function PressPassCard({
    metrics,
    pressPass,
}: {
    metrics: ProfileMetric[];
    pressPass: PressPass;
}) {
    return (
        <div className="bg-surface-container-lowest p-space-md md:p-space-lg relative w-full overflow-hidden rounded-xl shadow-sm">
            <div className="text-brand pointer-events-none absolute -right-8 -bottom-10 opacity-[0.04]">
                <svg
                    className="h-72 w-72"
                    fill="currentColor"
                    viewBox="0 0 200 200"
                >
                    <circle
                        cx="100"
                        cy="100"
                        fill="none"
                        r="90"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <circle
                        cx="100"
                        cy="100"
                        fill="none"
                        r="70"
                        stroke="currentColor"
                        strokeDasharray="6 6"
                        strokeWidth="2"
                    />
                    <path d="M100 25 L108 55 L138 60 L115 80 L122 110 L100 95 L78 110 L85 80 L62 60 L92 55 Z" />
                </svg>
            </div>
            <div className="gap-space-lg relative z-10 flex flex-col items-start justify-between lg:flex-row lg:items-center">
                <div className="gap-space-md flex flex-col items-start sm:flex-row sm:items-center">
                    <div className="relative">
                        <div className="bg-surface-container h-28 w-28 overflow-hidden rounded-full shadow-md sm:h-32 sm:w-32">
                            <img
                                alt={pressPass.avatarAlt}
                                className="h-full w-full object-cover"
                                src={pressPass.avatar}
                            />
                        </div>
                        <div
                            className="bg-brand text-on-brand absolute right-1 bottom-1 flex items-center justify-center rounded-full p-1 shadow-sm"
                            title={pressPass.verifiedTitle}
                        >
                            <BadgeCheckIcon className="h-[18px] w-[18px]" />
                        </div>
                    </div>
                    <div className="space-y-space-xs">
                        <div className="gap-space-xs flex flex-wrap items-center">
                            <span className="bg-brand-container/10 text-brand font-label-editorial text-label-editorial px-space-xs rounded py-0.5">
                                {pressPass.passNo}
                            </span>
                            <span className="bg-tertiary-container/15 text-tertiary font-label-dateline text-label-dateline px-space-xs rounded py-0.5">
                                {pressPass.statusBadge}
                            </span>
                        </div>
                        <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                            {pressPass.name}
                        </h1>
                        <p className="font-label-editorial text-label-editorial text-brand flex items-center gap-1 font-semibold">
                            <span>{pressPass.role}</span>
                            <span className="text-warm">•</span>
                            <span className="text-on-surface-variant font-normal">
                                {pressPass.org}
                            </span>
                        </p>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl leading-relaxed pt-1">
                            {pressPass.bio}
                        </p>
                        <div className="gap-space-md font-caption text-caption text-warm flex flex-wrap items-center pt-1">
                            <span className="flex items-center gap-1">
                                <CalendarIcon className="h-[15px] w-[15px]" />
                                <span>{pressPass.joined}</span>
                            </span>
                            <span className="flex items-center gap-1">
                                <MapPinIcon className="h-[15px] w-[15px]" />
                                <span>{pressPass.location}</span>
                            </span>
                            <span className="flex items-center gap-1">
                                <BookOpenIcon className="h-[15px] w-[15px]" />
                                <span>{pressPass.editionCount}</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="gap-space-xs pt-space-xs lg:pt-0 flex w-full flex-wrap sm:flex-col lg:w-auto lg:flex-row">
                    <Link
                        className="gap-space-xs px-space-md py-space-xs bg-brand text-on-brand hover:bg-brand-container font-label-editorial text-label-editorial inline-flex flex-1 items-center justify-center rounded shadow-sm transition-colors sm:flex-initial"
                        href={create.url()}
                    >
                        <FilePlusIcon className="h-[18px] w-[18px]" />
                        <span>{pressPass.writeCta}</span>
                    </Link>
                    <Link
                        className="gap-space-xs px-space-md py-space-xs bg-surface-container-high text-on-surface hover:bg-surface-dim font-label-editorial text-label-editorial inline-flex items-center justify-center rounded transition-colors"
                        href={accountSettings.url()}
                    >
                        <PencilIcon className="h-[18px] w-[18px]" />
                        <span>{pressPass.editCta}</span>
                    </Link>
                    <button
                        className="p-space-xs bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-dim rounded transition-colors"
                        title={pressPass.shareTitle}
                        type="button"
                    >
                        <Share2Icon className="h-5 w-5" />
                    </button>
                    <Link
                        className="p-space-xs bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-dim rounded transition-colors"
                        href={accountSettings.url()}
                        title={pressPass.settingsTitle}
                    >
                        <SettingsIcon className="h-5 w-5" />
                    </Link>
                </div>
            </div>
            <div className="mt-space-lg pt-space-md gap-space-sm bg-surface-container-low p-space-sm grid grid-cols-2 rounded-lg md:grid-cols-4">
                {metrics.map((metric) => {
                    const Icon = metricIcons[metric.icon] ?? NewspaperIcon;

                    return (
                        <div
                            className="p-space-xs text-center md:text-left"
                            key={metric.id}
                        >
                            <div className="font-label-dateline text-label-dateline text-warm flex items-center justify-center gap-1 md:justify-start">
                                <Icon className="h-3.5 w-3.5" />
                                <span>{metric.label}</span>
                            </div>
                            <div
                                className={`font-headline-md text-headline-md font-bold ${metricValueClass[metric.tone]}`}
                            >
                                {metric.value}
                            </div>
                            <div
                                className={`font-caption text-caption ${
                                    metric.tone === 'tertiary'
                                        ? 'text-tertiary'
                                        : 'text-on-surface-variant'
                                }`}
                            >
                                {metric.hint}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
