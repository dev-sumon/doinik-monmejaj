import { Form, Head, Link } from '@inertiajs/react';
import {
    ArrowRightIcon,
    AtSignIcon,
    BadgeCheckIcon,
    CheckIcon,
    ContactIcon,
    EyeIcon,
    EyeOffIcon,
    FilePenLineIcon,
    LockIcon,
    MailIcon,
    NewspaperIcon,
    PenLineIcon,
    QuoteIcon,
    ShieldCheckIcon,
    UserRoundIcon,
} from 'lucide-react';
import { useState } from 'react';
import InputError from '@/components/input-error';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { store } from '@/routes/register';

type Props = {
    passwordRules: string;
};

type PasswordStrength = 'empty' | 'weak' | 'medium' | 'strong';

function getPasswordStrength(password: string): PasswordStrength {
    if (password.length === 0) {
        return 'empty';
    }

    if (password.length < 6) {
        return 'weak';
    }

    if (password.length < 10) {
        return 'medium';
    }

    return 'strong';
}

const strengthCopy: Record<
    PasswordStrength,
    { label: string; className: string; filled: number }
> = {
    empty: {
        label: 'পাসওয়ার্ড লিখুন',
        className: 'text-outline-paper',
        filled: 0,
    },
    weak: {
        label: 'দুর্বল',
        className: 'text-error',
        filled: 1,
    },
    medium: {
        label: 'মাঝারি',
        className: 'text-warm',
        filled: 2,
    },
    strong: {
        label: 'শক্তিশালী',
        className: 'text-tertiary',
        filled: 3,
    },
};

const meterFillClass: Record<Exclude<PasswordStrength, 'empty'>, string> = {
    weak: 'bg-error',
    medium: 'bg-warm',
    strong: 'bg-tertiary',
};

