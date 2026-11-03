import { Link } from '@inertiajs/react';
import {
    CalendarDays,
    ExternalLink,
    KeyRound,
    LayoutGrid,
    Newspaper,
    Settings,
    Shield,
    ShieldCheck,
    Tags,
    User,
    Users,
    Vote,
    FolderOpen,
    MessagesSquare,
    LockKeyhole,
} from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavUser } from '@/components/nav-user';
import { SidebarNav } from '@/components/navigation';
import type { NavNode } from '@/components/navigation';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard, home } from '@/routes';
import adminArticles from '@/routes/admin/articles';
import adminCategories from '@/routes/admin/categories';
import adminDailyThemes from '@/routes/admin/daily-themes';
import adminPermissions from '@/routes/admin/permissions';
import adminPolls from '@/routes/admin/polls';
import adminRoles from '@/routes/admin/roles';
import adminUsers from '@/routes/admin/users';
import { edit as editProfile } from '@/routes/profile';
import { edit as editSecurity } from '@/routes/security';
import type { NavItem } from '@/types';
import { PERMISSIONS } from '@/types/permissions';

// Navigation tree — supports nesting to any depth, per-item permission gates,
// badges, disabled/external links. Groups expand inline (or as a flyout when
// the sidebar is collapsed to icons).
const mainNav: NavNode[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
        permissions: [PERMISSIONS.DASHBOARD.VIEW],
    },
    {
        title: 'Content',
        icon: FolderOpen,
        permissions: [
            PERMISSIONS.ARTICLES.INDEX,
            PERMISSIONS.CATEGORIES.INDEX,
            PERMISSIONS.DAILY_THEMES.INDEX,
        ],
        items: [
            {
                title: 'Articles',
                href: adminArticles.index(),
                icon: Newspaper,
                permissions: [PERMISSIONS.ARTICLES.INDEX],
            },
            {
                title: 'Categories',
                href: adminCategories.index(),
                icon: Tags,
                permissions: [PERMISSIONS.CATEGORIES.INDEX],
            },
            {
                title: 'Daily Themes',
                href: adminDailyThemes.index(),
                icon: CalendarDays,
                permissions: [PERMISSIONS.DAILY_THEMES.INDEX],
            },
        ],
    },
    {
        title: 'Engagement',
        icon: MessagesSquare,
        permissions: [PERMISSIONS.POLLS.INDEX],
        items: [
            {
                title: 'Polls',
                href: adminPolls.index(),
                icon: Vote,
                permissions: [PERMISSIONS.POLLS.INDEX],
            },
        ],
    },
    {
        title: 'Access Control',
        icon: ShieldCheck,
        permissions: [
            PERMISSIONS.USERS.INDEX,
            PERMISSIONS.ROLES.INDEX,
            PERMISSIONS.PERMISSIONS.INDEX,
        ],
        items: [
            {
                title: 'Users',
                href: adminUsers.index(),
                icon: Users,
                permissions: [PERMISSIONS.USERS.INDEX],
            },
            {
                title: 'Roles',
                href: adminRoles.index(),
                icon: Shield,
                permissions: [PERMISSIONS.ROLES.INDEX],
            },
            {
                title: 'Permissions',
                href: adminPermissions.index(),
                icon: KeyRound,
                permissions: [PERMISSIONS.PERMISSIONS.INDEX],
            },
        ],
    },
    {
        title: 'Settings',
        icon: Settings,
        items: [
            {
                title: 'Profile',
                href: editProfile(),
                icon: User,
            },
            {
                title: 'Security',
                href: editSecurity(),
                icon: LockKeyhole,
            },
        ],
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'View website',
        href: home(),
        icon: ExternalLink,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <SidebarNav items={mainNav} label="Platform" />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
