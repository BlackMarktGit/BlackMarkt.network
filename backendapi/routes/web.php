<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\PageController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\PracticeController;
use App\Http\Controllers\Admin\TransactionController;
use App\Http\Controllers\Admin\NewsletterController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\InquiryController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\LocationController;

Route::get('/', function () {
    return redirect()->route('admin.dashboard');
});

// Admin Authentication Routes (Screenshot 4)
Route::prefix('admin')->group(function () {
    Route::get('/login', [AuthController::class, 'showLogin'])->name('admin.login');
    Route::post('/login', [AuthController::class, 'login'])->name('admin.login.submit');
    Route::post('/logout', [AuthController::class, 'logout'])->name('admin.logout');

    // Protected Admin Routes
    Route::middleware('auth')->group(function () {
        Route::get('/', function () {
            return redirect()->route('admin.dashboard');
        });

        Route::get('/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');

        // Pages Management (Screenshot 2)
        Route::prefix('pages')->name('admin.pages.')->group(function () {
            Route::get('/', [PageController::class, 'index'])->name('index');
            Route::get('/create', [PageController::class, 'create'])->name('create');
            Route::post('/', [PageController::class, 'store'])->name('store');
            Route::get('/{page}/edit', [PageController::class, 'edit'])->name('edit');
            Route::put('/{page}', [PageController::class, 'update'])->name('update');
            Route::delete('/{page}', [PageController::class, 'destroy'])->name('destroy');
            Route::post('/bulk', [PageController::class, 'bulk'])->name('bulk');
        });

        // Blog / Posts Management (Screenshot 1)
        Route::prefix('blog')->name('admin.blog.')->group(function () {
            Route::prefix('posts')->name('posts.')->group(function () {
                Route::get('/', [PostController::class, 'index'])->name('index');
                Route::get('/create', [PostController::class, 'create'])->name('create');
                Route::post('/', [PostController::class, 'store'])->name('store');
                Route::get('/{post}/edit', [PostController::class, 'edit'])->name('edit');
                Route::put('/{post}', [PostController::class, 'update'])->name('update');
                Route::delete('/{post}', [PostController::class, 'destroy'])->name('destroy');
                Route::post('/bulk', [PostController::class, 'bulk'])->name('bulk');
            });

            Route::prefix('categories')->name('categories.')->group(function () {
                Route::get('/', [CategoryController::class, 'index'])->name('index');
                Route::post('/', [CategoryController::class, 'store'])->name('store');
                Route::put('/{category}', [CategoryController::class, 'update'])->name('update');
                Route::delete('/{category}', [CategoryController::class, 'destroy'])->name('destroy');
            });
        });

        // Practices / Advisory Services
        Route::prefix('practices')->name('admin.practices.')->group(function () {
            Route::get('/', [PracticeController::class, 'index'])->name('index');
            Route::get('/create', [PracticeController::class, 'create'])->name('create');
            Route::post('/', [PracticeController::class, 'store'])->name('store');
            Route::get('/{practice}/edit', [PracticeController::class, 'edit'])->name('edit');
            Route::put('/{practice}', [PracticeController::class, 'update'])->name('update');
            Route::delete('/{practice}', [PracticeController::class, 'destroy'])->name('destroy');
        });

        // Transactions / Closed Mandates
        Route::prefix('transactions')->name('admin.transactions.')->group(function () {
            Route::get('/', [TransactionController::class, 'index'])->name('index');
            Route::get('/create', [TransactionController::class, 'create'])->name('create');
            Route::post('/', [TransactionController::class, 'store'])->name('store');
            Route::get('/{transaction}/edit', [TransactionController::class, 'edit'])->name('edit');
            Route::put('/{transaction}', [TransactionController::class, 'update'])->name('update');
            Route::delete('/{transaction}', [TransactionController::class, 'destroy'])->name('destroy');
        });

        // Newsletter Subscribers
        Route::prefix('newsletters')->name('admin.newsletters.')->group(function () {
            Route::get('/', [NewsletterController::class, 'index'])->name('index');
            Route::get('/export', [NewsletterController::class, 'export'])->name('export');
            Route::delete('/{newsletter}', [NewsletterController::class, 'destroy'])->name('destroy');
        });

        // Inquiries / Contact Form & Consultation Bookings (Image 4)
        Route::prefix('contact')->name('admin.inquiries.')->group(function () {
            Route::get('/', [InquiryController::class, 'index'])->name('index');
            Route::get('/export', [InquiryController::class, 'export'])->name('export');
            Route::get('/{inquiry}', [InquiryController::class, 'show'])->name('show');
            Route::put('/{inquiry}/status', [InquiryController::class, 'updateStatus'])->name('status');
            Route::delete('/{inquiry}', [InquiryController::class, 'destroy'])->name('destroy');
        });

        // 30+ Settings Center (Image 3)
        Route::prefix('settings')->name('admin.settings.')->group(function () {
            Route::get('/', [SettingController::class, 'index'])->name('index');
            Route::post('/', [SettingController::class, 'update'])->name('update');
        });

        // Admin Profile & Security
        Route::get('/profile', [ProfileController::class, 'edit'])->name('admin.profile.edit');
        Route::put('/profile', [ProfileController::class, 'update'])->name('admin.profile.update');

        // Global Financial Hubs (Locations)
        Route::prefix('locations')->name('admin.locations.')->group(function () {
            Route::get('/', [LocationController::class, 'index'])->name('index');
            Route::put('/{location}', [LocationController::class, 'update'])->name('update');
        });
    });
});
