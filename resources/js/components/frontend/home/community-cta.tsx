import { FileClock, PencilRuler } from "lucide-react";

const stats = [
    {
        value: '১২,৪৫০+',
        label: 'প্রকাশিত ব্যক্তিগত পত্রিকা',
        caption: 'প্রতিদিন জমা পড়ছে সহস্রাধিক গল্প',
    },
    {
        value: '৮৫,০০০+',
        label: 'পাঠক প্রতিক্রিয়া ও সমবেদনা',
        caption: 'হাসি, আড্ডা আর গভীর মানবিক মেলবন্ধন',
    },
    {
        value: '৩,২০০+',
        label: 'দৈনিক সক্রিয় লেখক',
        caption: 'ছাত্র, পেশাজীবী ও স্বপ্নবাজ নাগরিক',
    },
];

export default function CommunityCta() {
    return (
        <section className="bg-surface py-space-xl w-full">
            <div className="px-margin-mobile md:px-margin-tablet lg:px-margin space-y-space-xl mx-auto max-w-[1380px]">
                <div className="bg-surface-container-low p-space-lg shadow-sm">
                    <div className="gap-space-lg grid grid-cols-1 items-center text-center md:grid-cols-3">
                        {stats.map((stat) => (
                            <div className="space-y-1" key={stat.label}>
                                <div className="font-headline-xl text-headline-xl text-brand font-bold tracking-tight">
                                    {stat.value}
                                </div>
                                <div className="font-label-editorial text-label-editorial text-on-surface font-semibold">
                                    {stat.label}
                                </div>
                                <div className="font-caption text-caption text-warm">
                                    {stat.caption}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-surface-container-lowest p-space-lg md:p-space-xl space-y-space-md relative mx-auto max-w-4xl overflow-hidden text-center shadow-md">
                    <div className="bg-brand/10 text-brand mb-space-xs mx-auto flex h-12 w-12 items-center justify-center rounded-full">
                        <span className="material-symbols-outlined text-[28px]">
                            <PencilRuler className="w-4 h-4" />
                        </span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mx-auto max-w-xl leading-snug font-bold">
                        আজকের দিনটি হারিয়ে যাওয়ার আগেই পত্রিকার পাতায় ধরে রাখুন।
                    </h2>
                    <p className="font-lead text-lead text-on-surface-variant mx-auto max-w-lg">
                        দিনশেষে চায়ের কাপে যখন ধোঁয়া উড়বে, তখন স্মৃতিগুলো যেন
                        ফিকে না হয়ে যায়। একটি পাতার সৃষ্টি আপনাকে চিরদিনের মতো
                        ফিরিয়ে দেবে এই মুহূর্তটিকে।
                    </p>
                    <div className="pt-space-sm gap-space-md flex flex-col items-center justify-center sm:flex-row">
                        <a
                            className="bg-brand text-on-brand hover:bg-brand-container gap-space-xs px-space-xl py-space-sm font-headline-sm text-headline-sm flex items-center font-bold shadow-md transition-all"
                            href="#"
                        >
                            <span className="material-symbols-outlined text-[22px]">
                                <FileClock className="w-4 h-4" />
                            </span>
                            <span>এখনই শুরু করুন</span>
                        </a>
                        <a
                            className="bg-surface-container text-warm hover:bg-surface-container-high px-space-lg py-space-sm font-label-editorial text-label-editorial font-bold transition-colors"
                            href="#"
                        >
                            নিয়মাবলী ও নির্দেশিকা জেনে নিন
                        </a>
                    </div>
                    <div className="pt-space-sm font-label-dateline text-label-dateline text-warm italic">
                        * কোনো ক্রেডিট কার্ড বা নিবন্ধনের ঝামেলা নেই। সম্পূর্ণ
                        বিনামূল্যে আপনার বাংলা দৈনিক সাজান।
                    </div>
                </div>
            </div>
        </section>
    );
}
