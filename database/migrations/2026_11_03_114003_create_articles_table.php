<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('category_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('daily_theme_id')->nullable()->constrained()->nullOnDelete();
            $table->string('masthead');
            $table->string('byline')->nullable();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('excerpt')->nullable();
            $table->longText('body')->nullable();
            $table->text('pull_quote')->nullable();
            $table->string('cover_image')->nullable();
            $table->json('events')->nullable();
            $table->string('style')->default('funny');
            $table->string('visibility')->default('public');
            $table->string('status')->default('draft');
            $table->boolean('is_featured')->default(false);
            $table->unsignedInteger('edition_no')->nullable();
            $table->unsignedSmallInteger('read_time')->nullable();
            $table->unsignedInteger('hearts_count')->default(0);
            $table->unsignedInteger('comments_count')->default(0);
            $table->unsignedInteger('bookmarks_count')->default(0);
            $table->timestamp('published_at')->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->index(['status', 'visibility', 'published_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
