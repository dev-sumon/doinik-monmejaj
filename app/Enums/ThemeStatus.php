<?php

namespace App\Enums;

enum ThemeStatus: string
{
    case UPCOMING = 'upcoming';
    case ACTIVE = 'active';
    case PAST = 'past';

    public function label(): string
    {
        return ucfirst($this->value);
    }

    /**
     * @return list<string>
     */
    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}
