import {
    MicIcon,
    SmileIcon,
    TheaterIcon,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { toneTextClass, type CreateStyle } from './types';

const styleIcons: Record<string, LucideIcon> = {
    smile: SmileIcon,
    drama: TheaterIcon,
    mic: MicIcon,
};

export default function StylePicker({
    styles,
    selectedId,
    onSelect,
}: {
    styles: CreateStyle[];
    selectedId: string;
    onSelect: (id: string) => void;
}) {
    return (
        <div className="gap-space-sm grid grid-cols-1 sm:grid-cols-3">
            {styles.map((style) => {
                const Icon = styleIcons[style.icon] ?? SmileIcon;
                const isSelected = style.id === selectedId;

                return (
                    <button
                        className={`p-space-md flex flex-col justify-between rounded bg-surface-container-lowest text-left transition-all hover:shadow-md ${
                            isSelected
                                ? 'shadow-md'
                                : 'opacity-80 hover:opacity-100'
                        }`}
                        key={style.id}
                        type="button"
                        onClick={() => onSelect(style.id)}
                    >
                        <div>
                            <div className="mb-space-xs flex items-center justify-between">
                                <Icon
                                    className={`h-[22px] w-[22px] ${toneTextClass[style.tone]}`}
                                />
                                <span
                                    className={`flex h-4 w-4 items-center justify-center rounded-full text-[10px] ${
                                        isSelected
                                            ? 'bg-brand text-on-brand'
                                            : 'bg-surface-container-high text-transparent'
                                    }`}
                                >
                                    ✓
                                </span>
                            </div>
                            <h4 className="font-headline-sm text-body-lg text-on-surface mb-1 font-bold">
                                {style.title}
                            </h4>
                            <p className="font-caption text-caption text-on-surface-variant">
                                {style.body}
                            </p>
                        </div>
                        <span
                            className={`mt-space-md font-label-dateline text-[11px] font-semibold ${toneTextClass[style.tone]}`}
                        >
                            {style.tag}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}
