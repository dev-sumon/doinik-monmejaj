import type { PaperCardProps } from './paper-card';
import type { HowItWorksStepProps } from './how-it-works-step';
import { Smile, ThumbsUp, Heart, Pen, BookOpenCheck, Share2 } from 'lucide-react';

export const featuredPapers: PaperCardProps[] = [
    {
        category: 'অফিস ও অর্থনীতি',
        time: 'আজ সকাল ১০:২০',
        imageSrc:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAxOtOfh3_vjyCoNi63nzgYJlRcMVA8RJYZmSiGJ1fdm54nkhsbnbBEf1_BeN2eD-7G7eOPh8rqFhUUTOTV2Jsga_g_je1AfQjLKaMc9OY6gAFOzaNxke3LNXPsoyPAyNCburPtqQg8_ZRpJOxa3HlCLdLTEDwbBwgq2pnO7F1KovULunG13IqBuFWV5vrh5bkQ_PuJ13NfYioGBdDx8WqFn0etcScHI1Pa3INbS7_h_bASrbaLmj2K',
        imageAlt:
            'A witty conceptual close-up vintage newspaper photo of a nearly empty brown leather wallet',
        title: 'বেতন আসার আগেই মাসের বাজেটের রহস্যজনক অন্তর্ধান!',
        excerpt:
            'অর্থ মন্ত্রণালয়ের সঙ্গে কোনো আলোচনা ছাড়াই মাসের প্রথম সপ্তাহের মধ্যেই ব্যাংক ব্যালেন্স হঠাৎ শূন্যের কোঠায় নেমে এসেছে। তদন্ত কমিটির দাবি, অনলাইন ফুড ডেলিভারি ও অনিচ্ছাকৃত চা আড্ডাই এই আর্থিক বিপর্যয়ের প্রধান কারণ।',
        authorInitial: 'স',
        authorName: 'সাদমান সাকিব',
        authorLocation: 'উত্তরা, ঢাকা',
        authorBadgeClassName: 'bg-brand text-on-brand',
        reactionIcon: Smile,
        reactionLabel: '৩৪২ হাসি',
        commentCount: '৫৪ মন্তব্য',
        bookmarked: true,
    },
    {
        category: 'বন্ধুত্ব ও নিখোঁজ সংবাদ',
        time: 'আজ দুপুর ১২:৪৫',
        imageSrc:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBZS9xF_smvJc06EPhStEus3i0may9jRGGyx5xBeYZIpwNMWWv8fpf8rrmdJ2zcPPSN28c5i04aJD0G1leF4vGLpWJWbvU-9bPG2EKuRjaGD1_pRCLMcnU-h0cVgXPFfPoW77w1hfF1NrQ5093USoDBskOipfUiFAu3iAE6l0epS0eNCpCU8BuPdFcwc5F6Nmgd_F3B4_RylEaTSKMM8ThDp02l32eeoBsNfCqi4NWSGJZqRFpn6Yjf',
        imageAlt:
            'A poignant street photography shot of an outdoor Dhaka tea stall',
        title: "বন্ধুর 'পাঁচ মিনিটে আসছি'—অপেক্ষায় পেরিয়ে গেল পুরো দেড় ঘণ্টা!",
        excerpt:
            'ধানমন্ডি ৮ নম্বর লেকের পাড়ে বসে চাতকের মতো চেয়ে থেকেও বন্ধুর কোনো সন্ধান মেলেনি। ফোন দিলে প্রতিবার একই কণ্ঠ ভেসে আসে—‘দোস্ত মোড়ে পৌঁছে গেছি, সিগন্যালে আছি!’ বিশেষজ্ঞদের ধারণা, মোড়ের দূরত্ব হয়তো কয়েকশত আলোকবর্ষ।',
        authorInitial: 'ত',
        authorName: 'তানভীর আহমেদ',
        authorLocation: 'ধানমন্ডি, ঢাকা',
        authorBadgeClassName: 'bg-warm text-on-warm',
        reactionIcon: ThumbsUp,
        reactionLabel: '৫১২ একমত',
        commentCount: '৮৭ মন্তব্য',
    },
    {
        category: 'ছাত্রজীবন ও বিভীষিকা',
        time: 'গতকাল রাত ১১:৩০',
        imageSrc:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCXSlvEpsNO4U-GkKLEFeBDXKgb55TCT5K4f4RVqGhgwFkBmY_eux5VkScFoHGfDWoHfjuVZe_2F0xNXfoM7Fqo82IBhmR2Np5xjLqbwAIRA1wBj3c_d_JHiSiUpqvmOcKCzM4T4L9MozbyonWOqQXm0Ozs2NwFkmAaa2hjb3EHiwmTBonWA_Hr1bMS7GXNvK3gpTStWCp_Qj_cm3pWcjebmlJOmgqBWNoVoP0bhpDpuoPJnHccbXKv',
        imageAlt: 'An atmospheric editorial shot of a student study desk',
        title: 'পরীক্ষার আগের রাতে পাঠ্যবইয়ের সাথে এক অদ্ভুত পুনর্মিলন!',
        excerpt:
            'পুরো সেমিস্টারব্যাপী যাকে একবারও ছোঁয়া হয়নি, সেই অচেনা সিলেবাসের সাথে গভীর রাতে কুশল বিনিময় করলেন এক হতবিহ্বল শিক্ষার্থী। সূচিপত্র দেখেই তার চক্ষু চড়কগাছ—অধ্যায়গুলো নাকি এর আগে ক্লাসে কখনও পড়ানোই হয়নি!',
        authorInitial: 'ন',
        authorName: 'নাফিসা বিনতে রায়হান',
        authorLocation: 'চট্টগ্রাম বিশ্ববিদ্যালয়',
        authorBadgeClassName: 'bg-tertiary text-on-tertiary',
        reactionIcon: Heart,
        reactionLabel: '৬২০ সমবেদনা',
        commentCount: '৯৩ মন্তব্য',
    },
];

