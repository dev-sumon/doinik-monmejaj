<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Support\Frontend\PollsContent;
use Inertia\Response;

class PollsController extends Controller
{
    public function index(): Response
    {
        return inertia('frontend/polls', PollsContent::demo());
    }
}
