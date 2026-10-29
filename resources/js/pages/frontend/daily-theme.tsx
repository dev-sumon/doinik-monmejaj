import FeaturedThemePaper from '@/components/frontend/daily-theme/featured-theme-paper';
import ThemeHero from '@/components/frontend/daily-theme/theme-hero';
import ThemeSubBar from '@/components/frontend/daily-theme/theme-sub-bar';
import ThemeSubmissions from '@/components/frontend/daily-theme/theme-submissions';
import type { DailyThemePageProps } from '@/components/frontend/daily-theme/types';
import UpcomingThemes from '@/components/frontend/daily-theme/upcoming-themes';
import WritingSparks from '@/components/frontend/daily-theme/writing-sparks';

export default function DailyTheme({
    subBar,
    hero,
    sparks,
    featured,
    filters,
    submissions,
    upcoming,
}: DailyThemePageProps) {
    return (
        <div className="flex w-full flex-col">
            <div className="px-margin-mobile md:px-margin-tablet lg:px-margin py-space-md mx-auto w-full max-w-[1380px]">
                <ThemeSubBar subBar={subBar} />
                <ThemeHero hero={hero} />
                <WritingSparks sparks={sparks} />
                <FeaturedThemePaper featured={featured} />
                <ThemeSubmissions
                    filters={filters}
                    submissions={submissions}
                />
                <UpcomingThemes upcoming={upcoming} />
            </div>
        </div>
    );
}
