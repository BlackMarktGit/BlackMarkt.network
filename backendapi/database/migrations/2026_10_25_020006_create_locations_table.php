<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('locations', function (Blueprint $table) {
            $table->id();
            $table->string('city_code', 10)->unique(); // LON, NYC, LOS, NBO, JNB, CAI, ACC, KGL
            $table->string('name', 100);
            $table->string('hub_name', 255);
            $table->string('market', 100);
            $table->string('timezone', 100);
            $table->string('tz_abbr', 20);
            $table->string('focus', 255);
            $table->string('atmosphere', 255);
            $table->string('image_url', 255);
            $table->string('pan_keyframe', 50)->default('pan-subtle-right');
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('locations');
    }
};
