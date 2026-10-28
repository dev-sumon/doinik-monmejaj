import {
    ArrowRightIcon,
    BusIcon,
    PhoneIcon,
    TruckIcon,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { WritingSpark } from './types';

const sparkIcons: Record<string, LucideIcon> = {
    rickshaw: TruckIcon,
    bus: BusIcon,
    phone: PhoneIcon,
};

export default function WritingSparks({ sparks }: { sparks: WritingSpark[] }) {
    return (
        <section className="mb-space-xl">
            <div className="mb-space-sm flex items-center justify-between">
                <div className="gap-space-xs flex flex-wrap items-center">
                    <span className="font-label-editorial text-label-editorial text-warm tracking-wider uppercase">
                        লেখার রসদ
                    </span>
                    <span className="text-outline-variant">■</span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        লেখার তিনটি চমৎকার প্রম্পট বা ক্লু
                    </h2>
                </div>
                <span className="font-caption text-caption text-on-surface-variant hidden sm:inline">
                    চিন্তার জট খুলতে যেকোনো একটি নির্বাচন করুন
                </span>
            </div>
            <div className="gap-space-md grid grid-cols-1 md:grid-cols-3">
                {sparks.map((spark) => {
                    const Icon = sparkIcons[spark.icon] ?? TruckIcon;

                    return (
                        <div
                            className="group bg-surface-container-lowest p-space-md relative flex flex-col justify-between rounded-lg shadow-sm transition-all hover:shadow-md"
                            key={spark.label}
                        >
                            <div className="space-y-space-xs">
                                <div className="text-warm flex items-center justify-between">
                                    <span className="font-label-editorial text-label-editorial text-brand tracking-widest font-bold">
                                        {spark.label}
                                    </span>
                                    <Icon className="h-[18px] w-[18px]" />
                                </div>
                                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-brand font-bold transition-colors">
                                    {spark.title}
                                </h3>
                                <p className="font-body-md text-body-md text-on-surface-variant pt-space-xs">
                                    {spark.body}
                                </p>
                            </div>
                            <div className="pt-space-md flex items-center justify-between">
                                <span className="font-caption text-caption text-warm">
                                    {spark.writersCount}
                                </span>
                                <button
                                    className="text-brand font-label-editorial text-label-editorial inline-flex items-center gap-1 group-hover:underline"
                                    type="button"
                                >
                                    <span>টুকে রাখুন</span>
                                    <ArrowRightIcon className="h-3.5 w-3.5" />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