export default function Register({ passwordRules }: Props) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const strength = getPasswordStrength(password);
    const strengthMeta = strengthCopy[strength];

    let matchFeedback = {
        text: 'পুনরায় পাসওয়ার্ড লিখুন',
        className: 'text-outline-paper',
    };

    if (confirmPassword) {
        if (password === confirmPassword) {
            matchFeedback = {
                text: '✓ মিল রয়েছে',
                className: 'text-tertiary font-bold',
            };
        } else {
            matchFeedback = {
                text: '✕ পাসওয়ার্ড মিলছে না',
                className: 'text-error font-bold',
            };
        }
    }

    return (
        <>
            <Head title="নিবন্ধন" />

            <div className="flex w-full flex-col">
                <div className="text-on-surface-variant font-label-dateline text-label-dateline bg-surface-container-low px-space-md py-space-xs mb-space-md flex w-full items-center justify-between rounded">
                    <div className="gap-space-sm flex items-center">
                        <span className="gap-1 text-brand inline-flex items-center font-semibold">
                            <FilePenLineIcon className="h-[15px] w-[15px]" />
                            সম্পাদকীয় ভুক্তভুক্তি
                        </span>
                        <span className="text-outline-variant">|</span>
                        <span>নতুন সদস্য নিবন্ধন সংস্করণ</span>
                    </div>
                    <div className="gap-space-md hidden items-center sm:flex">
                        <span>সংখ্যা: ০০১ (স্বাগতম)</span>
                        <span className="text-outline-variant">/</span>
                        <span>ঢাকা, বাংলাদেশ</span>
                    </div>
                </div>

                <div className="gap-gutter grid w-full grid-cols-1 items-start lg:grid-cols-12">
                    <div className="gap-space-md flex flex-col lg:col-span-5">
                        <div className="bg-surface-container-low p-space-lg md:p-space-xl relative flex h-full flex-col justify-between overflow-hidden rounded shadow-sm">
                            <div className="text-brand pointer-events-none absolute -right-6 -bottom-6 opacity-5">
                                <NewspaperIcon className="h-[180px] w-[180px]" />
                            </div>
                            <div>
                                <div className="gap-space-xs mb-space-sm flex items-center">
                                    <span className="px-space-xs bg-brand text-on-brand font-label-editorial text-label-editorial rounded py-[2px]">
                                        আমন্ত্রণপত্র
                                    </span>
                                    <span className="font-label-dateline text-caption text-warm tracking-widest uppercase">
                                        সাহিত্য ও সম্পাদকীয় মঞ্চ
                                    </span>
                                </div>
                                <h1 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm leading-tight">
                                    আজই শুরু হোক আপনার সম্পাদকীয় যাত্রা
                                </h1>
                                <p className="font-lead text-lead text-on-surface-variant mb-space-lg leading-relaxed">
                                    চিন্তার স্বাধীনতা, রুচিশীল শব্দের বিস্তার এবং
                                    এক কাপ চায়ের আমেজে প্রতিদিনের দিনলিপি ছড়িয়ে
                                    দিন বাঙালির বিদগ্ধ পাঠকমহলে।
                                </p>
                            </div>
                            <div className="p-space-md bg-surface-container border-brand gap-space-sm mt-space-lg flex items-start rounded border-l-2">
                                <QuoteIcon className="text-brand mt-0.5 h-5 w-5 shrink-0" />
                                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed italic">
                                    কাগজের পাতায় লেখা প্রতিটি শব্দই জীবন্ত—একটি
                                    নিবিড় মুক্তচিন্তার সম্প্রদায় আপনাকে স্বাগত
                                    জানাতে প্রস্তুত।
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded shadow-md lg:col-span-7">
                        <div className="mb-space-lg">
                            <div className="gap-1 font-label-editorial text-label-editorial text-brand mb-space-xs inline-flex items-center tracking-wider uppercase">
                                <ContactIcon className="h-4 w-4" />
                                সদস্য অন্তর্ভুক্তি পত্র
                            </div>
                            <h2 className="font-headline-xl text-headline-lg md:text-headline-xl text-on-surface leading-tight">
                                নতুন লেখক অ্যাকাউন্ট তৈরি করুন
                            </h2>
                            <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">
                                সহজেই যোগ দিন আজকের কাগজ পরিবারে এবং সৃষ্টিশীল
                                চিন্তার অংশীদার হোন।
                            </p>
                        </div>

                        <div className="mb-space-lg">
                            <button
                                className="group gap-space-sm bg-surface-container hover:bg-surface-container-high text-on-surface font-label-editorial text-body-md flex h-12 w-full items-center justify-center rounded font-semibold shadow-sm transition-colors"
                                type="button"
                            >
                                <GoogleIcon />
                                <span>গুগল দিয়ে শুরু করুন</span>
                                <ArrowRightIcon className="text-outline-paper h-[18px] w-[18px] transition-transform group-hover:translate-x-0.5" />
                            </button>
                        </div>

                        <div className="my-space-lg relative flex items-center justify-center">
                            <div className="bg-surface-container-high h-px w-full" />
                            <span className="bg-surface-container-lowest px-space-md font-label-dateline text-caption text-outline-paper absolute italic">
                                অথবা বিস্তারিত তথ্য দিয়ে নিবন্ধন করুন
                            </span>
                        </div>

                        <Form
                            {...store.form()}
                            className="space-y-space-md"
                            disableWhileProcessing
                            resetOnSuccess={[
                                'password',
                                'password_confirmation',
                            ]}
                        >
                            {({ processing, errors }) => (
                                <>
                                    <div className="flex flex-col gap-1">
                                        <label
                                            className="font-label-editorial text-label-editorial text-on-surface flex items-center justify-between"
                                            htmlFor="name"
                                        >
                                            <span>আপনার পুরো নাম</span>
                                            <span className="text-caption font-caption text-outline-paper">
                                                দৃষ্টান্ত: কাজী অনিরুদ্ধ
                                            </span>
                                        </label>
                                        <div className="relative">
                                            <UserRoundIcon className="text-outline-paper pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                                            <input
                                                autoComplete="name"
                                                autoFocus
                                                className="bg-surface-container-low focus:bg-surface text-on-surface font-body-md text-body-md placeholder:text-outline-paper/70 w-full rounded py-3 pr-4 pl-10 shadow-sm transition-all outline-none"
                                                id="name"
                                                name="name"
                                                placeholder="কাজী অনিরুদ্ধ বা সুমাইয়া ইসলাম"
                                                required
                                                tabIndex={1}
                                                type="text"
                                            />
                                        </div>
                                        <InputError message={errors.name} />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label
                                            className="font-label-editorial text-label-editorial text-on-surface flex items-center justify-between"
                                            htmlFor="email"
                                        >
                                            <span>ইমেইল ঠিকানা</span>
                                            <span className="text-caption font-caption text-outline-paper">
                                                পাসওয়ার্ড পুনরুদ্ধার ও বিজ্ঞপ্তির
                                                জন্য
                                            </span>
                                        </label>
                                        <div className="relative">
                                            <MailIcon className="text-outline-paper pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                                            <input
                                                autoComplete="email"
                                                className="bg-surface-container-low focus:bg-surface text-on-surface font-body-md text-body-md placeholder:text-outline-paper/70 w-full rounded py-3 pr-4 pl-10 shadow-sm transition-all outline-none"
                                                id="email"
                                                name="email"
                                                placeholder="writer@ajkerkagoj.com"
                                                required
                                                tabIndex={2}
                                                type="email"
                                            />
                                        </div>
                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label
                                            className="font-label-editorial text-label-editorial text-on-surface flex items-center justify-between"
                                            htmlFor="usernamePreview"
                                        >
                                            <span>ইউজারনেম</span>
                                            <span className="text-caption font-caption text-outline-paper">
                                                @ajkerkagoj
                                            </span>
                                        </label>
                                        <div className="relative flex items-center">
                                            <AtSignIcon className="text-outline-paper pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                                            <input
                                                className="bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline-paper/70 w-full rounded py-3 pr-4 pl-10 shadow-sm outline-none"
                                                id="usernamePreview"
                                                placeholder="aniruddha_writer"
                                                tabIndex={-1}
                                                type="text"
                                            />
                                        </div>
                                        <p className="text-caption font-caption text-outline-paper">
                                            প্রদর্শনের জন্য — নিবন্ধনে পাঠানো হয়
                                            না
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label
                                            className="font-label-editorial text-label-editorial text-on-surface flex items-center justify-between"
                                            htmlFor="password"
                                        >
                                            <span>পাসওয়ার্ড</span>
                                            <span
                                                className={`text-caption font-label-editorial font-bold ${strengthMeta.className}`}
                                            >
                                                {strengthMeta.label}
                                            </span>
                                        </label>
                                        <div className="relative">
                                            <LockIcon className="text-outline-paper pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                                            <input
                                                autoComplete="new-password"
                                                className="bg-surface-container-low focus:bg-surface text-on-surface font-body-md text-body-md placeholder:text-outline-paper/70 w-full rounded py-3 pr-10 pl-10 shadow-sm transition-all outline-none"
                                                id="password"
                                                name="password"
                                                passwordrules={passwordRules}
                                                placeholder="কমপক্ষে ৮ অক্ষরের শক্তিশালী পাসওয়ার্ড"
                                                required
                                                tabIndex={3}
                                                type={
                                                    showPassword
                                                        ? 'text'
                                                        : 'password'
                                                }
                                                onInput={(event) =>
                                                    setPassword(
                                                        event.currentTarget
                                                            .value,
                                                    )
                                                }
                                            />
                                            <button
                                                aria-label={
                                                    showPassword
                                                        ? 'পাসওয়ার্ড লুকান'
                                                        : 'পাসওয়ার্ড দেখুন'
                                                }
                                                className="text-outline-paper hover:text-on-surface absolute top-1/2 right-3 -translate-y-1/2 transition-colors"
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
                                        <div className="mt-1 grid grid-cols-3 gap-1.5">
                                            {[1, 2, 3].map((bar) => (
                                                <div
                                                    className={`h-1.5 rounded-full transition-colors ${
                                                        strength !== 'empty' &&
                                                        bar <=
                                                            strengthMeta.filled
                                                            ? meterFillClass[
                                                                  strength
                                                              ]
                                                            : 'bg-surface-container-high'
                                                    }`}
                                                    key={bar}
                                                />
                                            ))}
                                        </div>
                                        <InputError
                                            message={errors.password}
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label
                                            className="font-label-editorial text-label-editorial text-on-surface flex items-center justify-between"
                                            htmlFor="password_confirmation"
                                        >
                                            <span>পাসওয়ার্ড নিশ্চিত করুন</span>
                                            <span
                                                className={`text-caption font-caption ${matchFeedback.className}`}
                                            >
                                                {matchFeedback.text}
                                            </span>
                                        </label>
                                        <div className="relative">
                                            <ShieldCheckIcon className="text-outline-paper pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                                            <input
                                                autoComplete="new-password"
                                                className="bg-surface-container-low focus:bg-surface text-on-surface font-body-md text-body-md placeholder:text-outline-paper/70 w-full rounded py-3 pr-10 pl-10 shadow-sm transition-all outline-none"
                                                id="password_confirmation"
                                                name="password_confirmation"
                                                passwordrules={passwordRules}
                                                placeholder="আগের পাসওয়ার্ডটি হুবহু লিখুন"
                                                required
                                                tabIndex={4}
                                                type={
                                                    showConfirmPassword
                                                        ? 'text'
                                                        : 'password'
                                                }
                                                onInput={(event) =>
                                                    setConfirmPassword(
                                                        event.currentTarget
                                                            .value,
                                                    )
                                                }
                                            />
                                            <button
                                                aria-label={
                                                    showConfirmPassword
                                                        ? 'পাসওয়ার্ড লুকান'
                                                        : 'পাসওয়ার্ড দেখুন'
                                                }
                                                className="text-outline-paper hover:text-on-surface absolute top-1/2 right-3 -translate-y-1/2 transition-colors"
                                                tabIndex={-1}
                                                type="button"
                                                onClick={() =>
                                                    setShowConfirmPassword(
                                                        (prev) => !prev,
                                                    )
                                                }
                                            >
                                                {showConfirmPassword ? (
                                                    <EyeOffIcon className="h-5 w-5" />
                                                ) : (
                                                    <EyeIcon className="h-5 w-5" />
                                                )}
                                            </button>
                                        </div>
                                        <InputError
                                            message={
                                                errors.password_confirmation
                                            }
                                        />
                                    </div>

                                    <div className="pt-space-xs">
                                        <label className="gap-space-sm flex cursor-pointer items-start select-none">
                                            <div className="relative mt-1 flex items-center justify-center">
                                                <input
                                                    className="peer sr-only"
                                                    id="termsCheckbox"
                                                    required
                                                    tabIndex={5}
                                                    type="checkbox"
                                                />
                                                <div className="bg-surface-container peer-checked:bg-brand flex h-5 w-5 items-center justify-center rounded shadow-sm transition-colors peer-checked:[&_svg]:scale-100">
                                                    <CheckIcon className="text-on-brand h-4 w-4 scale-0 font-bold transition-transform" />
                                                </div>
                                            </div>
                                            <span className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                                                আমি আজকের কাগজের ব্যবহারের
                                                শর্তাবলী এবং গোপনীয়তা নীতি মেনে
                                                নিয়ে লেখক হিসেবে নিবন্ধিত হতে
                                                সম্মতি দিচ্ছি।
                                            </span>
                                        </label>
                                    </div>

                                    <div className="pt-space-sm">
                                        <button
                                            className="gap-space-sm px-space-md bg-brand-container hover:bg-brand text-on-brand font-headline-sm text-body-lg group flex w-full items-center justify-center rounded py-3.5 font-bold shadow-md transition-all hover:shadow-lg disabled:opacity-70"
                                            data-test="register-user-button"
                                            disabled={processing}
                                            tabIndex={6}
                                            type="submit"
                                        >
                                            {processing ? (
                                                <Spinner />
                                            ) : null}
                                            <span>
                                                অ্যাকাউন্ট খুলুন ও লেখা শুরু
                                                করুন
                                            </span>
                                            <PenLineIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                        </button>
                                    </div>
                                </>
                            )}
                        </Form>

                        <div className="mt-space-lg pt-space-md bg-surface-container-low p-space-md gap-space-sm flex flex-col items-center justify-between rounded text-center sm:flex-row sm:text-left">
                            <div className="gap-space-xs text-on-surface-variant font-body-sm text-body-sm flex items-center">
                                <BadgeCheckIcon className="text-warm h-[18px] w-[18px]" />
                                <span>ইতিমধ্যে একটি অ্যাকাউন্ট আছে?</span>
                            </div>
                            <Link
                                className="font-label-editorial text-body-md text-brand hover:text-brand-container decoration-brand flex items-center gap-1 font-bold underline underline-offset-4 transition-colors"
                                href={login()}
                                tabIndex={7}
                            >
                                <span>সরাসরি লগইন করুন</span>
                                <ArrowRightIcon className="h-4 w-4" />
                            </Link>
                        </div>

                        <div className="mt-space-md gap-space-md text-caption font-label-dateline text-outline-paper flex items-center justify-center">
                            <span className="flex items-center gap-1">
                                <LockIcon className="h-[15px] w-[15px]" />
                                নিরাপদ ও এনক্রিপ্টেড নিবন্ধন
                            </span>
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
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
            />
            <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
            />
            <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                fill="#FBBC05"
            />
            <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                fill="#EA4335"
            />
        </svg>
    );
}
