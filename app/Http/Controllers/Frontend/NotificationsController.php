<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Support\Frontend\NotificationsContent;
use Inertia\Response;

class NotificationsController extends Controller
{
    public function index(): Response
    {
        return inertia('frontend/notifications', NotificationsContent::demo());
    }
}
