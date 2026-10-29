import type { NotificationsSection, SettingsFormState } from './types';

export default function NotificationsSectionCard({
    form,
    notifications,
    onToggle,
}: {
    form: SettingsFormState;
    notifications: NotificationsSection;
    onToggle: (id: string) => void;
}) {
    return (
        <section
            className="bg-surface-container-lowest p-space-lg gap-space-md flex flex-col rounded-lg shadow-sm"
            id="notifications"
        >
            <div className="pb-space-xs flex items-center justify-between">
                <div className="gap-space-sm flex items-center">
                    <span className="bg-brand/10 text-brand font-headline-sm flex h-8 w-8 items-center justify-center rounded font-bold">
                        {notifications.number}
                    </span>
                    <div>
                        <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                            {notifications.title}
                        </h2>
                        <p className="font-caption text-caption text-warm">
                            {notifications.subtitle}
                        </p>
                    </div>
                </div>
                <span className="font-label-editorial text-label-editorial bg-surface-container text-warm px-space-xs py-0.5 font-semibold">
                    {notifications.sectionBadge}
                </span>
            </div>
            <div className="gap-space-xs flex flex-col">
                {notifications.items.map((item) => (
                    <label
                        className="gap-space-sm p-space-sm hover:bg-surface-container-low flex cursor-pointer items-start rounded transition-colors"
                        key={item.id}
                    >
                        <input
                            checked={form.notifications[item.id] ?? item.checked}
                            className="accent-brand mt-1 h-4 w-4 rounded"
                            type="checkbox"
                            onChange={() => onToggle(item.id)}
                        />
                        <div className="flex flex-col">
                            <span className="font-body-md text-body-md text-on-surface font-semibold">
                                {item.title}
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                                {item.body}
                            </span>
                        </div>
                    </label>
                ))}
            </div>
        </section>
    );
}
