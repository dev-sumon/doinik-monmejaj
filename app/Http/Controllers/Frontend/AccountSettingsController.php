<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Support\Frontend\AccountSettingsContent;
use Inertia\Response;

class AccountSettingsController extends Controller
{
    public function index(): Response
    {
        return inertia('frontend/account-settings', AccountSettingsContent::demo());
    }
}
