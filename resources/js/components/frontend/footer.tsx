import { FileClock } from 'lucide-react';

const aboutLinks = [
    { label: 'আমাদের গল্প', href: '#' },
    { label: 'সম্পাদকীয় নীতি', href: '#' },
    { label: 'লেখক ও কলামিস্ট', href: '#' },
    { label: 'কাগজের সংস্করণ', href: '#' },
];

const policyLinks = [
    { label: 'নিয়মাবলী ও আচরণবিধি', href: '#' },
    { label: 'গোপনীয়তা ও নীতিমালা', href: '#' },
    { label: 'লেখার মানদণ্ড', href: '#' },
    { label: 'আর্কাইভ ও স্বত্বাধিকার', href: '#' },
];

const contactLinks = [
    { label: 'যোগাযোগ করুন', href: '#' },
    { label: 'চিঠিপত্র পাঠাতে', href: '#' },
    { label: 'প্রেস রুম', href: '#' },
    { label: 'সাহায্য কেন্দ্র', href: '#' },
];

function FooterLinkColumn({
    title,
    links,
}: {
    title: string;
    links: { label: string; href: string }[];
}) {
    return (
        <div className="min-w-0">
            <h4 className="font-label-editorial text-label-editorial text-on-surface mb-space-sm font-semibold">
                {title}
            </h4>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                {links.map((link) => (
                    <li key={link.label}>
                        <a
                            className="hover:text-brand transition-colors"
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Footer() {
    return (
        <footer className="bg-surface-container-low border-brand mt-space-xl w-full border-t-2">
            <div className="px-margin-mobile md:px-margin-tablet lg:px-margin pt-space-xl pb-space-lg mx-auto max-w-[1380px]">
                <div className="gap-space-lg border-outline-variant pb-space-lg grid grid-cols-1 border-b sm:grid-cols-2 lg:grid-cols-5">
                    <div className="sm:col-span-2 lg:col-span-2 lg:pr-space-md">
                        <h3 className="font-headline-sm text-headline-sm text-brand mb-space-xs font-bold">
                            আজকের কাগজ
                        </h3>
                        <p className="font-body-md text-body-md md:font-lead md:text-lead text-on-surface-variant mb-space-md">
                            একটি মানবিক, সংবেদনশীল এবং খাঁটি সামাজিক পত্রিকা যা
                            প্রতিদিনের অনুভূতির দলিল রক্ষা করে।
                        </p>
                        <div className="gap-space-sm font-label-editorial text-label-editorial text-warm flex items-center">
                            <FileClock className="h-4 w-4 shrink-0" />
                            <span>মুদ্রিত ঐতিহ্য ও ডিজিটাল মেলবন্ধন</span>
                        </div>
                    </div>
                    <FooterLinkColumn
                        title="আজকের কাগজ সম্পর্কে"
                        links={aboutLinks}
                    />
                    <FooterLinkColumn
                        title="নীতিমালা ও নিয়মাবলী"
                        links={policyLinks}
                    />
                    <FooterLinkColumn
                        title="যোগাযোগ ও সহায়তা"
                        links={contactLinks}
                    />
                </div>
                <div className="pt-space-md gap-space-sm font-caption text-caption text-on-surface-variant flex flex-col flex-wrap items-center justify-between text-center md:flex-row md:text-left">
                    <p className="max-w-prose">
                        © ১৪৩০ আজকের কাগজ — আপনার জীবনের ছোট ছোট আনন্দ আর
                        স্মৃতির বিশ্বস্ত সংকলন। সর্বস্বত্ব সংরক্ষিত।
                    </p>
                    <div className="gap-space-md flex flex-wrap items-center justify-center">
                        <span className="text-warm font-label-dateline text-label-dateline">
                            হরফ ও ছাপাখানা সংস্করণ ১.০
                        </span>
                        <span className="font-label-dateline text-label-dateline text-brand font-medium">
                            বাংলায় রচিত ও পরিচালিত
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
