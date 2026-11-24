@extends('admin.layouts.admin')

@section('title', 'Contact Inquiries')

@section('content')
<div class="space-y-4" x-data="{ viewModal: false, activeInq: {} }">
    <!-- Breadcrumb (Matching Image 4) -->
    <div class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-mono">
        <a href="{{ route('admin.dashboard') }}" class="hover:text-blue-600">DASHBOARD</a> / <span>CONTACT</span>
    </div>

    <!-- Main White Card Container -->
    <div class="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden" x-data="{ selectedIds: [], selectAll: false }">
        <!-- Top Action Bar (Matching Image 4) -->
        <div class="p-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2 flex-wrap">
                <!-- Bulk Actions -->
                <div class="inline-flex items-center gap-1.5">
                    <select class="text-xs border border-slate-200 rounded-lg px-3 py-2 text-slate-700 bg-white focus:outline-none focus:border-blue-500 font-medium">
                        <option value="">Bulk Actions</option>
                        <option value="mark_read">Mark as Read</option>
                        <option value="delete">Delete Selected</option>
                    </select>
                </div>

                <!-- Filters Button -->
                <button class="inline-flex items-center gap-1.5 px-3 py-2 text-xs rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold">
                    <i data-lucide="filter" class="w-3.5 h-3.5"></i>
                    <span>Filters</span>
                </button>

                <!-- Search Input -->
                <form action="{{ route('admin.inquiries.index') }}" method="GET" class="relative">
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

            <!-- Right Buttons: Export & Reload (Matching Image 4) -->
            <div class="flex items-center gap-2">
                <a href="{{ route('admin.inquiries.export') }}" class="inline-flex items-center gap-1.5 px-3.5 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg shadow-sm transition">
                    <i data-lucide="download" class="w-3.5 h-3.5"></i>
                    <span>Export</span>
                </a>
                <a href="{{ route('admin.inquiries.index') }}" class="inline-flex items-center gap-1.5 px-3 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg shadow-sm transition">
                    <i data-lucide="rotate-cw" class="w-3.5 h-3.5"></i>
                    <span>Reload</span>
                </a>
            </div>
        </div>

        <!-- Data Table (Matching Image 4) -->
        <div class="overflow-x-auto">
            <table class="w-full text-left text-xs text-slate-600">
                <thead class="bg-slate-50/70 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider text-[10px]">
                    <tr>
                        <th class="p-3.5 w-10 text-center">
                            <input 
                                type="checkbox" 
                                @click="selectAll = !selectAll; selectedIds = selectAll ? [{{ $inquiries->pluck('id')->join(',') }}] : []"
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
                                <span>EMAIL</span>
                                <i data-lucide="chevrons-up-down" class="w-3 h-3"></i>
                            </div>
                        </th>
                        <th class="p-3.5">PHONE</th>
                        <th class="p-3.5">
                            <div class="flex items-center gap-1 cursor-pointer">
                                <span>CREATED AT</span>
                                <i data-lucide="chevrons-up-down" class="w-3 h-3"></i>
                            </div>
                        </th>
                        <th class="p-3.5">STATUS</th>
                        <th class="p-3.5 text-right w-24">OPERATIONS</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                    @forelse($inquiries as $inq)
                    <tr class="hover:bg-slate-50/80 transition-colors">
                        <td class="p-3.5 text-center">
                            <input 
                                type="checkbox" 
                                :value="{{ $inq->id }}" 
                                x-model="selectedIds"
                                class="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                            >
                        </td>
                        <td class="p-3.5 font-mono text-slate-500">{{ $inq->id }}</td>
                        <td class="p-3.5">
                            <button @click="activeInq = {{ json_encode($inq) }}; viewModal = true" class="font-semibold text-blue-600 hover:underline text-left">
                                {{ $inq->name }}
                            </button>
                            @if($inq->organization)
                            <span class="block text-[10px] text-slate-400">{{ $inq->organization }}</span>
                            @endif
                        </td>
                        <td class="p-3.5">
                            <a href="mailto:{{ $inq->email }}" class="text-blue-600 hover:underline">
                                {{ $inq->email }}
                            </a>
                        </td>
                        <td class="p-3.5 font-mono text-slate-500">
                            {{ $inq->phone ?: '—' }}
                        </td>
                        <td class="p-3.5 font-mono text-slate-500">
                            {{ $inq->created_at->format('Y-m-d') }}
                        </td>
                        <td class="p-3.5">
                            <span class="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-amber-500 text-white shadow-sm">
                                {{ $inq->status }}
                            </span>
                        </td>
                        <td class="p-3.5 text-right">
                            <div class="inline-flex items-center gap-1.5">
                                <button @click="activeInq = {{ json_encode($inq) }}; viewModal = true" class="p-1.5 rounded bg-blue-600 text-white hover:bg-blue-500 shadow-sm transition" title="View Inquiry">
                                    <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
                                </button>
                                <form action="{{ route('admin.inquiries.destroy', $inq->id) }}" method="POST" onsubmit="return confirm('Delete this consultation inquiry?');">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="p-1.5 rounded bg-red-500 text-white hover:bg-red-600 shadow-sm transition" title="Delete Inquiry">
                                        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                                    </button>
                                </form>
                            </div>
                        </td>
                    </tr>
                    @empty
                    <tr>
                        <td colspan="8" class="p-8 text-center text-slate-400">
                            <i data-lucide="inbox" class="w-8 h-8 mx-auto mb-2 text-slate-300"></i>
                            <p class="font-medium text-xs">No inquiries found.</p>
                        </td>
                    </tr>
                    @endforelse
                </tbody>
            </table>
        </div>

        <!-- Pagination Footer (Matching Image 4) -->
        <div class="p-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 font-mono">
            <div class="flex items-center gap-2">
                <select onchange="window.location.href = '?limit=' + this.value" class="border border-slate-200 rounded px-2 py-1 bg-white text-slate-700 focus:outline-none">
                    <option value="10" {{ request('limit', 10) == 10 ? 'selected' : '' }}>10</option>
                    <option value="25" {{ request('limit') == 25 ? 'selected' : '' }}>25</option>
                </select>
                <span>Show from {{ $inquiries->firstItem() ?? 0 }} to {{ $inquiries->lastItem() ?? 0 }} in <strong class="text-slate-800">{{ $inquiries->total() }}</strong> records</span>
            </div>

            <div>
                {{ $inquiries->links('pagination::tailwind') }}
            </div>
        </div>
    </div>

    <!-- View / Reply Modal Dialog -->
    <div x-show="viewModal" x-cloak class="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
        <div @click.away="viewModal = false" class="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 text-xs space-y-4 border border-slate-100">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 class="text-sm font-bold text-slate-900">Consultation Mandate Lead</h3>
                <button @click="viewModal = false" class="text-slate-400 hover:text-slate-600 text-lg font-bold">&times;</button>
            </div>

            <div class="space-y-3">
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <p class="text-slate-400 font-semibold uppercase text-[10px]">Client Name</p>
                        <p class="font-bold text-slate-800 text-sm" x-text="activeInq.name"></p>
                    </div>
                    <div>
                        <p class="text-slate-400 font-semibold uppercase text-[10px]">Organization</p>
                        <p class="font-bold text-slate-800" x-text="activeInq.organization || '—'"></p>
                    </div>
                    <div>
                        <p class="text-slate-400 font-semibold uppercase text-[10px]">Email</p>
                        <p class="text-blue-600 font-medium" x-text="activeInq.email"></p>
                    </div>
                    <div>
                        <p class="text-slate-400 font-semibold uppercase text-[10px]">Capital Range</p>
                        <p class="font-semibold text-emerald-600 font-mono" x-text="activeInq.capital_range || '—'"></p>
                    </div>
                </div>

                <div class="pt-2 border-t border-slate-100">
                    <p class="text-slate-400 font-semibold uppercase text-[10px] mb-1">Inquiry / Mandate Scope</p>
                    <div class="p-3 rounded-lg bg-slate-50 border border-slate-100 text-slate-700 leading-relaxed font-sans" x-text="activeInq.message"></div>
                </div>

                <form :action="'/admin/contact/' + activeInq.id + '/status'" method="POST" class="pt-2 border-t border-slate-100 space-y-3">
                    @csrf
                    @method('PUT')
                    <div>
                        <label class="block font-semibold text-slate-700 mb-1">Update Status</label>
                        <select name="status" x-model="activeInq.status" class="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-slate-800 bg-white">
                            <option value="Unread">Unread</option>
                            <option value="Read">Read</option>
                            <option value="In Discussion">In Discussion / Meeting Scheduled</option>
                            <option value="Closed">Mandate Closed</option>
                        </select>
                    </div>

                    <div>
                        <label class="block font-semibold text-slate-700 mb-1">Internal Advisory Notes</label>
                        <textarea name="internal_notes" x-model="activeInq.internal_notes" rows="2" placeholder="Add confidential notes for partners..." class="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-slate-800"></textarea>
                    </div>

                    <div class="flex items-center justify-end gap-2 pt-2">
                        <button type="button" @click="viewModal = false" class="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600">Close</button>
                        <button type="submit" class="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-sm">Save Status</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
