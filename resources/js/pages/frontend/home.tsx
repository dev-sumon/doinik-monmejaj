import CommunityCta from '@/components/frontend/home/community-cta';
import DailyThemeBanner from '@/components/frontend/home/daily-theme-banner';
import FeaturedPapers from '@/components/frontend/home/featured-papers';
import HeroSection from '@/components/frontend/home/hero-section';
import HowItWorks from '@/components/frontend/home/how-it-works';
import type { HomePageProps } from '@/components/frontend/home/types';

export default function Home({
    hero,
    broadsheet,
    dailyTheme,
    featuredPapers,
    howItWorksSteps,
    community,
}: HomePageProps) {
    return (
        <div className="flex w-full flex-col">
            <HeroSection broadsheet={broadsheet} hero={hero} />
            <DailyThemeBanner dailyTheme={dailyTheme} />
            <FeaturedPapers featuredPapers={featuredPapers} />
            <HowItWorks howItWorksSteps={howItWorksSteps} />
            <CommunityCta community={community} />
        </div>
    );
}
