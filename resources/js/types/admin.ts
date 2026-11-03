// =============================================================================
// ADMIN — shared shapes for the access-management pages
// (admin/users, admin/roles, admin/permissions).
// =============================================================================

/** The protected, system-critical role. Mirrors App\Enums\RoleEnum::SUPER_ADMIN. */
export const SUPER_ADMIN_ROLE = 'super-admin';

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface Paginated<T> {
    data: T[];
    current_page: number;
    last_page: number;
    per_page: number;
    from: number | null;
    to: number | null;
    total: number;
    links: PaginationLink[];
    prev_page_url: string | null;
    next_page_url: string | null;
}

export interface RoleRef {
    id: number;
    name: string;
}

export interface AdminUser {
    id: number;
    name: string;
    email: string;
    avatar: string | null;
    email_verified_at: string | null;
    created_at: string;
    roles: RoleRef[];
}

export interface AdminUserDetail extends AdminUser {
    permissions: { id: number; name: string }[];
    updated_at: string;
}

export interface AdminRoleListItem {
    id: number;
    name: string;
    guard_name: string;
    permissions_count: number;
    users_count: number;
    created_at: string;
}

export interface AdminRoleDetail {
    id: number;
    name: string;
    permissions: string[];
    is_super_admin: boolean;
}

/** A single assignable permission, as sent to the role editor. */
export interface PermissionOption {
    id: number;
    name: string;
    group: string;
}

/** A permission row for the read-only permissions listing. */
export interface PermissionListItem {
    id: number;
    name: string;
    group: string;
    guard_name: string;
    roles_count: number;
}

/** Build the public URL for a stored avatar path, or null. */
export function avatarUrl(path: string | null): string | null {
    if (!path) {
        return null;
    }

    return path.startsWith('http') ? path : `/storage/${path}`;
}

/** Group an ordered permission list by its `group` field, preserving order. */
export function groupByGroup<T extends { group: string }>(
    items: T[],
): Record<string, T[]> {
    return items.reduce<Record<string, T[]>>((acc, item) => {
        (acc[item.group] ??= []).push(item);

        return acc;
    }, {});
}

// -----------------------------------------------------------------------------
// Content management (categories, daily themes, articles, polls)
// -----------------------------------------------------------------------------

export type Tone = 'brand' | 'warm' | 'tertiary';

export interface AdminCategory {
    id: number;
    name: string;
    slug: string;
    tone: Tone;
    sort_order: number;
    is_active: boolean;
    articles_count?: number;
    polls_count?: number;
    created_at: string;
}

export interface AdminDailyTheme {
    id: number;
    title: string;
    highlight: string | null;
    lead: string | null;
    theme_date: string;
    status: 'upcoming' | 'active' | 'past';
    starts_at: string | null;
    ends_at: string | null;
    featured_article_id: number | null;
    articles_count?: number;
    featured_article?: { id: number; title: string } | null;
}

export interface AdminArticle {
    id: number;
    user_id: number;
    category_id: number | null;
    daily_theme_id: number | null;
    masthead: string;
    byline: string | null;
    title: string;
    slug: string;
    excerpt: string | null;
    body: string | null;
    pull_quote: string | null;
    cover_image: string | null;
    events: string[] | null;
    style: 'funny' | 'dramatic' | 'news';
    visibility: 'public' | 'private';
    status: 'draft' | 'published' | 'archived';
    is_featured: boolean;
    edition_no: number | null;
    read_time: number | null;
    published_at: string | null;
    created_at: string;
    author?: { id: number; name: string; email?: string };
    category?: { id: number; name: string } | null;
    daily_theme?: { id: number; title: string } | null;
}

export interface AdminPollOption {
    id?: number;
    label: string;
    tone: Tone;
}

export interface AdminPoll {
    id: number;
    question: string;
    lead: string | null;
    category_id: number | null;
    image: string | null;
    image_caption: string | null;
    status: 'draft' | 'active' | 'closed';
    is_featured: boolean;
    starts_at: string | null;
    ends_at: string | null;
    options_count?: number;
    votes_count?: number;
    category?: { id: number; name: string } | null;
    options?: AdminPollOption[];
}

export interface SelectOption {
    id: number;
    name: string;
}

/** Public URL of an uploaded image path or an absolute URL, or null. */
export const imageUrl = avatarUrl;
