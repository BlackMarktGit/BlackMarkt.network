@extends('admin.layouts.admin')

@section('title', $post->id ? 'Edit Post: ' . $post->title : 'Create Post')

@section('content')
<div class="space-y-6 max-w-4xl">
    <div class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-mono">
        <a href="{{ route('admin.dashboard') }}" class="hover:text-blue-600">DASHBOARD</a> / 
        <a href="{{ route('admin.blog.posts.index') }}" class="hover:text-blue-600">BLOG</a> / 
        <span>{{ $post->id ? 'EDIT POST' : 'CREATE POST' }}</span>
    </div>

    <div class="flex items-center justify-between pb-4 border-b border-slate-200">
        <h1 class="text-xl font-bold text-slate-900">{{ $post->id ? 'Edit Blog Article' : 'Create New Article' }}</h1>
        <a href="{{ route('admin.blog.posts.index') }}" class="px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50">
            &larr; Back to Posts
        </a>
    </div>

    <form action="{{ $post->id ? route('admin.blog.posts.update', $post->id) : route('admin.blog.posts.store') }}" method="POST" enctype="multipart/form-data" class="space-y-6">
        @csrf
        @if($post->id)
            @method('PUT')
        @endif

        <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4 text-xs">
            <div>
                <label class="block font-semibold text-slate-700 mb-1">Title *</label>
                <input type="text" name="title" value="{{ old('title', $post->title) }}" required class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500 font-medium">
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Slug (leave blank to auto-generate)</label>
                    <input type="text" name="slug" value="{{ old('slug', $post->slug) }}" class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-mono focus:outline-none focus:border-blue-500">
                </div>

                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Category</label>
                    <select name="category_id" class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500 bg-white">
                        <option value="">Select Category</option>
                        @foreach($categories as $cat)
                        <option value="{{ $cat->id }}" {{ old('category_id', $post->category_id) == $cat->id ? 'selected' : '' }}>
                            {{ $cat->name }}
                        </option>
                        @endforeach
                    </select>
                </div>
            </div>

            <!-- Featured Image with Direct Upload & URL Fallback -->
            <div x-data="{ 
                uploadMode: 'file',
                previewUrl: '{{ $post->featured_image ? $post->featured_image : '' }}',
                handleFile(e) {
                    const file = e.target.files[0];
                    if (file) {
                        this.previewUrl = URL.createObjectURL(file);
                    }
                }
            }" class="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
                <div class="flex items-center justify-between">
                    <label class="block font-semibold text-slate-700">Featured Cover Image</label>
                    <div class="inline-flex rounded-lg border border-slate-200 bg-white p-0.5 text-[11px]">
                        <button type="button" @click="uploadMode = 'file'" :class="{ 'bg-blue-600 text-white font-semibold': uploadMode === 'file', 'text-slate-600': uploadMode !== 'file' }" class="px-2.5 py-1 rounded-md transition">
                            Direct Upload
                        </button>
                        <button type="button" @click="uploadMode = 'url'" :class="{ 'bg-blue-600 text-white font-semibold': uploadMode === 'url', 'text-slate-600': uploadMode !== 'url' }" class="px-2.5 py-1 rounded-md transition">
                            Image URL
                        </button>
                    </div>
                </div>

                <!-- Direct File Input -->
                <div x-show="uploadMode === 'file'">
                    <input 
                        type="file" 
                        name="featured_image_file" 
                        accept="image/*"
                        @change="handleFile($event)"
                        class="w-full text-xs text-slate-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                    >
                    <p class="text-[10px] text-slate-400 mt-1">Supports PNG, JPG, WebP, SVG up to 10MB. Stored securely in public storage.</p>
                </div>

                <!-- Manual URL Input -->
                <div x-show="uploadMode === 'url'">
                    <input 
                        type="text" 
                        name="featured_image" 
                        x-model="previewUrl"
                        value="{{ old('featured_image', $post->featured_image) }}" 
                        placeholder="/images/cities/london.jpg or https://..." 
                        class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-mono focus:outline-none focus:border-blue-500 bg-white"
                    >
                </div>

                <!-- Image Preview -->
                <template x-if="previewUrl">
                    <div class="flex items-center gap-3 pt-2 border-t border-slate-200">
                        <img :src="previewUrl" alt="Preview" class="h-14 w-24 object-cover rounded border border-slate-300">
                        <span class="text-[11px] text-slate-500 font-mono" x-text="previewUrl.startsWith('blob:') ? 'Selected local image file' : previewUrl"></span>
                    </div>
                </template>
            </div>

            <div>
                <label class="block font-semibold text-slate-700 mb-1">Summary / Excerpt</label>
                <textarea name="summary" rows="2" class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500">{{ old('summary', $post->summary) }}</textarea>
            </div>

            <div>
                <label class="block font-semibold text-slate-700 mb-1">Article Content (HTML / Rich Text) *</label>
                <textarea name="content" rows="10" required class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-mono focus:outline-none focus:border-blue-500 leading-relaxed">{{ old('content', $post->content) }}</textarea>
            </div>

            <div>
                <label class="block font-semibold text-slate-700 mb-1">Status</label>
                <select name="status" class="w-48 px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500 bg-white">
                    <option value="Published" {{ old('status', $post->status) === 'Published' ? 'selected' : '' }}>Published</option>
                    <option value="Draft" {{ old('status', $post->status) === 'Draft' ? 'selected' : '' }}>Draft</option>
                </select>
            </div>
        </div>

        <div class="flex items-center justify-end gap-3">
            <a href="{{ route('admin.blog.posts.index') }}" class="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700">Cancel</a>
            <button type="submit" class="px-5 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-sm">
                {{ $post->id ? 'Update Post' : 'Create Post' }}
            </button>
        </div>
    </form>
</div>
@endsection
