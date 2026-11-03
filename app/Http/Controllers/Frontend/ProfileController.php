<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Support\Frontend\ProfileContent;
use Illuminate\Http\Request;
use Inertia\Response;

class ProfileController extends Controller
{
    public function index(Request $request): Response
    {
        $content = ProfileContent::demo();
        $user = $request->user();

        $content['pressPass']['name'] = $user->name;
        $content['pressPass']['avatarAlt'] = $user->name;

        if ($user->avatar) {
            $content['pressPass']['avatar'] = $user->avatar;
        }

        return inertia('frontend/profile', $content);
    }
}
