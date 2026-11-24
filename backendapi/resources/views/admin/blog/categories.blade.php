@extends('admin.layouts.admin')

@section('title', 'Blog Categories')

@section('content')
<div class="space-y-4">
    <!-- Breadcrumb -->
    <div class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-mono">
        <a href="{{ route('admin.dashboard') }}" class="hover:text-blue-600">DASHBOARD</a> / 
        <a href="{{ route('admin.blog.posts.index') }}" class="hover:text-blue-600">BLOG</a> / 
        <span>CATEGORIES</span>
    </div>

    @if(session('success'))
    <div class="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
        <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i>
        <span>{{ session('success') }}</span>
    </div>
    @endif

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Create Category Form (Left column) -->
        <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4 text-xs h-fit">
            <h2 class="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
                <i data-lucide="folder-plus" class="w-4 h-4 text-blue-600"></i>
                <span>Add New Category</span>
            </h2>

            <form action="{{ route('admin.blog.categories.store') }}" method="POST" class="space-y-4">
                @csrf
                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Name *</label>
                    <input type="text" name="name" required placeholder="e.g. Sovereign Debt" class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500">
                </div>

                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Slug</label>
                    <input type="text" name="slug" placeholder="sovereign-debt" class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-mono focus:outline-none focus:border-blue-500">
                </div>

                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Description</label>
                    <textarea name="description" rows="3" placeholder="Brief scope of articles under this category..." class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500"></textarea>
                </div>

                <button type="submit" class="w-full py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm transition">
                    Create Category
                </button>
            </form>
        </div>

        <!-- Categories Table (Right 2 columns) -->
        <div class="md:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div class="p-4 border-b border-slate-200">
                <h1 class="text-base font-bold text-slate-900">All Research & Publication Categories</h1>
                <p class="text-xs text-slate-500">Categories organize intelligence reports and publications across sector verticals.</p>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full text-left text-xs text-slate-600">
                    <thead class="bg-slate-50 text-[11px] font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                        <tr>
                            <th class="py-3 px-4">Name</th>
                            <th class="py-3 px-4">Slug</th>
                            <th class="py-3 px-4">Articles Count</th>
                            <th class="py-3 px-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 font-medium">
                        @forelse($categories as $category)
                        <tr class="hover:bg-slate-50/80 transition-colors">
                            <td class="py-3 px-4">
                                <span class="font-bold text-slate-900">{{ $category->name }}</span>
                                @if($category->description)
                                <p class="text-[11px] text-slate-400 font-normal mt-0.5">{{ $category->description }}</p>
                                @endif
                            </td>
                            <td class="py-3 px-4 font-mono text-[11px] text-slate-500">
                                {{ $category->slug }}
                            </td>
                            <td class="py-3 px-4">
                                <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                                    {{ $category->posts_count }} posts
                                </span>
                            </td>
                            <td class="py-3 px-4 text-right">
                                <form action="{{ route('admin.blog.categories.destroy', $category->id) }}" method="POST" onsubmit="return confirm('Delete this category?');" class="inline">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="p-1.5 text-slate-400 hover:text-rose-600 rounded-md hover:bg-slate-100 transition" title="Delete">
                                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                                    </button>
                                </form>
                            </td>
                        </tr>
                        @empty
                        <tr>
                            <td colspan="4" class="py-8 text-center text-slate-400">
                                No categories created yet. Use the form on the left to add one.
                            </td>
                        </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection

