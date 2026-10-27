import type { ReactNode } from 'react';
import Header from '@/components/frontend/header';
import Footer from '@/components/frontend/footer';


export default function FrontendLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="bg-background text-foreground flex min-h-svh max-w-full flex-col overflow-x-clip">
            <Header />
            <main className="min-w-0 flex-1">{children}</main>
            <Footer />
        </div>
    );
}
