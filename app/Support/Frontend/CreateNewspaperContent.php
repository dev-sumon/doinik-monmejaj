<?php

namespace App\Support\Frontend;

class CreateNewspaperContent
{
    /**
     * Demo payload for the create-newspaper page (replace with models later).
     *
     * @return array<string, mixed>
     */
    public static function demo(): array
    {
        return [
            'hero' => [
                'badge' => 'সম্পাদকীয় খসড়া ডেস্ক',
                'title' => 'আজ আপনার জীবনে কী ঘটেছে?',
                'lead' => 'দিনের তিনটি ছোট ছোট সাধারণ ঘটনা লিখে ফেলুন। সেগুলোকে রূপ দেওয়া হবে আপনার ব্যক্তিগত দৈনিক পত্রিকার আকর্ষণীয় প্রথম পাতায়।',
                'editionLabel' => 'মুদ্রণ সংস্করণ',
                'editionValue' => 'দৈনিক প্রকাশ #০৮',
            ],
            'events' => [
                [
                    'id' => 'event1',
                    'number' => '১',
                    'label' => 'ঘটনা ১: দিনের সবচেয়ে বড় বা মজার ঘটনা',
                    'badge' => 'প্রধান খবর',
                    'tone' => 'brand',
                    'placeholder' => 'আজ অফিসে বা পড়াশোনায় এমন কী ঘটল, যা কাউকে না বললেই নয়? বসের অদ্ভুত নির্দেশ, সহকর্মীর হাসির কাণ্ড নাকি অদ্ভুত কোনো কাজের চাপ?',
                    'defaultValue' => 'আজ দুপুরের মিটিংয়ে প্রজেক্টরের তার আটকে গিয়ে পুরো আধঘণ্টা সবাই চুপচাপ বসে রইল। অবশেষে জানা গেল সুইচটাই অফ ছিল!',
                    'hint' => 'প্রথম পাতার ব্যানার হেডলাইনে রূপান্তরিত হবে',
                    'hintIcon' => 'tips',
                    'maxWords' => 300,
                    'categoryOptions' => [
                        'অফিস ও কর্মক্ষেত্র',
                        'শহুরে জীবন ও যানজট',
                        'চা ও আড্ডার কথকতা',
                        'অপ্রত্যাশিত চমক',
                        'ব্যক্তিগত অনুভূতি',
                    ],
                    'defaultCategory' => 'অফিস ও কর্মক্ষেত্র',
                ],
                [
                    'id' => 'event2',
                    'number' => '২',
                    'label' => 'ঘটনা ২: আরেকটি অপ্রত্যাশিত মুহূর্ত',
                    'badge' => 'উপ-শিরোনাম',
                    'tone' => 'warm',
                    'placeholder' => 'রাস্তায় জ্যামে বসে কী ভাবলেন, কিংবা কোন অদ্ভুত ঘটনা নজর কাড়ল? বাসের জানালায় অচেনা মানুষের সংলাপ?',
                    'defaultValue' => 'মতিঝিলের জ্যামে বসে এক বৃদ্ধ রিকশাচালক হঠাৎ পাশের গাড়ির চালককে মুচকি হেসে বললেন—"তাড়াহুড়া কইরেন না ভাই, ঢাকা শহর কাইলকেও থাকব!"',
                    'hint' => 'পৃষ্ঠার দ্বিতীয় কলামে স্থান পাবে',
                    'hintIcon' => 'newspaper',
                    'maxWords' => 200,
                    'categoryOptions' => null,
                    'defaultCategory' => null,
                ],
                [
                    'id' => 'event3',
                    'number' => '৩',
                    'label' => 'ঘটনা ৩: দিনের শেষের মিষ্টি বা অলস স্মৃতি',
                    'badge' => 'সংক্ষিপ্ত খবর',
                    'tone' => 'tertiary',
                    'placeholder' => 'দিনের শেষে পরিবারের আড্ডা, গরম চা নাকি এক অদ্ভুত ক্লান্তি? বারান্দায় বৃষ্টি নাকি মৃদু গান?',
                    'defaultValue' => 'সন্ধ্যার পর মোড়ের মাটির ভাঁড়ের আদা-চা আর পুরানো ক্যাসেটের কিশোর কুমারের গান সব ক্লান্তি মুছে দিল।',
                    'hint' => 'শেষ পাতার হালকা চালের কোলাজ হিসেবে মুদ্রিত হবে',
                    'hintIcon' => 'coffee',
                    'maxWords' => 150,
                    'categoryOptions' => null,
                    'defaultCategory' => null,
                ],
            ],
            'meta' => [
                'sectionTitle' => 'পত্রিকার বিন্যাস ও লেখক পরিচয়',
                'mastheadLabel' => 'পত্রিকার নাম',
                'mastheadDefault' => 'আমার আজকের কাগজ',
                'bylineLabel' => 'আপনার ছদ্মনাম বা পদবী',
                'bylinePlaceholder' => "যেমন: 'বিশেষ প্রতিনিধি', 'অলস সাংবাদিক'",
                'bylineDefault' => 'বিশেষ সংবাদদাতা',
                'styleLabel' => 'লেখার শৈলী নির্বাচন করুন',
                'visibilityLabel' => 'প্রকাশের দৃশ্যমানতা',
                'generateLabel' => 'আমার পত্রিকা তৈরি করুন (ম্যাজিক দেখুন)',
                'generateHint' => 'ক্লিক করার পর আমাদের স্বয়ংক্রিয় সম্পাদকীয় ইঞ্জিন আপনার গল্প নিখুঁতভাবে সাজিয়ে তুলবে।',
                'generatingLabel' => 'সম্পাদকীয় ইঞ্জিন কাজ করছে...',
                'doneLabel' => 'কাগজ তৈরি সম্পন্ন!',
                'successMessage' => 'অভিনন্দন! আপনার আজকের চমৎকার ব্যক্তিগত পত্রিকাটি সফলভাবে প্রথম পাতায় রূপ নিল।',
            ],
            'styles' => [
                [
                    'id' => 'funny',
                    'icon' => 'smile',
                    'title' => 'মজার ও হাস্যরসাত্মক',
                    'body' => 'ড্রামা, কৌতুক ও চুটকি মেশানো ব্যঙ্গাত্মক উপস্থাপন।',
                    'tag' => 'জনপ্রিয় শৈলী',
                    'tone' => 'brand',
                    'previewLabel' => 'শৈলী: মজার ও হাস্যরসাত্মক',
                ],
                [
                    'id' => 'dramatic',
                    'icon' => 'drama',
                    'title' => 'নাটকীয় ও আবেগী',
                    'body' => 'রোমাঞ্চকর ও রোমান্টিক শৈলী এবং গভীর অনুভূতির সুর।',
                    'tag' => 'সাহিত্যিক রূপ',
                    'tone' => 'warm',
                    'previewLabel' => 'শৈলী: নাটকীয় ও আবেগী',
                ],
                [
                    'id' => 'news',
                    'icon' => 'mic',
                    'title' => 'সাধারণ ও নিরপেক্ষ',
                    'body' => 'শান্ত ও নিরেট সংবাদের মতো আনুষ্ঠানিক প্রতিবেদকের ভাষা।',
                    'tag' => 'সাংবাদিক সুলভ',
                    'tone' => 'tertiary',
                    'previewLabel' => 'শৈলী: সাধারণ ও নিরপেক্ষ',
                ],
            ],
            'visibility' => [
                [
                    'id' => 'public',
                    'title' => 'সবার সঙ্গে শেয়ার করব',
                    'body' => 'পাবলিক ফিডে পাঠকদের পড়ার জন্য প্রদর্শিত হবে',
                ],
                [
                    'id' => 'private',
                    'title' => 'শুধু আমি দেখব',
                    'body' => 'ব্যক্তিগত ডিজিটাল আর্কাইভে গোপন ও সুরক্ষিত থাকবে',
                ],
            ],
            'preview' => [
                'liveLabel' => 'লাইভ নমুনা প্রিভিউ',
                'draftLabel' => 'মুদ্রিত খসড়া রূপরেখা',
                'issueLeft' => 'সংখ্যা: ৩৪৮৭',
                'issueDate' => '১৫ চৈত্র, ১৪৩০ বঙ্গাব্দ',
                'issuePrice' => 'মূল্য: অমূল্য',
                'tagline' => 'আপনার জীবনের দৈনন্দিন সংকলন',
                'defaultHeadline' => 'অফিসের প্রজেক্টরে বিদ্যুৎ বিভ্রাট: অবশেষে ধরা পড়ল সুইচ অফ থাকার রহস্য!',
                'fallbackHeadline' => 'অফিসের প্রজেক্টরে বিদ্যুৎ বিভ্রাট: অবশেষে সমাধান!',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgg78elu-yC93ZneO8pPOOaMX-H18anwuUaBeTUQl1PcKpB97A105acDvxw7OgfNtq0XmyY6_SPGAq2cP2kp9w9o0Na0QYRP_lKDYC8YBo8oxi9hUQDu66zEOtrY2xqKW-3TMWzX1ICpk00NlQ7szR9V5AYMyLCHj2-FL32CuX61SMPRECRPZe9IeiKw2qoTazQJqVTcKur2FmtgI5Si8LkVSTndPgfAkAcXT95ZPU48el1-7BL9eH',
                'imageAlt' => 'Vintage Dhaka office desk with tea and newspaper',
                'imageCaption' => 'আজকের দুপুর: প্রজেক্টর সংকটের পর সবার মুখে তৃপ্তির হাসি',
                'col2Title' => 'রাস্তার সংলাপ ও জীবনবোধ',
                'col2Meta' => 'বিস্তারিত পৃষ্ঠা ৩',
                'col3Title' => 'এক ভাঁড় চায়ের সৌরভ',
                'col3Meta' => 'আড্ডা সমাচার',
                'pendingLabel' => 'অপেক্ষমাণ রূপরেখা',
                'tip' => 'আপনি যত বিস্তারিত এবং অনুভূতি প্রকাশ করে লিখবেন, আমাদের কৃত্রিম বুদ্ধিমত্তার সম্পাদক তত নিখুঁত ও রসালো রূপক তৈরি করতে সক্ষম হবে!',
            ],
            'footerCta' => [
                'title' => 'গতকালের জনপ্রিয় পাঠকদের কাগজ',
                'lead' => 'দেখে নিন অন্যরা কীভাবে তাঁদের দৈনন্দিন স্মৃতিগুলো সুন্দর প্রথম পাতায় রূপ দিয়েছেন।',
                'archiveLabel' => 'আর্কাইভ ঘুরে দেখুন',
                'bestLabel' => 'আজকের সেরা কলাম',
            ],
        ];
    }
}
