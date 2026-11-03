<?php

namespace App\Policies;

use App\Enums\PermissionEnum;
use App\Models\Article;
use App\Models\User;

class ArticlePolicy
{
    /**
     * Authors may change their own articles; publishers may change any.
     */
    public function update(User $user, Article $article): bool
    {
        return $article->user_id === $user->id
            || $user->can(PermissionEnum::ARTICLES_PUBLISH->value);
    }

    /**
     * Same ownership rule as updating.
     */
    public function delete(User $user, Article $article): bool
    {
        return $this->update($user, $article);
    }
}