export const howItWorksSteps: HowItWorksStepProps[] = [
    {
        step: '১',
        title: 'দিনের ১–৩টি সাধারণ ঘটনা লিখুন',
        description:
            'কোনো কঠিন বিষয় নয়; হয়তো জ্যামে আটকা পড়েছিলেন, গরম চায়ের কাপ উল্টে গেছে, অথবা সহকর্মীর একটি মজার মন্তব্য শুনেছেন। সহজ ভাষায় টুকে রাখুন।',
        footerIcon: Pen,
        footerLabel: 'সহজ লেখার খসড়া উইন্ডো',
        badgeClassName: 'bg-brand text-on-brand',
    },
    {
        step: '২',
        title: 'স্বয়ংক্রিয়ভাবে পত্রিকার পাতায় সাজিয়ে নিন',
        description:
            'আমাদের বুদ্ধিমান লেখনী ইঞ্জিন আপনার ঘটনাগুলোকে ক্লাসিক পত্রিকার শিরোনাম, লিড নিউজ, কার্টুন ক্যাপশন ও মজার আবহাওয়া পূর্বাভাসে রূপ দেবে।',
        footerIcon: BookOpenCheck,
        footerLabel: 'ক্লাসিক্যাল ব্রডশিট টেমপ্লেট',
        badgeClassName: 'bg-warm text-on-warm',
    },
    {
        step: '৩',
        title: 'সংরক্ষণ করুন অথবা বন্ধুদের সাথে ভাগ করে নিন',
        description:
            'হাই-রেজোলিউশন ইমেজ হিসেবে ডাউনলোড করে সোশ্যাল মিডিয়ায় শেয়ার করুন অথবা নিজের গোপন ডিজিটাল অ্যালবামে চিরকালের মতো বন্দি রাখুন।',
        footerIcon: Share2,
        footerLabel: 'প্রিন্ট ও সোশ্যাল মিডিয়া শেয়ার',
        badgeClassName: 'bg-tertiary text-on-tertiary',
    },
];
