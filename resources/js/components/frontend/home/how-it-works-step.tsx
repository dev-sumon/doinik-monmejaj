import { Icon } from '@/components/ui/icon';
import {
    resolveStepIcon,
    toneBadgeClass,
    type HowItWorksStep as HowItWorksStepData,
} from './types';

export default function HowItWorksStep({
    step,
    title,
    description,
    footerIcon,
    footerLabel,
    tone,
}: HowItWorksStepData) {
    const FooterIcon = resolveStepIcon(footerIcon);

    return (
        <div className="bg-surface p-space-lg group relative flex flex-col justify-between shadow-sm transition-all hover:bg-surface-container-lowest">
            <div className="space-y-space-sm">
                <div
                    className={`font-headline-sm text-headline-sm flex h-12 w-12 items-center justify-center font-bold ${toneBadgeClass[tone]}`}
                >
                    {step}
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-brand font-bold transition-colors">
                    {title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {description}
                </p>
            </div>
            <div className="pt-space-md text-warm font-label-dateline text-label-dateline flex items-center gap-1">
                <Icon className="h-4 w-4" iconNode={FooterIcon} />
                <span>{footerLabel}</span>
            </div>
        </div>
    );
}
