<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;

    protected $fillable = [
        'city_code',
        'name',
        'hub_name',
        'market',
        'timezone',
        'tz_abbr',
        'focus',
        'atmosphere',
        'image_url',
        'pan_keyframe',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
