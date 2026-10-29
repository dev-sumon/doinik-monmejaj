<?php

namespace App\Support\Frontend;

class PollsContent
{
    /**
     * Demo payload for the polls page (replace with models later).
     *
     * @return array<string, mixed>
     */
    public static function demo(): array
    {
        return [
            'masthead' => [
                'badge' => 'জনমত বিভাগ • সংখ্যা ৮৪',
                'title' => 'জনমত ও কৌতূহল • বাঙালির নিত্যদিনের বিতর্ক',
                'lead' => 'রাজনীতি নয়, জীবনের ছোট ছোট খুনসুটি আর পছন্দের ভোটাভুটি। নিজের মতামত দিন এবং দেখুন অন্যরা কী ভাবছেন।',
                'live' => [
                    'status' => 'সরাসরি সম্প্রচার',
                    'dateLabel' => '১৫ চৈত্র, ১৪৩০',
                    'rows' => [
                        ['label' => 'চলতি ভোট:', 'value' => '৫টি সক্রিয়', 'tone' => 'default'],
                        ['label' => 'মোট সংগৃহীত ভোট:', 'value' => '১৮,৪৫০টি', 'tone' => 'brand'],
                        ['label' => 'সক্রিয় ভোটার:', 'value' => '৪.৩ হাজার মানুষ', 'tone' => 'default'],
                    ],
                ],
            ],
            'featured' => [
                'badge' => 'আজকের মহা বিতর্ক',
                'countdown' => 'বাকি আছে: ৮ ঘণ্টা ২০ মিনিট',
                'question' => 'অফিসের কাজের ফাঁকে ঘুম বা অলসতা কাটাতে আপনার আসল ভরসা কী?',
                'lead' => 'দুপুরের ভারী ভোজের পর কম্পিউটারের মনিটরে চোখ লেগে এলে বাঙালি ঠিক কোন জাদুবলে নিজেকে সতেজ রাখে? মতামত দিয়ে অংশ নিন।',
                'selectedOptionId' => 'tea',
                'options' => [
                    [
                        'id' => 'tea',
                        'label' => 'এক কাপ কড়া আদা-চা বা ব্ল্যাক কফি',
                        'percent' => 52,
                        'votesLabel' => '(৯,৫৮০ ভোট)',
                        'barTone' => 'brand',
                        'isLeader' => true,
                    ],
                    [
                        'id' => 'water',
                        'label' => 'মুখে বরফশীতল পানির ঝাপটা',
                        'percent' => 18,
                        'votesLabel' => '(৩,৩২০ ভোট)',
                        'barTone' => 'warm',
                        'isLeader' => false,
                    ],
                    [
                        'id' => 'nap',
                        'label' => 'টেবিলে মাথা রেখে ১০ মিনিটের মিথ্যা ঘুম',
                        'percent' => 22,
                        'votesLabel' => '(৪,০৬০ ভোট)',
                        'barTone' => 'warm',
                        'isLeader' => false,
                    ],
                    [
                        'id' => 'chat',
                        'label' => 'সহকর্মীর সাথে অহেতুক আড্ডা ও পরচর্চা',
                        'percent' => 8,
                        'votesLabel' => '(১,৪৯০ ভোট)',
                        'barTone' => 'outline',
                        'isLeader' => false,
                    ],
                ],
                'totalVotes' => 'মোট ভোট: ১৮,৪৫০',
                'commentsCount' => '৮৯টি বিশ্লেষণাত্মক মন্তব্য',
                'vignette' => [
                    'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuAweyb3reVUGfjAYq1Zo3z33i_Q_p2DagAr3iSUPWNT9l7S4zpo9TNRJ6YorZvlbMXreBo1VVLSU3VIB_s6gByfb-eorYN1mT8uMbtPuQ6c2lKAww-qwYtztv0PNLi1f_VHj6SzgFrIcRNyR4OKj2H8DAT_3XwhlhmeNmQt7_iPIFee_Rmqj_X89dUw6gJSkzGDizkUu2R23yN7H71DANuKa0WOPa1KfF7bA9_6SeuZLSD8CkjMWlHx',
                    'alt' => 'Steaming clay cup of spiced milk tea',
                    'caption' => '"চা-এর ধোঁয়ায় কর্মজীবনের ক্লান্তি বিলীন—বাঙালির চিরায়ত অপরাহ্নের রূপকথা।"',
                ],
                'opinionsTitle' => 'পাঠকদের সরস যুক্তি',
                'opinionsStatus' => 'সরাসরি মতামত',
                'opinions' => [
                    [
                        'author' => 'তানভীর হাসান',
                        'time' => '১০ মিনিট আগে',
                        'body' => '"আদা-চা ছাড়া বিকেল সাড়ে তিনটায় চোখ মেলে রাখা তো সংবিধান লঙ্ঘনের মতো কঠিন কাজ! কড়া একটা কাপই বাঁচিয়ে রাখে।"',
                    ],
                    [
                        'author' => 'সুবর্ণা রহমান',
                        'time' => '২৫ মিনিট আগে',
                        'body' => '"১০ মিনিটের পাওয়ার ন্যাপের ভান করতে গিয়ে একবার আধা ঘণ্টা ঘুমিয়ে বসের ডাক শুনেছিলাম। তারপর থেকে বরফ পানির মুখেই ভরসা!"',
                    ],
                    [
                        'author' => 'মাহমুদুল হক',
                        'time' => '১ ঘণ্টা আগে',
                        'body' => '"সহকর্মীর টেবিলের সামনে দাঁড়িয়ে পাঁচ মিনিট চা আর ক্রিকেটের আলোচনা করলেই স্নায়ু একদম চাঙ্গা।"',
                    ],
                ],
                'opinionPlaceholder' => 'আপনার নিজস্ব যুক্তিটি সংক্ষেপে লিখুন...',
            ],
            'filters' => [
                ['id' => 'all', 'label' => 'সকল ভোট'],
                ['id' => 'popular', 'label' => 'জনপ্রিয়'],
                ['id' => 'newest', 'label' => 'নতুন'],
            ],
            'activePolls' => [
                [
                    'id' => 'holiday',
                    'category' => 'ছুটির মেজাজ',
                    'categoryTone' => 'warm',
                    'timeLeft' => '২ দিন বাকি',
                    'question' => 'ছুটির দিনে কোনটি আপনার কাছে শ্রেষ্ঠ পরম সুখ?',
                    'lead' => 'সপ্তাহান্তের আলসেমিতে একদল ভালোবাসেন বিছানার মায়া, অন্যদল খোঁজেন বন্ধুদের আড্ডাখানা।',
                    'options' => [
                        ['label' => 'অবাধ ঘুম ও বিছানার আলসেমি', 'percent' => 46, 'barTone' => 'brand', 'emphasize' => true],
                        ['label' => 'বন্ধুদের সাথে চায়ের আড্ডা', 'percent' => 31, 'barTone' => 'warm', 'emphasize' => false],
                        ['label' => 'বাসায় প্রিয় পদের রান্না', 'percent' => 15, 'barTone' => 'warm', 'emphasize' => false],
                        ['label' => 'একা একা অজানা গন্তব্যে ঘোরা', 'percent' => 8, 'barTone' => 'outline', 'emphasize' => false],
                    ],
                    'totalVotes' => 'মোট ভোট: ৫,৬২০টি',
                    'ctaLabel' => 'ভোট দিন',
                ],
                [
                    'id' => 'rain',
                    'category' => 'ঋতুর মেজাজ',
                    'categoryTone' => 'tertiary',
                    'timeLeft' => '১ দিন বাকি',
                    'question' => 'বৃষ্টি শুরু হলে মাথায় প্রথম কোন চিন্তাটি উঁকি দেয়?',
                    'lead' => 'মেঘের গর্জনের সাথে বাঙালির খাদ্যরসিক মন জাগে নাকি নগরজীবনের জ্যামের আতঙ্ক জেঁকে বসে?',
                    'options' => [
                        ['label' => 'খিচুড়ি ও ইলিশ মাছ ভাজা', 'percent' => 48, 'barTone' => 'brand', 'emphasize' => true],
                        ['label' => 'রাস্তায় জলজট আর রিকশাভাড়ার খড়্গ', 'percent' => 28, 'barTone' => 'warm', 'emphasize' => false],
                        ['label' => 'জানালার পাশে বৃষ্টিভেজা গান', 'percent' => 16, 'barTone' => 'warm', 'emphasize' => false],
                        ['label' => 'অফিসে বৃষ্টির দোহাই দিয়ে ছুটি', 'percent' => 8, 'barTone' => 'outline', 'emphasize' => false],
                    ],
                    'totalVotes' => 'মোট ভোট: ৬,১১০টি',
                    'ctaLabel' => 'ভোট দিন',
                ],
                [
                    'id' => 'five-min',
                    'category' => 'আড্ডার রহস্য',
                    'categoryTone' => 'warm-container',
                    'timeLeft' => '৩ দিন বাকি',
                    'question' => 'বন্ধুর "এই তো ৫ মিনিটে আসছি" বলতে আসলে কতক্ষণ বোঝায়?',
                    'lead' => 'বাঙালি বন্ধুত্বের সবচেয়ে অমর মিথ এবং সময় গণনার সবচেয়ে বড় ধাঁধা।',
                    'options' => [
                        ['label' => 'কমপক্ষে আধা ঘণ্টা', 'percent' => 29, 'barTone' => 'warm', 'emphasize' => false],
                        ['label' => 'সে এখনো বিছানা ছাড়েনি', 'percent' => 51, 'barTone' => 'brand', 'emphasize' => true],
                        ['label' => 'পুরো এক ঘণ্টা', 'percent' => 15, 'barTone' => 'warm', 'emphasize' => false],
                        ['label' => 'সে আসার কথাই ভুলে গেছে', 'percent' => 5, 'barTone' => 'outline', 'emphasize' => false],
                    ],
                    'totalVotes' => 'মোট ভোট: ৪,৮২০টি',
                    'ctaLabel' => 'ভোট দিন',
                ],
            ],
            'archive' => [
                'title' => 'গত সপ্তাহের নিষ্পন্ন জনমত ও জনরায়',
                'meta' => 'আর্কাইভ ও চূড়ান্ত বিশ্লেষণ • সংখ্যা ৮৩',
                'eyebrow' => 'সেরা রায়: মাসের শেষ সপ্তাহে বিরিয়ানি বনাম ডাল-ভাত',
                'headline' => 'জনগণ রায় দিয়েছে: "পকেটের টান বাড়লেও মাসে একবার বিরিয়ানি খাওয়া মানবিক অধিকার!"',
                'body' => 'গত সপ্তাহের মহাবিতর্কে ১৪,৩০০ জন ভোটারের মধ্যে ৬৪% পাঠক ভোট দিয়েছেন বিরিয়ানির পক্ষে। তাঁদের মতে, মাস শেষে আর্থিক টানাটানি সাময়িক, কিন্তু একটা সুস্বাদু কাচ্চির প্লেট মানুষকে কঠিন দিনগুলোতেও নতুন করে বাঁচার প্রেরণা যোগায়। বিপরীতে ৩৬% ভোটার ডাল-ভাতের শান্তিময় সরলতাকে জীবনের পরম সত্য বলে গণ্য করেছেন।',
                'stats' => [
                    ['label' => 'বিজয়ী বিকল্প', 'value' => 'বিরিয়ানি (৬৪%)', 'tone' => 'brand'],
                    ['label' => 'রানার-আপ বিকল্প', 'value' => 'ডাল-ভাত (৩৬%)', 'tone' => 'default'],
                    ['label' => 'সংগৃহীত ভোট', 'value' => '১৪,৩০০টি', 'tone' => 'warm'],
                ],
                'donut' => [
                    'centerPercent' => '৬৪%',
                    'centerLabel' => 'বিরিয়ানি প্রেমী',
                    'primaryPercent' => 64,
                    'legend' => [
                        ['label' => 'বিরিয়ানি (৯,১৫২)', 'tone' => 'brand'],
                        ['label' => 'ডাল-ভাত (৫,১৪৮)', 'tone' => 'warm'],
                    ],
                ],
            ],
            'suggest' => [
                'title' => 'আপনার মনের কোনো কৌতূহল বা মজার বিতর্ক আছে?',
                'lead' => 'বাঙালির জীবনের কোনো অদ্ভুত অভ্যাস কিংবা ছোট ছোট দ্বিধা নিয়ে জনমতের প্রশ্ন জমা দিন। নির্বাচিত প্রশ্নটি আগামী সংখ্যার ‘আজকের মহা বিতর্ক’ হিসেবে প্রকাশিত হবে।',
                'questionLabel' => 'বিতর্কের মূল প্রশ্ন',
                'questionPlaceholder' => "যেমন: সকালে অ্যালার্ম বাজার পর 'স্নুজ' বাটন চাপ দেওয়া কতটা যুক্তিসঙ্গত?",
                'option1Label' => 'সম্ভাব্য বিকল্প ১',
                'option1Placeholder' => 'প্রথম বিকল্প...',
                'option2Label' => 'সম্ভাব্য বিকল্প ২',
                'option2Placeholder' => 'দ্বিতীয় বিকল্প...',
                'nameLabel' => 'আপনার নাম',
                'namePlaceholder' => 'ফারহানা আহমেদ',
                'locationLabel' => 'আপনার শহর / এলাকা',
                'locationPlaceholder' => 'মতিঝিল, ঢাকা',
                'submitLabel' => 'প্রশ্ন প্রস্তাব করুন',
                'note' => '* প্রস্তাবটি গৃহীত হলে আপনার নাম সহ আগামী শুক্রবার প্রকাশিত হবে।',
                'successMessage' => 'আপনার প্রস্তাবটি সফলভাবে সম্পাদকীয় টেবিলে জমা হয়েছে! ধন্যবাদ।',
            ],
        ];
    }
}
