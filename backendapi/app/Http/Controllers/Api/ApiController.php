<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Setting;
use App\Models\Page;
use App\Models\Location;
use App\Models\Practice;
use App\Models\Transaction;
use App\Models\Post;
use App\Models\Inquiry;
use App\Models\Newsletter;
use Illuminate\Support\Facades\Cache;

class ApiController extends Controller
{
    /**
     * Get all public settings (Brand, Contact, Currencies, Socials)
     */
    public function settings()
    {
        return Cache::remember('api_settings', 60, function () {
            $settings = Setting::all();
            $data = [];
            foreach ($settings as $setting) {
                $val = match ($setting->type) {
                    'json' => json_decode($setting->value, true),
                    'boolean' => filter_var($setting->value, FILTER_VALIDATE_BOOLEAN),
                    default => $setting->value,
                };
                $data[$setting->key] = $val;
            }
            return response()->json([
                'status' => 'success',
                'data' => $data,
            ]);
        });
    }

    /**
     * Get dynamic page with all its active visual sections
     */
    public function page(string $slug)
    {
        $page = Page::where('slug', $slug)
            ->where('status', 'Published')
            ->with(['sections' => function ($q) {
                $q->where('is_active', true)->orderBy('sort_order');
            }])
            ->first();

        if (!$page) {
            return response()->json([
                'status' => 'error',
                'message' => 'Page not found',
            ], 404);
        }

        // Format sections into key-value map for instant frontend consumption
        $sections = [];
        foreach ($page->sections as $sec) {
            $sections[$sec->section_key] = $sec->content;
        }

        return response()->json([
            'status' => 'success',
            'data' => [
                'id' => $page->id,
                'title' => $page->title,
                'slug' => $page->slug,
                'template' => $page->template,
                'meta_title' => $page->meta_title,
                'meta_description' => $page->meta_description,
                'sections' => $sections,
            ],
        ]);
    }

    /**
     * Get the 8 Global Financial Hubs
     */
    public function locations()
    {
        return Cache::remember('api_locations', 60, function () {
            $locations = Location::where('is_active', true)->orderBy('sort_order')->get();
            return response()->json([
                'status' => 'success',
                'data' => $locations,
            ]);
        });
    }

    /**
     * Get Practices / Advisory Services
     */
    public function practices()
    {
        return Cache::remember('api_practices', 60, function () {
            $practices = Practice::where('is_active', true)->orderBy('sort_order')->get();
            return response()->json([
                'status' => 'success',
                'data' => $practices,
            ]);
        });
    }

    public function practiceDetail(string $slug)
    {
        $practice = Practice::where('slug', $slug)->where('is_active', true)->first();

        if (!$practice) {
            return response()->json(['status' => 'error', 'message' => 'Practice not found'], 404);
        }

        return response()->json(['status' => 'success', 'data' => $practice]);
    }

    /**
     * Get Transactions / Closed Mandates
     */
    public function transactions()
    {
        return Cache::remember('api_transactions', 60, function () {
            $transactions = Transaction::orderBy('sort_order')->get();
            return response()->json([
                'status' => 'success',
                'data' => $transactions,
            ]);
        });
    }

    /**
     * Get Blog / Research Posts
     */
    public function posts(Request $request)
    {
        $posts = Post::where('status', 'Published')
            ->with('category')
            ->orderBy('id', 'desc')
            ->paginate($request->get('limit', 10));

        return response()->json([
            'status' => 'success',
            'data' => $posts,
        ]);
    }

    public function postDetail(string $slug)
    {
        $post = Post::where('slug', $slug)
            ->where('status', 'Published')
            ->with(['category', 'tags'])
            ->first();

        if (!$post) {
            return response()->json(['status' => 'error', 'message' => 'Post not found'], 404);
        }

        $post->increment('views_count');

        return response()->json(['status' => 'success', 'data' => $post]);
    }

    /**
     * Submit Consultation Booking or Contact Lead
     */
    public function submitInquiry(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:50',
            'organization' => 'nullable|string|max:255',
            'capital_range' => 'nullable|string|max:100',
            'mandate_type' => 'nullable|string|max:100',
            'message' => 'required|string',
        ]);

        $validated['ip_address'] = $request->ip();
        $validated['status'] = 'Unread';

        $inquiry = Inquiry::create($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Your consultation request has been received with strict fiduciary discretion. An advisory director will connect shortly.',
            'inquiry_id' => $inquiry->id,
        ], 201);
    }

    /**
     * Newsletter Subscription
     */
    public function subscribeNewsletter(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email|max:255',
        ]);

        Newsletter::updateOrCreate(
            ['email' => $validated['email']],
            ['status' => 'Subscribed', 'ip_address' => $request->ip()]
        );

        return response()->json([
            'status' => 'success',
            'message' => 'Subscribed to Black Markt Strategic Briefs.',
        ]);
    }
}
