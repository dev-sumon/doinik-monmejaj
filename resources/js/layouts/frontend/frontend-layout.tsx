import type { ReactNode } from 'react';
import Header from '@/components/frontend/header';
import Footer from '@/components/frontend/footer';


export default function FrontendLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="bg-surface text-on-surface font-body-md text-body-md flex min-h-svh max-w-full flex-col overflow-x-clip antialiased">
            <Header />
            <main className="min-h-[calc(100vh-280px)] min-w-0 flex-1 bg-surface pt-32 sm:pt-36 md:pt-40">
                {children}
            </main>
            <Footer />
        </div>
    );
}
