import { useEffect, useState } from 'react';
import { CheckCircle2Icon, LockIcon } from 'lucide-react';
import DangerZone from '@/components/frontend/account-settings/danger-zone';
import IdentitySectionCard from '@/components/frontend/account-settings/identity-section';
import NotificationsSectionCard from '@/components/frontend/account-settings/notifications-section';
import PrivacySectionCard from '@/components/frontend/account-settings/privacy-section';
import SettingsActionsBar from '@/components/frontend/account-settings/settings-actions';
import SettingsHeader from '@/components/frontend/account-settings/settings-header';
import SettingsNav from '@/components/frontend/account-settings/settings-nav';
import type {
    AccountSettingsPageProps,
    SettingsFormState,
} from '@/components/frontend/account-settings/types';

export default function AccountSettings({
    header,
    nav,
    navTitle,
    printStats,
    helpCard,
    identity,
    privacy,
    notifications,
    actions,
    dangerZone,
    toast,
    securityPlaceholder,
}: AccountSettingsPageProps) {
    const [activeNav, setActiveNav] = useState(nav[0]?.id ?? 'identity');
    const [saving, setSaving] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [form, setForm] = useState<SettingsFormState>(() => ({
        name: identity.nameValue,
        role: identity.roleValue,
        location: identity.locationValue,
        urlSlug: identity.urlSlug,
        bio: identity.bioValue,
        publishMode: privacy.defaultPublish,
        commentsRule: privacy.defaultComments,
        socialShare: privacy.socialShare.checked,
        notifications: Object.fromEntries(
            notifications.items.map((item) => [item.id, item.checked]),
        ),
    }));

    const initialForm: SettingsFormState = {
        name: identity.nameValue,
        role: identity.roleValue,
        location: identity.locationValue,
        urlSlug: identity.urlSlug,
        bio: identity.bioValue,
        publishMode: privacy.defaultPublish,
        commentsRule: privacy.defaultComments,
        socialShare: privacy.socialShare.checked,
        notifications: Object.fromEntries(
            notifications.items.map((item) => [item.id, item.checked]),
        ),
    };

    function updateForm(patch: Partial<SettingsFormState>): void {
        setForm((current) => ({ ...current, ...patch }));
    }

    function toggleNotification(id: string): void {
        setForm((current) => ({
            ...current,
            notifications: {
                ...current.notifications,
                [id]: !current.notifications[id],
            },
        }));
    }

    function handleNavChange(id: string): void {
        setActiveNav(id);
        const el = document.getElementById(id);

        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function handleSave(): void {
        if (saving) {
            return;
        }

        setSaving(true);
        window.setTimeout(() => {
            setSaving(false);
            setShowToast(true);
        }, 600);
    }

    useEffect(() => {
        if (!showToast) {
            return;
        }

        const timer = window.setTimeout(() => setShowToast(false), 3500);

        return () => window.clearTimeout(timer);
    }, [showToast]);

    return (
        <div className="flex w-full flex-col">
            <div className="px-margin-mobile md:px-margin-tablet lg:px-margin py-space-lg mx-auto w-full max-w-[1380px]">
                <SettingsHeader header={header} />
                <div className="gap-space-lg grid grid-cols-1 items-start lg:grid-cols-12">
                    <div className="lg:col-span-4 xl:col-span-3">
                        <SettingsNav
                            activeNav={activeNav}
                            helpCard={helpCard}
                            nav={nav}
                            navTitle={navTitle}
                            printStats={printStats}
                            onNavChange={handleNavChange}
                        />
                    </div>
                    <div className="gap-space-lg flex flex-col lg:col-span-8 xl:col-span-9">
                        <IdentitySectionCard
                            form={form}
                            identity={identity}
                            onChange={updateForm}
                        />
                        <PrivacySectionCard
                            form={form}
                            privacy={privacy}
                            onChange={updateForm}
                        />
                        <NotificationsSectionCard
                            form={form}
                            notifications={notifications}
                            onToggle={toggleNotification}
                        />
                        <section
                            className="bg-surface-container-lowest p-space-lg gap-space-sm flex flex-col rounded-lg shadow-sm"
                            id="security"
                        >
                            <div className="gap-space-sm flex items-center">
                                <LockIcon className="text-brand h-5 w-5" />
                                <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                                    {securityPlaceholder.title}
                                </h2>
                            </div>
                            <p className="font-body-md text-body-md text-on-surface-variant">
                                {securityPlaceholder.body}
                            </p>
                        </section>
                        <SettingsActionsBar
                            actions={actions}
                            saving={saving}
                            onCancel={() => setForm(initialForm)}
                            onSave={handleSave}
                        />
                        <DangerZone dangerZone={dangerZone} />
                    </div>
                </div>
            </div>
            <div
                className={`bg-inverse-surface text-inverse-on-surface px-space-md py-space-sm font-body-sm text-body-sm gap-space-sm pointer-events-none fixed right-6 bottom-6 z-50 flex items-center rounded shadow-xl transition-all duration-300 ${
                    showToast
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-24 opacity-0'
                }`}
            >
                <CheckCircle2Icon className="text-brand-fixed-dim h-5 w-5" />
                <span>{toast}</span>
            </div>
        </div>
    );
}
