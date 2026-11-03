<?php

namespace App\Http\Responses;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;
use Laravel\Fortify\Contracts\RegisterResponse as RegisterResponseContract;
use Laravel\Fortify\Contracts\TwoFactorLoginResponse as TwoFactorLoginResponseContract;

/**
 * Sends public users to their profile and every other role to the dashboard.
 * Bound for the plain login, two-factor login and registration flows.
 */
class LoginResponse implements LoginResponseContract, RegisterResponseContract, TwoFactorLoginResponseContract
{
    public function toResponse($request): JsonResponse|RedirectResponse
    {
        if ($request->wantsJson()) {
            return new JsonResponse($request->routeIs('register') ? '' : ['two_factor' => false], $request->routeIs('register') ? 201 : 200);
        }

        return redirect()->intended(route($request->user()->homeRouteName(), absolute: false));
    }
}
