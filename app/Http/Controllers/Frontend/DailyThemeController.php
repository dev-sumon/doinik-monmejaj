<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Support\Frontend\DailyThemeContent;
use Inertia\Response;

class DailyThemeController extends Controller
{
    public function index(): Response
    {
        return inertia('frontend/daily-theme', DailyThemeContent::demo());
    }
}
