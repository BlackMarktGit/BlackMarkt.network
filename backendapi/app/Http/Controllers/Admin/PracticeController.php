<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Practice;
use App\Models\ActivityLog;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class PracticeController extends Controller
{
    public function index(Request $request)
    {
        $practices = Practice::orderBy('sort_order')->orderBy('id', 'asc')->get();
        return view('admin.practices.index', compact('practices'));
    }

    public function create()
    {
        return view('admin.practices.form', ['practice' => new Practice()]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:practices,slug',
            'eyebrow' => 'nullable|string|max:255',
            'short_desc' => 'required|string',
            'full_desc' => 'nullable|string',
            'icon' => 'nullable|string|max:50',
            'deal_size' => 'nullable|string|max:100',
            'sort_order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['title']);
        }

        $validated['is_active'] = $request->has('is_active');
        $validated['sort_order'] = $validated['sort_order'] ?? 0;

        // Process dynamic arrays
        $validated['capabilities'] = $this->parseLinesToArray($request->input('capabilities_text'));
        $validated['deliverables'] = $this->parseLinesToArray($request->input('deliverables_text'));
        $validated['key_metrics'] = $request->input('key_metrics', []);

        $practice = Practice::create($validated);
        Cache::forget('api_practices');

        ActivityLog::create([
            'user_id' => Auth::id(),
            'user_name' => Auth::user()?->name ?? 'System Admin',
            'user_role' => Auth::user()?->role ?? 'admin',
            'action' => 'created advisory practice ' . $practice->title,
            'module' => 'practices',
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.practices.index')->with('success', 'Advisory practice created successfully!');
    }

    public function edit(Practice $practice)
    {
        return view('admin.practices.form', compact('practice'));
    }

    public function update(Request $request, Practice $practice)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:practices,slug,' . $practice->id,
            'eyebrow' => 'nullable|string|max:255',
            'short_desc' => 'required|string',
            'full_desc' => 'nullable|string',
            'icon' => 'nullable|string|max:50',
            'deal_size' => 'nullable|string|max:100',
            'sort_order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        $validated['is_active'] = $request->has('is_active');
        $validated['sort_order'] = $validated['sort_order'] ?? 0;

        $validated['capabilities'] = $this->parseLinesToArray($request->input('capabilities_text'));
        $validated['deliverables'] = $this->parseLinesToArray($request->input('deliverables_text'));
        $validated['key_metrics'] = $request->input('key_metrics', []);

        $practice->update($validated);
        Cache::forget('api_practices');

        ActivityLog::create([
            'user_id' => Auth::id(),
            'user_name' => Auth::user()?->name ?? 'System Admin',
            'user_role' => Auth::user()?->role ?? 'admin',
            'action' => 'updated advisory practice ' . $practice->title,
            'module' => 'practices',
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.practices.index')->with('success', 'Advisory practice updated successfully.');
    }

    public function destroy(Practice $practice)
    {
        $title = $practice->title;
        $practice->delete();
        Cache::forget('api_practices');

        ActivityLog::create([
            'user_id' => Auth::id(),
            'user_name' => Auth::user()?->name ?? 'System Admin',
            'user_role' => Auth::user()?->role ?? 'admin',
            'action' => 'deleted advisory practice ' . $title,
            'module' => 'practices',
            'ip_address' => request()->ip(),
        ]);

        return redirect()->route('admin.practices.index')->with('success', 'Practice deleted successfully.');
    }

    private function parseLinesToArray(?string $text): array
    {
        if (empty($text)) {
            return [];
        }
        $lines = preg_split('/\r\n|\r|\n/', trim($text));
        return array_values(array_filter(array_map('trim', $lines)));
    }
}

