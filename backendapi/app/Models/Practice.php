<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Practice extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug',
        'title',
        'eyebrow',
        'short_desc',
        'full_desc',
        'icon',
        'deal_size',
        'key_metrics',
        'capabilities',
        'deliverables',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'key_metrics' => 'array',
        'capabilities' => 'array',
        'deliverables' => 'array',
        'is_active' => 'boolean',
    ];
}
