import { BookOpenIcon, NewspaperIcon } from 'lucide-react';
import BroadsheetShowcase from './broadsheet-showcase';

export default function HeroSection() {
    return (
        <section className="bg-surface py-space-xl w-full">
            <div className="px-margin-mobile md:px-margin-tablet lg:px-margin mx-auto max-w-[1380px]">
                <div className="space-y-space-sm mb-space-xl mx-auto max-w-4xl text-center">
                    <div className="gap-space-sm inline-flex items-center justify-center">
                        <span className="bg-outline-variant h-px w-8" />
                        <span className="font-label-editorial text-label-editorial text-warm tracking-widest uppercase">
                            — আত্মকথন ও হাসির ব্যক্তিগত সংবাদপত্র —
                        </span>
                        <span className="bg-outline-variant h-px w-8" />
                    </div>
                    <h1 className="font-headline-xl text-headline-xl text-brand leading-tight font-bold tracking-tight">
                        আপনার দিনের গল্প, আপনার নিজের পত্রিকায়।
                    </h1>
                    <p className="font-lead text-lead text-on-surface-variant mx-auto max-w-2xl">
                        দিনের ছোট ছোট সাধারণ ঘটনাকে বানিয়ে ফেলুন চিত্তাকর্ষক ও
                        মজার খবর। পড়ুন বন্ধুদের না-বলা গল্প, খুঁজে নিন জীবনের চেনা
                        প্রতিচ্ছবি।
                    </p>
                    <div className="pt-space-sm gap-space-md flex flex-wrap items-center justify-center">
                        <a
                            className="bg-brand text-on-brand hover:bg-brand-container gap-space-xs px-space-xl py-space-sm font-label-editorial text-label-editorial flex items-center font-semibold shadow-sm transition-all"
                            href="#"
                        >
                            <span className="material-symbols-outlined text-[19px]">
                                <NewspaperIcon className="w-5 h-5" />
                            </span>
                            <span>আমার পত্রিকা বানাই</span>
                        </a>
                        <a
                            className="bg-surface-container text-on-surface hover:bg-surface-container-high gap-space-xs px-space-xl py-space-sm font-label-editorial text-label-editorial flex items-center font-semibold shadow-sm transition-all"
                            href="#featured"
                        >
                            <span className="material-symbols-outlined text-[19px]">
                                <BookOpenIcon className="w-5 h-5" />
                            </span>
                            <span>অন্যদের গল্প পড়ি</span>
                        </a>
                    </div>
                </div>
                <BroadsheetShowcase />
            </div>
        </section>
    );
}
