<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Support\Frontend\HomePageContent;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        return inertia('frontend/home', HomePageContent::demo());
    }
}
