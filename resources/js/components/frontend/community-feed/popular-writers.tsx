import { useState } from 'react';
import type { Writer } from './types';

export default function PopularWriters({ writers }: { writers: Writer[] }) {
    const [following, setFollowing] = useState<Record<string, boolean>>({});

    return (
        <div className="bg-surface-container-lowest p-space-md">
            <div className="pb-space-xs mb-space-sm flex items-center justify-between gap-2">
                <span className="font-label-editorial text-label-editorial text-on-surface font-bold tracking-wider uppercase">
                    জনপ্রিয় লেখকবৃন্দ
                </span>
                <a
                    className="font-label-editorial text-label-editorial text-brand hover:underline"
                    href="#"
                >
                    সবাইকে দেখুন
                </a>
            </div>
            <div className="space-y-space-md">
                {writers.map((writer) => {
                    const isFollowing = following[writer.name] ?? false;

                    return (
                        <div
                            className="gap-space-sm flex items-start justify-between"
                            key={writer.name}
                        >
                            <div className="gap-space-sm flex min-w-0 items-start">
                                <img
                                    alt={writer.name}
                                    className="h-10 w-10 shrink-0 rounded-full object-cover"
                                    src={writer.avatar}
                                />
                                <div className="min-w-0">
                                    <h6 className="font-label-editorial text-label-editorial text-on-surface hover:text-brand cursor-pointer font-bold transition-colors">
                                        {writer.name}
                                    </h6>
                                    <p className="font-caption text-caption text-warm">
                                        {writer.bio}
                                    </p>
                                    <span className="font-label-dateline text-label-dateline text-on-surface-variant">
                                        {writer.readers}
                                    </span>
                                </div>
                            </div>
                            <button
                                className={`px-space-xs font-label-editorial text-label-editorial shrink-0 py-1 transition-colors ${
                                    isFollowing
                                        ? 'bg-tertiary text-on-tertiary'
                                        : 'bg-surface-container text-on-surface hover:bg-brand hover:text-on-brand'
                                }`}
                                type="button"
                                onClick={() =>
                                    setFollowing((prev) => ({
                                        ...prev,
                                        [writer.name]: !isFollowing,
                                    }))
                                }
                            >
                                {isFollowing ? 'যুক্ত আছেন' : 'অনুসরণ'}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
