import {
    DownloadIcon,
    FileTextIcon,
    MessageSquareTextIcon,
    TagIcon,
} from 'lucide-react';
import { commentToneClass, type ProfileSidebar } from './types';

export default function ProfileSidebar({
    sidebar,
}: {
    sidebar: ProfileSidebar;
}) {
    return (
        <aside className="space-y-space-lg">
            <div className="bg-surface-container-lowest p-space-md space-y-space-md rounded-xl shadow-sm">
                <div className="pb-space-xs flex items-center justify-between">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-1 font-semibold">
                        <TagIcon className="text-brand h-5 w-5" />
                        <span>{sidebar.topicsTitle}</span>
                    </h3>
                    <span className="font-caption text-caption text-warm">
                        {sidebar.topicsMeta}
                    </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                    {sidebar.topics.map((topic) => (
                        <button
                            className="px-space-sm bg-surface-container-high hover:bg-brand hover:text-on-brand text-on-surface font-label-editorial text-label-editorial rounded py-1 transition-colors"
                            key={topic}
                            type="button"
                        >
                            {topic}
                        </button>
                    ))}
                </div>
                <div className="pt-space-xs bg-surface-container-low p-space-sm rounded-lg">
                    <div className="text-warm font-label-dateline text-label-dateline mb-1 flex items-center justify-between">
                        <span>{sidebar.activityLabel}</span>
                        <span className="text-tertiary font-bold">
                            {sidebar.activityDelta}
                        </span>
                    </div>
                    <div className="flex h-20 w-full items-end justify-between gap-1 pt-2">
                        {sidebar.activityBars.map((bar) => (
                            <div
                                className="bg-brand/40 hover:bg-brand flex-1 rounded-t transition-all"
                                key={bar.day}
                                style={{ height: `${bar.height}%` }}
                                title={bar.title}
                            />
                        ))}
                    </div>
                    <div className="font-caption text-warm mt-1 flex justify-between px-1 text-[10px]">
                        {sidebar.activityBars.map((bar) => (
                            <span key={bar.day}>{bar.day}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-surface-container-lowest p-space-md space-y-space-md rounded-xl shadow-sm">
                <div className="pb-space-xs flex items-center justify-between">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-1 font-semibold">
                        <MessageSquareTextIcon className="text-brand h-5 w-5" />
                        <span>{sidebar.commentsTitle}</span>
                    </h3>
                    <button
                        className="font-caption text-caption text-brand cursor-pointer hover:underline"
                        type="button"
                    >
                        {sidebar.commentsAllLabel}
                    </button>
                </div>
                {sidebar.comments.map((comment) => (
                    <div
                        className="bg-surface-container-low p-space-sm space-y-space-xs rounded-lg"
                        key={comment.name}
                    >
                        <div className="gap-space-xs flex items-center">
                            <div
                                className={`font-caption text-caption flex h-8 w-8 items-center justify-center rounded-full font-bold ${commentToneClass[comment.tone]}`}
                            >
                                {comment.initials}
                            </div>
                            <div>
                                <h4 className="font-label-editorial text-label-editorial text-on-surface font-semibold">
                                    {comment.name}
                                </h4>
                                <div className="font-caption text-caption text-warm">
                                    {comment.meta}
                                </div>
                            </div>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                            {comment.body}
                        </p>
                        <div className="font-label-dateline text-label-dateline text-warm pt-0.5">
                            প্রতিক্রিয়া:{' '}
                            <span className="text-brand">{comment.paper}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-surface-container-lowest p-space-md space-y-space-sm rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-1 font-semibold">
                        <DownloadIcon className="text-warm h-5 w-5" />
                        <span>{sidebar.recapsTitle}</span>
                    </h3>
                    <span className="font-caption text-caption text-tertiary">
                        {sidebar.recapsBadge}
                    </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {sidebar.recapsLead}
                </p>
                <div className="space-y-space-xs pt-1">
                    {sidebar.recaps.map((recap) => (
                        <div
                            className="p-space-xs bg-surface-container-low hover:bg-surface-container flex items-center justify-between rounded transition-colors"
                            key={recap.title}
                        >
                            <div className="gap-space-xs flex items-center">
                                <FileTextIcon className="text-brand h-5 w-5" />
                                <div>
                                    <div className="font-label-editorial text-label-editorial text-on-surface font-semibold">
                                        {recap.title}
                                    </div>
                                    <div className="font-caption text-caption text-warm">
                                        {recap.meta}
                                    </div>
                                </div>
                            </div>
                            <button
                                className="bg-surface-container-high text-on-surface hover:text-brand rounded p-1 transition-colors"
                                title="ডাউনলোড"
                                type="button"
                            >
                                <DownloadIcon className="h-[18px] w-[18px]" />
                            </button>
                        </div>
                    ))}
                </div>
                <div className="mt-space-md p-space-sm bg-surface-container space-y-1 rounded-lg text-center">
                    <div className="font-label-editorial text-label-editorial text-brand font-bold">
                        {sidebar.pledgeTitle}
                    </div>
                    <p className="font-caption text-caption text-on-surface-variant">
                        {sidebar.pledgeBody}
                    </p>
                </div>
            </div>
        </aside>
    );
}
