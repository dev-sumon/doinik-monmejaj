import {
    CalendarDaysIcon,
    DownloadIcon,
    EyeIcon,
    GlobeIcon,
    LockIcon,
    MessageCircleIcon,
    PencilIcon,
    Share2Icon,
    Trash2Icon,
    UploadIcon,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { NewspaperPaper } from './types';

const metaIcons: Record<string, LucideIcon> = {
    eye: EyeIcon,
    comment: MessageCircleIcon,
    lock: LockIcon,
    calendar: CalendarDaysIcon,
};

const actionIcons: Record<string, LucideIcon> = {
    edit: PencilIcon,
    download: DownloadIcon,
    share: Share2Icon,
    publish: UploadIcon,
    delete: Trash2Icon,
};

const actionAlerts: Record<string, string> = {
    edit: 'সম্পাদনা উইন্ডো চালু হচ্ছে',
    download: 'কাগজের PDF প্রস্তুত হচ্ছে',
    share: 'শেয়ার লিঙ্ক কপি হয়েছে',
    publish: 'পাবলিক করার অনুমতি চাইছেন?',
};

function handleAction(action: string, paper: NewspaperPaper): void {
    if (action === 'delete') {
        window.confirm(
            'আপনি কি নিশ্চিতভাবে এই সংস্করণটি মুছে ফেলতে চান?',
        );

        return;
    }

    window.alert(`${actionAlerts[action] ?? action}: ${paper.date}`);
}

export default function NewspaperCard({ paper }: { paper: NewspaperPaper }) {
    const isPrivate = paper.status === 'private';
    const MetaLeftIcon = metaIcons[paper.metaLeft.icon] ?? EyeIcon;
    const MetaRightIcon = metaIcons[paper.metaRight.icon] ?? MessageCircleIcon;

    return (
        <article className="bg-surface-container-lowest group relative flex flex-col justify-between overflow-hidden shadow-sm transition-shadow hover:shadow-md">
            <div className="bg-surface-container-low p-space-md pb-space-xs">
                <div className="pb-space-xs flex items-center justify-between">
                    <span className="font-label-dateline text-label-dateline text-warm font-semibold">
                        {paper.date}
                    </span>
                    <span
                        className={`font-label-editorial text-caption inline-flex items-center gap-1 px-1.5 py-0.5 uppercase ${
                            isPrivate
                                ? 'bg-warm text-on-warm'
                                : 'bg-tertiary text-on-tertiary'
                        }`}
                    >
                        {isPrivate ? (
                            <LockIcon className="h-3 w-3" />
                        ) : (
                            <GlobeIcon className="h-3 w-3" />
                        )}
                        {isPrivate ? 'গোপনীয়' : 'পাবলিক'}
                    </span>
                </div>
                <div className="py-1 text-center">
                    <span className="font-masthead-mobile text-brand block text-[16px] font-bold tracking-tight">
                        {paper.masthead}
                    </span>
                    <span className="font-label-dateline text-on-surface-variant text-[10px] italic">
                        {paper.edition}
                    </span>
                </div>
            </div>
            <div className="px-space-md pt-space-xs">
                <div className="bg-surface-container relative h-40 w-full overflow-hidden">
                    <img
                        alt={paper.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={paper.image}
                    />
                    <div className="bg-surface/90 font-label-dateline text-on-surface absolute right-1 bottom-1 px-1 py-0.5 text-[10px]">
                        {paper.readTime}
                    </div>
                </div>
            </div>
            <div className="p-space-md flex flex-1 flex-col justify-between">
                <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface hover:text-brand mb-space-xs cursor-pointer leading-tight transition-colors">
                        {paper.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                        {paper.excerpt}
                    </p>
                </div>
                <div className="pt-space-md mt-space-md">
                    <div className="font-caption text-caption text-warm pb-space-xs flex items-center justify-between">
                        <span className="inline-flex items-center gap-1">
                            <MetaLeftIcon className="h-3.5 w-3.5" />
                            {paper.metaLeft.label}
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <MetaRightIcon className="h-3.5 w-3.5" />
                            {paper.metaRight.label}
                        </span>
                    </div>
                    <div className="pt-space-xs grid grid-cols-4 gap-1">
                        {paper.actions.map((action) => {
                            const Icon = actionIcons[action] ?? PencilIcon;
                            const isDelete = action === 'delete';

                            return (
                                <button
                                    className={`flex items-center justify-center py-1.5 transition-colors ${
                                        isDelete
                                            ? 'bg-surface-container text-red-700 hover:bg-error-container'
                                            : 'bg-surface-container text-on-surface hover:bg-surface-variant'
                                    }`}
                                    key={action}
                                    title={action}
                                    type="button"
                                    onClick={() => handleAction(action, paper)}
                                >
                                    <Icon className="h-4 w-4" />
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </article>
    );
}
