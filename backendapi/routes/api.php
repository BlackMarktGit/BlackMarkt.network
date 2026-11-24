<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ApiController;

Route::prefix('v1')->group(function () {
    // Brand, Currencies & Public Settings
    Route::get('/settings', [ApiController::class, 'settings']);

    // Dynamic Pages with Sections (Hero, Values, Telemetry, etc.)
    Route::get('/pages/{slug}', [ApiController::class, 'page']);

    // 8 Global Financial Hubs
    Route::get('/locations', [ApiController::class, 'locations']);

    // Practices & Advisory Services
    Route::get('/practices', [ApiController::class, 'practices']);
    Route::get('/practices/{slug}', [ApiController::class, 'practiceDetail']);

    // Transactions / Closed Mandates
    Route::get('/transactions', [ApiController::class, 'transactions']);

    // Blog / Research Publications
    Route::get('/posts', [ApiController::class, 'posts']);
    Route::get('/posts/{slug}', [ApiController::class, 'postDetail']);

    // Consultation Lead Inquiries
    Route::post('/inquiries', [ApiController::class, 'submitInquiry']);

    // Newsletter Enrollment
    Route::post('/newsletter/subscribe', [ApiController::class, 'subscribeNewsletter']);
});
