<?php

namespace App\Enums;

enum ArticleVisibility: string
{
    case PUBLIC = 'public';
    case PRIVATE = 'private';

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
