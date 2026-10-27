<?php

namespace App\Support\Frontend;

class HomePageContent
{
    /**
     * Demo payload for the public home page (replace with models later).
     *
     * @return array{
     *     hero: array<string, mixed>,
     *     broadsheet: array<string, mixed>,
     *     dailyTheme: array<string, mixed>,
     *     featuredPapers: list<array<string, mixed>>,
     *     howItWorksSteps: list<array<string, mixed>>,
     *     community: array<string, mixed>
     * }
     */
    public static function demo(): array
    {
        return [
            'hero' => [
                'kicker' => '— আত্মকথন ও হাসির ব্যক্তিগত সংবাদপত্র —',
                'title' => 'আপনার দিনের গল্প, আপনার নিজের পত্রিকায়।',
                'lead' => 'দিনের ছোট ছোট সাধারণ ঘটনাকে বানিয়ে ফেলুন চিত্তাকর্ষক ও মজার খবর। পড়ুন বন্ধুদের না-বলা গল্প, খুঁজে নিন জীবনের চেনা প্রতিচ্ছবি।',
                'primaryCta' => [
                    'label' => 'আমার পত্রিকা বানাই',
                    'href' => '#',
                ],
                'secondaryCta' => [
                    'label' => 'অন্যদের গল্প পড়ি',
                    'href' => '#featured',
                ],
            ],
            'broadsheet' => [
                'sampleLabel' => 'নমুনা ব্যক্তিগত সংখ্যা — বিশেষ মুদ্রণ',
                'priceLabel' => 'মূল্য: অমূল্য হাসি ও স্মৃতি',
                'masthead' => 'দৈনিক মনমেজাজ',
                'subhead' => 'আজকের কাগজ বিশেষ সংস্করণ • সংখ্যা: ৯৮ • শুক্রবার, ১৫ চৈত্র ১৪৩০',
                'lead' => [
                    'badge' => 'চাঞ্চল্যকর প্রতিবেদন',
                    'title' => 'অ্যালার্মের সঙ্গে যুদ্ধে আবারও শোচনীয় পরাজয় এক তরুণের!',
                    'byline' => [
                        'বিশেষ প্রতিনিধি: মো. রিয়াজুল হাসান',
                        'সকাল ৮:৪৫ মিনিট',
                        'বিছানা ও কোলবালিশ ব্যুরো',
                    ],
                    'imageSrc' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXJiX3EkEAY6U39PcYdHYungB5R4KIYXq6TtIqrVnw-EwvtlLpuwFePCLdkD_M1ER-DFCFpAsZmg1WmxU3peQLmjLuvP_BqKX_Fa8F9ja8VI7SMYVze4Icfh4nfn6XPBV_txkEddudnbhRp4KF265sQ_DYdEke8TxoBH77Dk3yhGbUCKFl4IWutEHqZMZt-aXQ2MXNd4jxW8wxzAXprYIfrKi2DZ6MBwbzVNn-5iOzCQCBDq0BghZ9',
                    'imageAlt' => 'Messy morning bedroom with analog clock and tea',
                    'imageCaption' => 'ছবি: ভোর ৬টা থেকে শুরু হয়ে সকাল ৮টা পর্যন্ত টানা ৫ দফা স্নুজ বোতাম টেপার পর বিধ্বস্ত রণক্ষেত্রের স্থিরচিত্র।',
                    'dropCap' => 'প্ৰ',
                    'body' => [
                        'ত্যুষে নতুন উদ্যমে ঘুম থেকে ওঠার এক তীব্র প্রতিশ্রুতি নিয়ে রাতে নিদ্রার দেশে পাড়ি জমিয়েছিলেন তিনি। তবে সকাল ঠিক ৬টায় যখন অ্যালার্ম প্রথম হুঙ্কার দিয়ে ওঠে, তখনই সূচিত হয় এক অসম যুদ্ধের। প্রথম পাঁচ মিনিটের তন্দ্রার লোভে স্নুজ বোতামে হালকা আঙুলের ছোঁয়া দেন তরুণ। বিশেষজ্ঞ চিকিৎসকদের মতে, এই ক্ষণিক আপসকামিতাই চূড়ান্ত বিপর্যয়ের বীজ বপন করেছিল।',
                        'পরবর্তীতে সকাল ৬:১৫, ৬:৩০ এবং ৭:১৫ মিনিটে ধারাবাহিকভাবে অ্যালার্মের পরাজয় ঘটে। শেষ পর্যন্ত সকাল ৮:৪৫ মিনিটে যখন চোখ খুলে ঘড়ির দিকে তাকান, তখন আর রণকৌশলের কোনো পথ অবশিষ্ট ছিল না। অফিসের জুম মিটিং ততক্ষণে শুরু হয়ে গেছে এবং বসের পাঠানো তিনটি বার্তা ইনবক্সে টিমটিম করছে। তরুণের দাবি—"অ্যালার্মের সুরটি বড় বেশি সুরেলা ছিল, এতে আমার কোনো অপরাধ নেই।"',
                    ],
                    'pullQuote' => '“ঘুমের রাজ্যে যখন শান্তিচুক্তি স্বাক্ষরিত হতে যাচ্ছিল, ঠিক তখনই বসের ফোন সব উল্টে দিল।”',
                ],
                'sideArticle' => [
                    'badge' => 'মনস্তত্ত্ব ও করপোরেট',
                    'title' => 'অফিসের কাজ শেষ, কিন্তু মাথার ভেতর অবিরত মিটিং চলছে',
                    'excerpt' => 'সন্ধ্যা ৭টায় ল্যাপটপ বন্ধ করার পরও মাথায় এক্সেল শিট আর প্রেজেন্টেশনের অবিরত কোলাহল। চায়ের কাপে চুমুক দিয়েও রেহাই নেই ‘অ্যাজেন্ডা’ ও ‘কেপিআই’ থেকে।',
                    'author' => 'লেখক: সুমাইয়া তাসনিম',
                ],
                'moodForecast' => [
                    'title' => 'মনোভাবের পূর্বাভাস',
                    'body' => 'দুপুরের দিকে পেটে কিছুটা ভারী খাবার প্রবেশ করলে شدید ঘুমঘুম ভাবের সম্ভাবনা রয়েছে। তবে সন্ধ্যার পূর্বে কড়া লিকারের চায়ের প্রভাবে মেজাজ হঠাৎ চনমনে হয়ে উঠতে পারে।',
                    'metrics' => [
                        'চা সূচক: ৮০%',
                        'কফি চাপ: ৯২%',
                    ],
                ],
                'notice' => [
                    'eyebrow' => 'জরুরি সামাজিক বিজ্ঞপ্তি',
                    'title' => 'কাজের ফাঁকে একটু হাসুন',
                    'body' => 'আজকের দিনের তুচ্ছ ঘটনাগুলোকে জমা রাখবেন না, বানিয়ে ফেলুন ব্যক্তিগত ফ্রন্টপেজ।',
                    'ctaLabel' => 'লিখে ফেলুন এখনি',
                ],
            ],
            'dailyTheme' => [
                'badge' => 'দৈনিক সার্বজনীন লেখনী থিম',
                'title' => 'আজকের বিষয়: ট্রাফিক জ্যাম ও দার্শনিক চিন্তা',
                'lead' => 'সিগন্যালে আটকে থেকে আপনি কী কী মহা-আবিষ্কার করলেন? সিএনজির পেছনে লেখা বাণী থেকে জীবনের কোনো নতুন দর্শন পেলেন কি? লিখে ফেলুন আপনার আজকের বিশেষ পাতায়।',
                'meta' => [
                    'বাকি সময়: ৬ ঘণ্টা ৪২ মিনিট',
                    'এখন পর্যন্ত জমা পড়েছে: ৪২০টি সংখ্যা',
                ],
                'primaryCta' => [
                    'label' => 'এই বিষয়ে লিখুন',
                    'href' => '#',
                ],
                'secondaryCta' => [
                    'label' => 'অন্যদের জ্যাম-দর্শন দেখুন →',
                    'href' => '#',
                ],
            ],
            'featuredPapers' => [
                [
                    'category' => 'অফিস ও অর্থনীতি',
                    'time' => 'আজ সকাল ১০:২০',
                    'imageSrc' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxOtOfh3_vjyCoNi63nzgYJlRcMVA8RJYZmSiGJ1fdm54nkhsbnbBEf1_BeN2eD-7G7eOPh8rqFhUUTOTV2Jsga_g_je1AfQjLKaMc9OY6gAFOzaNxke3LNXPsoyPAyNCburPtqQg8_ZRpJOxa3HlCLdLTEDwbBwgq2pnO7F1KovULunG13IqBuFWV5vrh5bkQ_PuJ13NfYioGBdDx8WqFn0etcScHI1Pa3INbS7_h_bASrbaLmj2K',
                    'imageAlt' => 'A witty conceptual close-up vintage newspaper photo of a nearly empty brown leather wallet',
                    'title' => 'বেতন আসার আগেই মাসের বাজেটের রহস্যজনক অন্তর্ধান!',
                    'excerpt' => 'অর্থ মন্ত্রণালয়ের সঙ্গে কোনো আলোচনা ছাড়াই মাসের প্রথম সপ্তাহের মধ্যেই ব্যাংক ব্যালেন্স হঠাৎ শূন্যের কোঠায় নেমে এসেছে। তদন্ত কমিটির দাবি, অনলাইন ফুড ডেলিভারি ও অনিচ্ছাকৃত চা আড্ডাই এই আর্থিক বিপর্যয়ের প্রধান কারণ।',
                    'authorInitial' => 'স',
                    'authorName' => 'সাদমান সাকিব',
                    'authorLocation' => 'উত্তরা, ঢাকা',
                    'tone' => 'brand',
                    'reactionIcon' => 'smile',
                    'reactionLabel' => '৩৪২ হাসি',
                    'commentCount' => '৫৪ মন্তব্য',
                    'bookmarked' => true,
                ],
                [
                    'category' => 'বন্ধুত্ব ও নিখোঁজ সংবাদ',
                    'time' => 'আজ দুপুর ১২:৪৫',
                    'imageSrc' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZS9xF_smvJc06EPhStEus3i0may9jRGGyx5xBeYZIpwNMWWv8fpf8rrmdJ2zcPPSN28c5i04aJD0G1leF4vGLpWJWbvU-9bPG2EKuRjaGD1_pRCLMcnU-h0cVgXPFfPoW77w1hfF1NrQ5093USoDBskOipfUiFAu3iAE6l0epS0eNCpCU8BuPdFcwc5F6Nmgd_F3B4_RylEaTSKMM8ThDp02l32eeoBsNfCqi4NWSGJZqRFpn6Yjf',
                    'imageAlt' => 'A poignant street photography shot of an outdoor Dhaka tea stall',
                    'title' => "বন্ধুর 'পাঁচ মিনিটে আসছি'—অপেক্ষায় পেরিয়ে গেল পুরো দেড় ঘণ্টা!",
                    'excerpt' => 'ধানমন্ডি ৮ নম্বর লেকের পাড়ে বসে চাতকের মতো চেয়ে থেকেও বন্ধুর কোনো সন্ধান মেলেনি। ফোন দিলে প্রতিবার একই কণ্ঠ ভেসে আসে—‘দোস্ত মোড়ে পৌঁছে গেছি, সিগন্যালে আছি!’ বিশেষজ্ঞদের ধারণা, মোড়ের দূরত্ব হয়তো কয়েকশত আলোকবর্ষ।',
                    'authorInitial' => 'ত',
                    'authorName' => 'তানভীর আহমেদ',
                    'authorLocation' => 'ধানমন্ডি, ঢাকা',
                    'tone' => 'warm',
                    'reactionIcon' => 'thumbs-up',
                    'reactionLabel' => '৫১২ একমত',
                    'commentCount' => '৮৭ মন্তব্য',
                    'bookmarked' => false,
                ],
                [
                    'category' => 'ছাত্রজীবন ও বিভীষিকা',
                    'time' => 'গতকাল রাত ১১:৩০',
                    'imageSrc' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXSlvEpsNO4U-GkKLEFeBDXKgb55TCT5K4f4RVqGhgwFkBmY_eux5VkScFoHGfDWoHfjuVZe_2F0xNXfoM7Fqo82IBhmR2Np5xjLqbwAIRA1wBj3c_d_JHiSiUpqvmOcKCzM4T4L9MozbyonWOqQXm0Ozs2NwFkmAaa2hjb3EHiwmTBonWA_Hr1bMS7GXNvK3gpTStWCp_Qj_cm3pWcjebmlJOmgqBWNoVoP0bhpDpuoPJnHccbXKv',
                    'imageAlt' => 'An atmospheric editorial shot of a student study desk',
                    'title' => 'পরীক্ষার আগের রাতে পাঠ্যবইয়ের সাথে এক অদ্ভুত পুনর্মিলন!',
                    'excerpt' => 'পুরো সেমিস্টারব্যাপী যাকে একবারও ছোঁয়া হয়নি, সেই অচেনা সিলেবাসের সাথে গভীর রাতে কুশল বিনিময় করলেন এক হতবিহ্বল শিক্ষার্থী। সূচিপত্র দেখেই তার চক্ষু চড়কগাছ—অধ্যায়গুলো নাকি এর আগে ক্লাসে কখনও পড়ানোই হয়নি!',
                    'authorInitial' => 'ন',
                    'authorName' => 'নাফিসা বিনতে রায়হান',
                    'authorLocation' => 'চট্টগ্রাম বিশ্ববিদ্যালয়',
                    'tone' => 'tertiary',
                    'reactionIcon' => 'heart',
                    'reactionLabel' => '৬২০ সমবেদনা',
                    'commentCount' => '৯৩ মন্তব্য',
                    'bookmarked' => false,
                ],
            ],
            'howItWorksSteps' => [
                [
                    'step' => '১',
                    'title' => 'দিনের ১–৩টি সাধারণ ঘটনা লিখুন',
                    'description' => 'কোনো কঠিন বিষয় নয়; হয়তো জ্যামে আটকা পড়েছিলেন, গরম চায়ের কাপ উল্টে গেছে, অথবা সহকর্মীর একটি মজার মন্তব্য শুনেছেন। সহজ ভাষায় টুকে রাখুন।',
                    'footerIcon' => 'pen',
                    'footerLabel' => 'সহজ লেখার খসড়া উইন্ডো',
                    'tone' => 'brand',
                ],
                [
                    'step' => '২',
                    'title' => 'স্বয়ংক্রিয়ভাবে পত্রিকার পাতায় সাজিয়ে নিন',
                    'description' => 'আমাদের বুদ্ধিমান লেখনী ইঞ্জিন আপনার ঘটনাগুলোকে ক্লাসিক পত্রিকার শিরোনাম, লিড নিউজ, কার্টুন ক্যাপশন ও মজার আবহাওয়া পূর্বাভাসে রূপ দেবে।',
                    'footerIcon' => 'book-open-check',
                    'footerLabel' => 'ক্লাসিক্যাল ব্রডশিট টেমপ্লেট',
                    'tone' => 'warm',
                ],
                [
                    'step' => '৩',
                    'title' => 'সংরক্ষণ করুন অথবা বন্ধুদের সাথে ভাগ করে নিন',
                    'description' => 'হাই-রেজোলিউশন ইমেজ হিসেবে ডাউনলোড করে সোশ্যাল মিডিয়ায় শেয়ার করুন অথবা নিজের গোপন ডিজিটাল অ্যালবামে চিরকালের মতো বন্দি রাখুন।',
                    'footerIcon' => 'share-2',
                    'footerLabel' => 'প্রিন্ট ও সোশ্যাল মিডিয়া শেয়ার',
                    'tone' => 'tertiary',
                ],
            ],
            'community' => [
                'stats' => [
                    [
                        'value' => '১২,৪৫০+',
                        'label' => 'প্রকাশিত ব্যক্তিগত পত্রিকা',
                        'caption' => 'প্রতিদিন জমা পড়ছে সহস্রাধিক গল্প',
                    ],
                    [
                        'value' => '৮৫,০০০+',
                        'label' => 'পাঠক প্রতিক্রিয়া ও সমবেদনা',
                        'caption' => 'হাসি, আড্ডা আর গভীর মানবিক মেলবন্ধন',
                    ],
                    [
                        'value' => '৩,২০০+',
                        'label' => 'দৈনিক সক্রিয় লেখক',
                        'caption' => 'ছাত্র, পেশাজীবী ও স্বপ্নবাজ নাগরিক',
                    ],
                ],
                'cta' => [
                    'title' => 'আজকের দিনটি হারিয়ে যাওয়ার আগেই পত্রিকার পাতায় ধরে রাখুন।',
                    'lead' => 'দিনশেষে চায়ের কাপে যখন ধোঁয়া উড়বে, তখন স্মৃতিগুলো যেন ফিকে না হয়ে যায়। একটি পাতার সৃষ্টি আপনাকে চিরদিনের মতো ফিরিয়ে দেবে এই মুহূর্তটিকে।',
                    'primaryCta' => [
                        'label' => 'এখনই শুরু করুন',
                        'href' => '#',
                    ],
                    'secondaryCta' => [
                        'label' => 'নিয়মাবলী ও নির্দেশিকা জেনে নিন',
                        'href' => '#',
                    ],
                    'footnote' => '* কোনো ক্রেডিট কার্ড বা নিবন্ধনের ঝামেলা নেই। সম্পূর্ণ বিনামূল্যে আপনার বাংলা দৈনিক সাজান।',
                ],
            ],
        ];
    }
}
