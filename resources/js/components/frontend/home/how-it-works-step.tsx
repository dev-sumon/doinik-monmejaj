import { Icon } from "@/components/ui/icon";
import { LucideIcon } from "lucide-react";

export type HowItWorksStepProps = {
    step: string;
    title: string;
    description: string;
    footerIcon: LucideIcon;
    footerLabel: string;
    badgeClassName: string;
};

export default function HowItWorksStep({
    step,
    title,
    description,
    footerIcon,
    footerLabel,
    badgeClassName,
}: HowItWorksStepProps) {
    return (
        <div className="bg-surface p-space-lg group relative flex flex-col justify-between shadow-sm transition-all hover:bg-surface-container-lowest">
            <div className="space-y-space-sm">
                <div
                    className={`font-headline-sm text-headline-sm flex h-12 w-12 items-center justify-center font-bold ${badgeClassName}`}
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
                <span className="material-symbols-outlined text-[16px]">
                    <Icon iconNode={footerIcon} className="w-4 h-4" />
                </span>
                <span>{footerLabel}</span>
            </div>
        </div>
    );
}
