import { FilePenLineIcon, PenLineIcon } from 'lucide-react';
import type { WritePrompt as WritePromptData } from './types';

export default function WritePrompt({
    writePrompt,
}: {
    writePrompt: WritePromptData;
}) {
    return (
        <div className="bg-warm-container text-on-warm-container p-space-md relative overflow-hidden">
            <div className="gap-space-xs font-label-editorial text-label-editorial mb-space-xs flex items-center tracking-wider uppercase">
                <FilePenLineIcon className="h-[18px] w-[18px]" />
                <span>{writePrompt.eyebrow}</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-bold">
                {writePrompt.title}
            </h3>
            <p className="font-body-sm text-body-sm mb-space-md leading-relaxed opacity-90">
                {writePrompt.body}
            </p>
            <a
                className="bg-brand text-on-brand hover:bg-brand-container gap-space-xs px-space-md py-space-sm font-label-editorial text-label-editorial inline-flex w-full items-center justify-center text-center font-bold transition-colors"
                href={writePrompt.cta.href}
            >
                <PenLineIcon className="h-[18px] w-[18px]" />
                <span>{writePrompt.cta.label}</span>
            </a>
        </div>
    );
}
