@extends('admin.layouts.admin')

@section('title', 'Pages')

@section('content')
<div class="space-y-4">
    <!-- Breadcrumb (Matching Screenshot 2) -->
    <div class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-mono">
        <a href="{{ route('admin.dashboard') }}" class="hover:text-blue-600">DASHBOARD</a> / <span>PAGES</span>
    </div>

    <!-- Main White Card Container -->
    <div class="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden" x-data="{ selectedIds: [], selectAll: false }">
        <!-- Top Action Bar (Matching Screenshot 2) -->
        <div class="p-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2 flex-wrap">
                <!-- Bulk Actions -->
                <form action="{{ route('admin.pages.bulk') }}" method="POST" class="inline-flex items-center gap-1.5" id="bulkForm">
                    @csrf
                    <input type="hidden" name="ids[]" x-for="id in selectedIds" :value="id">
                    <select name="action" class="text-xs border border-slate-200 rounded-lg px-3 py-2 text-slate-700 bg-white focus:outline-none focus:border-blue-500 font-medium">
                        <option value="">Bulk Actions</option>
                        <option value="publish">Mark as Published</option>
                        <option value="draft">Mark as Draft</option>
                        <option value="delete">Delete Selected</option>
                    </select>
                    <button type="submit" class="px-2.5 py-2 text-xs rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold" :disabled="selectedIds.length === 0">
                        Apply
                    </button>
                </form>

                <!-- Filters Button -->
                <button class="inline-flex items-center gap-1.5 px-3 py-2 text-xs rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold">
                    <i data-lucide="filter" class="w-3.5 h-3.5"></i>
                    <span>Filters</span>
                </button>

                <!-- Search Input -->
                <form action="{{ route('admin.pages.index') }}" method="GET" class="relative">
                    <input 
                        type="text" 
                        name="search" 
                        value="{{ request('search') }}"
                        placeholder="Search..." 
                        class="pl-3 pr-8 py-2 text-xs border border-slate-200 rounded-lg w-48 sm:w-64 focus:outline-none focus:border-blue-500 bg-slate-50 focus:bg-white"
                    >
                    <button type="submit" class="absolute inset-y-0 right-0 pr-2.5 flex items-center text-slate-400 hover:text-slate-600">
                        <i data-lucide="search" class="w-3.5 h-3.5"></i>
                    </button>
                </form>
            </div>

            <!-- Right Buttons: + Create and Reload (Matching Screenshot 2) -->
            <div class="flex items-center gap-2">
                <a href="{{ route('admin.pages.create') }}" class="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg shadow-sm transition">
                    <i data-lucide="plus" class="w-3.5 h-3.5"></i>
                    <span>Create</span>
                </a>
                <a href="{{ route('admin.pages.index') }}" class="inline-flex items-center gap-1.5 px-3 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg shadow-sm transition">
                    <i data-lucide="rotate-cw" class="w-3.5 h-3.5"></i>
                    <span>Reload</span>
                </a>
            </div>
        </div>

        <!-- Data Table (Matching Screenshot 2) -->
        <div class="overflow-x-auto">
            <table class="w-full text-left text-xs text-slate-600">
                <thead class="bg-slate-50/70 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider text-[10px]">
                    <tr>
                        <th class="p-3.5 w-10 text-center">
                            <input 
                                type="checkbox" 
                                @click="selectAll = !selectAll; selectedIds = selectAll ? [{{ $pages->pluck('id')->join(',') }}] : []"
                                class="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                            >
                        </th>
                        <th class="p-3.5 w-16">
                            <div class="flex items-center gap-1 cursor-pointer">
                                <span>ID</span>
                                <i data-lucide="chevrons-up-down" class="w-3 h-3"></i>
                            </div>
                        </th>
                        <th class="p-3.5">
                            <div class="flex items-center gap-1 cursor-pointer">
                                <span>NAME</span>
                                <i data-lucide="chevrons-up-down" class="w-3 h-3"></i>
                            </div>
                        </th>
                        <th class="p-3.5">
                            <div class="flex items-center gap-1 cursor-pointer">
                                <span>TEMPLATE</span>
                                <i data-lucide="chevrons-up-down" class="w-3 h-3"></i>
                            </div>
                        </th>
                        <th class="p-3.5">
                            <div class="flex items-center gap-1 cursor-pointer">
                                <span>CREATED AT</span>
                                <i data-lucide="chevrons-up-down" class="w-3 h-3"></i>
                            </div>
                        </th>
                        <th class="p-3.5">
                            <div class="flex items-center gap-1 cursor-pointer">
                                <span>STATUS</span>
                                <i data-lucide="chevrons-up-down" class="w-3 h-3"></i>
                            </div>
                        </th>
                        <th class="p-3.5 text-right w-24">OPERATIONS</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                    @forelse($pages as $page)
                    <tr class="hover:bg-slate-50/80 transition-colors">
                        <td class="p-3.5 text-center">
                            <input 
                                type="checkbox" 
                                :value="{{ $page->id }}" 
                                x-model="selectedIds"
                                class="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                            >
                        </td>
                        <td class="p-3.5 font-mono text-slate-500">{{ $page->id }}</td>
                        <td class="p-3.5">
                            <a href="{{ route('admin.pages.edit', $page->id) }}" class="font-semibold text-blue-600 hover:underline">
                                {{ $page->title }}
                            </a>
                            <span class="block text-[10px] text-slate-400 font-mono mt-0.5">/{{ $page->slug }}</span>
                        </td>
                        <td class="p-3.5 font-medium text-slate-600">
                            {{ $page->template }}
                        </td>
                        <td class="p-3.5 font-mono text-slate-500">
                            {{ $page->created_at->format('Y-m-d') }}
                        </td>
                        <td class="p-3.5">
                            @if($page->status === 'Published')
                                <span class="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-emerald-100 text-emerald-700">
                                    Published
                                </span>
                            @elseif($page->status === 'Pending')
                                <span class="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-amber-100 text-amber-700">
                                    Pending
                                </span>
                            @else
                                <span class="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-slate-100 text-slate-600">
                                    Draft
                                </span>
                            @endif
                        </td>
                        <td class="p-3.5 text-right">
                            <div class="inline-flex items-center gap-1.5">
                                <!-- Blue Edit Button (Screenshot 2) -->
                                <a href="{{ route('admin.pages.edit', $page->id) }}" class="p-1.5 rounded bg-blue-600 text-white hover:bg-blue-500 shadow-sm transition" title="Edit Visual Sections">
                                    <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
                                </a>
                                <!-- Red Delete Button (Screenshot 2) -->
                                <form action="{{ route('admin.pages.destroy', $page->id) }}" method="POST" onsubmit="return confirm('Are you sure you want to delete this page?');">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="p-1.5 rounded bg-red-500 text-white hover:bg-red-600 shadow-sm transition" title="Delete Page">
                                        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                                    </button>
                                </form>
                            </div>
                        </td>
                    </tr>
                    @empty
                    <tr>
                        <td colspan="7" class="p-8 text-center text-slate-400">
                            <i data-lucide="file-x" class="w-8 h-8 mx-auto mb-2 text-slate-300"></i>
                            <p class="font-medium text-xs">No pages found.</p>
                        </td>
                    </tr>
                    @endforelse
                </tbody>
            </table>
        </div>

        <!-- Pagination & Records Footer (Matching Screenshot 2) -->
        <div class="p-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 font-mono">
            <div class="flex items-center gap-2">
                <select onchange="window.location.href = '?limit=' + this.value" class="border border-slate-200 rounded px-2 py-1 bg-white text-slate-700 focus:outline-none">
                    <option value="10" {{ request('limit', 10) == 10 ? 'selected' : '' }}>10</option>
                    <option value="25" {{ request('limit') == 25 ? 'selected' : '' }}>25</option>
                    <option value="50" {{ request('limit') == 50 ? 'selected' : '' }}>50</option>
                </select>
                <span>Show from {{ $pages->firstItem() ?? 0 }} to {{ $pages->lastItem() ?? 0 }} in <strong class="text-slate-800">{{ $pages->total() }}</strong> records</span>
            </div>

            <div>
                {{ $pages->links('pagination::tailwind') }}
            </div>
        </div>
    </div>
</div>
@endsection
