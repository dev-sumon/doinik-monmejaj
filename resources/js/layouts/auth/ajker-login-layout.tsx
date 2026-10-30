import { Link } from '@inertiajs/react';
import { ArrowLeftIcon, UserIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { home } from '@/routes';

export default function AjkerLoginLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="bg-surface font-body-md text-body-md text-on-surface selection:bg-warm-fixed selection:text-on-warm-fixed flex min-h-screen flex-col justify-between">
            <header className="bg-surface/95 shadow-[0_1px_8px_rgba(0,0,0,0.04)] fixed top-0 right-0 left-0 z-50 backdrop-blur-md">
                <div className="px-margin-mobile md:px-margin-tablet lg:px-margin mx-auto flex h-20 max-w-[1380px] items-center justify-between">
                    <div className="gap-space-sm flex items-center">
                        <Link
                            className="gap-space-xs font-label-editorial text-label-editorial text-on-surface-variant hover:text-brand py-space-xs inline-flex items-center transition-colors"
                            href={home.url()}
                        >
                            <ArrowLeftIcon className="h-[18px] w-[18px]" />
                            <span>প্রধান পাতায় ফিরে যান</span>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <Link
                            className="font-masthead-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-brand-container font-bold tracking-tight transition-opacity hover:opacity-95"
                            href={home.url()}
                        >
                            আজকের কাগজ
                        </Link>
                        <span className="font-label-dateline text-caption text-warm mt-[-2px] tracking-widest italic uppercase">
                            My Day, My Newspaper
                        </span>
                    </div>
                    <div className="gap-space-md flex items-center">
                        <div className="bg-brand flex h-8 w-8 items-center justify-center rounded-full">
                            <UserIcon className="text-on-brand h-[18px] w-[18px]" />
                        </div>
                    </div>
                </div>
            </header>

            <main className="px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl bg-surface mx-auto flex w-full max-w-[1380px] flex-grow flex-col justify-center pt-20">
                {children}
            </main>

            <footer className="bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] mt-auto w-full">
                <div className="px-margin-mobile md:px-margin-tablet lg:px-margin gap-space-xs text-on-surface-variant mx-auto flex max-w-[1380px] flex-col items-center justify-center py-space-lg text-center">
                    <p className="font-label-dateline text-label-dateline text-on-surface-variant">
                        © ২০২৪ আজকের কাগজ (Ajker Kagoj) — সর্বস্বত্ব সংরক্ষিত।
                    </p>
                    <p className="font-caption text-caption text-outline-paper italic">
                        A thoughtful ritual of morning reflection and Bengali
                        discourse.
                    </p>
                </div>
            </footer>
        </div>
    );
}
