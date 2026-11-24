<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('practices', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('title');
            $table->string('eyebrow');
            $table->text('short_desc');
            $table->longText('full_desc');
            $table->string('icon')->default('chess');
            $table->string('deal_size')->default('$450M – $5B+');
            $table->json('key_metrics')->nullable();
            $table->json('capabilities')->nullable();
            $table->json('deliverables')->nullable();
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('practices');
    }
};
