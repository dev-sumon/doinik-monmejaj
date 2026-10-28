import DailyPoll from './daily-poll';
import EditorialMotto from './editorial-motto';
import EditorsPicks from './editors-picks';
import PopularWriters from './popular-writers';
import WritePrompt from './write-prompt';
import type {
    EditorsPick,
    Motto,
    PollContent,
    WritePrompt as WritePromptData,
    Writer,
} from './types';

export default function FeedSidebar({
    writePrompt,
    poll,
    editorsPicks,
    writers,
    motto,
}: {
    writePrompt: WritePromptData;
    poll: PollContent;
    editorsPicks: EditorsPick[];
    writers: Writer[];
    motto: Motto;
}) {
    return (
        <aside className="space-y-space-lg lg:col-span-4">
            <WritePrompt writePrompt={writePrompt} />
            <DailyPoll poll={poll} />
            <EditorsPicks editorsPicks={editorsPicks} />
            <PopularWriters writers={writers} />
            <EditorialMotto motto={motto} />
        </aside>
    );
}
