<?php

namespace App\Support\Frontend;

use Carbon\CarbonInterface;

/**
 * Small helpers for rendering raw values as Bengali display strings.
 */
class Bangla
{
    private const DIGITS = ['0' => '০', '1' => '১', '2' => '২', '3' => '৩', '4' => '৪', '5' => '৫', '6' => '৬', '7' => '৭', '8' => '৮', '9' => '৯'];

    /**
     * Convert Western digits in the given value to Bengali digits.
     */
    public static function digits(int|string|float $value): string
    {
        return strtr((string) $value, self::DIGITS);
    }

    /**
     * Format an integer with thousands separators in Bengali digits.
     */
    public static function number(int $value): string
    {
        return self::digits(number_format($value));
    }

    /**
     * Human readable "time left" label for a deadline.
     */
    public static function timeLeft(?CarbonInterface $endsAt): string
    {
        if ($endsAt === null) {
            return 'চলমান';
        }

        if ($endsAt->isPast()) {
            return 'সময় শেষ';
        }

        $days = (int) now()->diffInDays($endsAt, true);

        if ($days >= 1) {
            return self::digits($days).' দিন বাকি';
        }

        $hours = (int) now()->diffInHours($endsAt, true);

        return self::digits(max($hours, 1)).' ঘণ্টা বাকি';
    }

    /**
     * Relative time such as "২ ঘণ্টা আগে".
     */
    public static function ago(CarbonInterface $time): string
    {
        $minutes = (int) $time->diffInMinutes(now(), true);

        return match (true) {
            $minutes < 1 => 'এইমাত্র',
            $minutes < 60 => self::digits($minutes).' মিনিট আগে',
            $minutes < 1440 => self::digits(intdiv($minutes, 60)).' ঘণ্টা আগে',
            default => self::digits(intdiv($minutes, 1440)).' দিন আগে',
        };
    }
}
