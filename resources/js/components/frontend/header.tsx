import { BadgeCheckIcon, BellIcon, ChevronDownIcon, CoffeeIcon, NotebookPenIcon } from "lucide-react";

const navItems = [
    { label: 'প্রচ্ছদ', href: '#', current: true },
    { label: 'ঘুরে দেখুন', href: '#' },
    { label: 'আজকের বিষয়', href: '#' },
    { label: 'জনমত', href: '#' },
    { label: 'আমার পত্রিকা', href: '#' },
];

export default function Header() {
    return (
        <header className="bg-surface/95 fixed top-0 right-0 left-0 z-50 backdrop-blur-md">
            <div className="px-margin-mobile md:px-margin-tablet lg:px-margin mx-auto flex h-28 max-w-[1380px] flex-col justify-between pt-space-xs">
                <div className="gap-space-md flex items-center justify-between py-space-xs">
                    <div className="gap-space-md flex items-center">
                        <a className="gap-space-sm group flex items-center" href="#">
                            <span className="font-masthead-mobile text-masthead-mobile md:font-headline-lg md:text-headline-lg text-brand font-bold tracking-tight">
                                আজকের কাগজ
                            </span>
                            <span className="font-label-dateline text-label-dateline text-warm border-outline-variant hidden border-l pl-space-sm italic xl:inline-block">
                                একটি সামাজিক দৈনিক পত্রিকা
                            </span>
                        </a>
                    </div>
                    <div className="gap-space-md flex items-center">
                        <button
                            className="bg-brand text-on-brand hover:bg-brand-container gap-space-xs px-space-md py-space-xs font-label-editorial text-label-editorial hidden items-center transition-colors sm:inline-flex"
                            type="button"
                        >
                            <NotebookPenIcon className="w-5 h-5" />
                            <span>পত্রিকা তৈরি করুন</span>
                        </button>
                        <button
                            aria-label="নোটিফিকেশন"
                            className="text-on-surface-variant hover:text-on-surface relative p-space-xs transition-colors"
                            type="button"
                        >
                            <span className="material-symbols-outlined">
                                <BellIcon className="w-5 h-5" />
                            </span>
                            <span className="bg-brand absolute top-1 right-1 h-2 w-2 rounded-full" />
                        </button>
                        <div className="border-outline-variant gap-space-sm flex items-center border-l pl-space-xs">
                            <img
                                alt="Profile"
                                className="h-8 w-8 rounded-full object-cover"
                                src="https://lh3.googleusercontent.com/aida/AEtjO1W1k6hJYyiLqukSSxLRlyDCJYmJMXmUE6jcL8TKueGpIatqc6l4NxY8_U0yNoF1e_ce-UpxX7K3UR6K4S59BUxAqWYAV6Ca3vahBbvSteT83xnUIo_KrwGjCytZp2jGdq9_hNyxV_JRFBO-uorKll3NGpAq3Tsh8ziC1-zpmkgvY4p4HrlbOUwoVjzlOhF_YkOBqGVPe9x7b01gTa3_doRI5vFuuveHK3M0ggtgKiowu7dRURcbo_T0Lw"
                            />
                            <div className="hidden flex-col text-left md:flex">
                                <div className="flex items-center gap-1">
                                    <span className="font-label-editorial text-label-editorial text-on-surface font-semibold">
                                        ফারহানা আহমেদ
                                    </span>
                                    <span className="material-symbols-outlined text-brand text-[14px]">
                                        <BadgeCheckIcon className="w-4 h-4" />
                                    </span>
                                </div>
                                <span className="font-caption text-caption text-warm">
                                    সম্পাদক মণ্ডলী
                                </span>
                            </div>
                            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer text-[18px]">
                                <ChevronDownIcon className="w-5 h-5" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="border-outline-variant flex items-center justify-between border-t border-b">
                    <nav className="gap-space-lg flex items-center overflow-x-auto py-space-xs">
                        {navItems.map((item) =>
                            item.current ? (
                                <a
                                    aria-current="page"
                                    className="text-brand border-brand whitespace-nowrap border-b-2 py-1 font-semibold transition-colors"
                                    href={item.href}
                                    key={item.label}
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <a
                                    className="font-label-editorial text-label-editorial text-on-surface-variant hover:text-on-surface whitespace-nowrap py-1 transition-colors"
                                    href={item.href}
                                    key={item.label}
                                >
                                    {item.label}
                                </a>
                            ),
                        )}
                    </nav>
                    <div className="font-label-dateline text-label-dateline text-warm gap-space-sm hidden items-center lg:flex">
                        <span className="material-symbols-outlined text-[15px]">
                            <CoffeeIcon className="w-4 h-4" />
                        </span>
                        <span>চা, অলসতা ও কাজের চাপ</span>
                    </div>
                </div>
            </div>
            <div className="bg-surface-container-low border-outline-variant border-b">
                <div className="px-margin-mobile md:px-margin-tablet lg:px-margin font-label-dateline text-label-dateline text-on-surface-variant mx-auto flex max-w-[1380px] items-center justify-between py-1">
                    <div className="flex items-center gap-2">
                        <span>আজকের তারিখ: ১৫ চৈত্র, ১৪৩০ বঙ্গাব্দ</span>
                        <span className="text-outline-variant">|</span>
                        <span className="text-brand font-semibold">
                            বিশেষ সংস্করণ
                        </span>
                    </div>
                    <div className="gap-space-md flex items-center">
                        <span className="hidden sm:inline">ঢাকা, বাংলাদেশ</span>
                        <span className="text-warm italic">
                            "আপনার জীবনের ছোট ছোট আনন্দ আর স্মৃতির বিশ্বস্ত
                            সংকলন"
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}
