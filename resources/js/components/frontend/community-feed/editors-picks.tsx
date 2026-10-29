import { ShieldCheckIcon } from 'lucide-react';
import { toneTextClass, type EditorsPick } from './types';

export default function EditorsPicks({
    editorsPicks,
}: {
    editorsPicks: EditorsPick[];
}) {
    return (
        <div className="bg-surface-container-lowest p-space-md">
            <div className="gap-space-xs font-label-editorial text-label-editorial text-brand mb-space-sm pb-space-xs flex items-center font-bold tracking-wider uppercase">
                <ShieldCheckIcon className="h-[18px] w-[18px]" />
                <span>সম্পাদকীয় পছন্দ</span>
            </div>
            <div className="space-y-space-md">
                {editorsPicks.map((pick, index) => (
                    <div key={pick.title}>
                        {index > 0 && (
                            <div className="bg-surface-container mb-space-md h-px w-full" />
                        )}
                        <a className="group block" href={pick.href}>
                            <span
                                className={`font-label-dateline text-label-dateline ${toneTextClass[pick.metaTone]}`}
                            >
                                {pick.meta}
                            </span>
                            <h5 className="font-headline-sm text-on-surface group-hover:text-brand text-base leading-snug font-semibold transition-colors">
                                {pick.title}
                            </h5>
                            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                                {pick.excerpt}
                            </p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
