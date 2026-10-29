<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Support\Frontend\CreateNewspaperContent;
use Inertia\Response;

class CreateNewspaperController extends Controller
{
    public function index(): Response
    {
        return inertia('frontend/create', CreateNewspaperContent::demo());
    }
}
