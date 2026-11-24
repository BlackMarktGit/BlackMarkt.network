<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('title');
            $table->string('deal_value'); // $1.8B, $450M, etc.
            $table->string('sector'); // Digital Infrastructure, Energy, FinTech, Mining
            $table->string('geography'); // Pan-Africa, West Africa, Kenya, etc.
            $table->string('advisory_role');
            $table->text('summary');
            $table->longText('case_study')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
