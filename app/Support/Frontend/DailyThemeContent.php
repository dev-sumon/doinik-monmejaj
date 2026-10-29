<?php

namespace App\Support\Frontend;

class DailyThemeContent
{
    /**
     * Demo payload for the daily theme page (replace with models later).
     *
     * @return array<string, mixed>
     */
    public static function demo(): array
    {
        return [
            'subBar' => [
                'eyebrow' => 'সম্পাদকীয় বিশেষ বিভাগ',
                'issue' => 'সংকলন সংখ্যা: ১৮৪',
                'dateLabel' => '১৫ চৈত্র, ১৪৩০',
                'countdownMinutes' => 7 * 60 + 42,
            ],
            'hero' => [
                'badge' => 'আজকের বিশেষ বিষয় • সম্পাদকীয় আহ্বান',
                'titlePrefix' => 'আজকের বিষয়:',
                'highlight' => 'ট্রাফিক জ্যাম ও জীবনের দর্শন',
                'lead' => 'সিগন্যালে আটকে থেকে আপনি কী ভাবলেন? জ্যামের ক্লান্তিতে কী অদ্ভুত চিন্তা এলো মাথায়? শহরের স্থবির চাকা আর অন্তহীন ভাবনার যোগসূত্র তুলে ধরে লিখুন আপনার একান্ত সম্পাদকীয়।',
                'metrics' => [
                    [
                        'icon' => 'book',
                        'tone' => 'brand',
                        'parts' => ['ইতিমধ্যে লেখা হয়েছে ', '৪২০টি', ' পত্রিকা'],
                        'emphasisIndex' => 1,
                    ],
                    [
                        'icon' => 'eye',
                        'tone' => 'warm',
                        'parts' => ['পাঠক সংখ্যা ', '৬.৮ হাজার', ''],
                        'emphasisIndex' => 1,
                    ],
                    [
                        'icon' => 'pen',
                        'tone' => 'tertiary',
                        'parts' => ['নতুন জমা পড়ার হার: প্রতি ৩ মিনিটে ১টি'],
                        'emphasisIndex' => null,
                    ],
                ],
                'ctaLabel' => 'এই বিষয় নিয়ে আমার পত্রিকা বানাই',
                'ctaHint' => 'সর্বোচ্চ শব্দ সংখ্যা: ৮০০ • যেকোনো ছবি যুক্ত করা যাবে',
            ],
            'sparks' => [
                [
                    'label' => 'ক্লু ০১',
                    'icon' => 'rickshaw',
                    'title' => 'সিএনজির পেছনে লেখা বাণী নিয়ে গবেষণা',
                    'body' => '"মা বাবার দোয়া", "হিংসা করো না", নাকি অন্য কোনো গভীর দার্শনিক উক্তি? পেছনের টিনপাতে পড়া চিরন্তন সত্যগুলো কীভাবে আপনার যানজটকে হালকা করল?',
                    'writersCount' => '১৪২ জন এই ভাবনায় লিখেছেন',
                ],
                [
                    'label' => 'ক্লু ০২',
                    'icon' => 'bus',
                    'title' => 'পাশের বাসের যাত্রীর সঙ্গে চোখাচোখি ও নীরব ডায়ালগ',
                    'body' => 'জানালা দিয়ে তাকিয়ে অচেনা মানুষটার ক্লান্ত মুখ দেখে আপনি কী অনুমান করলেন? একই শহরের বুকে দুজন সম্পূর্ণ ভিন্ন জীবনের কয়েক মুহূর্তের সমবেদনা।',
                    'writersCount' => '১৯৮ জন এই ভাবনায় লিখেছেন',
                ],
                [
                    'label' => 'ক্লু ০৩',
                    'icon' => 'phone',
                    'title' => '"আর মাত্র ১০ মিনিট" বলে অফিসের বসের মিথ্যা সান্ত্বনা',
                    'body' => 'গাড়ি এক চুলও নড়েনি অথচ আপনি জানিয়ে দিলেন "এই তো মোড়ে এসে পড়েছি!" শহরের এই সর্বজনীন কৌতুকপূর্ণ অপরাধবোধ আর মানসিক দ্বৈরথের গল্প।',
                    'writersCount' => '৮০ জন এই ভাবনায় লিখেছেন',
                ],
            ],
            'featured' => [
                'badge' => 'সেরা মনোনয়ন',
                'sectionTitle' => 'সম্পাদকীয় নির্বাচিত প্রথম পাতার পত্রিকা',
                'ratingLabel' => 'সম্পাদকের টেবিলে শীর্ষ রেটিংপ্রাপ্ত',
                'paperMeta' => 'আজকের কাগজ • বিশেষ সান্ধ্য সংখ্যা',
                'paperDate' => '১৫ চৈত্র, ১৪৩০',
                'image' => [
                    'src' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCR3rRR3Ds7xF6NxwmL24L2hg6RyIpzP6Z69a79fOGSU04bh9IjkvASqmaztva6uLWXV6CKpFmJ-B-c0crcOirfts8SPwEq6OMGwJkWR9fmSjDtck7Eludh3vhG34Rv4gKFrLBLqcCUhfGLcIzN_YYgIs39hCTLyxIdh7AgDeyqb65DY9R7rre6DNYwKeyXFyYFiXmOc1dsy1enH9nVSvYrhs3TTSfwvUyNsdG-s975nbHzOAnItxHx',
                    'alt' => 'Crowded Dhaka traffic jam at dusk',
                    'caption' => 'বিজয় সরণি মোড় • বিকাল ৫:৩০',
                ],
                'previewTitle' => 'জ্যামে বসে লিখে ফেলা কাল্পনিক উপন্যাসের প্রথম অধ্যায়',
                'previewExcerpt' => 'সিগন্যালের লাল বাতি যখন চারবারের মতো জ্বলে উঠল, তখন আমার ডায়রির পাতায় জন্ম নিল নতুন এক চরিত্র—নাম তার রফিক সাহেব...',
                'formatLabel' => 'মুদ্রণ বিন্যাস: ব্রডশিট স্ট্যান্ডার্ড',
                'pagesLabel' => '৩টি পৃষ্ঠার সমন্বিত সংকলন',
                'author' => [
                    'name' => 'তানভীর হাসান',
                    'avatar' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHmk7Szn64895cV4RkJLuFgOB3vneUug109GJ-8W-7mJDjpH5LrUsnKOZPMruYfvQ9x6TXYIadUu7Iqr0ucf_4CktrgXJz49u8-wpGJwOyZ-qSZCqMyVpfoXweol4kO74fQijrT4rsvgLL-ywBBVGFQhcwmEYF25EaD3HaYdRsfWqyAuWRbb50LLhYhuDVV_nICqoqEdVYADUFjLYQziHIevPfWwCgzY_BpXrN4uMGqWqdozPqKF_d',
                    'meta' => 'কলাবাগান, ঢাকা • নিয়মিত কলাম লেখক',
                ],
                'publishedAt' => 'আজ বেলা ৩:২০ মিনিটে প্রকাশিত',
                'title' => 'জ্যামে বসে লিখে ফেলা কাল্পনিক উপন্যাসের প্রথম অধ্যায়',
                'pullQuote' => '"গাড়ি যখন ঠিক এক ইঞ্চিও নড়ছে না, তখন সময় কিন্তু থমকে থাকে না। মানুষ তখন নিজের ভেতরের এমন সব অলিন্দে ভ্রমণ করতে শুরু করে, যেখানে সাধারণ ব্যস্ততার দিনে পা ফেলার অবকাশ থাকে না..."',
                'body' => 'তানভীরের এই সংকলনে ঢাকার তীব্র যানজট কোনো বিরক্তির উপাদান হয়ে থাকেনি; বরং তা রূপান্তরিত হয়েছে এক আত্মজিজ্ঞাসার ক্যানভাসে। সিগন্যালের স্থির আলোর নিচে বসে তিনি একে একে জীবন্ত করেছেন বাসের হেল্পার, পাশের রিকশার নিঃসঙ্গ সওয়ারি এবং নিজ হৃদয়ের জমে থাকা না-বলা অজস্র কথা।',
                'reactions' => [
                    ['icon' => 'heart', 'label' => '১,২৪০ সাধুবাদ'],
                    ['icon' => 'forum', 'label' => '৮৬ মন্তব্য'],
                    ['icon' => 'bookmark', 'label' => 'সংরক্ষণ'],
                ],
                'ctaLabel' => 'পুরো পত্রিকা পড়ুন',
            ],
            'filters' => [
                ['id' => 'popular', 'label' => 'জনপ্রিয়'],
                ['id' => 'newest', 'label' => 'সবার নতুন'],
                ['id' => 'discussed', 'label' => 'সবচেয়ে বেশি আলোচিত'],
            ],
            'submissions' => [
                [
                    'id' => 'rokeya',
                    'author' => 'রোকেয়া চৌধুরী',
                    'avatar' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvfCxhBZMyevREOB0q_72RqlmZ566bydv484aTyaLeuzpZa0pZC0eamdsyJWQLSFMIVjsObJJoqZEEv_d17ARfwy40fWv6hzlyPy7Gx8ZiKB_R-RKWwGelJ7pSubll1fIheKq3uOK0ycroJXA8lu4LbEZhymZKLK55JvWLjP5kJ49dnndLqEpYcNw92UzH6Njwwc5IjjmDl9zOlvZ0UA8mWsb7R_ShqlIRKQBVilaErgPcU7uhrlPD',
                    'meta' => 'ধানমন্ডি • ১ ঘণ্টা আগে',
                    'badge' => '৪ পাতার সংকলন',
                    'image' => [
                        'src' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMJfJbi8H3jmNVbriVQ9eEb8DkyOpGdU4grGIDb66bVNJsQL0BaR30cftpvA_WLPUAchNZ-ZAcnzz55hTFMyHZMfxeuGlLweuJQAkEWnQIXcdjBgUCFTQKF1BT0TP-p7RA6svA28-wCs6ayFw5wTJrMWVpb1WiOgQ7DS5bAOOSxtegz0Qhv8VWkFpbcLVsBqAd5_VvF9vjZRsZhrRjVaMgRmCx9-57qlpaN5SmjMxHZ-zu-gEthl8Q',
                        'alt' => 'CNG auto rickshaw with hand-painted calligraphy',
                    ],
                    'title' => 'সিএনজির ব্রেক লাইট আর আমার ফেলে আসা কৈশোর',
                    'excerpt' => 'জ্যামে দাঁড়িয়ে সবুজ সিএনজির পেছনে তাকিয়ে হঠাৎ মনে পড়ল বাবার সঙ্গে স্কুলে যাওয়ার দিনগুলো। তখন তো এত গাড়ি ছিল না, কিন্তু সময়ও ছিল অগাধ...',
                    'readers' => '৫১২ পাঠক',
                    'comments' => '৪২ মন্তব্য',
                    'href' => '#',
                ],
                [
                    'id' => 'asif',
                    'author' => 'আসিফ আরমান',
                    'avatar' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSLCcAwQ0xpPhjYnrhmlmlJUi7XPQ7ZKGd3FLOMGBKGRNaHk9dD0PCpNOg-wjIvAzROAqEtS9ySB25oHQS1A9at7bRfJgDf08KzGH-_nKsSewt_VQddIXWuIOoD5G8GSbtVhH9TH2zwYquCYkQ5WMLQo-yJzY37JW5dmhFrvYuupGX8_WWmDwm4TH0XznnPkRjS3aJTJN14l_Ep3__4Wqw-fOtdudImRvMkDDZpltXyuUv9_9wUYXx',
                    'meta' => 'উত্তরা • ২ ঘণ্টা আগে',
                    'badge' => '২ পাতার ব্রডশিট',
                    'image' => [
                        'src' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuArubv4CVj6oJ20SExYp7XRRfZ6bvJDmxu2wv5YMAIz9P2wGopyBFMDPxO4oHiTYlAMGum5vpGqsFn-wjhNaPYE5SEYvDM48yRAff46sa30Qtts7Bdivode7n_OcpNtFTKIdoUQ_FaeEIEJ9rzqq69w4t4Kp07x55l86xhTMrQxpYsLzn0xCvgfkpEv0rwihlJCjhXJj-w6TqvhQEceWdAdEEZOUiWpmeHYQs6jz1NgNNuwYqPWXqHy',
                        'alt' => 'Raindrops on bus window in Dhaka',
                    ],
                    'title' => 'বাসের জানালায় বৃষ্টির ফোঁটা ও সমান্তরাল জীবনের গল্প',
                    'excerpt' => 'কাঁচের গায়ে ফোঁটাগুলো গড়িয়ে পড়ছে। ঠিক পাশের লোকটির ফোনে বেজে উঠেছে পুরানো দিনের মান্না দে\'র গান। পুরো বাস যেন এক নিঃশব্দ কনসার্ট হয়ে উঠল...',
                    'readers' => '৮৯০ পাঠক',
                    'comments' => '৭৩ মন্তব্য',
                    'href' => '#',
                ],
                [
                    'id' => 'samad',
                    'author' => 'ড. মুহম্মদ সামাদ',
                    'avatar' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3efedBiSxk_SzepnEhn_WW1a-gSNFbIkO0gsYPzTMBoHNJBMC7LVNv6A83nykhQXbhuuEoUEsajWmGuqSBFUs21QA3SL8nnrvle7sgVC-f6NUG6bZg103C30ysDESG2h1FgoWplOMcr5mm1ulBclC_2C5OQmwnGBq3zoF4dHq-F3PcTy9GcJHxbS8V5CuPnYM7CMOkPuIAPNqWpCh5IoNb2h5HNaIJbekZA8UtRrmGFuXpXpOmQpO',
                    'meta' => 'মতিঝিল • ৩ ঘণ্টা আগে',
                    'badge' => 'সম্পাদকীয় প্রবন্ধ',
                    'image' => [
                        'src' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZULDhUFl8btuQE9wXbvW_oOUJYepv9Dshl6dU_EmiZAYWZMYWb1jn3wDzdtr3TOc8igzgPaFPeTosB9LciY2sNy3gh6oOAe6JTgenlSLEyqNYefYDucPMr_ec6iXEFhudEyPlITiaoWH88G6v01IDmLKVN6jFadchhSE3RmUt5_wFTV2uPCuD3EzOcA2SgYxkNVkKTm5oCOXMVgvG0Abqjk2xRSQOc3hKRjuIwP4h33KnwdtOdx9K',
                        'alt' => 'Vintage pocket watch on newspaper',
                    ],
                    'title' => 'স্থবির চাকা এবং আধুনিক মানুষের গতিহীন মুক্তির তৃষ্ণা',
                    'excerpt' => 'আমরা কোথায় যাওয়ার জন্য এত তাড়াহুড়ো করি? যানজট কি আসলে প্রকৃতিপ্রদত্ত এক অদ্ভুত থামা, যা আমাদের বাধ্য করে একটু শ্বাস নিতে?',
                    'readers' => '১,১৫০ পাঠক',
                    'comments' => '১১৪ মন্তব্য',
                    'href' => '#',
                ],
                [
                    'id' => 'nusrat',
                    'author' => 'নুসরাত জাহান',
                    'avatar' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrShfR_zYdwb2UajW2OKLEY1GZ1W8wYrZAUia9BRu6Q6TbDzW2AggfOdSFJNSBhVzfIITxasQiJZ1-bcnJ8h4y4ntTATFVupHzoO94L7j9vd8_94ev7_0ZjMERg33_Rcw5Kdv2iJKIWI3QlUnhGapeDm64v_clPuWxIsqV96MypVssYJgAqWNG1pCVV_qpkiMR3l11LgnN7qfj2kO6UiuOC3pojjCpbnJXijV8vEdvxMGeUSuzlUWs',
                    'meta' => 'মিরপুর • ৪ ঘণ্টা আগে',
                    'badge' => 'রম্য রচনা',
                    'image' => [
                        'src' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0LKWHyn5DI-7KeOA-Zhv3lCQHgwS9TlgeXkKdqHUZD7oWZBss4AsrYrgxjq0tyVpY9jRp6zN5KMEjbt6baDBoU48lN0zBUuqgMjX1H9JaV26QKrJfFbfbfWLzDpnPqoC9bQKj30PVFqbyqLV7zQ9Ixisk6xr3DOAs_n_qL-_Tr2sUfh3_DPaeGN_29UsrfaaHb44LXN3xfioNMDRXWlcap88gtvTCdfewkNUzrJ7-DVb6vhmmej5J',
                        'alt' => 'Street hawkers between cars in traffic',
                    ],
                    'title' => 'সিগন্যালে বিক্রি হওয়া ঝালমুড়ি আর বইয়ের আশ্চর্য বাণিজ্য',
                    'excerpt' => 'জ্যাম না থাকলে শহরের এই ফেরিওয়ালারা কোথায় যেতেন? চানাচুরওয়ালার তীক্ষ্ণ হাঁকডাক আর চড়ুইপাখির মতো দৌড়ঝাঁপে রচিত এক বিকল্প অর্থনীতির উপাখ্যান।',
                    'readers' => '৬৪০ পাঠক',
                    'comments' => '৩৮ মন্তব্য',
                    'href' => '#',
                ],
                [
                    'id' => 'fahim',
                    'author' => 'ফাহিম শাহরিয়ার',
                    'avatar' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZMi0LshW-xgVZDH0SvTzYyol9ENa2XbveB-BocPIMyu3n57yWgC641iZn_IhKviKoIP_v4z09aUGJtYmq3RuRnBt1zjwKI-nlHQSiHcX_bQdE7X4wTebZ7ra9WlfYos7eR5d2VXyzEjxBWnfrXrcaYDR5wbp06jNZbxbaP_gkiitpGi_3LqM1u8jxn5Vra6oGQBlyUjyXRe-FFUhwPg1PvR4eBowMgA9sW9lsKCwTJwc1R4ESt7am',
                    'meta' => 'গুলশান • ৫ ঘণ্টা আগে',
                    'badge' => 'চিত্র ও কলাম',
                    'image' => [
                        'src' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc9hZ4t5cvcjnZiWkjZKzePCJ3nW4T0H6eBbR9OZu2MDJiog5eIUXW2Rit_mKQnGe9CKJGb435OXO_mXHwlkN-U9CPFDMJr1qv7xcA19kjhszEfKoXSKrkU2S-OmMptNkmrAP_u44BIswPNgSN5lHk03RXXjCzEoqzDf2a0TdCeZwZ5u-ovKHmjDORpLzZbUkq_qYpuruylfAPAtOTJfpl-2XGPlx5aUfuOCY9cP0K5a6coSLxcwH0',
                        'alt' => 'Architectural sketch of overpass flyover',
                    ],
                    'title' => 'ফ্লাইওভারের নিচে দাঁড়িয়ে থাকা শহরের স্থাপত্য দ্বৈততা',
                    'excerpt' => 'মাথার ওপর দিয়ে সাঁই সাঁই করে গাড়ি চলে যাচ্ছে, আর নিচে আমরা পড়ে আছি ধুলোমাখা এক প্রাচীন মধ্যযুগে। এই বৈপরীত্য ঢাকাকে অদ্ভুতভাবে মায়াবী করে তোলে।',
                    'readers' => '৭৮০ পাঠক',
                    'comments' => '৫১ মন্তব্য',
                    'href' => '#',
                ],
                [
                    'id' => 'tithi',
                    'author' => 'মেহজাবীন তিথি',
                    'avatar' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFLNmKhvNjp4iz3XADJWc4bbDtUWpotOJdokp_Jc9BSNlxLgbRz_InlGDSbu93zO0Wv-K-_ItNQmcZ66lCtB3UJfTf19jsOwuinRjz3feORh4aZqLqcrmnHfLGC7UDMHsU7A0bF6QuiAg6kRnuknAu_UN3C5Ai6H2jMBJfOolNC65q6APOAFjLM_sM8A5mYgm-jcJmo5Gwgli3-bwxUpHGnWXpCjG5wku04UdH7Skx_Y5KTPF0_u74',
                    'meta' => 'পুরান ঢাকা • ৬ ঘণ্টা আগে',
                    'badge' => 'কবিতা সংকলন',
                    'image' => [
                        'src' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvSB_T9x7y5b-Nfzzb3DmA1tvt3F2Bll1QFRIBehk6I0h4MRJy06HY9c9CMhi3HBneEmO-mSSlBuZXHs4YyauKbG0MxiTjVBV3Cr0nZWcMqHBbluV_LQY1r9tt0-ZuWLhs1J5WpJDYVje023Q259ErdmkZkMfxOwIcWt_8gcg9CYXnubNSoH8KW5Bghv6fRcXYZI1LJMlDO7A6tnoPX_l24EGkq9hvTB5JI4B-q0BZH4QuATmobCA_',
                        'alt' => 'Yellow rickshaw hoods aerial pattern',
                    ],
                    'title' => 'রিকশার হুডের মখমলে গাঁথা কয়েকটি স্তব্ধ চরণ',
                    'excerpt' => '"ঘড়ির কাঁটা ঘুরছে খালি, চাকা তো ঘোরে না / প্রেমিকের দেওয়া কৃষ্ণচূড়া শুকিয়ে কেন ঝরে না..." যানজটে লেখা তিনটি নিটোল কবিতা।',
                    'readers' => '৯৩০ পাঠক',
                    'comments' => '৬২ মন্তব্য',
                    'href' => '#',
                ],
            ],
            'upcoming' => [
                [
                    'dayLabel' => 'আগামীকাল',
                    'dayNumber' => '১৬',
                    'month' => 'চৈত্র',
                    'tone' => 'warm',
                    'badge' => 'আসন্ন পর্ব',
                    'timing' => 'রাত বারোটায় শুরু',
                    'title' => 'ছুটির সকালের আলসেমি ও চায়ের কাপ',
                    'body' => 'ঘুম ভাঙার পর বিছানায় শুয়ে থাকা অতিরিক্ত আধা ঘণ্টা এবং গরম লিকার চায়ের ধোঁয়ায় দিন শুরু করার নীরব সুখস্মৃতি।',
                    'meta' => 'ইতিমধ্যে ২২ জন খসড়া প্রস্তুত রেখেছেন',
                    'ctaLabel' => 'খসড়া লিখে রাখুন',
                    'ctaIcon' => 'edit',
                ],
                [
                    'dayLabel' => 'পরশু',
                    'dayNumber' => '১৭',
                    'month' => 'চৈত্র',
                    'tone' => 'muted',
                    'badge' => 'পরবর্তী পর্ব',
                    'timing' => '৪৮ ঘণ্টা পর',
                    'title' => 'পুরনো অ্যালবাম ও ছোটবেলার হারিয়ে যাওয়া স্মৃতি',
                    'body' => 'হলদেটে ছবির খামে আটকে থাকা শৈশবের সাইকেল চালানো, নানার বাড়ির উঠোন আর হারিয়ে যাওয়া সেই চিরচেনা মুখগুলোর গল্প।',
                    'meta' => 'নোটবুকে ভাবনার বিষয় সংরক্ষণ করুন',
                    'ctaLabel' => 'স্মারক যুক্ত করুন',
                    'ctaIcon' => 'notify',
                ],
            ],
        ];
    }
}
