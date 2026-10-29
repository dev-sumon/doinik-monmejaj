import NewspaperCard from './newspaper-card';
import type { NewspaperPaper } from './types';

export default function NewspaperGrid({ papers }: { papers: NewspaperPaper[] }) {
    if (papers.length === 0) {
        return (
            <div className="bg-surface-container-low text-on-surface-variant font-body-md text-body-md mb-space-lg p-space-xl text-center">
                কোনো সংস্করণ পাওয়া যায়নি।
            </div>
        );
    }

    return (
        <div className="gap-space-lg mb-space-lg grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {papers.map((paper) => (
                <NewspaperCard key={paper.id} paper={paper} />
            ))}
        </div>
    );
}
