<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Support\Frontend\WeeklyRecapContent;
use Inertia\Response;

class WeeklyRecapController extends Controller
{
    public function index(): Response
    {
        return inertia('frontend/weekly-recap', WeeklyRecapContent::demo());
    }
}
