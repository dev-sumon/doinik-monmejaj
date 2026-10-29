import { useState } from 'react';
import CreateFooterCta from '@/components/frontend/create/create-footer-cta';
import CreateForm from '@/components/frontend/create/create-form';
import CreateHero from '@/components/frontend/create/create-hero';
import LivePreview from '@/components/frontend/create/live-preview';
import type {
    CreateFormState,
    CreatePageProps,
} from '@/components/frontend/create/types';

export default function CreateNewspaper({
    hero,
    events,
    meta,
    styles,
    visibility,
    preview,
    footerCta,
}: CreatePageProps) {
    const event1 = events[0];
    const event2 = events[1];
    const event3 = events[2];

    const [form, setForm] = useState<CreateFormState>({
        masthead: meta.mastheadDefault,
        byline: meta.bylineDefault,
        category: event1?.defaultCategory ?? 'অফিস ও কর্মক্ষেত্র',
        event1: event1?.defaultValue ?? '',
        event2: event2?.defaultValue ?? '',
        event3: event3?.defaultValue ?? '',
        styleId: styles[0]?.id ?? 'funny',
        visibilityId: visibility[0]?.id ?? 'public',
    });

    function updateForm(patch: Partial<CreateFormState>): void {
        setForm((current) => ({ ...current, ...patch }));
    }

    return (
        <div className="flex w-full flex-col">
            <div className="px-margin-mobile md:px-margin-tablet lg:px-margin py-space-lg mx-auto w-full max-w-[1380px]">
                <CreateHero hero={hero} />
                <div className="gap-space-xl grid grid-cols-1 items-start lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <CreateForm
                            events={events}
                            form={form}
                            meta={meta}
                            styles={styles}
                            visibility={visibility}
                            onChange={updateForm}
                        />
                    </div>
                    <div className="lg:col-span-5">
                        <LivePreview
                            form={form}
                            preview={preview}
                            styles={styles}
                        />
                    </div>
                </div>
                <CreateFooterCta footerCta={footerCta} />
            </div>
        </div>
    );
}
