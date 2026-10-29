import { DownloadIcon, TriangleAlertIcon } from 'lucide-react';
import type { DangerZone as DangerZoneType } from './types';

export default function DangerZone({
    dangerZone,
}: {
    dangerZone: DangerZoneType;
}) {
    return (
        <section
            className="bg-error-container/20 p-space-lg gap-space-md flex flex-col rounded-lg shadow-sm"
            id="danger"
        >
            <div className="pb-space-xs flex items-center justify-between">
                <div className="gap-space-sm flex items-center">
                    <TriangleAlertIcon className="text-error h-7 w-7" />
                    <div>
                        <h3 className="font-headline-md text-headline-md text-error font-bold">
                            {dangerZone.title}
                        </h3>
                        <p className="font-caption text-caption text-on-surface-variant">
                            {dangerZone.subtitle}
                        </p>
                    </div>
                </div>
                <span className="font-label-editorial text-label-editorial bg-error text-on-error px-space-xs rounded py-0.5 font-bold">
                    {dangerZone.badge}
                </span>
            </div>
            <div className="gap-space-md pt-space-xs grid grid-cols-1 md:grid-cols-2">
                <div className="bg-surface-container-lowest p-space-md flex flex-col justify-between rounded-lg">
                    <div>
                        <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            {dangerZone.deactivateTitle}
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            {dangerZone.deactivateBody}
                        </p>
                    </div>
                    <div className="mt-space-md">
                        <button
                            className="px-space-md bg-surface-container text-warm hover:bg-surface-container-high font-label-editorial text-label-editorial rounded py-1 font-semibold transition-colors"
                            type="button"
                        >
                            {dangerZone.deactivateLabel}
                        </button>
                    </div>
                </div>
                <div className="bg-surface-container-lowest p-space-md flex flex-col justify-between rounded-lg">
                    <div>
                        <span className="font-headline-sm text-headline-sm text-error font-bold">
                            {dangerZone.deleteTitle}
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            {dangerZone.deleteBody}
                        </p>
                    </div>
                    <div className="mt-space-md gap-space-sm flex items-center">
                        <button
                            className="bg-tertiary-fixed text-on-tertiary-fixed hover:bg-tertiary-fixed-dim font-label-editorial text-label-editorial flex items-center gap-1 rounded px-space-sm py-1 font-semibold transition-colors"
                            type="button"
                        >
                            <DownloadIcon className="h-4 w-4" />
                            <span>{dangerZone.downloadLabel}</span>
                        </button>
                        <button
                            className="px-space-md bg-error text-on-error hover:bg-on-error-container font-label-editorial text-label-editorial rounded py-1 font-semibold transition-colors"
                            type="button"
                        >
                            {dangerZone.deleteLabel}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
