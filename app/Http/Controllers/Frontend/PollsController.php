<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Support\Frontend\PollsPage;
use Illuminate\Http\Request;
use Inertia\Response;

class PollsController extends Controller
{
    public function index(Request $request): Response
    {
        return inertia('frontend/polls', PollsPage::build($request->user()));
    }
}
