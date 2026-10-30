import { Form, Head, Link } from '@inertiajs/react';
import {
    ArrowLeftIcon,
    BadgeCheckIcon,
    CheckCircleIcon,
    CheckIcon,
    CircleIcon,
    EyeIcon,
    EyeOffIcon,
    LockIcon,
    XIcon,
} from 'lucide-react';
import { useState } from 'react';
import InputError from '@/components/input-error';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { update } from '@/routes/password';

type Props = {
    token: string;
    email: string;
    passwordRules: string;
};

type StrengthScore = 0 | 1 | 2 | 3;

function getCriteria(password: string) {
    return {
        hasLength: password.length >= 8,
        hasUpperAndDigit: /[A-Z]/.test(password) && /[0-9]/.test(password),
        hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
}

function getStrengthScore(password: string): StrengthScore {
    if (password.length === 0) {
        return 0;
    }

    const criteria = getCriteria(password);
    const score =
        (criteria.hasLength ? 1 : 0) +
        (criteria.hasUpperAndDigit ? 1 : 0) +
        (criteria.hasSpecial ? 1 : 0);

    return score as StrengthScore;
}

const strengthLabel: Record<
    StrengthScore,
    { text: string; className: string }
> = {
    0: {
        text: 'শক্তি: নির্ধারণ করা হচ্ছে...',
        className: 'text-outline-paper',
    },
    1: {
        text: 'শক্তি: দুর্বল',
        className: 'text-brand font-bold',
    },
    2: {
        text: 'শক্তি: মাঝারি',
        className: 'text-warm font-bold',
    },
    3: {
        text: 'শক্তি: অত্যন্ত শক্তিশালী',
        className: 'text-tertiary font-bold',
    },
};

const meterBarClass = [
    'bg-transparent',
    'bg-brand',
    'bg-warm',
    'bg-tertiary',
] as const;

export default function ResetPassword({ token, email, passwordRules }: Props) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const criteria = getCriteria(password);
    const score = getStrengthScore(password);
    const label = strengthLabel[score];

    let matchStatus: { ok: boolean; text: string } | null = null;

    if (confirmPassword) {
        matchStatus =
            password === confirmPassword
                ? { ok: true, text: 'পাসওয়ার্ড মিলেছে' }
                : { ok: false, text: 'পাসওয়ার্ড মেলেনি' };
    }

    return (
        <>
            <Head title="নতুন পাসওয়ার্ড সেট করুন" />

            <div className="flex w-full flex-1 flex-col items-center justify-center">
                <div className="mx-auto w-full max-w-xl">
                    <div className="bg-surface-container-lowest p-space-lg md:p-space-xl relative rounded shadow-md">
                        <div className="gap-space-xs mb-space-md pb-space-sm flex flex-col justify-between sm:flex-row sm:items-center">
                            <div className="bg-brand/10 gap-space-xs px-space-sm inline-flex items-center rounded py-1">
                                <span className="bg-brand h-2 w-2 animate-pulse rounded-full" />
                                <span className="font-label-editorial text-label-editorial text-brand tracking-wide">
                                    ধাপ ২: নতুন পাসওয়ার্ড নির্বাচন
                                </span>
                            </div>
                            <div className="text-tertiary font-label-dateline text-label-dateline bg-tertiary/10 gap-1.5 px-space-sm inline-flex items-center rounded py-1">
                                <BadgeCheckIcon className="h-4 w-4" />
                                <span>{email}</span>
                            </div>
                        </div>

                        <div className="mb-space-lg text-center sm:text-left">
                            <h1 className="font-headline-lg text-headline-lg text-brand-container mb-space-xs">
                                নতুন পাসওয়ার্ড সেট করুন
                            </h1>
                            <p className="font-lead text-lead text-on-surface-variant">
                                আপনার অ্যাকাউন্টের সুরক্ষার জন্য একটি শক্তিশালী ও
                                নতুন পাসওয়ার্ড নির্বাচন করুন।
                            </p>
                        </div>

                        <Form
                            {...update.form()}
                            className="space-y-space-lg"
                            resetOnSuccess={[
                                'password',
                                'password_confirmation',
                            ]}
                            transform={(data) => ({ ...data, token, email })}
                        >
                            {({ processing, errors }) => (
                                <>
                                    <div className="space-y-space-xs">
                                        <div className="flex items-center justify-between">
                                            <label
                                                className="font-label-editorial text-label-editorial text-on-surface tracking-wider uppercase"
                                                htmlFor="password"
                                            >
                                                নতুন পাসওয়ার্ড
                                            </label>
                                            <span
                                                className={`font-label-dateline text-label-dateline ${label.className}`}
                                            >
                                                {label.text}
                                            </span>
                                        </div>
                                        <div className="relative flex items-center">
                                            <input
                                                autoComplete="new-password"
                                                autoFocus
                                                className="bg-surface-container-low px-space-md py-space-sm text-body-lg font-body-lg text-on-surface placeholder:text-outline-paper/40 focus:bg-surface-bright w-full rounded pr-12 transition-colors focus:outline-none"
                                                id="password"
                                                name="password"
                                                passwordrules={passwordRules}
                                                placeholder="••••••••••••"
                                                required
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
                                                        : 'পাসওয়ার্ড দৃশ্যমান করুন'
                                                }
                                                className="text-on-surface-variant hover:text-brand absolute right-3 p-1 transition-colors"
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
                                        <div className="bg-surface-container-high mt-1.5 flex h-1.5 w-full gap-1 overflow-hidden rounded">
                                            {[1, 2, 3].map((bar) => (
                                                <div
                                                    className={`h-full w-1/3 transition-all duration-300 ${
                                                        score >= bar
                                                            ? meterBarClass[bar]
                                                            : 'bg-transparent'
                                                    }`}
                                                    key={bar}
                                                />
                                            ))}
                                        </div>
                                        <div className="bg-surface-container-low p-space-sm mt-space-sm space-y-1 rounded">
                                            <span className="font-label-dateline text-label-dateline text-warm mb-1 block">
                                                পাসওয়ার্ডের আবশ্যক শর্তাবলী:
                                            </span>
                                            <CriterionRow
                                                label="নূন্যতম ৮টি অক্ষর"
                                                met={criteria.hasLength}
                                            />
                                            <CriterionRow
                                                label="বড় হাতের অক্ষর ও সংখ্যা (A-Z এবং ০-৯)"
                                                met={
                                                    criteria.hasUpperAndDigit
                                                }
                                            />
                                            <CriterionRow
                                                label="বিশেষ চিহ্ন যেমন @, #, $, %, ! ইত্যাদি"
                                                met={criteria.hasSpecial}
                                            />
                                        </div>
                                        <InputError
                                            message={errors.password}
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="space-y-space-xs">
                                        <div className="flex items-center justify-between">
                                            <label
                                                className="font-label-editorial text-label-editorial text-on-surface tracking-wider uppercase"
                                                htmlFor="password_confirmation"
                                            >
                                                নতুন পাসওয়ার্ড পুনরায় লিখুন
                                            </label>
                                            {matchStatus ? (
                                                <span
                                                    className={`font-label-dateline text-label-dateline flex items-center gap-1 ${
                                                        matchStatus.ok
                                                            ? 'text-tertiary font-semibold'
                                                            : 'text-error'
                                                    }`}
                                                >
                                                    {matchStatus.ok ? (
                                                        <CheckIcon className="h-3.5 w-3.5" />
                                                    ) : (
                                                        <XIcon className="h-3.5 w-3.5" />
                                                    )}
                                                    {matchStatus.text}
                                                </span>
                                            ) : null}
                                        </div>
                                        <div className="relative flex items-center">
                                            <input
                                                autoComplete="new-password"
                                                className="bg-surface-container-low px-space-md py-space-sm text-body-lg font-body-lg text-on-surface placeholder:text-outline-paper/40 focus:bg-surface-bright w-full rounded pr-12 transition-colors focus:outline-none"
                                                id="password_confirmation"
                                                name="password_confirmation"
                                                passwordrules={passwordRules}
                                                placeholder="••••••••••••"
                                                required
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
                                                        : 'পাসওয়ার্ড দৃশ্যমান করুন'
                                                }
                                                className="text-on-surface-variant hover:text-brand absolute right-3 p-1 transition-colors"
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

                                    <div className="space-y-space-md pt-space-xs">
                                        <button
                                            className="bg-brand hover:bg-brand-container text-on-brand py-space-sm px-space-md gap-space-xs font-headline-sm text-headline-sm flex w-full items-center justify-center rounded shadow transition-all hover:shadow-md disabled:opacity-70"
                                            data-test="reset-password-button"
                                            disabled={processing}
                                            type="submit"
                                        >
                                            {processing ? (
                                                <Spinner />
                                            ) : (
                                                <LockIcon className="h-5 w-5" />
                                            )}
                                            <span>
                                                পাসওয়ার্ড সংরক্ষণ ও লগইন করুন
                                            </span>
                                        </button>
                                        <div className="flex items-center justify-center">
                                            <Link
                                                className="gap-space-xs font-label-editorial text-label-editorial text-on-surface-variant hover:text-brand inline-flex items-center transition-colors"
                                                href={login()}
                                            >
                                                <ArrowLeftIcon className="h-4 w-4" />
                                                <span>
                                                    লগইন পৃষ্ঠায় ফিরে যান
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )}
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}

function CriterionRow({ label, met }: { label: string; met: boolean }) {
    return (
        <div
            className={`gap-space-xs text-caption font-caption flex items-center transition-colors ${
                met
                    ? 'text-tertiary font-semibold'
                    : 'text-on-surface-variant'
            }`}
        >
            {met ? (
                <CheckCircleIcon className="text-tertiary h-4 w-4" />
            ) : (
                <CircleIcon className="text-outline-paper h-4 w-4" />
            )}
            <span>{label}</span>
        </div>
    );
}
