import { BadgeCheckIcon, CoffeeIcon, MoonIcon, ThermometerIcon } from "lucide-react";

export default function BroadsheetShowcase() {
    return (
        <div className="bg-surface-container-lowest p-space-md sm:p-space-lg md:p-space-xl relative mx-auto max-w-5xl shadow-xl">
            <div className="bg-surface-container-low mb-space-sm flex items-center justify-between px-space-md py-space-xs pb-space-xs">
                <div className="gap-space-xs text-warm font-label-dateline text-label-dateline flex items-center">
                    <span className="material-symbols-outlined text-[16px]">
                        <BadgeCheckIcon className="w-4 h-4" />
                    </span>
                    <span>নমুনা ব্যক্তিগত সংখ্যা — বিশেষ মুদ্রণ</span>
                </div>
                <div className="font-label-dateline text-label-dateline text-on-surface-variant">
                    মূল্য: অমূল্য হাসি ও স্মৃতি
                </div>
            </div>
            <div className="bg-surface-container-low/60 mb-space-md py-space-sm text-center">
                <div className="font-headline-xl text-headline-xl text-brand font-bold tracking-tight">
                    দৈনিক মনমেজাজ
                </div>
                <div className="font-caption text-caption text-warm mt-1 tracking-wider uppercase">
                    আজকের কাগজ বিশেষ সংস্করণ • সংখ্যা: ৯৮ • শুক্রবার, ১৫ চৈত্র
                    ১৪৩০
                </div>
            </div>
            <div className="gap-space-lg grid grid-cols-1 items-start lg:grid-cols-12">
                <div className="space-y-space-md flex flex-col lg:col-span-8">
                    <div className="space-y-space-xs">
                        <span className="bg-brand/10 text-brand font-label-editorial text-label-editorial inline-block px-space-xs py-0.5 font-semibold tracking-wider uppercase">
                            চাঞ্চল্যকর প্রতিবেদন
                        </span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface hover:text-brand cursor-pointer leading-tight font-bold transition-colors">
                            অ্যালার্মের সঙ্গে যুদ্ধে আবারও শোচনীয় পরাজয় এক
                            তরুণের!
                        </h2>
                        <div className="gap-space-sm font-label-dateline text-label-dateline text-warm flex items-center pt-1">
                            <span>বিশেষ প্রতিনিধি: মো. রিয়াজুল হাসান</span>
                            <span>•</span>
                            <span>সকাল ৮:৪৫ মিনিট</span>
                            <span>•</span>
                            <span>বিছানা ও কোলবালিশ ব্যুরো</span>
                        </div>
                    </div>
                    <div className="space-y-space-xs">
                        <div className="bg-surface-container h-72 w-full overflow-hidden">
                            <img
                                alt="Messy morning bedroom with analog clock and tea"
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXJiX3EkEAY6U39PcYdHYungB5R4KIYXq6TtIqrVnw-EwvtlLpuwFePCLdkD_M1ER-DFCFpAsZmg1WmxU3peQLmjLuvP_BqKX_Fa8F9ja8VI7SMYVze4Icfh4nfn6XPBV_txkEddudnbhRp4KF265sQ_DYdEke8TxoBH77Dk3yhGbUCKFl4IWutEHqZMZt-aXQ2MXNd4jxW8wxzAXprYIfrKi2DZ6MBwbzVNn-5iOzCQCBDq0BghZ9"
                            />
                        </div>
                        <p className="font-caption text-caption text-on-surface-variant px-space-xs italic">
                            ছবি: ভোর ৬টা থেকে শুরু হয়ে সকাল ৮টা পর্যন্ত টানা ৫
                            দফা স্নুজ বোতাম টেপার পর বিধ্বস্ত রণক্ষেত্রের
                            স্থিরচিত্র।
                        </p>
                    </div>
                    <div className="gap-space-md font-body-md text-body-md text-on-surface grid grid-cols-1 text-justify leading-relaxed md:grid-cols-2">
                        <p>
                            <span className="font-headline-lg text-headline-lg text-brand float-left mr-2 leading-none font-bold">
                                প্ৰ
                            </span>
                            ত্যুষে নতুন উদ্যমে ঘুম থেকে ওঠার এক তীব্র প্রতিশ্রুতি
                            নিয়ে রাতে নিদ্রার দেশে পাড়ি জমিয়েছিলেন তিনি। তবে সকাল
                            ঠিক ৬টায় যখন অ্যালার্ম প্রথম হুঙ্কার দিয়ে ওঠে, তখনই
                            সূচিত হয় এক অসম যুদ্ধের। প্রথম পাঁচ মিনিটের তন্দ্রার
                            লোভে স্নুজ বোতামে হালকা আঙুলের ছোঁয়া দেন তরুণ।
                            বিশেষজ্ঞ চিকিৎসকদের মতে, এই ক্ষণিক আপসকামিতাই চূড়ান্ত
                            বিপর্যয়ের বীজ বপন করেছিল।
                        </p>
                        <p>
                            পরবর্তীতে সকাল ৬:১৫, ৬:৩০ এবং ৭:১৫ মিনিটে
                            ধারাবাহিকভাবে অ্যালার্মের পরাজয় ঘটে। শেষ পর্যন্ত সকাল
                            ৮:৪৫ মিনিটে যখন চোখ খুলে ঘড়ির দিকে তাকান, তখন আর
                            রণকৌশলের কোনো পথ অবশিষ্ট ছিল না। অফিসের জুম মিটিং
                            ততক্ষণে শুরু হয়ে গেছে এবং বসের পাঠানো তিনটি বার্তা
                            ইনবক্সে টিমটিম করছে। তরুণের দাবি—"অ্যালার্মের সুরটি
                            বড় বেশি সুরেলা ছিল, এতে আমার কোনো অপরাধ নেই।"
                        </p>
                    </div>
                    <div className="bg-surface-container-low p-space-md my-space-xs text-center">
                        <p className="font-headline-sm text-headline-sm text-brand font-serif italic">
                            “ঘুমের রাজ্যে যখন শান্তিচুক্তি স্বাক্ষরিত হতে যাচ্ছিল,
                            ঠিক তখনই বসের ফোন সব উল্টে দিল।”
                        </p>
                    </div>
                </div>
                <div className="space-y-space-lg bg-surface-container-low p-space-md flex flex-col lg:col-span-4">
                    <div className="space-y-space-xs">
                        <span className="bg-warm/15 text-warm font-label-editorial text-label-editorial inline-block px-space-xs py-0.5 font-semibold">
                            মনস্তত্ত্ব ও করপোরেট
                        </span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface leading-snug font-bold">
                            অফিসের কাজ শেষ, কিন্তু মাথার ভেতর অবিরত মিটিং চলছে
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                            সন্ধ্যা ৭টায় ল্যাপটপ বন্ধ করার পরও মাথায় এক্সেল শিট
                            আর প্রেজেন্টেশনের অবিরত কোলাহল। চায়ের কাপে চুমুক
                            দিয়েও রেহাই নেই ‘অ্যাজেন্ডা’ ও ‘কেপিআই’ থেকে।
                        </p>
                        <div className="pt-space-xs text-warm font-label-dateline text-label-dateline flex items-center justify-between">
                            <span>লেখক: সুমাইয়া তাসনিম</span>
                            <span className="material-symbols-outlined text-[16px]">
                                bookmark_border
                            </span>
                        </div>
                    </div>
                    <div className="bg-surface-container-lowest p-space-md space-y-space-xs shadow-sm">
                        <div className="gap-space-xs text-brand font-headline-sm text-headline-sm flex items-center font-bold">
                            <span className="material-symbols-outlined">
                                <MoonIcon className="w-4 h-4" />
                            </span>
                            <span>মনোভাবের পূর্বাভাস</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                            দুপুরের দিকে পেটে কিছুটা ভারী খাবার প্রবেশ করলে شدید
                            ঘুমঘুম ভাবের সম্ভাবনা রয়েছে। তবে সন্ধ্যার পূর্বে কড়া
                            লিকারের চায়ের প্রভাবে মেজাজ হঠাৎ চনমনে হয়ে উঠতে পারে।
                        </p>
                        <div className="pt-space-xs gap-space-sm text-warm font-caption text-caption flex items-center">
                            <span className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-[15px]">
                                    <ThermometerIcon className="w-4 h-4" />
                                </span>{' '}
                                চা সূচক: ৮০%
                            </span>
                            <span className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-[15px]">
                                    <CoffeeIcon className="w-4 h-4" />
                                </span>{' '}
                                কফি চাপ: ৯২%
                            </span>
                        </div>
                    </div>
                    <div className="bg-brand/5 p-space-md space-y-space-xs text-center">
                        <span className="font-label-dateline text-label-dateline text-brand font-bold uppercase">
                            জরুরি সামাজিক বিজ্ঞপ্তি
                        </span>
                        <h4 className="font-headline-sm text-headline-sm text-brand font-bold">
                            কাজের ফাঁকে একটু হাসুন
                        </h4>
                        <p className="font-caption text-caption text-on-surface-variant">
                            আজকের দিনের তুচ্ছ ঘটনাগুলোকে জমা রাখবেন না, বানিয়ে
                            ফেলুন ব্যক্তিগত ফ্রন্টপেজ।
                        </p>
                        <button
                            className="mt-space-xs bg-brand text-on-brand px-space-md font-label-editorial text-label-editorial py-1 uppercase"
                            type="button"
                        >
                            লিখে ফেলুন এখনি
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
