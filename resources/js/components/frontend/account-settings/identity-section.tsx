import {
    BadgeCheckIcon,
    CameraIcon,
    CopyIcon,
    MapPinIcon,
} from 'lucide-react';
import type { IdentitySection, SettingsFormState } from './types';

export default function IdentitySectionCard({
    form,
    identity,
    onChange,
}: {
    form: SettingsFormState;
    identity: IdentitySection;
    onChange: (patch: Partial<SettingsFormState>) => void;
}) {
    return (
        <section
            className="bg-surface-container-lowest p-space-lg gap-space-md relative flex flex-col overflow-hidden rounded-lg shadow-sm"
            id="identity"
        >
            <div className="pb-space-xs flex items-center justify-between">
                <div className="gap-space-sm flex items-center">
                    <span className="bg-brand/10 text-brand font-headline-sm flex h-8 w-8 items-center justify-center rounded font-bold">
                        {identity.number}
                    </span>
                    <div>
                        <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                            {identity.title}
                        </h2>
                        <p className="font-caption text-caption text-warm">
                            {identity.subtitle}
                        </p>
                    </div>
                </div>
                <span className="font-label-editorial text-label-editorial bg-surface-container text-warm px-space-xs py-0.5 font-semibold">
                    {identity.sectionBadge}
                </span>
            </div>

            <div className="bg-surface-container-low p-space-md gap-space-md flex flex-col items-center rounded-lg sm:flex-row">
                <div className="group relative">
                    <img
                        alt={identity.avatarTitle}
                        className="ring-surface h-24 w-24 rounded-full object-cover shadow-sm ring-4"
                        src={identity.avatar}
                    />
                    <button
                        aria-label="ছবি পরিবর্তন করুন"
                        className="bg-brand text-on-brand hover:bg-brand-container absolute right-0 bottom-0 rounded-full p-1.5 shadow transition-transform group-hover:scale-105"
                        type="button"
                    >
                        <CameraIcon className="h-4 w-4" />
                    </button>
                </div>
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        {identity.avatarTitle}
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 max-w-md">
                        {identity.avatarHint}
                    </p>
                    <div className="gap-space-sm mt-space-xs flex items-center">
                        <button
                            className="px-space-md bg-surface-container-high hover:bg-surface-dim text-on-surface font-label-editorial text-label-editorial rounded py-1 font-semibold transition-colors"
                            type="button"
                        >
                            {identity.uploadLabel}
                        </button>
                        <button
                            className="px-space-sm text-on-surface-variant hover:text-error font-label-editorial text-label-editorial transition-colors"
                            type="button"
                        >
                            {identity.removeLabel}
                        </button>
                    </div>
                </div>
            </div>

            <div className="gap-space-md pt-space-xs grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col gap-1">
                    <label className="font-label-dateline text-label-dateline text-on-surface-variant font-semibold">
                        {identity.nameLabel}
                    </label>
                    <div className="relative">
                        <input
                            className="px-space-md py-space-xs bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-brand w-full rounded focus:ring-1 focus:outline-none"
                            type="text"
                            value={form.name}
                            onChange={(event) =>
                                onChange({ name: event.target.value })
                            }
                        />
                        <BadgeCheckIcon className="text-brand absolute top-2.5 right-3 h-[18px] w-[18px]" />
                    </div>
                    <span className="font-caption text-caption text-warm">
                        {identity.nameHint}
                    </span>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="font-label-dateline text-label-dateline text-on-surface-variant font-semibold">
                        {identity.roleLabel}
                    </label>
                    <input
                        className="px-space-md py-space-xs bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-brand w-full rounded focus:ring-1 focus:outline-none"
                        type="text"
                        value={form.role}
                        onChange={(event) =>
                            onChange({ role: event.target.value })
                        }
                    />
                    <span className="font-caption text-caption text-warm">
                        {identity.roleHint}
                    </span>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="font-label-dateline text-label-dateline text-on-surface-variant font-semibold">
                        {identity.locationLabel}
                    </label>
                    <div className="bg-surface-container-low px-space-md py-space-xs focus-within:bg-surface-container-lowest focus-within:ring-brand flex items-center rounded focus-within:ring-1">
                        <MapPinIcon className="text-on-surface-variant mr-2 h-[18px] w-[18px]" />
                        <input
                            className="text-on-surface font-body-md text-body-md w-full bg-transparent focus:outline-none"
                            type="text"
                            value={form.location}
                            onChange={(event) =>
                                onChange({ location: event.target.value })
                            }
                        />
                    </div>
                    <span className="font-caption text-caption text-warm">
                        {identity.locationHint}
                    </span>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="font-label-dateline text-label-dateline text-on-surface-variant font-semibold">
                        {identity.urlLabel}
                    </label>
                    <div className="bg-surface-container-low px-space-md py-space-xs font-body-sm text-body-sm text-warm flex items-center rounded">
                        <span className="text-outline font-mono">
                            {identity.urlPrefix}
                        </span>
                        <input
                            className="text-brand ml-1 w-full bg-transparent font-semibold focus:outline-none"
                            type="text"
                            value={form.urlSlug}
                            onChange={(event) =>
                                onChange({ urlSlug: event.target.value })
                            }
                        />
                        <button
                            aria-label="ইউআরএল কপি করুন"
                            className="text-on-surface-variant hover:text-brand ml-2"
                            type="button"
                            onClick={() =>
                                void navigator.clipboard?.writeText(
                                    `${identity.urlPrefix}${form.urlSlug}`,
                                )
                            }
                        >
                            <CopyIcon className="h-4 w-4" />
                        </button>
                    </div>
                    <span className="font-caption text-caption text-warm">
                        {identity.urlHint}
                    </span>
                </div>
                <div className="flex flex-col gap-1 md:col-span-2">
                    <div className="flex items-center justify-between">
                        <label className="font-label-dateline text-label-dateline text-on-surface-variant font-semibold">
                            {identity.bioLabel}
                        </label>
                        <span className="font-caption text-caption text-warm">
                            {identity.bioMeta}
                        </span>
                    </div>
                    <textarea
                        className="px-space-md py-space-xs bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-brand w-full resize-y rounded focus:ring-1 focus:outline-none"
                        rows={3}
                        value={form.bio}
                        onChange={(event) =>
                            onChange({ bio: event.target.value })
                        }
                    />
                </div>
            </div>
        </section>
    );
}
