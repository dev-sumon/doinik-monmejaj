import { useEffect, useState } from 'react';
import DailyTrendChart from '@/components/frontend/weekly-recap/daily-trend';
import EditorsClosingNote from '@/components/frontend/weekly-recap/editors-closing';
import FeatureFrontPageSection from '@/components/frontend/weekly-recap/feature-front-page';
import QuotesOfWeekSection from '@/components/frontend/weekly-recap/quotes-of-week';
import RecapHeader from '@/components/frontend/weekly-recap/recap-header';
import RecapMetrics from '@/components/frontend/weekly-recap/recap-metrics';
import type { WeeklyRecapPageProps } from '@/components/frontend/weekly-recap/types';

type DownloadState = 'idle' | 'loading' | 'done';

export default function WeeklyRecap({
    header,
    metrics,
    feature,
    engagement,
    trend,
    quotes,
    closing,
}: WeeklyRecapPageProps) {
    const [downloadState, setDownloadState] = useState<DownloadState>('idle');
    const [shareMessage, setShareMessage] = useState<string | null>(null);

    useEffect(() => {
        if (downloadState !== 'done') {
            return;
        }

        const timer = window.setTimeout(() => setDownloadState('idle'), 2000);

        return () => window.clearTimeout(timer);
    }, [downloadState]);

    useEffect(() => {
        if (!shareMessage) {
            return;
        }

        const timer = window.setTimeout(() => setShareMessage(null), 2500);

        return () => window.clearTimeout(timer);
    }, [shareMessage]);

    function handleDownload(): void {
        if (downloadState === 'loading') {
            return;
        }

        setDownloadState('loading');
        window.setTimeout(() => {
            setDownloadState('done');
        }, 1200);
    }

    async function handleShare(): Promise<void> {
        const shareData = {
            title: 'আজকের কাগজ - সাপ্তাহিক রিক্যাপ',
            text: 'গত সপ্তাহে আমার জীবনের ছোট ছোট স্মৃতি ও পাঠকদের ভালোবাসার পূর্ণাঙ্গ খতিয়ান!',
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);

                return;
            }

            await navigator.clipboard.writeText(window.location.href);
            setShareMessage(header.shareCopiedLabel);
        } catch {
            try {
                await navigator.clipboard.writeText(window.location.href);
                setShareMessage(header.shareCopiedLabel);
            } catch {
                setShareMessage(header.shareCopiedLabel);
            }
        }
    }

    return (
        <div className="flex w-full flex-col">
            <div className="px-margin-mobile md:px-margin-tablet lg:px-margin py-space-lg mx-auto w-full max-w-[1380px]">
                <RecapHeader
                    downloadState={downloadState}
                    header={header}
                    shareMessage={shareMessage}
                    onDownload={handleDownload}
                    onShare={() => {
                        void handleShare();
                    }}
                />
                <RecapMetrics metrics={metrics} />
                <FeatureFrontPageSection
                    engagement={engagement}
                    feature={feature}
                />
                <DailyTrendChart trend={trend} />
                <QuotesOfWeekSection quotes={quotes} />
                <EditorsClosingNote closing={closing} />
            </div>
        </div>
    );
}
