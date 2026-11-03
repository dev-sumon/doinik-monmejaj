<?php

namespace App\Enums;

enum Tone: string
{
    case BRAND = 'brand';
    case WARM = 'warm';
    case TERTIARY = 'tertiary';

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
