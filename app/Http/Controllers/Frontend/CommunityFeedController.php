<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Support\Frontend\CommunityFeedContent;
use Inertia\Response;

class CommunityFeedController extends Controller
{
    public function index(): Response
    {
        return inertia('frontend/community-feed', CommunityFeedContent::demo());
    }
}
