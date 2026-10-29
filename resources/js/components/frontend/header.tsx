import { Link, usePage } from '@inertiajs/react';
import {
    BadgeCheckIcon,
    BellIcon,
    ChevronDownIcon,
    CoffeeIcon,
    NotebookPenIcon,
} from 'lucide-react';
import {
    communityFeed,
    create,
    dailyTheme,
    home,
    myArchive,
    notifications,
    polls,
} from '@/routes';

const navItems = [
    { label: 'প্রচ্ছদ', href: home.url() },
    { label: 'ঘুরে দেখুন', href: communityFeed.url() },
    { label: 'আজকের বিষয়', href: dailyTheme.url() },
    { label: 'জনমত', href: polls.url() },
    { label: 'আমার পত্রিকা', href: myArchive.url() },
];

export default function Header() {
    const { url } = usePage();
    const currentPath = url.split('?')[0] ?? '/';

    return (
        <header className="bg-surface/95 fixed top-0 right-0 left-0 z-50 backdrop-blur-md">
            <div className="px-margin-mobile md:px-margin-tablet lg:px-margin mx-auto flex max-w-[1380px] flex-col justify-between py-space-xs">
                <div className="gap-space-sm sm:gap-space-md flex min-w-0 items-center justify-between py-space-xs">
                    <div className="gap-space-md flex min-w-0 items-center">
                        <Link
                            className="gap-space-sm group flex min-w-0 items-center"
                            href={home()}
                        >
                            <span className="font-masthead-mobile text-masthead-mobile md:font-headline-lg md:text-headline-lg text-brand truncate font-bold tracking-tight">
                                আজকের কাগজ
                            </span>
                            <span className="font-label-dateline text-label-dateline text-warm border-outline-variant hidden shrink-0 border-l pl-space-sm italic xl:inline-block">
                                একটি সামাজিক দৈনিক পত্রিকা
                            </span>
                        </Link>
                    </div>
                    <div className="gap-space-sm sm:gap-space-md flex shrink-0 items-center">
                        <Link
                            aria-label="পত্রিকা তৈরি করুন"
                            className="bg-brand text-on-brand hover:bg-brand-container inline-flex items-center justify-center p-space-xs transition-colors sm:hidden"
                            href={create.url()}
                        >
                            <NotebookPenIcon className="h-5 w-5" />
                        </Link>
                        <Link
                            className="bg-brand text-on-brand hover:bg-brand-container gap-space-xs px-space-md py-space-xs font-label-editorial text-label-editorial hidden items-center transition-colors sm:inline-flex"
                            href={create.url()}
                        >
                            <NotebookPenIcon className="h-5 w-5" />
                            <span>পত্রিকা তৈরি করুন</span>
                        </Link>
                        <Link
                            aria-label="নোটিফিকেশন"
                            className="text-on-surface-variant hover:text-on-surface relative p-space-xs transition-colors"
                            href={notifications.url()}
                        >
                            <BellIcon className="h-5 w-5" />
                            <span className="bg-brand absolute top-1 right-1 h-2 w-2 rounded-full" />
                        </Link>
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
                                    <BadgeCheckIcon className="text-brand h-4 w-4" />
                                </div>
                                <span className="font-caption text-caption text-warm">
                                    সম্পাদক মণ্ডলী
                                </span>
                            </div>
                            <ChevronDownIcon className="text-on-surface-variant hidden h-5 w-5 cursor-pointer sm:block" />
                        </div>
                    </div>
                </div>
                <div className="border-outline-variant flex min-w-0 items-center justify-between border-t border-b">
                    <nav className="gap-space-md sm:gap-space-lg -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0 flex min-w-0 flex-1 items-center overflow-x-auto py-space-xs">
                        {navItems.map((item) => {
                            const isActive =
                                item.href !== '#' &&
                                (item.href === '/'
                                    ? currentPath === '/'
                                    : currentPath.startsWith(item.href));

                            if (item.href === '#') {
                                return (
                                    <a
                                        className="font-label-editorial text-label-editorial text-on-surface-variant hover:text-on-surface shrink-0 whitespace-nowrap py-1 transition-colors"
                                        href={item.href}
                                        key={item.label}
                                    >
                                        {item.label}
                                    </a>
                                );
                            }

                            return isActive ? (
                                <Link
                                    aria-current="page"
                                    className="text-brand border-brand shrink-0 whitespace-nowrap border-b-2 py-1 font-semibold transition-colors"
                                    href={item.href}
                                    key={item.label}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <Link
                                    className="font-label-editorial text-label-editorial text-on-surface-variant hover:text-on-surface shrink-0 whitespace-nowrap py-1 transition-colors"
                                    href={item.href}
                                    key={item.label}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                    <div className="font-label-dateline text-label-dateline text-warm gap-space-sm ml-space-md hidden shrink-0 items-center lg:flex">
                        <CoffeeIcon className="h-4 w-4" />
                        <span>চা, অলসতা ও কাজের চাপ</span>
                    </div>
                </div>
            </div>
            <div className="bg-surface-container-low border-outline-variant border-b">
                <div className="px-margin-mobile md:px-margin-tablet lg:px-margin font-label-dateline text-label-dateline text-on-surface-variant mx-auto flex max-w-[1380px] flex-col gap-1 py-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-2 sm:py-1">
                    <div className="flex min-w-0 flex-wrap items-center gap-2">
                        <span className="truncate">
                            আজকের তারিখ: ১৫ চৈত্র, ১৪৩০ বঙ্গাব্দ
                        </span>
                        <span className="text-outline-variant hidden sm:inline">
                            |
                        </span>
                        <span className="text-brand font-semibold">
                            বিশেষ সংস্করণ
                        </span>
                    </div>
                    <div className="gap-space-md hidden min-w-0 items-center sm:flex">
                        <span className="hidden shrink-0 md:inline">
                            ঢাকা, বাংলাদেশ
                        </span>
                        <span className="text-warm truncate italic">
                            "আপনার জীবনের ছোট ছোট আনন্দ আর স্মৃতির বিশ্বস্ত
                            সংকলন"
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}
