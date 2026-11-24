<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Page;
use App\Models\PageSection;
use App\Models\ActivityLog;
use Illuminate\Support\Facades\Auth;

class PageController extends Controller
{
    public function index(Request $request)
    {
        $query = Page::query()->with('sections');

        if ($request->filled('search')) {
            $query->where('title', 'like', '%' . $request->search . '%')
                  ->orWhere('slug', 'like', '%' . $request->search . '%');
        }

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        $pages = $query->orderBy('sort_order')->orderBy('id', 'desc')->paginate($request->get('limit', 10));

        return view('admin.pages.index', compact('pages'));
    }

    public function create()
    {
        return view('admin.pages.form', ['page' => new Page()]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:pages,slug',
            'template' => 'required|in:Homepage,Default,Page detail',
            'status' => 'required|in:Published,Pending,Draft',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string',
        ]);

        $page = Page::create($validated);

        ActivityLog::create([
            'user_id' => Auth::id(),
            'user_name' => Auth::user()?->name ?? 'System Admin',
            'user_role' => Auth::user()?->role ?? 'admin',
            'action' => 'created page ' . $page->title,
            'module' => 'pages',
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.pages.edit', $page->id)->with('success', 'Page created successfully! You can now configure its visual sections.');
    }

    public function edit(Page $page)
    {
        $page->load('sections');
        return view('admin.pages.edit', compact('page'));
    }

    public function update(Request $request, Page $page)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:pages,slug,' . $page->id,
            'template' => 'required|in:Homepage,Default,Page detail',
            'status' => 'required|in:Published,Pending,Draft',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string',
        ]);

        $page->update($validated);

        // Update Sections if submitted
        if ($request->has('sections')) {
            foreach ($request->sections as $sectionKey => $sectionData) {
                PageSection::updateOrCreate(
                    [
                        'page_id' => $page->id,
                        'section_key' => $sectionKey,
                    ],
                    [
                        'title' => $sectionData['title'] ?? ucfirst(str_replace('_', ' ', $sectionKey)),
                        'content' => $sectionData['content'] ?? [],
                        'is_active' => isset($sectionData['is_active']),
                    ]
                );
            }
        }

        ActivityLog::create([
            'user_id' => Auth::id(),
            'user_name' => Auth::user()?->name ?? 'System Admin',
            'user_role' => Auth::user()?->role ?? 'admin',
            'action' => 'updated sections on ' . $page->title,
            'module' => 'pages',
            'ip_address' => $request->ip(),
        ]);

        return back()->with('success', 'Page and visual sections updated successfully! Changes are live on the platform.');
    }

    public function destroy(Page $page)
    {
        $title = $page->title;
        $page->delete();

        ActivityLog::create([
            'user_id' => Auth::id(),
            'user_name' => Auth::user()?->name ?? 'System Admin',
            'user_role' => Auth::user()?->role ?? 'admin',
            'action' => 'deleted page ' . $title,
            'module' => 'pages',
            'ip_address' => request()->ip(),
        ]);

        return redirect()->route('admin.pages.index')->with('success', 'Page deleted successfully.');
    }

    public function bulk(Request $request)
    {
        $action = $request->input('action');
        $ids = $request->input('ids', []);

        if (empty($ids)) {
            return back()->with('error', 'No pages selected.');
        }

        if ($action === 'delete') {
            Page::whereIn('id', $ids)->delete();
            return back()->with('success', 'Selected pages deleted successfully.');
        } elseif ($action === 'publish') {
            Page::whereIn('id', $ids)->update(['status' => 'Published']);
            return back()->with('success', 'Selected pages marked as Published.');
        } elseif ($action === 'draft') {
            Page::whereIn('id', $ids)->update(['status' => 'Draft']);
            return back()->with('success', 'Selected pages marked as Draft.');
        }

        return back();
    }
}
