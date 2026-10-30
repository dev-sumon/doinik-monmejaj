import { Form, Head, Link } from '@inertiajs/react';
import {
    BookOpenIcon,
    EyeIcon,
    EyeOffIcon,
    LockIcon,
    MailIcon,
    NewspaperIcon,
    ShieldCheckIcon,
} from 'lucide-react';
import { useState } from 'react';
import InputError from '@/components/input-error';
import { Spinner } from '@/components/ui/spinner';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';

type Props = {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
};

const heritageImage =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC1sgir4wda1Ftu8OczNE096Kswrqytwo9BgVD_gTevqN0rH6DMDy9gQ4jV5AtFqOVsrhu_j5IQBHI0kjJpmbuH7gfxxWtwHTlRb8ktzoK1NJOZk9DZ69FfWWbLZQhOQ9i6yDqBwafUg_XTnDeLaReyRIPdMnQZHh2wrC4dzIZIZ8eZ-SgJLzl_ZUky-tNC9nqKXRhvJwlVWvQxnUasTcOk64PrwnbpOQLdGV--RSM';

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: Props) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <Head title="প্রবেশ করুন" />

            <div className="py-space-md lg:py-space-xl flex w-full flex-col">
                <div className="bg-surface-container-lowest mx-auto flex w-full max-w-[1240px] flex-col overflow-hidden rounded-xl shadow-xl lg:flex-row">
                    <div className="bg-surface-container-low p-space-lg lg:p-space-xl relative flex w-full flex-col justify-between overflow-hidden lg:w-5/12">
                        <div className="bg-warm-fixed/30 pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full blur-3xl" />
                        <div className="bg-brand-fixed/20 pointer-events-none absolute bottom-10 -left-20 h-72 w-72 rounded-full blur-2xl" />

                        <div className="gap-space-md relative z-10 flex flex-col">
                            <div className="pb-space-xs text-on-surface-variant font-label-dateline text-label-dateline flex items-center justify-between tracking-widest uppercase">
                                <div className="gap-space-xs flex items-center">
                                    <span className="bg-brand inline-block h-2 w-2 rounded-full" />
                                    <span>নিয়মিত সংস্করণ • খণ্ড ৪২</span>
                                </div>
                                <span className="text-warm italic">
                                    কলকাতা ও ঢাকা
                                </span>
                            </div>

                            <div className="bg-surface-container-lowest/80 p-space-md rounded-lg shadow-sm backdrop-blur-sm">
                                <div className="gap-space-sm mb-space-xs flex items-center">
                                    <NewspaperIcon className="text-brand h-7 w-7" />
                                    <span className="font-headline-sm text-headline-sm text-brand font-bold">
                                        আজকের কাগজ
                                    </span>
                                </div>
                                <p className="font-caption text-caption text-on-surface-variant italic">
                                    &quot;আপনার প্রতিদিনের চিন্তা, সমাজ ও
                                    সাহিত্যের স্থায়ী দলিল।&quot;
                                </p>
                            </div>

                            <div className="group relative overflow-hidden rounded-lg shadow-md">
                                <img
                                    alt="Vintage Bengali printing press"
                                    className="h-48 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 lg:h-56"
                                    src={heritageImage}
                                />
                                <div className="from-on-surface/90 via-on-surface/40 text-surface absolute inset-0 flex flex-col justify-end bg-gradient-to-t to-transparent p-space-md">
                                    <span className="font-label-editorial text-caption text-warm-fixed tracking-wider uppercase">
                                        সম্পাদকীয় ভূমিকা
                                    </span>
                                    <p className="font-headline-sm text-body-lg text-surface mt-1 leading-snug font-semibold">
                                        আপনার প্রতিদিনের গল্প দিয়ে সাজান আপনার
                                        নিজস্ব দৈনিক পত্রিকা
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-space-md mt-space-md relative z-10 bg-transparent">
                            <div className="gap-space-xs text-on-surface-variant/80 font-label-dateline text-caption flex items-center italic">
                                <BookOpenIcon className="text-warm h-4 w-4" />
                                <span>
                                    &quot;মুদ্রিত অক্ষরের স্মৃতি কখনো মলিন হয়
                                    না।&quot;
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-surface-container-lowest p-space-lg lg:p-space-xl flex w-full flex-col justify-center lg:w-7/12">
                        <div className="gap-space-lg mx-auto flex w-full max-w-[480px] flex-col">
                            <div className="gap-space-xs flex flex-col">
                                <div className="bg-brand/10 text-brand font-label-editorial text-label-editorial gap-space-xs px-space-sm inline-flex items-center self-start rounded-full tracking-wider py-1">
                                    <span className="bg-brand h-1.5 w-1.5 animate-pulse rounded-full" />
                                    <span>নিরাপদ পাঠক প্রবেশপত্র</span>
                                </div>
                                <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                                    স্বাগতম! আপনার পত্রিকায় প্রবেশ করুন
                                </h1>
                                <p className="font-body-md text-body-md text-on-surface-variant">
                                    আপনার ইমেইল বা ফোন এবং পাসওয়ার্ড দিয়ে লগইন
                                    করে সকালের কাগজ খুলে বসুন।
                                </p>
                            </div>

                            <div className="gap-space-sm grid grid-cols-1">
                                <button
                                    className="group gap-space-sm py-space-sm px-space-md bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center justify-center rounded-lg transition-all duration-200 hover:shadow-sm"
                                    type="button"
                                >
                                    <GoogleIcon />
                                    <span className="font-body-md text-body-md group-hover:text-brand font-medium transition-colors">
                                        গুগল দিয়ে প্রবেশ করুন
                                    </span>
                                </button>
                            </div>

                            <div className="my-space-xs relative flex items-center justify-center">
                                <div className="bg-outline-variant/40 h-px w-full" />
                                <span className="bg-surface-container-lowest px-space-md font-label-dateline text-caption text-on-surface-variant absolute tracking-wider uppercase">
                                    অথবা ইমেইল ব্যবহার করুন
                                </span>
                            </div>

                            {status ? (
                                <div className="font-body-sm text-body-sm text-center font-medium text-green-700">
                                    {status}
                                </div>
                            ) : null}

                            <Form
                                {...store.form()}
                                className="gap-space-md flex flex-col"
                                resetOnSuccess={['password']}
                            >
                                {({ processing, errors }) => (
                                    <>
                                        <div className="gap-space-xs flex flex-col">
                                            <label
                                                className="font-body-md text-body-md text-on-surface font-semibold"
                                                htmlFor="email"
                                            >
                                                ইমেইল ঠিকানা বা ইউজারনেম
                                            </label>
                                            <div className="relative flex items-center">
                                                <MailIcon className="text-on-surface-variant pointer-events-none absolute left-4 h-5 w-5" />
                                                <input
                                                    autoComplete="email"
                                                    autoFocus
                                                    className="bg-surface-container-low focus:bg-surface-container-lowest text-on-surface placeholder:text-outline-paper/70 font-body-md text-body-md focus:ring-brand/20 w-full rounded-lg py-space-sm pr-space-md pl-11 shadow-sm transition-all focus:ring-2 focus:outline-none"
                                                    id="email"
                                                    name="email"
                                                    placeholder="editor@ajkerkagoj.com"
                                                    required
                                                    tabIndex={1}
                                                    type="email"
                                                />
                                            </div>
                                            <InputError
                                                message={errors.email}
                                            />
                                        </div>

                                        <div className="gap-space-xs flex flex-col">
                                            <label
                                                className="font-body-md text-body-md text-on-surface font-semibold"
                                                htmlFor="password"
                                            >
                                                পাসওয়ার্ড
                                            </label>
                                            <div className="relative flex items-center">
                                                <LockIcon className="text-on-surface-variant pointer-events-none absolute left-4 h-5 w-5" />
                                                <input
                                                    autoComplete="current-password"
                                                    className="bg-surface-container-low focus:bg-surface-container-lowest text-on-surface placeholder:text-outline-paper/70 font-body-md text-body-md focus:ring-brand/20 w-full rounded-lg py-space-sm pr-12 pl-11 shadow-sm transition-all focus:ring-2 focus:outline-none"
                                                    id="password"
                                                    name="password"
                                                    placeholder="••••••••••••"
                                                    required
                                                    tabIndex={2}
                                                    type={
                                                        showPassword
                                                            ? 'text'
                                                            : 'password'
                                                    }
                                                />
                                                <button
                                                    aria-label={
                                                        showPassword
                                                            ? 'পাসওয়ার্ড লুকান'
                                                            : 'পাসওয়ার্ড দেখুন'
                                                    }
                                                    className="text-on-surface-variant hover:text-brand absolute right-4 flex items-center justify-center p-1 transition-colors"
                                                    tabIndex={-1}
                                                    type="button"
                                                    onClick={() =>
                                                        setShowPassword(
                                                            (prev) => !prev,
                                                        )
                                                    }
                                                >
                                                    {showPassword ? (
                                                        <EyeOffIcon className="h-5 w-5" />
                                                    ) : (
                                                        <EyeIcon className="h-5 w-5" />
                                                    )}
                                                </button>
                                            </div>
                                            <InputError
                                                message={errors.password}
                                            />
                                        </div>

                                        <div className="pt-space-xs flex items-center justify-between">
                                            <label className="gap-space-xs flex cursor-pointer items-center select-none">
                                                <input
                                                    className="accent-brand text-brand focus:ring-brand/30 h-4 w-4 cursor-pointer rounded"
                                                    name="remember"
                                                    tabIndex={3}
                                                    type="checkbox"
                                                />
                                                <span className="font-body-sm text-body-sm text-on-surface">
                                                    আমাকে মনে রাখুন
                                                </span>
                                            </label>
                                            {canResetPassword ? (
                                                <Link
                                                    className="font-label-editorial text-body-sm text-brand hover:text-brand-container font-semibold transition-colors"
                                                    href={request()}
                                                    tabIndex={5}
                                                >
                                                    পাসওয়ার্ড ভুলে গেছেন?
                                                </Link>
                                            ) : null}
                                        </div>

                                        <button
                                            className="group gap-space-sm py-space-sm px-space-md bg-brand hover:bg-brand-container text-on-brand font-body-lg mt-space-xs flex w-full transform items-center justify-center rounded-lg font-bold shadow-md transition-all duration-300 hover:shadow-lg active:scale-[0.99] disabled:opacity-70"
                                            data-test="login-button"
                                            disabled={processing}
                                            tabIndex={4}
                                            type="submit"
                                        >
                                            {processing ? (
                                                <Spinner />
                                            ) : (
                                                <BookOpenIcon className="h-[22px] w-[22px] transition-transform group-hover:rotate-6" />
                                            )}
                                            <span>প্রবেশ করুন</span>
                                        </button>
                                    </>
                                )}
                            </Form>

                            <div className="gap-space-md pt-space-sm bg-surface-container-low/50 p-space-md flex flex-col rounded-lg text-center">
                                {canRegister ? (
                                    <p className="font-body-md text-body-md text-on-surface">
                                        আজকের কাগজে নতুন?
                                        <Link
                                            className="font-headline-sm text-brand ml-1 font-bold hover:underline"
                                            href={register()}
                                            tabIndex={6}
                                        >
                                            একটি নতুন অ্যাকাউন্ট তৈরি করুন
                                        </Link>
                                    </p>
                                ) : null}
                                <div className="gap-space-xs text-on-surface-variant font-label-dateline text-caption flex items-center justify-center">
                                    <ShieldCheckIcon className="text-tertiary h-4 w-4" />
                                    <span>
                                        আপনার ব্যক্তিগত লেখা ও তথ্য সম্পূর্ণ
                                        সুরক্ষিত ও এনক্রিপ্ট করা।
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function GoogleIcon() {
    return (
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
            <path
                d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.2 8.9 5 12 5z"
                fill="#EA4335"
            />
            <path
                d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"
                fill="#4285F4"
            />
            <path
                d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.7s.1-2 .4-2.7L1.6 6.4C.6 8.4 0 10.6 0 12s.6 3.6 1.6 5.6l3.7-2.9z"
                fill="#FBBC05"
            />
            <path
                d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.2-6.7-5.3L1.6 16c1.9 3.8 5.8 7 10.4 7z"
                fill="#34A853"
            />
        </svg>
    );
}
