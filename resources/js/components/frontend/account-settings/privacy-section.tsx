import { Share2Icon } from 'lucide-react';
import type { PrivacySection, SettingsFormState } from './types';

export default function PrivacySectionCard({
    form,
    privacy,
    onChange,
}: {
    form: SettingsFormState;
    privacy: PrivacySection;
    onChange: (patch: Partial<SettingsFormState>) => void;
}) {
    return (
        <section
            className="bg-surface-container-lowest p-space-lg gap-space-md flex flex-col rounded-lg shadow-sm"
            id="privacy"
        >
            <div className="pb-space-xs flex items-center justify-between">
                <div className="gap-space-sm flex items-center">
                    <span className="bg-brand/10 text-brand font-headline-sm flex h-8 w-8 items-center justify-center rounded font-bold">
                        {privacy.number}
                    </span>
                    <div>
                        <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                            {privacy.title}
                        </h2>
                        <p className="font-caption text-caption text-warm">
                            {privacy.subtitle}
                        </p>
                    </div>
                </div>
                <span className="font-label-editorial text-label-editorial bg-surface-container text-warm px-space-xs py-0.5 font-semibold">
                    {privacy.sectionBadge}
                </span>
            </div>

            <div className="gap-space-sm flex flex-col">
                <label className="font-label-editorial text-label-editorial text-on-surface font-semibold uppercase">
                    {privacy.publishLabel}
                </label>
                <div className="gap-space-md grid grid-cols-1 md:grid-cols-2">
                    {privacy.publishModes.map((mode) => (
                        <label
                            className="gap-space-sm p-space-md bg-surface-container-low hover:bg-surface-container relative flex cursor-pointer items-start rounded transition-colors"
                            key={mode.id}
                        >
                            <input
                                checked={form.publishMode === mode.id}
                                className="accent-brand mt-1"
                                name="publish_mode"
                                type="radio"
                                value={mode.id}
                                onChange={() =>
                                    onChange({ publishMode: mode.id })
                                }
                            />
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                                        {mode.title}
                                    </span>
                                    {mode.recommended ? (
                                        <span className="bg-brand/10 text-brand font-caption text-caption rounded px-1.5 py-0.5">
                                            প্রস্তাবিত
                                        </span>
                                    ) : null}
                                </div>
                                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                                    {mode.body}
                                </span>
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            <div className="gap-space-xs pt-space-xs flex flex-col">
                <label className="font-label-editorial text-label-editorial text-on-surface font-semibold uppercase">
                    {privacy.commentsLabel}
                </label>
                <div className="gap-space-sm grid grid-cols-1 sm:grid-cols-3">
                    {privacy.commentRules.map((rule) => (
                        <label
                            className="p-space-sm bg-surface-container-low hover:bg-surface-container flex cursor-pointer flex-col rounded transition-colors"
                            key={rule.id}
                        >
                            <div className="flex items-center gap-2">
                                <input
                                    checked={form.commentsRule === rule.id}
                                    className="accent-brand"
                                    name="comments_rule"
                                    type="radio"
                                    value={rule.id}
                                    onChange={() =>
                                        onChange({ commentsRule: rule.id })
                                    }
                                />
                                <span className="font-body-md text-body-md text-on-surface font-semibold">
                                    {rule.title}
                                </span>
                            </div>
                            <span className="font-caption text-caption text-warm mt-1">
                                {rule.body}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="p-space-md bg-surface-container-low mt-space-xs gap-space-md flex flex-col justify-between rounded-lg sm:flex-row sm:items-center">
                <div className="gap-space-sm flex items-start">
                    <Share2Icon className="text-brand mt-0.5 h-6 w-6 shrink-0" />
                    <div>
                        <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            {privacy.socialShare.title}
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                            {privacy.socialShare.body}
                        </p>
                    </div>
                </div>
                <label className="relative inline-flex flex-shrink-0 cursor-pointer items-center">
                    <input
                        checked={form.socialShare}
                        className="peer sr-only"
                        type="checkbox"
                        onChange={() =>
                            onChange({ socialShare: !form.socialShare })
                        }
                    />
                    <div className="bg-surface-container-highest peer-checked:bg-brand after:bg-surface peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white h-6 w-12 rounded-full" />
                </label>
            </div>
        </section>
    );
}
