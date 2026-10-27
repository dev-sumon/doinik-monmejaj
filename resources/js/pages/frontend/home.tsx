import CommunityCta from '@/components/frontend/home/community-cta';
import DailyThemeBanner from '@/components/frontend/home/daily-theme-banner';
import FeaturedPapers from '@/components/frontend/home/featured-papers';
import HeroSection from '@/components/frontend/home/hero-section';
import HowItWorks from '@/components/frontend/home/how-it-works';

export default function Home() {
    return (
        <div className="flex w-full flex-col">
            <HeroSection />
            <DailyThemeBanner />
            <FeaturedPapers />
            <HowItWorks />
            <CommunityCta />
        </div>
    );
}
