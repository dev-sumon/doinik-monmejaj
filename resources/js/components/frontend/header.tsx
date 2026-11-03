import { Link, router, usePage } from '@inertiajs/react';
import {
    BellIcon,
    ChartColumnIcon,
    ChevronDownIcon,
    CoffeeIcon,
    LayoutDashboardIcon,
    LogOutIcon,
    NotebookPenIcon,
    SettingsIcon,
    UserIcon,
    UserRoundIcon,
} from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';
import { usePermission } from '@/hooks/use-permissions';
import {
    accountSettings,
    communityFeed,
    create,
    dailyTheme,
    dashboard,
    home,
    login,
    logout,
    myArchive,
    notifications,
    polls,
    profile,
    register,
    weeklyRecap,
} from '@/routes';
import type { User } from '@/types';

/** Roles that may see the dashboard link; the plain "user" role never does. */
const ADMIN_ROLES = ['super-admin', 'admin', 'editor', 'author', 'viewer'];

const navItems = [
    { label: 'প্রচ্ছদ', href: home.url(), requiresAuth: false },
    { label: 'ঘুরে দেখুন', href: communityFeed.url(), requiresAuth: false },
    { label: 'আজকের বিষয়', href: dailyTheme.url(), requiresAuth: false },
    { label: 'জনমত', href: polls.url(), requiresAuth: false },
    { label: 'আমার পত্রিকা', href: myArchive.url(), requiresAuth: true },
];

const menuItems = [
    {
        label: 'আমার প্রোফাইল',
        href: profile.url(),
        icon: UserRoundIcon,
    },
    {
        label: 'সাপ্তাহিক রিক্যাপ',
        href: weeklyRecap.url(),
        icon: ChartColumnIcon,
    },
    {
        label: 'সেটিংস',
        href: accountSettings.url(),
        icon: SettingsIcon,
    },
];

const menuItemClassName =
    'gap-space-sm px-space-md py-space-sm hover:bg-surface-container font-label-editorial text-label-editorial text-on-surface flex w-full items-center transition-colors';

function getInitial(name: string): string {
    return name.trim().charAt(0).toUpperCase();
}

