<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // 1. Testimonials
        Schema::create('testimonials', function (Blueprint $table) {
            $table->id();
            $table->string('client_name');
            $table->string('title'); // e.g. Managing Director, Sovereign Wealth Fund
            $table->string('institution')->nullable();
            $table->string('avatar')->nullable();
            $table->text('quote');
            $table->tinyInteger('rating')->default(5);
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // 2. FAQs
        Schema::create('faqs', function (Blueprint $table) {
            $table->id();
            $table->string('category')->default('General');
            $table->text('question');
            $table->longText('answer');
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // 3. Newsletters
        Schema::create('newsletters', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->string('status')->default('Subscribed');
            $table->string('ip_address', 45)->nullable();
            $table->timestamps();
        });

        // 4. Careers & Applications
        Schema::create('careers', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('division'); // Sovereign Advisory, PE Diligence, etc.
            $table->string('location')->default('London / Hybrid');
            $table->string('type')->default('Full-Time');
            $table->string('experience_level')->default('Senior');
            $table->longText('description');
            $table->json('requirements')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('applications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('career_id')->nullable()->constrained('careers')->nullOnDelete();
            $table->string('name');
            $table->string('email');
            $table->string('phone')->nullable();
            $table->string('resume_url');
            $table->text('cover_letter')->nullable();
            $table->string('status')->default('Under Review'); // Under Review, Shortlisted, Interviewed, Closed
            $table->timestamps();
        });

        // 5. Announcements
        Schema::create('announcements', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('message');
            $table->string('link_url')->nullable();
            $table->string('button_text')->nullable();
            $table->boolean('is_active')->default(true);
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->timestamps();
        });

        // 6. Ecommerce / Mandates / Digital Advisory Products
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('sku')->nullable();
            $table->decimal('price', 12, 2)->default(0.00);
            $table->string('currency', 10)->default('USD');
            $table->string('thumbnail')->nullable();
            $table->string('file_url')->nullable();
            $table->text('short_desc')->nullable();
            $table->longText('description')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_number')->unique();
            $table->string('client_name');
            $table->string('client_email');
            $table->decimal('total_amount', 12, 2)->default(0.00);
            $table->string('currency', 10)->default('USD');
            $table->string('payment_method')->default('stripe');
            $table->string('status')->default('processing'); // processing, completed, cancelled
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('orders');
        Schema::dropIfExists('products');
        Schema::dropIfExists('announcements');
        Schema::dropIfExists('applications');
        Schema::dropIfExists('careers');
        Schema::dropIfExists('newsletters');
        Schema::dropIfExists('faqs');
        Schema::dropIfExists('testimonials');
    }
};
