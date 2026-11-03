<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('daily_themes', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('highlight')->nullable();
            $table->text('lead')->nullable();
            $table->date('theme_date')->unique();
            $table->string('status')->default('upcoming');
            $table->dateTime('starts_at')->nullable();
            $table->dateTime('ends_at')->nullable();
            // Soft reference to articles.id (no constraint: articles also reference themes).
            $table->unsignedBigInteger('featured_article_id')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('daily_themes');
    }
};