export default function Header() {
    const { url, props } = usePage();
    const user = (props.auth?.user ?? null) as User | null;
    const { hasAnyRole } = usePermission();
    const canViewDashboard =
        user !== null && (user.is_super_admin || hasAnyRole(ADMIN_ROLES));
    const visibleNavItems = navItems.filter(
        (item) => !item.requiresAuth || user !== null,
    );
    const currentPath = url.split('?')[0] ?? '/';
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const menuId = useId();

    useEffect(() => {
        if (!menuOpen) {
            return;
        }

        function handlePointerDown(event: MouseEvent): void {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setMenuOpen(false);
            }
        }

        function handleKeyDown(event: KeyboardEvent): void {
            if (event.key === 'Escape') {
                setMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handlePointerDown);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handlePointerDown);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [menuOpen]);

    return (
        <header className="fixed top-0 right-0 left-0 z-50 bg-surface/95 backdrop-blur-md">
            <div className="mx-auto flex max-w-[1380px] flex-col justify-between px-margin-mobile py-space-xs md:px-margin-tablet lg:px-margin">
                <div className="flex min-w-0 items-center justify-between gap-space-sm py-space-xs sm:gap-space-md">
                    <div className="flex min-w-0 items-center gap-space-md">
                        <Link
                            className="group flex min-w-0 items-center gap-space-sm"
                            href={home()}
                        >
                            <span className="truncate font-masthead-mobile text-masthead-mobile font-bold tracking-tight text-brand md:font-headline-lg md:text-headline-lg">
                                আজকের কাগজ
                            </span>
                            <span className="hidden shrink-0 border-l border-outline-variant pl-space-sm font-label-dateline text-label-dateline text-warm italic xl:inline-block">
                                একটি সামাজিক দৈনিক পত্রিকা
                            </span>
                        </Link>
                    </div>
                    <div className="flex shrink-0 items-center gap-space-sm sm:gap-space-md">
                        {user ? (
                            <>
                                <Link
                                    aria-label="পত্রিকা তৈরি করুন"
                                    className="inline-flex items-center justify-center bg-brand p-space-xs text-on-brand transition-colors hover:bg-brand-container sm:hidden"
                                    href={create.url()}
                                >
                                    <NotebookPenIcon className="h-5 w-5" />
                                </Link>
                                <Link
                                    className="hidden items-center gap-space-xs bg-brand px-space-md py-space-xs font-label-editorial text-label-editorial text-on-brand transition-colors hover:bg-brand-container sm:inline-flex"
                                    href={create.url()}
                                >
                                    <NotebookPenIcon className="h-5 w-5" />
                                    <span>পত্রিকা তৈরি করুন</span>
                                </Link>
                                <Link
                                    aria-label="নোটিফিকেশন"
                                    className="relative p-space-xs text-on-surface-variant transition-colors hover:text-on-surface"
                                    href={notifications.url()}
                                >
                                    <BellIcon className="h-5 w-5" />
                                    <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-brand" />
                                </Link>
                                <div
                                    className="relative border-l border-outline-variant pl-space-xs"
                                    ref={menuRef}
                                >
                                    <button
                                        aria-controls={menuId}
                                        aria-expanded={menuOpen}
                                        aria-haspopup="menu"
                                        aria-label="প্রোফাইল মেনু"
                                        className="flex items-center gap-space-sm"
                                        type="button"
                                        onClick={() =>
                                            setMenuOpen((open) => !open)
                                        }
                                    >
                                        {user.avatar ? (
                                            <img
                                                alt={user.name}
                                                className="h-8 w-8 rounded-full object-cover"
                                                src={user.avatar}
                                            />
                                        ) : (
                                            <span
                                                aria-hidden="true"
                                                className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-semibold text-on-brand"
                                            >
                                                {getInitial(user.name)}
                                            </span>
                                        )}
                                        <div className="hidden flex-col text-left md:flex">
                                            <span className="max-w-40 truncate font-label-editorial text-label-editorial font-semibold text-on-surface">
                                                {user.name}
                                            </span>
                                            <span className="max-w-40 truncate font-caption text-caption text-warm">
                                                {user.email}
                                            </span>
                                        </div>
                                        <ChevronDownIcon
                                            className={`hidden h-5 w-5 text-on-surface-variant transition-transform sm:block ${
                                                menuOpen ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </button>
                                    {menuOpen ? (
                                        <div
                                            className="absolute top-full right-0 z-50 mt-2 min-w-52 overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest shadow-lg"
                                            id={menuId}
                                            role="menu"
                                        >
                                            {menuItems.map((item) => {
                                                const Icon = item.icon;

                                                return (
                                                    <Link
                                                        className={
                                                            menuItemClassName
                                                        }
                                                        href={item.href}
                                                        key={item.label}
                                                        role="menuitem"
                                                        onClick={() =>
                                                            setMenuOpen(false)
                                                        }
                                                    >
                                                        <Icon className="h-4 w-4 text-brand" />
                                                        <span>
                                                            {item.label}
                                                        </span>
                                                    </Link>
                                                );
                                            })}
                                            {canViewDashboard ? (
                                                <Link
                                                    className={
                                                        menuItemClassName
                                                    }
                                                    href={dashboard.url()}
                                                    role="menuitem"
                                                    onClick={() =>
                                                        setMenuOpen(false)
                                                    }
                                                >
                                                    <LayoutDashboardIcon className="h-4 w-4 text-brand" />
                                                    <span>ড্যাশবোর্ড</span>
                                                </Link>
                                            ) : null}
                                            <Link
                                                as="button"
                                                className={`${menuItemClassName} cursor-pointer border-t border-outline-variant text-left`}
                                                data-test="frontend-logout-button"
                                                href={logout()}
                                                role="menuitem"
                                                onClick={() => {
                                                    setMenuOpen(false);
                                                    router.flushAll();
                                                }}
                                            >
                                                <LogOutIcon className="h-4 w-4 text-brand" />
                                                <span>লগ আউট</span>
                                            </Link>
                                        </div>
                                    ) : null}
                                </div>
                            </>
                        ) : (
                            <>
                                <Link
                                    className="inline-flex items-center gap-space-xs px-space-sm py-space-xs font-label-editorial text-label-editorial text-on-surface transition-colors hover:text-brand"
                                    href={login()}
                                >
                                    <span
                                        aria-hidden="true"
                                        className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-on-brand"
                                    >
                                        <UserIcon className="h-4 w-4" />
                                    </span>
                                    <span className="hidden sm:inline">
                                        লগইন
                                    </span>
                                    <span className="sr-only sm:hidden">
                                        লগইন
                                    </span>
                                </Link>
                                <Link
                                    className="inline-flex items-center bg-brand px-space-md py-space-xs font-label-editorial text-label-editorial text-on-brand transition-colors hover:bg-brand-container"
                                    href={register()}
                                >
                                    নিবন্ধন
                                </Link>
                            </>
                        )}
                    </div>
                </div>
                <div className="flex min-w-0 items-center justify-between border-t border-b border-outline-variant">
                    <nav className="-mx-margin-mobile flex min-w-0 flex-1 items-center gap-space-md overflow-x-auto px-margin-mobile py-space-xs sm:gap-space-lg md:mx-0 md:px-0">
                        {visibleNavItems.map((item) => {
                            const isActive =
                                item.href === '/'
                                    ? currentPath === '/'
                                    : currentPath.startsWith(item.href);

                            return isActive ? (
                                <Link
                                    aria-current="page"
                                    className="shrink-0 border-b-2 border-brand py-1 font-semibold whitespace-nowrap text-brand transition-colors"
                                    href={item.href}
                                    key={item.label}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <Link
                                    className="shrink-0 py-1 font-label-editorial text-label-editorial whitespace-nowrap text-on-surface-variant transition-colors hover:text-on-surface"
                                    href={item.href}
                                    key={item.label}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                    <div className="ml-space-md hidden shrink-0 items-center gap-space-sm font-label-dateline text-label-dateline text-warm lg:flex">
                        <CoffeeIcon className="h-4 w-4" />
                        <span>চা, অলসতা ও কাজের চাপ</span>
                    </div>
                </div>
            </div>
            <div className="border-b border-outline-variant bg-surface-container-low">
                <div className="mx-auto flex max-w-[1380px] flex-col gap-1 px-margin-mobile py-1.5 font-label-dateline text-label-dateline text-on-surface-variant sm:flex-row sm:items-center sm:justify-between sm:gap-2 sm:py-1 md:px-margin-tablet lg:px-margin">
                    <div className="flex min-w-0 flex-wrap items-center gap-2">
                        <span className="truncate">
                            আজকের তারিখ: ১৫ চৈত্র, ১৪৩০ বঙ্গাব্দ
                        </span>
                        <span className="hidden text-outline-variant sm:inline">
                            |
                        </span>
                        <span className="font-semibold text-brand">
                            বিশেষ সংস্করণ
                        </span>
                    </div>
                    <div className="hidden min-w-0 items-center gap-space-md sm:flex">
                        <span className="hidden shrink-0 md:inline">
                            ঢাকা, বাংলাদেশ
                        </span>
                        <span className="truncate text-warm italic">
                            "আপনার জীবনের ছোট ছোট আনন্দ আর স্মৃতির বিশ্বস্ত
                            সংকলন"
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}
