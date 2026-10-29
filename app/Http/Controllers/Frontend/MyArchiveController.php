<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Support\Frontend\MyArchiveContent;
use Inertia\Response;

class MyArchiveController extends Controller
{
    public function index(): Response
    {
        return inertia('frontend/my-archive', MyArchiveContent::demo());
    }
}
