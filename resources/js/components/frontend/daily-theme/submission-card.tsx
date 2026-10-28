import { MessageCircleIcon, ThumbsUpIcon } from 'lucide-react';
import type { ThemeSubmission } from './types';

export default function SubmissionCard({
    submission,
}: {
    submission: ThemeSubmission;
}) {
    return (
        <article className="bg-surface-container-lowest p-space-md group flex flex-col justify-between rounded-lg shadow-sm transition-all hover:shadow-md">
            <div className="space-y-space-xs">
                <div className="flex items-start justify-between gap-space-xs">
                    <div className="gap-space-xs flex min-w-0 items-center">
                        <img
                            alt={submission.author}
                            className="h-8 w-8 shrink-0 rounded-full object-cover"
                            src={submission.avatar}
                        />
                        <div className="min-w-0">
                            <h5 className="font-body-sm text-body-sm text-on-surface truncate font-semibold">
                                {submission.author}
                            </h5>
                            <span className="font-caption text-caption text-warm">
                                {submission.meta}
                            </span>
                        </div>
                    </div>
                    <span className="bg-surface-container font-caption text-caption text-on-surface-variant shrink-0 rounded px-2 py-0.5">
                        {submission.badge}
                    </span>
                </div>
                <div className="bg-surface-container my-space-xs relative h-36 w-full overflow-hidden rounded">
                    <img
                        alt={submission.image.alt}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        src={submission.image.src}
                    />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-brand font-bold transition-colors">
                    {submission.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                    {submission.excerpt}
                </p>
            </div>
            <div className="pt-space-md mt-space-sm border-outline-variant font-caption text-caption text-on-surface-variant flex flex-wrap items-center justify-between gap-space-xs border-t">
                <span className="flex items-center gap-1">
                    <ThumbsUpIcon className="text-brand h-[15px] w-[15px]" />
                    {submission.readers}
                </span>
                <span className="flex items-center gap-1">
                    <MessageCircleIcon className="h-[15px] w-[15px]" />
                    {submission.comments}
                </span>
                <a
                    className="text-brand font-label-editorial text-label-editorial font-semibold hover:underline"
                    href={submission.href}
                >
                    কাগজ খুলুন →
                </a>
            </div>
        </article>
    );
}
