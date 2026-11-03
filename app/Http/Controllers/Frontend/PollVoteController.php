<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Poll;
use App\Models\PollVote;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class PollVoteController extends Controller
{
    /**
     * Cast the signed-in user's single vote on an open poll.
     */
    public function store(Request $request, Poll $poll): RedirectResponse
    {
        $validated = $request->validate([
            'option_id' => [
                'required',
                'integer',
                Rule::exists('poll_options', 'id')->where('poll_id', $poll->id),
            ],
        ]);

        if (! $poll->isOpenForVoting()) {
            Inertia::flash('toast', ['type' => 'error', 'message' => 'এই জনমতে এখন আর ভোট দেওয়া যাবে না।']);

            return redirect()->back();
        }

        $alreadyVoted = PollVote::where('poll_id', $poll->id)
            ->where('user_id', $request->user()->id)
            ->exists();

        if ($alreadyVoted) {
            Inertia::flash('toast', ['type' => 'info', 'message' => 'আপনি ইতিমধ্যে এই জনমতে ভোট দিয়েছেন।']);

            return redirect()->back();
        }

        PollVote::create([
            'poll_id' => $poll->id,
            'poll_option_id' => $validated['option_id'],
            'user_id' => $request->user()->id,
        ]);

        Inertia::flash('toast', ['type' => 'success', 'message' => 'আপনার ভোট গৃহীত হয়েছে। ধন্যবাদ!']);

        return redirect()->back();
    }
}
