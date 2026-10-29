import { CheckCircleIcon, LoaderCircleIcon, SaveIcon } from 'lucide-react';
import type { SettingsActions } from './types';

export default function SettingsActionsBar({
    actions,
    saving,
    onCancel,
    onSave,
}: {
    actions: SettingsActions;
    saving: boolean;
    onCancel: () => void;
    onSave: () => void;
}) {
    return (
        <div className="bg-surface-container-low p-space-md gap-space-md flex flex-col items-center justify-between rounded-lg shadow-sm sm:flex-row">
            <div className="gap-space-xs font-label-dateline text-label-dateline text-warm flex items-center">
                <CheckCircleIcon className="text-tertiary h-[18px] w-[18px]" />
                <span>{actions.secureNote}</span>
            </div>
            <div className="gap-space-sm flex w-full items-center justify-end sm:w-auto">
                <button
                    className="px-space-md py-space-xs bg-surface-container text-on-surface hover:bg-surface-container-high font-label-editorial text-label-editorial w-full rounded text-center font-semibold transition-colors sm:w-auto"
                    type="button"
                    onClick={onCancel}
                >
                    {actions.cancelLabel}
                </button>
                <button
                    className="px-space-lg py-space-xs bg-brand text-on-brand hover:bg-brand-container font-label-editorial text-label-editorial flex w-full items-center justify-center gap-2 rounded font-semibold shadow-sm transition-all disabled:opacity-70 sm:w-auto"
                    disabled={saving}
                    type="button"
                    onClick={onSave}
                >
                    {saving ? (
                        <LoaderCircleIcon className="h-[18px] w-[18px] animate-spin" />
                    ) : (
                        <SaveIcon className="h-[18px] w-[18px]" />
                    )}
                    <span>
                        {saving ? actions.savingLabel : actions.saveLabel}
                    </span>
                </button>
            </div>
        </div>
    );
}
