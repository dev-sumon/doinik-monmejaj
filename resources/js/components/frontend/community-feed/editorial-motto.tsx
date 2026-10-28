import type { Motto } from './types';

export default function EditorialMotto({ motto }: { motto: Motto }) {
    return (
        <div className="bg-surface-container-high p-space-md text-center">
            <div className="font-label-editorial text-label-editorial text-brand mb-1 font-bold tracking-widest uppercase">
                {motto.eyebrow}
            </div>
            <p className="font-caption text-caption text-on-surface-variant leading-relaxed italic">
                {motto.body}
            </p>
        </div>
    );
}
