<?php

namespace App\Enums;

enum ArticleStyle: string
{
    case FUNNY = 'funny';
    case DRAMATIC = 'dramatic';
    case NEWS = 'news';

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
