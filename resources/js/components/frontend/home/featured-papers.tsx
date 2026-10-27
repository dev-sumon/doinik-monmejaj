import { ArrowRightIcon, AwardIcon } from 'lucide-react';
import { featuredPapers } from './data';
import PaperCard from './paper-card';

export default function FeaturedPapers() {
    return (
        <section
            className="bg-surface py-space-xl w-full"
            id="featured"
        >
            <div className="px-margin-mobile md:px-margin-tablet lg:px-margin space-y-space-lg mx-auto max-w-[1380px]">
                <div className="gap-space-md flex flex-col justify-between md:flex-row md:items-end">
                    <div className="space-y-space-xs">
                        <div className="gap-space-xs text-brand font-label-editorial text-label-editorial flex items-center">
                            <span className="material-symbols-outlined text-[18px]">
                            <AwardIcon className="w-4 h-4" />
                            </span>
                            <span>জনপ্রিয় পাঠশালা ও আড্ডা</span>
                        </div>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                            আজকের আলোচিত পত্রিকা
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                            আজ পাঠকদের মধ্যে সর্বাধিক পঠিত, প্রশংসিত ও শেয়ারকৃত
                            ব্যক্তিগত প্রথম পাতার সংকলন
                        </p>
                    </div>
                    <a
                        className="text-brand font-label-editorial text-label-editorial inline-flex items-center gap-1 font-bold hover:underline"
                        href="#"
                    >
                        <span>সবগুলো আলোচিত সংখ্যা দেখুন</span>
                        <span className="material-symbols-outlined text-[18px]">
                        <ArrowRightIcon className="w-4 h-4" />
                        </span>
                    </a>
                </div>
                <div className="gap-space-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {featuredPapers.map((paper) => (
                        <PaperCard key={paper.title} {...paper} />
                    ))}
                </div>
            </div>
        </section>
    );
}
