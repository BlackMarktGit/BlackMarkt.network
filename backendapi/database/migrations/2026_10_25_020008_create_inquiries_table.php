<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('inquiries', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('phone')->nullable();
            $table->string('organization')->nullable();
            $table->string('capital_range')->nullable(); // e.g. $10M - $50M, $100M+
            $table->string('mandate_type')->nullable(); // Sovereign Advisory, PE Diligence, etc.
            $table->longText('message');
            $table->string('status')->default('Unread'); // Unread, Read, In Discussion, Closed
            $table->text('internal_notes')->nullable();
            $table->string('ip_address', 45)->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('inquiries');
    }
};
