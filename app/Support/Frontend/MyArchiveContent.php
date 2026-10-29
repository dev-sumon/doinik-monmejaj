<?php

namespace App\Support\Frontend;

class MyArchiveContent
{
    /**
     * Demo payload for the my-archive page (replace with models later).
     *
     * @return array<string, mixed>
     */
    public static function demo(): array
    {
        return [
            'header' => [
                'badge' => 'ব্যক্তিগত দলিল ও সংগ্রহশালা',
                'dossierNo' => 'নথি নং: ১৪৩০/৭৮',
                'title' => 'আমার দিনগুলোর খবর ও আর্কাইভ',
                'lead' => 'আপনার তৈরি সব ব্যক্তিগত ও পাবলিক পত্রিকা, মাসিক হিসাব এবং জীবনের ছোট ছোট স্মৃতির স্থায়ী সংকলন।',
                'printStamp' => [
                    'count' => '২৪',
                    'label' => 'মুদ্রিত সংখ্যার পাতা',
                    'meta' => 'সর্বশেষ প্রকাশনা: আজ সকাল ৯:১৫',
                ],
            ],
            'stats' => [
                [
                    'label' => 'মোট পত্রিকা',
                    'icon' => 'newspaper',
                    'value' => '২৪টি',
                    'hint' => 'জীবনের মোট সংস্করণ',
                    'valueTone' => 'brand',
                    'highlight' => false,
                ],
                [
                    'label' => 'এই মাসের সংগ্রহ',
                    'icon' => 'calendar',
                    'value' => '৮টি',
                    'hint' => 'চৈত্র ১৪৩০ পর্ব',
                    'valueTone' => 'tertiary',
                    'highlight' => false,
                ],
                [
                    'label' => 'পাবলিক শেয়ার্ড',
                    'icon' => 'public',
                    'value' => '১৮টি',
                    'hint' => 'পাঠক পাঠ করেছেন',
                    'valueTone' => 'default',
                    'highlight' => false,
                ],
                [
                    'label' => 'ব্যক্তিগত গোপনীয়',
                    'icon' => 'lock',
                    'value' => '৬টি',
                    'hint' => 'শুধুমাত্র আপনার চোখ',
                    'valueTone' => 'outline',
                    'highlight' => false,
                ],
                [
                    'label' => 'পাঠক প্রতিক্রিয়া',
                    'icon' => 'heart',
                    'value' => '৪.২ হাজার',
                    'hint' => 'পড়ুয়াদের ভালোবাসা',
                    'valueTone' => 'brand',
                    'highlight' => true,
                ],
            ],
            'weeklyRecap' => [
                'eyebrow' => 'সাপ্তাহিক রিক্যাপ',
                'issue' => 'সংখ্যা নং ৩/৫২',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBrx2CF985ABgezvwKJ1v0_NHWJxiO_aibqJ-EMs_3SlWJjvICLOz4-xi44Kaa35VehDk9kDikKH0le4LuIFcwDRlmG7PL3dZprtc6PcHDQVAnJw-V_pTowYfGEawXpWkuh-73taKd6fFa_43CS2m4_ry-9KV67VkNVwt-UdWQT-mzEDxtIjDSuLRKpnTlKd8QJ7YzcVzAQKLGI05MF2BpUITeMLNbOu4zA6hDyDGqvdNgh_qfD7En',
                'imageAlt' => 'Clay cup of tea on Bengali newspaper',
                'imageCaption' => '১৫ চৈত্র — ঢাকা সংস্করণ',
                'imageQuote' => '"দিনলিপির পাতায় কফির দাগ ও ভাবনার সুরভী"',
                'pagesMeta' => 'সপ্তাহের মোট লেখা: ৭ পাতা',
                'savedMeta' => '১০০% সংরক্ষিত',
                'badges' => [
                    ['label' => 'সম্পাদকের পছন্দ', 'tone' => 'brand'],
                    ['label' => 'সবচেয়ে বেশি পঠিত', 'tone' => 'warm-fixed'],
                ],
                'title' => 'সপ্তাহের সেরা শিরোনাম: "অফিসের কাজ শেষ, কিন্তু মাথার ভেতর মিটিং চলছে"',
                'body' => 'সারা সপ্তাহের ক্লান্তি, চার কাপ কড়া লিকারের চা এবং ডেস্কে ফাইল জমে ওঠার গল্প নিয়ে তৈরি হয়েছিল এই বিশেষ সংস্করণটি। আপনার পাঠকরা এটিকে সবচেয়ে মানবিক ও জীবন্ত দৈনিক হিসেবে চিহ্নিত করেছেন।',
                'progressLabel' => 'সাপ্তাহিক পাঠক সংযোগের অগ্রগতি',
                'progressValue' => '৯২% পূর্ণাঙ্গ পাঠক রেটিং',
                'progressPercent' => 92,
                'primaryAction' => 'সপ্তাহের পত্রিকা ডাউনলোড (PDF)',
                'secondaryAction' => 'স্মৃতি শেয়ার করুন',
                'tertiaryAction' => 'বিগত সপ্তাহের রিক্যাপ',
            ],
            'toolbar' => [
                'primaryCta' => 'নতুন পত্রিকা তৈরি করুন',
                'secondaryCta' => 'মাসের সারসংক্ষেপ (Recap)',
                'searchPlaceholder' => 'শিরোনাম বা তারিখ দিয়ে খুঁজুন...',
                'countSuffix' => 'টি সংরক্ষিত সংস্করণ',
            ],
            'filters' => [
                ['id' => 'all', 'label' => 'সব পত্রিকা (২৪)'],
                ['id' => 'public', 'label' => 'পাবলিক (১৮)'],
                ['id' => 'private', 'label' => 'শুধু আমার জন্য (গোপন) (৬)'],
                ['id' => 'draft', 'label' => 'খসড়া (Drafts) (২)'],
            ],
            'months' => [
                ['id' => 'all', 'label' => 'সকল মাস'],
                ['id' => 'chaitra', 'label' => 'চৈত্র ১৪৩০'],
                ['id' => 'falgun', 'label' => 'ফাল্গুন ১৪৩০'],
                ['id' => 'magh', 'label' => 'মাঘ ১৪৩০'],
                ['id' => 'poush', 'label' => 'পৌষ ১৪৩০'],
            ],
            'papers' => [
                [
                    'id' => 'coffee-desk',
                    'date' => '১৫ চৈত্র, ১৪৩০',
                    'status' => 'public',
                    'month' => 'chaitra',
                    'masthead' => 'আজকের বিশেষ কাগজ',
                    'edition' => 'দৈনিক অপরাহ্ন সংস্করণ',
                    'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDO_8Rcb8X5FvKjbtGwJtPvWtPUajZ7Yg_twxkR0md0gz2ULT1Ua_BU7roNxPPa1SWOZmEMIw_xdcKsZagXPRWZd2sPeB39PqQT9NKeIyOaRton7yKQeJ_SxDYDhih54yrAKPL4Gx6hF2nkHI2zrEt6JqfPXlNWe8svJ4GRgPUrR0ECkMS5giuJOGngSf_Ws335RyoTWAHdLuhbXz-KXBmnSPboXjMPNZwEFfBsRIe4XQYN2G-Qd7M',
                    'imageAlt' => 'Desk with coffee and Bengali notes',
                    'readTime' => '৩ মিনিট পাঠ',
                    'title' => 'কাজের চাপে কফির কাপের সঙ্গে দীর্ঘ বৈঠক!',
                    'excerpt' => 'সকাল ন’টা থেকে টানা পাঁচটা মিটিং। টেবিলে রাখা ঠান্ডা হয়ে যাওয়া কফিই একমাত্র সাক্ষী রইল আজকের অন্তহীন ডেডলাইনের। ক্লান্তি সত্ত্বেও দিনের শেষে ডায়েরির পাতায় খানিকটা প্রাপ্তির স্পর্শ।',
                    'metaLeft' => ['icon' => 'eye', 'label' => '১.২ হাজার পাঠক'],
                    'metaRight' => ['icon' => 'comment', 'label' => '৪৮ মতামত'],
                    'actions' => ['edit', 'download', 'share', 'delete'],
                ],
                [
                    'id' => 'alarm',
                    'date' => '১২ চৈত্র, ১৪৩০',
                    'status' => 'private',
                    'month' => 'chaitra',
                    'masthead' => 'আমার ব্যক্তিগত পাতা',
                    'edition' => 'গোপন আত্মকথন সংকলন',
                    'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi0O0jIj1m904WX3PjNdxuZ5BL6VgQ-FItGytZg4z6Lq3e6A4aKYjjebNEX-e1VUNo_LwmCkc8qubDlMJ8NchL24nOX3IEqzKgqLyHH86M8QquRbQT5HOsfcYakjsT-r_VCkEE0im6kPv_-h8xcQ5KqnpuoCuLjDjuK14exmORyIu3kk0F5dbZK2qB7geDOqAQgcWoEbLE5ltOPkCiSwHWt3Ga5RfMSb_InsowoXg3vuDnyxFzgDZR',
                    'imageAlt' => 'Alarm clock on bedside table',
                    'readTime' => '২ মিনিট পাঠ',
                    'title' => 'অ্যালার্মের সঙ্গে যুদ্ধে আবারও পরাজয়!',
                    'excerpt' => 'সাতটা বেজে পনেরো মিনিটে শুরু হওয়া যুদ্ধটা অবশেষে পৌনে আটটায় ক্ষান্ত হলো। স্নুজ বাটনটা হয়তো আজকের সকালের সবচেয়ে বিশ্বস্ত কিন্তু বিশ্বাসঘাতক বন্ধু ছিল।',
                    'metaLeft' => ['icon' => 'lock', 'label' => 'কেবল আপনি'],
                    'metaRight' => ['icon' => 'calendar', 'label' => 'সংরক্ষিত নোট'],
                    'actions' => ['edit', 'download', 'publish', 'delete'],
                ],
                [
                    'id' => 'khichuri',
                    'date' => '৮ চৈত্র, ১৪৩০',
                    'status' => 'public',
                    'month' => 'chaitra',
                    'masthead' => 'আজকের বিশেষ কাগজ',
                    'edition' => 'বৃষ্টির দিন ও আড্ডা বিভাগ',
                    'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9kM7W4KDteKCQtlRl9ZvwfXc3dMmolF4pUDCl1r_DSRp2Nq559nij0QqWxXSiBQgjhuSyGWODgUoSFLDXHZPF7dSx0wF5H4rHs2CSmVXpsluqb-7J8wE-dv8Zf2B_ysHHKLgdRkYf5dhMfzk2bg2SY3hc0ZUBZuWECrSnV0bXkHV2rifIcamxL4pEjVY4TM72C5kX7Sw8SmKi6U9eZ7CWI44uvkA4dqpX8pcankLJpjX9cyUYFAaw',
                    'imageAlt' => 'Bengali rainy day khichuri meal',
                    'readTime' => '৪ মিনিট পাঠ',
                    'title' => 'বৃষ্টির দিনে খিচুড়ির সন্ধানে চার বন্ধুর অভিযান',
                    'excerpt' => 'অসময়ের এই বৃষ্টিতে কারও মন ডেস্কে টেকেনি। ভিজতে ভিজতে পুরান ঢাকার অলিগলিতে গিয়ে ভুনা খিচুড়ি আর বেগুন ভাজার স্বাদ নেবার সেই অবিস্মরণীয় বিকেল।',
                    'metaLeft' => ['icon' => 'eye', 'label' => '২.১ হাজার পাঠক'],
                    'metaRight' => ['icon' => 'comment', 'label' => '১১৪ মতামত'],
                    'actions' => ['edit', 'download', 'share', 'delete'],
                ],
                [
                    'id' => 'traffic',
                    'date' => '২ চৈত্র, ১৪৩০',
                    'status' => 'public',
                    'month' => 'chaitra',
                    'masthead' => 'আজকের বিশেষ কাগজ',
                    'edition' => 'শহুরে নাগরিক চিন্তামালা',
                    'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqYbpNoag0iyXhTUBs7QOaItSmJS2BIRkyOxjF_iMtHB1cJT-Z0-Fo39_zDbof5Js-owkxi89gJEtc_OUEFljzWR-FKH6Yg0ZhO1tE1XzgLGAwnp-Vc7UF4GlhvbUPB0ENdcjcmU5SE5YRIxpXyNM0YXi9GC_K0PnVzLkD56XfQ5AvGq6XJVK2g33l0W4FRSR-nOs0lXLBmG_TFXAgICca3rV6RtTzUAFGeYcqXRnjgdHMRtF-aT_g',
                    'imageAlt' => 'Dhaka Mirpur traffic congestion',
                    'readTime' => '৫ মিনিট পাঠ',
                    'title' => 'মিরপুরের জ্যামে বসে দার্শনিক চিন্তার উদয়',
                    'excerpt' => 'সিগন্যালে আটকে থাকা চল্লিশ মিনিট সময় আমাকে মানবজীবনের গতি, নিয়তি এবং অস্তিত্ববাদের গভীর তত্ত্বে নিয়ে গিয়েছিল। বাসের জানালায় চোখ রেখে এক অদ্ভুত নির্লিপ্ততা।',
                    'metaLeft' => ['icon' => 'eye', 'label' => '৮৯০ পাঠক'],
                    'metaRight' => ['icon' => 'comment', 'label' => '৩২ মতামত'],
                    'actions' => ['edit', 'download', 'share', 'delete'],
                ],
            ],
            'pagination' => [
                'pageLabel' => 'পৃষ্ঠা ১ এর ৬ • সর্বমোট ২৪টি সংস্করণ সংরক্ষিত',
                'pages' => [1, 2, 3, null, 6],
                'currentPage' => 1,
                'quote' => '"স্মৃতিগুলো বাঁধানো থাকে দৈনিক হরফে"',
            ],
        ];
    }
}
