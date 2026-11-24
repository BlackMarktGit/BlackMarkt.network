<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Category;
use App\Models\ActivityLog;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class PostController extends Controller
{
    public function index(Request $request)
    {
        $query = Post::with('category', 'author');

        if ($request->filled('search')) {
            $query->where('title', 'like', '%' . $request->search . '%');
        }

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        $posts = $query->orderBy('id', 'desc')->paginate($request->get('limit', 10));

        return view('admin.blog.index', compact('posts'));
    }

    public function create()
    {
        $categories = Category::all();
        return view('admin.blog.form', ['post' => new Post(), 'categories' => $categories]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:posts,slug',
            'category_id' => 'nullable|exists:categories,id',
            'summary' => 'nullable|string',
            'content' => 'required|string',
            'status' => 'required|in:Published,Draft,Scheduled',
            'featured_image' => 'nullable|string',
            'featured_image_file' => 'nullable|image|mimes:jpeg,png,jpg,webp,svg,gif|max:10240',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['title']);
        }

        // Handle direct file upload
        if ($request->hasFile('featured_image_file')) {
            $path = $request->file('featured_image_file')->store('posts', 'public');
            $validated['featured_image'] = '/storage/' . $path;
        }

        unset($validated['featured_image_file']);

        $validated['author_id'] = Auth::id();
        $validated['author_name'] = Auth::user()?->name ?? 'System Admin';
        $validated['published_at'] = $validated['status'] === 'Published' ? now() : null;

        $post = Post::create($validated);

        ActivityLog::create([
            'user_id' => Auth::id(),
            'user_name' => Auth::user()?->name ?? 'System Admin',
            'user_role' => Auth::user()?->role ?? 'admin',
            'action' => 'created post ' . $post->title,
            'module' => 'blog',
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.blog.posts.index')->with('success', 'Post published successfully!');
    }

    public function edit(Post $post)
    {
        $categories = Category::all();
        return view('admin.blog.form', compact('post', 'categories'));
    }

    public function update(Request $request, Post $post)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:posts,slug,' . $post->id,
            'category_id' => 'nullable|exists:categories,id',
            'summary' => 'nullable|string',
            'content' => 'required|string',
            'status' => 'required|in:Published,Draft,Scheduled',
            'featured_image' => 'nullable|string',
            'featured_image_file' => 'nullable|image|mimes:jpeg,png,jpg,webp,svg,gif|max:10240',
        ]);

        // Handle direct file upload
        if ($request->hasFile('featured_image_file')) {
            $path = $request->file('featured_image_file')->store('posts', 'public');
            $validated['featured_image'] = '/storage/' . $path;
        }

        unset($validated['featured_image_file']);

        $post->update($validated);

        ActivityLog::create([
            'user_id' => Auth::id(),
            'user_name' => Auth::user()?->name ?? 'System Admin',
            'user_role' => Auth::user()?->role ?? 'admin',
            'action' => 'updated post ' . $post->title,
            'module' => 'blog',
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.blog.posts.index')->with('success', 'Post updated successfully.');
    }

    public function destroy(Post $post)
    {
        $title = $post->title;
        $post->delete();

        ActivityLog::create([
            'user_id' => Auth::id(),
            'user_name' => Auth::user()?->name ?? 'System Admin',
            'user_role' => Auth::user()?->role ?? 'admin',
            'action' => 'deleted post ' . $title,
            'module' => 'blog',
            'ip_address' => request()->ip(),
        ]);

        return redirect()->route('admin.blog.posts.index')->with('success', 'Post deleted successfully.');
    }

    public function bulk(Request $request)
    {
        $action = $request->input('action');
        $ids = $request->input('ids', []);

        if (empty($ids)) {
            return back()->with('error', 'No posts selected.');
        }

        if ($action === 'delete') {
            Post::whereIn('id', $ids)->delete();
            return back()->with('success', 'Selected posts deleted.');
        } elseif ($action === 'publish') {
            Post::whereIn('id', $ids)->update(['status' => 'Published']);
            return back()->with('success', 'Selected posts published.');
        }

        return back();
    }
}
