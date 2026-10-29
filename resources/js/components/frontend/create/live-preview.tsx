import { BrainIcon, LightbulbIcon } from 'lucide-react';
import { getWordCount, type CreateFormState, type CreatePreview, type CreateStyle } from './types';

export default function LivePreview({
    preview,
    form,
    styles,
}: {
    preview: CreatePreview;
    form: CreateFormState;
    styles: CreateStyle[];
}) {
    const selectedStyle =
        styles.find((style) => style.id === form.styleId) ?? styles[0];
    const event1Words = getWordCount(form.event1);
    const headline =
        event1Words > 5
            ? `${form.event1.slice(0, 48).trim()}${form.event1.length > 48 ? '...' : ''}`
            : preview.defaultHeadline;

    return (
        <div className="lg:sticky lg:top-36">
            <div className="mb-space-sm px-space-xs flex items-center justify-between">
                <div className="gap-space-xs font-label-editorial text-label-editorial text-brand flex items-center font-semibold">
                    <span className="bg-brand h-2.5 w-2.5 animate-pulse rounded-full" />
                    <span>{preview.liveLabel}</span>
                </div>
                <span className="font-caption text-caption text-warm italic">
                    {preview.draftLabel}
                </span>
            </div>
            <div className="bg-surface-container-lowest p-space-md gap-space-md relative flex flex-col overflow-hidden rounded shadow-xl">
                <div className="bg-surface-container-low text-on-surface-variant font-label-dateline text-label-dateline flex items-center justify-between rounded px-space-sm py-1">
                    <span>{preview.issueLeft}</span>
                    <span>{preview.issueDate}</span>
                    <span>{preview.issuePrice}</span>
                </div>
                <div className="py-space-xs text-center">
                    <h2 className="font-masthead-mobile text-headline-lg text-brand font-bold tracking-tight">
                        {form.masthead.trim() || 'আমার আজকের কাগজ'}
                    </h2>
                    <div className="mt-1 gap-space-sm flex items-center justify-center">
                        <span className="bg-warm/40 h-px w-12" />
                        <p className="font-label-editorial text-label-editorial text-warm italic">
                            {preview.tagline}
                        </p>
                        <span className="bg-warm/40 h-px w-12" />
                    </div>
                </div>
                <div className="bg-surface p-space-md gap-space-sm flex flex-col rounded">
                    <div className="flex items-center justify-between gap-space-xs">
                        <span className="bg-brand/10 text-brand font-label-editorial rounded px-space-xs py-0.5 text-[11px] font-bold">
                            {form.category}
                        </span>
                        <span className="font-label-editorial text-label-editorial text-warm shrink-0">
                            প্রতিবেদন: {form.byline.trim() || 'বিশেষ সংবাদদাতা'}
                        </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface font-bold leading-snug">
                        {headline}
                    </h3>
                    <div className="relative h-44 w-full overflow-hidden rounded shadow-sm">
                        <img
                            alt={preview.imageAlt}
                            className="h-full w-full object-cover"
                            src={preview.image}
                        />
                        <div className="bg-inverse-surface/80 absolute inset-x-0 bottom-0 p-space-xs">
                            <p className="font-caption text-caption text-inverse-on-surface truncate">
                                {preview.imageCaption}
                            </p>
                        </div>
                    </div>
                    <p className="font-body-md text-body-sm text-on-surface-variant text-justify leading-relaxed">
                        {form.event1.trim() ||
                            'দিনের সবচেয়ে বড় ঘটনাটি এখানে সংযোজিত হবে...'}
                    </p>
                </div>
                <div className="gap-space-sm grid grid-cols-2">
                    <div className="bg-surface-container-low p-space-sm flex flex-col justify-between rounded">
                        <div>
                            <span className="font-label-editorial text-warm mb-1 block text-[10px] font-bold tracking-wider uppercase">
                                দ্বিতীয় কলাম
                            </span>
                            <h4 className="font-headline-sm text-body-md text-on-surface mb-1 font-bold">
                                {preview.col2Title}
                            </h4>
                            <p className="font-body-sm text-on-surface-variant line-clamp-3 text-[12px]">
                                {form.event2.trim() ||
                                    'দ্বিতীয় কৌতূহলোদ্দীপক স্মৃতিটি এখানে দেখা যাবে...'}
                            </p>
                        </div>
                        <div className="pt-space-xs mt-space-xs">
                            <span className="font-label-dateline text-brand text-[10px] font-medium">
                                {preview.col2Meta}
                            </span>
                        </div>
                    </div>
                    <div className="bg-surface-container-low p-space-sm flex flex-col justify-between rounded">
                        <div>
                            <span className="font-label-editorial text-tertiary mb-1 block text-[10px] font-bold tracking-wider uppercase">
                                সান্ধ্যকালীন কোলাজ
                            </span>
                            <h4 className="font-headline-sm text-body-md text-on-surface mb-1 font-bold">
                                {preview.col3Title}
                            </h4>
                            <p className="font-body-sm text-on-surface-variant line-clamp-3 text-[12px]">
                                {form.event3.trim() ||
                                    'সন্ধ্যার অলস মিষ্টি অনুভূতি এখানে প্রদর্শিত হবে...'}
                            </p>
                        </div>
                        <div className="pt-space-xs mt-space-xs">
                            <span className="font-label-dateline text-tertiary text-[10px] font-medium">
                                {preview.col3Meta}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bg-surface text-warm font-label-dateline flex items-center justify-between rounded px-space-md py-space-xs text-[11px]">
                    <div className="flex items-center gap-1">
                        <BrainIcon className="h-3.5 w-3.5" />
                        <span>
                            {selectedStyle?.previewLabel ??
                                'শৈলী: মজার ও হাস্যরসাত্মক'}
                        </span>
                    </div>
                    <span className="font-caption italic">
                        {preview.pendingLabel}
                    </span>
                </div>
            </div>
            <div className="bg-warm-container/30 p-space-md mt-space-md gap-space-sm flex items-start rounded">
                <LightbulbIcon className="text-warm mt-0.5 h-[22px] w-[22px] shrink-0" />
                <p className="font-caption text-caption text-on-warm-container leading-relaxed">
                    <strong>টিপস:</strong> {preview.tip}
                </p>
            </div>
        </div>
    );
}
