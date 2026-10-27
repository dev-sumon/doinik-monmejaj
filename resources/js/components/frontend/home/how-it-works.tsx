import HowItWorksStep from './how-it-works-step';
import type { HowItWorksStep as HowItWorksStepData } from './types';

export default function HowItWorks({
    howItWorksSteps,
}: {
    howItWorksSteps: HowItWorksStepData[];
}) {
    return (
        <section className="bg-surface-container-low py-space-lg md:py-space-xl w-full">
            <div className="px-margin-mobile md:px-margin-tablet lg:px-margin space-y-space-xl mx-auto max-w-[1380px]">
                <div className="space-y-space-xs mx-auto max-w-2xl text-center">
                    <span className="font-label-editorial text-label-editorial text-brand font-bold tracking-widest uppercase">
                        সহজ সম্পাদকীয় প্রণালী
                    </span>
                    <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface font-bold">
                        কীভাবে কাজ করে ‘আজকের কাগজ’?
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                        কোনো জটিল প্রযুক্তি বা সফটওয়্যার নয়, মাত্র তিনটি পদক্ষেপে
                        সাধারণ স্মৃতি হয়ে উঠবে প্রিন্টেড পত্রিকার অনবদ্য পাতা।
                    </p>
                </div>
                <div className="gap-space-lg grid grid-cols-1 md:grid-cols-3">
                    {howItWorksSteps.map((step) => (
                        <HowItWorksStep key={step.step} {...step} />
                    ))}
                </div>
            </div>
        </section>
    );
}
