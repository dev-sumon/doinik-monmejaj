<?php

namespace App\Support\Frontend;

class CommunityFeedContent
{
    /**
     * Demo payload for the community feed page (replace with models later).
     *
     * @return array<string, mixed>
     */
    public static function demo(): array
    {
        return [
            'header' => [
                'eyebrow' => 'জনসাধারণের মুক্ত পাতা • কমিউনিটি ডিসপ্যাচ',
                'title' => 'মানুষের জীবনের ছোট ছোট খবর',
                'lead' => 'কাউকে না বলা দৈনন্দিন অনুভূতি, মজার ভুলভ্রান্তি এবং চেনা সব অভিজ্ঞতার জীবন্ত সংকলন।',
                'counters' => [
                    [
                        'label' => 'আজকের প্রকাশিত কাগজ',
                        'value' => '১,৪২৮ টি',
                        'tone' => 'brand',
                    ],
                    [
                        'label' => 'সক্রিয় পাঠক',
                        'value' => '১২.৮ হাজার',
                        'tone' => 'tertiary',
                    ],
                ],
            ],
            'tabs' => [
                ['id' => 'all', 'label' => 'সবার নতুন'],
                ['id' => 'trending', 'label' => 'জনপ্রিয়'],
                ['id' => 'foryou', 'label' => 'আপনার সঙ্গে মেলে'],
            ],
            'topics' => [
                '# সব খবর',
                '# ছাত্রজীবন',
                '# অফিস ও কর্মক্ষেত্র',
                '# বন্ধুত্ব',
                '# পরিবার',
                '# প্রেম ও মান-অভিমান',
                '# দৈনন্দিন জীবন',
                '# খাবারের টান',
            ],
            'stories' => [
                [
                    'id' => 'office-budget',
                    'author' => [
                        'name' => 'তানভীর হাসান',
                        'avatar' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCflpHa-mFsVn5Asem3XpLPopW5QchlPXc3L2Bu-MZ5xfLKPYRiXasUvuAWA-0JYHPLp28ar5MXdiEsGyVw_IwUAY53cDQBzqDGq5h_jPJTaqYPsNAuurYQm2WanyhyCZXRvLWBZF8NA5so0fZ17qWKqID0og2NoyVZ_39EBJkgQ3HRlu6v25ev-lvpMysX2-gHn44seBSA0EN5PfwOTrOtplwz3X3ElyilwMk8vlnp8XRB7KtC9KVV',
                        'verified' => true,
                        'verifyTone' => 'warm',
                        'time' => '২ ঘণ্টা আগে',
                        'location' => 'মতিঝিল, ঢাকা',
                    ],
                    'category' => 'অফিস ও কর্মক্ষেত্র',
                    'categoryTone' => 'brand',
                    'kicker' => '— বিশেষ অনুসন্ধান —',
                    'edition' => 'খণ্ড সংখ্যা: ৪২/খ',
                    'title' => 'বেতন আসার আগেই মাসের বাজেটের রহস্যজনক অবনতি!',
                    'deck' => 'অপ্রত্যাশিত অনলাইন শপিং ও রেস্তোরাঁর বিলের কাছে আবারও হার মানল সুপরিকল্পিত হিসাব।',
                    'layout' => 'image-right',
                    'body' => [
                        'মাসের শুরুতে তৈরিকৃত এক্সেল শিটটি এখন কেবলই এক কাল্পনিক উপাখ্যান মাত্র। গবেষক তানভীর হাসানের দাবি, ১লা তারিখে যে বাজেট অত্যন্ত শৃঙ্খলাপরায়ণ মনে হয়েছিল, ১৫ তারিখ আসতেই তা অদৃশ্য কোনো ব্ল্যাকহোলে তলিয়ে গেছে।',
                        '"আমি শুধু একটা কোল্ড কফি আর টুকটাক স্ন্যাকস অর্ডার করেছিলাম," জবানবন্দিতে অকপটে স্বীকার করেন তিনি।',
                    ],
                    'quote' => null,
                    'notice' => null,
                    'image' => [
                        'src' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDddikY-qMjcJVPvsqXPcjVXCKZ9RV8Yde0UAVTdb_pXBcZD4NS_K1nzcyY7P3HQ6Zt6xX2SubOIbnfkLd8IWqPxgtXsnYPHbzSTlXuCbYtf1MWit4kHcCC8ZY-4_AEDSQUiJE_gFCteoXV2TdxU89YzdOsjkioqYQV7eizJ9v-D1DXX-EeM0AkRzHfQfLT5bOhoVmQiL4udz5V76Vc6frLMYrU2SpETTPhiLGT-8IVNvynkdbjggKl',
                        'alt' => 'Open notebook with expense ledgers and empty wallet',
                        'caption' => 'নথি ১: বাজেটের করুণ পরিণতি',
                    ],
                    'reactions' => [
                        ['icon' => 'smile', 'count' => '৫৪০', 'label' => 'হাসি'],
                        ['icon' => 'handshake', 'count' => '১২৪', 'label' => 'একমত'],
                        ['icon' => 'comment', 'count' => '৬৭', 'label' => 'মন্তব্য'],
                    ],
                ],
                [
                    'id' => 'exam-panic',
                    'author' => [
                        'name' => 'নুসরাত জাহান',
                        'avatar' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr8mwJdoDHZ4e-bkDdPRv5J8IDW-DX5EcoBJvML2BgcSwbpaNHGloNlxv9vVexHGXBooNbWlKMV0Xow9XM_l_bzbhZqPQ8WyH_62Cmuyg0BxmtnDtGHOQgBaT-KdAvnuXH6khHQOrI6Rm0mTA4U1b_uWARhl2AizBozwQeTCKwLVAnfxiRdsGX__JNzzBe1kT1wadJB1VvAVMnMVS4fEGiBBK9elimTZAZn0LwvtXCdLEEre7_U7Lp',
                        'verified' => true,
                        'verifyTone' => 'tertiary',
                        'time' => '৪ ঘণ্টা আগে',
                        'location' => 'কার্জন হল প্রাঙ্গণ',
                    ],
                    'category' => 'ছাত্রজীবন',
                    'categoryTone' => 'tertiary',
                    'kicker' => '— শেষ মুহূর্তের আপডেট —',
                    'edition' => 'মধ্যরাত্রির টেলিগ্রাম',
                    'title' => 'পরীক্ষার আগের রাতে বইয়ের সঙ্গে নতুন করে পরিচয়!',
                    'deck' => 'প্রস্তুতি সামান্য হলেও পরিস্থিতি অনুযায়ী আত্মবিশ্বাস দ্রুত ওঠানামা করছে।',
                    'layout' => 'image-left',
                    'body' => [
                        'সিলেবাস দেখার পর জানা গেল, পুরো সেমিস্টারে শিক্ষক যেসব চ্যাপ্টার পড়িয়েছেন তার অর্ধেকের নামই ইতিপূর্বে শোনা যায়নি। নুসরাতের বক্তব্য: "মনে হচ্ছিল যেন অপরিচিত কোনো প্রাচীন পান্ডুলিপি পাঠ করছি। তবে টেবিল ল্যাম্প জ্বালিয়ে চশমা চোখে দিলে বেশ পড়ুয়া একটা ভাব বজায় থাকে।"',
                    ],
                    'quote' => '"গুরুত্বপূর্ণ প্রশ্নের তালিকা খুঁজতে গিয়ে ফেসবুকে আড়াই ঘণ্টা পার হওয়া কোনো অস্বাভাবিক ঘটনা নয়।"',
                    'notice' => null,
                    'image' => [
                        'src' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFYHaxoRJdEw5atAWGSBPyfTMqtax7_FsSMiN4iYYMpsrzaeedQlyI551ButL_kzoawM8m-obICQF7DnSuVl0-eFVC5lRNfpKGFPIvbYRdhQ2LL8Qn_ExmjgLwSJeJVf3Zam_8bDZgTdO3SzVtxpQQLbV9aAqGz_8ghz0TgyBXXF14ZJduZGDMdjTQ-BsEOqw8Us1nB9TF71h5IneShYVBfhRklyzzy2z7aAOxslCVraVRE6j57iWP',
                        'alt' => 'Study desk with textbooks and tea',
                        'caption' => 'নথি ২: রাত জাগার প্রস্তুতি ও শূন্য মস্তিষ্ক',
                    ],
                    'reactions' => [
                        ['icon' => 'heart', 'count' => '৮৯০', 'label' => 'সমবেদনা'],
                        ['icon' => 'forum', 'count' => '১৮২', 'label' => 'মন্তব্য'],
                    ],
                ],
                [
                    'id' => 'biryani-diet',
                    'author' => [
                        'name' => 'আরিফুল ইসলাম',
                        'avatar' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlN4DM2iO3ciUPz93ZQhqy4Nar72VDOGt0LMUHNYabJInquvHSgiGwwobTSveY5fX__DuTpfSvuN77uO9mCmKJgB9JslaXQcNauJtLxZLexRpmwxFGCNADFtNvAIWXeFE0TKZnL7wTxvZ_daf0K6arcq2JdsioUORHR1Z7_n1zT40nQ4X9FAa5kYJzIrUyFO_1L50tDv71k-PUNoiyQqGz1f35mQ1CABxv-ow-saSqWhCT_p41KrBY',
                        'verified' => true,
                        'verifyTone' => 'brand',
                        'time' => '৬ ঘণ্টা আগে',
                        'location' => 'পুরান ঢাকা',
                    ],
                    'category' => 'দৈনন্দিন জীবন',
                    'categoryTone' => 'warm',
                    'kicker' => '— সামাজিক সংকট —',
                    'edition' => 'সুস্বাদু তদন্ত',
                    'title' => 'ডায়েট শুরু করার ঠিক পরদিনই কেন বিরিয়ানির দাওয়াত আসে?',
                    'deck' => 'চিকিৎসাবিজ্ঞান ও সামাজিক পরিস্থিতির সমন্বয়ে এক অমীমাংসিত রহস্য।',
                    'layout' => 'text-only',
                    'body' => [
                        'দীর্ঘ তিন সপ্তাহ মানসিক প্রস্তুতি নিয়ে গতকাল সকালে ওটস ও সেদ্ধ ডিম দিয়ে ডায়েট অভিযান শুরু হয়েছিল। কিন্তু দুপুরের মধ্যেই কাজিন বাড়ি থেকে ফোন: \'আজ কাচ্চি রান্না করেছি, তুই না এলে জমবে না!\' আরিফুল ইসলামের বক্তব্য, ডায়েটের সংকল্প ও খাসির চর্বির ঘ্রাণের মাঝে এই দ্বৈরথে মানুষ বরাবরই পরাজিত হতে বাধ্য।',
                    ],
                    'quote' => null,
                    'notice' => [
                        'icon' => 'restaurant',
                        'text' => 'সিদ্ধান্ত: আগামী শনিবার থেকে ডায়েট পুনরায় শুরু হইবে।',
                        'badge' => 'নিশ্চিত সূত্র',
                    ],
                    'image' => null,
                    'reactions' => [
                        ['icon' => 'restaurant', 'count' => '৯২০', 'label' => 'পেটুক প্রতিক্রিয়া'],
                        ['icon' => 'comment', 'count' => '২৪০', 'label' => 'মন্তব্য'],
                    ],
                ],
            ],
            'writePrompt' => [
                'eyebrow' => 'আজকের আপনার পাতা',
                'title' => 'আপনার দিনটিও লিখে ফেলুন!',
                'body' => 'কোন ঘটনাটি আজ আপনার মুখে এক চিলতে হাসি ফুটিয়েছিল? কিংবা কোন ছোট কারণে মেজাজ চড়েছিল? নিজের ছোট দৈনিক ছাপিয়ে ফেলুন মাত্র দুই মিনিটে।',
                'cta' => [
                    'label' => 'পত্রিকা শুরু করুন',
                    'href' => '#',
                ],
            ],
            'poll' => [
                'eyebrow' => 'আজকের দ্রুত মতামত',
                'status' => 'চলমান',
                'question' => 'কাজের মাঝে তীব্র ঘুম পেলে আপনার প্রথম ভরসা কী?',
                'totalVotesLabel' => 'মোট ভোট পড়েছে: ১,২৩৭ জন',
                'realtimeLabel' => 'ফলাফল রিয়েল-টাইম',
                'options' => [
                    [
                        'id' => 'coffee',
                        'icon' => 'coffee',
                        'label' => 'এক কাপ কড়া চা বা ব্ল্যাক কফি',
                        'percent' => 52,
                        'votes' => 642,
                    ],
                    [
                        'id' => 'water',
                        'icon' => 'water',
                        'label' => 'মুখে বরফশীতল পানির ঝাপটা',
                        'percent' => 31,
                        'votes' => 380,
                    ],
                    [
                        'id' => 'nap',
                        'icon' => 'psychology',
                        'label' => 'টেবিলে মাথা রেখে ১০ মিনিটের মিথ্যা ঘুম',
                        'percent' => 17,
                        'votes' => 215,
                    ],
                ],
            ],
            'editorsPicks' => [
                [
                    'meta' => 'স্মৃতিকথা • ৫ মিনিট পাঠ',
                    'metaTone' => 'warm',
                    'title' => 'হারিয়ে যাওয়া পুরোনো ডাকবাক্স এবং না-পাঠানো তিনখানা চিঠি',
                    'excerpt' => 'মাইলফলকের পাশে মরচে ধরা লাল রঙের বাক্সটি আজও দাঁড়িয়ে রয়েছে। কেউ আর চিঠি ফেলে না, তবে পথচলতি মানুষের স্মৃতি আটকে থাকে...',
                    'href' => '#',
                ],
                [
                    'meta' => 'নগর জীবন • ৩ মিনিট পাঠ',
                    'metaTone' => 'tertiary',
                    'title' => 'রিকশাচালকের সঙ্গে ভাড়ার দরদাম: ঢাকা শহরের এক অনন্য শিল্পকলা',
                    'excerpt' => '"মামা, যাবেন?" থেকে শুরু করে "আচ্ছা দশ টাকা বাড়িয়ে নিয়েন" পর্যন্ত পুরো মনস্তাত্ত্বিক সফরনামা।',
                    'href' => '#',
                ],
                [
                    'meta' => 'ব্যক্তিগত ডায়েরি • ৪ মিনিট পাঠ',
                    'metaTone' => 'brand',
                    'title' => 'মাঝরাতে ফ্রিজ খুলে হাঁ করে তাকিয়ে থাকার রহস্য উন্মোচিত',
                    'excerpt' => 'ক্ষিদে নেই, তৃষ্ণা নেই, কেবল হলুদ বাতির আলোয় ঠান্ডা হাওয়ার ভেতর জীবনের অর্থ খোঁজা।',
                    'href' => '#',
                ],
            ],
            'writers' => [
                [
                    'name' => 'শারমিন আক্তার',
                    'avatar' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSk03WDlY0o-GCSPybW5JgvCpZT5vOV9KWp4kTSKSdRig34mbmZ3Ckdt0NQOW2YaQwmOGSenBtDc3tM2wLsycJaro5RH8R39cAE1e7AcXRjOi0Y77hSP-a_fLYy7-LcLPQSc1UUXMVKo1i-YzQphYhIp55ZVRIUSVM7NHBfti3FpKci6g9Ipt54kPMVgf2ZB_p0YAAerMGMa84aiee_qF_Wanl5uPz0c94ayjuNmd80SM22h8WLqvz',
                    'bio' => 'দৈনন্দিন রম্য ও মধ্যবিত্ত আখ্যান',
                    'readers' => '৩.২ হাজার পাঠক',
                ],
                [
                    'name' => 'মাহমুদুর রহমান',
                    'avatar' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeqjM8XZp4Jdw06UL9qpuaRIKiXRrMr_lIGjdW4BHqeWjprCHdwFayYeynV1kXYvsp1C2GrjNQLURopNxssMhRVKx-bMKx93gPdlwnloB0NCq0VDQIvbWi7Jn5ZpUo7L_epkCzpRTP_uJKgeK-xAJIHSgmlxQ5_c40_6yEIs0CZsBJpDpYeYklmM6zOoatlR-NfZmcE8Ekez1eTZTR0xIkpcnUdWroxWBINZsaXXB4KGadhQum6rYj',
                    'bio' => 'পথের গল্প ও চা-দোকানের আড্ডা',
                    'readers' => '১.৮ হাজার পাঠক',
                ],
                [
                    'name' => 'আবুল মনসুর আহমেদ',
                    'avatar' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuBW9zqefUtXRV1S112HhpiObTwZhmy4nPuJHsh89Cv_0OPBv4lwPmCY7Fe01Rk65RfD5Rj6LeIehlFUVKxaIBg7-DyuaYD6y6-ed5-DM04ufp08vEHiF7c-_dHbWSkr4qFsOy_12nJj1FNdmyBmRn3d4GXkMgR0RpsdQbPGrhUXwb_9sdmdr_D1GTxS3Bdoi2DBRyb8lynRipoCf7nqYcFA-4DC8Gefdgp4DgAtElZhnX3PUzG5bNGd',
                    'bio' => 'নস্টালজিয়া ও পুরোনো ঢাকার চিঠি',
                    'readers' => '৫.৪ হাজার পাঠক',
                ],
            ],
            'motto' => [
                'eyebrow' => '— আজকের কাগজের অঙ্গীকার —',
                'body' => '"প্রতিটি তুচ্ছ ঘটনার ভেতর একটি বড় গল্প লুকানো থাকে। আপনার কথাই এই পত্রিকার আসল সংবাদ।"',
            ],
        ];
    }
}
