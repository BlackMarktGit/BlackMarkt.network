@extends('admin.layouts.admin')

@section('title', 'Create Page')

@section('content')
<div class="space-y-6 max-w-4xl">
    <!-- Breadcrumb -->
    <div class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-mono">
        <a href="{{ route('admin.dashboard') }}" class="hover:text-blue-600">DASHBOARD</a> / 
        <a href="{{ route('admin.pages.index') }}" class="hover:text-blue-600">PAGES</a> / 
        <span>CREATE NEW PAGE</span>
    </div>

    <!-- Header -->
    <div class="flex items-center justify-between pb-4 border-b border-slate-200">
        <div>
            <h1 class="text-xl font-bold text-slate-900">Create New Dynamic Page</h1>
            <p class="text-xs text-slate-500 mt-1">Configure page identity, routing slug, template layout, and SEO parameters.</p>
        </div>
        <a href="{{ route('admin.pages.index') }}" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition">
            <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i>
            <span>Back to Pages</span>
        </a>
    </div>

    @if ($errors->any())
    <div class="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs space-y-1">
        <div class="font-bold flex items-center gap-2">
            <i data-lucide="alert-circle" class="w-4 h-4 text-rose-600"></i>
            <span>Please correct the errors below:</span>
        </div>
        <ul class="list-disc list-inside pl-4 space-y-0.5 text-rose-700">
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif

    <form 
        action="{{ route('admin.pages.store') }}" 
        method="POST" 
        class="space-y-6"
        x-data="{
            title: '{{ old('title', '') }}',
            slug: '{{ old('slug', '') }}',
            autoSlug: true,
            generateSlug() {
                if (this.autoSlug) {
                    this.slug = this.title.toLowerCase().trim()
                        .replace(/[^\w\s-]/g, '')
                        .replace(/[\s_-]+/g, '-')
                        .replace(/^-+|-+$/g, '');
                }
            }
        }"
    >
        @csrf

        <!-- Base Configuration Card -->
        <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4">
            <h2 class="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
                <i data-lucide="file-plus" class="w-4 h-4 text-blue-600"></i>
                <span>General Page Information</span>
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <!-- Title -->
                <div class="md:col-span-2">
                    <label class="block font-semibold text-slate-700 mb-1">Page Title *</label>
                    <input 
                        type="text" 
                        name="title" 
                        x-model="title"
                        @input="generateSlug()"
                        value="{{ old('title') }}" 
                        required 
                        placeholder="e.g. Sovereign Wealth Advisory"
                        class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 text-sm font-semibold focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    >
                </div>

                <!-- Slug -->
                <div>
                    <div class="flex items-center justify-between mb-1">
                        <label class="font-semibold text-slate-700">URL Slug *</label>
                        <label class="inline-flex items-center gap-1 text-[11px] text-slate-500 cursor-pointer">
                            <input type="checkbox" x-model="autoSlug" class="rounded text-blue-600">
                            <span>Auto-generate</span>
                        </label>
                    </div>
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 font-mono text-xs">/</span>
                        <input 
                            type="text" 
                            name="slug" 
                            x-model="slug"
                            @input="autoSlug = false"
                            value="{{ old('slug') }}" 
                            required 
                            placeholder="sovereign-wealth-advisory"
                            class="w-full pl-6 pr-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-mono focus:outline-none focus:border-blue-500"
                        >
                    </div>
                </div>

                <!-- Template -->
                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Page Layout Template *</label>
                    <select name="template" required class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500 bg-white">
                        <option value="Default" {{ old('template') === 'Default' ? 'selected' : '' }}>Default Interior Layout</option>
                        <option value="Homepage" {{ old('template') === 'Homepage' ? 'selected' : '' }}>Homepage (With Section Blocks)</option>
                        <option value="Page detail" {{ old('template') === 'Page detail' ? 'selected' : '' }}>Page Detail (Executive Briefing)</option>
                    </select>
                </div>

                <!-- Status -->
                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Publish Status *</label>
                    <select name="status" required class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500 bg-white">
                        <option value="Published" {{ old('status', 'Published') === 'Published' ? 'selected' : '' }}>Published (Active on Platform)</option>
                        <option value="Pending" {{ old('status') === 'Pending' ? 'selected' : '' }}>Pending Review</option>
                        <option value="Draft" {{ old('status') === 'Draft' ? 'selected' : '' }}>Draft</option>
                    </select>
                </div>

                <!-- Meta Title -->
                <div>
                    <label class="block font-semibold text-slate-700 mb-1">SEO Meta Title</label>
                    <input 
                        type="text" 
                        name="meta_title" 
                        value="{{ old('meta_title') }}" 
                        placeholder="Page title for search engines"
                        class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500"
                    >
                </div>

                <!-- Meta Description -->
                <div class="md:col-span-2">
                    <label class="block font-semibold text-slate-700 mb-1">SEO Meta Description</label>
                    <textarea 
                        name="meta_description" 
                        rows="3" 
                        placeholder="Concise fiduciary summary displayed in Google search results and OpenGraph cards..."
                        class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500"
                    >{{ old('meta_description') }}</textarea>
                </div>
            </div>
        </div>

        <!-- Form Actions -->
        <div class="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
            <span class="text-xs text-slate-500">After creating, you will immediately be taken to configure the page's visual section content.</span>
            <div class="flex items-center gap-3">
                <a href="{{ route('admin.pages.index') }}" class="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition">
                    Cancel
                </a>
                <button type="submit" class="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition">
                    <i data-lucide="check" class="w-4 h-4"></i>
                    <span>Create Page & Configure Sections</span>
                </button>
            </div>
        </div>
    </form>
</div>
@endsection

