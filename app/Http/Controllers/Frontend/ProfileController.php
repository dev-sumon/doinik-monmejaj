<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Support\Frontend\ProfileContent;
use Inertia\Response;

class ProfileController extends Controller
{
    public function index(): Response
    {
        return inertia('frontend/profile', ProfileContent::demo());
    }
}
