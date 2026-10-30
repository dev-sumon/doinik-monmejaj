import { Form, Head, Link } from '@inertiajs/react';
import { CheckCircleIcon, MailIcon } from 'lucide-react';
import InputError from '@/components/input-error';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { email } from '@/routes/password';

export default function ForgotPassword({ status }: { status?: string }) {
    return (
        <>
            <Head title="পাসওয়ার্ড ভুলে গেছেন?" />

            <div className="py-space-md md:py-space-xl flex w-full flex-col items-center justify-center">
                <div className="gap-space-lg mx-auto flex w-full max-w-4xl flex-col">
                    <div className="bg-surface-container-lowest p-space-lg md:p-space-xl gap-space-lg border-outline-variant/30 mx-auto flex w-full max-w-lg flex-col border shadow-sm">
                        <div className="gap-space-xs flex flex-col text-center">
                            <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                                পাসওয়ার্ড ভুলে গেছেন?
                            </h1>
                            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed">
                                আপনার অ্যাকাউন্টের সাথে নিবন্ধিত ইমেইল ঠিকানাটি
                                লিখুন। আমরা পাসওয়ার্ড পুনরায় নির্ধারণের জন্য একটি
                                নিরাপদ লিঙ্ক পাঠিয়ে দেব।
                            </p>
                        </div>

                        {status ? (
                            <div className="bg-tertiary-container text-on-tertiary p-space-md gap-space-sm flex items-start transition-all duration-300">
                                <CheckCircleIcon className="text-tertiary-fixed mt-0.5 h-[22px] w-[22px] shrink-0" />
                                <div className="flex flex-col gap-0.5">
                                    <p className="font-body-sm text-body-sm font-bold text-white">
                                        সাফল্যজনকভাবে অনুরোধ পাঠানো হয়েছে!
                                    </p>
                                    <p className="font-caption text-caption text-on-tertiary-container">
                                        {status}
                                    </p>
                                </div>
                            </div>
                        ) : null}

                        <Form
                            {...email.form()}
                            className="gap-space-md flex flex-col"
                        >
                            {({ processing, errors }) => (
                                <>
                                    <div
                                        className="gap-space-xs flex flex-col"
                                        id="email-field-group"
                                    >
                                        <label
                                            className="font-label-editorial text-label-editorial text-on-surface"
                                            htmlFor="email"
                                        >
                                            নিবন্ধিত ইমেইল ঠিকানা
                                        </label>
                                        <div className="bg-surface-container-low focus-within:bg-surface-container-lowest border-outline-variant/40 relative flex items-center border transition-all focus-within:shadow-md">
                                            <MailIcon className="text-outline-paper pointer-events-none absolute left-4 h-5 w-5" />
                                            <input
                                                autoComplete="email"
                                                autoFocus
                                                className="font-body-md text-body-md text-on-surface placeholder:text-outline-paper/70 focus:ring-brand w-full bg-transparent py-3.5 pr-4 pl-12 focus:ring-1 focus:outline-none"
                                                id="email"
                                                name="email"
                                                placeholder="আপনার_ইমেইল@domain.com"
                                                required
                                                type="email"
                                            />
                                        </div>
                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="pt-space-xs">
                                        <button
                                            className="gap-space-sm px-space-lg bg-brand hover:bg-[#6b0d13] text-on-brand font-headline-sm flex w-full items-center justify-center py-3.5 text-[16px] font-semibold tracking-wide shadow-md transition-all active:translate-y-0.5 disabled:opacity-70"
                                            data-test="email-password-reset-link-button"
                                            disabled={processing}
                                            type="submit"
                                        >
                                            {processing ? <Spinner /> : null}
                                            <span>
                                                {processing
                                                    ? 'বার্তা পাঠানো হচ্ছে...'
                                                    : 'পাসওয়ার্ড রিসেট লিঙ্ক পাঠান'}
                                            </span>
                                        </button>
                                    </div>
                                </>
                            )}
                        </Form>

                        <div className="text-on-surface-variant font-body-sm text-body-sm text-center">
                            <span>অথবা ফিরে যান — </span>
                            <Link
                                className="font-label-editorial text-brand hover:text-brand-container font-semibold underline underline-offset-4 transition-colors"
                                href={login()}
                            >
                                লগইনে ফিরে যান
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
