<?php

namespace App\Enums;

enum PollStatus: string
{
    case DRAFT = 'draft';
    case ACTIVE = 'active';
    case CLOSED = 'closed';

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
