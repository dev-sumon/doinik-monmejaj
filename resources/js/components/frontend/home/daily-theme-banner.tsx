import { FlameIcon, HistoryIcon, NotebookPen } from "lucide-react";

export default function DailyThemeBanner() {
    return (
        <section className="bg-surface-container py-space-xl w-full">
            <div className="px-margin-mobile md:px-margin-tablet lg:px-margin mx-auto max-w-[1380px]">
                <div className="bg-tertiary text-on-tertiary p-space-lg md:p-space-xl relative overflow-hidden shadow-lg">
                    <div className="bg-on-tertiary-container/10 pointer-events-none absolute -right-12 -bottom-12 h-64 w-64 rounded-full blur-2xl" />
                    <div className="gap-space-lg relative z-10 grid grid-cols-1 items-center lg:grid-cols-12">
                        <div className="space-y-space-xs lg:col-span-8">
                            <div className="gap-space-xs bg-tertiary-container text-on-tertiary-container px-space-sm font-label-editorial text-label-editorial inline-flex items-center py-0.5">
                                <span className="material-symbols-outlined text-[16px]">
                                    <FlameIcon className="w-4 h-4" />
                                </span>
                                <span>দৈনিক সার্বজনীন লেখনী থিম</span>
                            </div>
                            <h2 className="font-headline-xl text-headline-xl text-on-tertiary font-bold tracking-tight">
                                আজকের বিষয়: ট্রাফিক জ্যাম ও দার্শনিক চিন্তা
                            </h2>
                            <p className="font-lead text-lead text-on-tertiary/90 max-w-2xl">
                                সিগন্যালে আটকে থেকে আপনি কী কী মহা-আবিষ্কার
                                করলেন? সিএনজির পেছনে লেখা বাণী থেকে জীবনের কোনো
                                নতুন দর্শন পেলেন কি? লিখে ফেলুন আপনার আজকের
                                বিশেষ পাতায়।
                            </p>
                            <div className="pt-space-xs gap-space-md text-on-tertiary/80 font-caption text-caption flex items-center">
                                <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[16px]">
                                       
                                        <HistoryIcon className="w-4 h-4" />
                                    </span>
                                    <span>বাকি সময়: ৬ ঘণ্টা ৪২ মিনিট</span>
                                </span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[16px]">
                                    <NotebookPen className="w-4 h-4" />                                    </span>
                                    <span>
                                        এখন পর্যন্ত জমা পড়েছে: ৪২০টি সংখ্যা
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="gap-space-sm flex flex-col justify-end sm:flex-row lg:col-span-4 lg:flex-col">
                            <a
                                className="bg-surface text-brand hover:bg-surface-container-low px-space-xl py-space-md font-headline-sm text-headline-sm text-center font-bold shadow-sm transition-all"
                                href="#"
                            >
                                এই বিষয়ে লিখুন
                            </a>
                            <a
                                className="bg-tertiary-container text-on-tertiary-container hover:bg-tertiary-container/80 px-space-md py-space-sm font-label-editorial text-label-editorial text-center transition-colors"
                                href="#"
                            >
                                অন্যদের জ্যাম-দর্শন দেখুন →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
