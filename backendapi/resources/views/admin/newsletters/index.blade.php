@extends('admin.layouts.admin')

@section('title', 'Newsletter Subscribers')

@section('content')
<div class="space-y-4">
    <!-- Breadcrumb -->
    <div class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-mono">
        <a href="{{ route('admin.dashboard') }}" class="hover:text-blue-600">DASHBOARD</a> / <span>NEWSLETTER SUBSCRIBERS</span>
    </div>

    @if(session('success'))
    <div class="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
        <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i>
        <span>{{ session('success') }}</span>
    </div>
    @endif

    <!-- Main Card -->
    <div class="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <!-- Top Action Bar -->
        <div class="p-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <div>
                <h1 class="text-base font-bold text-slate-900">Strategic Intelligence Subscribers</h1>
                <p class="text-xs text-slate-500">Global executives and fund managers subscribed to Black Markt research briefs.</p>
            </div>
            <div class="flex items-center gap-2">
                <!-- Search Form -->
                <form action="{{ route('admin.newsletters.index') }}" method="GET" class="relative">
                    <input 
                        type="text" 
                        name="search" 
                        value="{{ request('search') }}" 
                        placeholder="Search email..." 
                        class="pl-3 pr-8 py-2 text-xs border border-slate-200 rounded-lg w-48 sm:w-64 focus:outline-none focus:border-blue-500 bg-slate-50 focus:bg-white"
                    >
                    <button type="submit" class="absolute inset-y-0 right-0 pr-2.5 flex items-center text-slate-400 hover:text-slate-600">
                        <i data-lucide="search" class="w-3.5 h-3.5"></i>
                    </button>
                </form>

                <!-- Export CSV -->
                <a href="{{ route('admin.newsletters.export') }}" class="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition">
                    <i data-lucide="download" class="w-3.5 h-3.5"></i>
                    <span>Export CSV</span>
                </a>
            </div>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto">
            <table class="w-full text-left text-xs text-slate-600">
                <thead class="bg-slate-50 text-[11px] font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                    <tr>
                        <th class="py-3 px-4"># ID</th>
                        <th class="py-3 px-4">Subscriber Email</th>
                        <th class="py-3 px-4">Status</th>
                        <th class="py-3 px-4">Client IP</th>
                        <th class="py-3 px-4">Subscribed At</th>
                        <th class="py-3 px-4 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 font-medium">
                    @forelse($subscribers as $sub)
                    <tr class="hover:bg-slate-50/80 transition-colors">
                        <td class="py-3 px-4 font-mono text-slate-400">#{{ $sub->id }}</td>
                        <td class="py-3 px-4 font-semibold text-slate-900 font-mono">
                            {{ $sub->email }}
                        </td>
                        <td class="py-3 px-4">
                            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> {{ $sub->status ?? 'Subscribed' }}
                            </span>
                        </td>
                        <td class="py-3 px-4 font-mono text-[11px] text-slate-400">
                            {{ $sub->ip_address ?? '-' }}
                        </td>
                        <td class="py-3 px-4 text-slate-500 font-mono text-[11px]">
                            {{ $sub->created_at ? $sub->created_at->format('M d, Y H:i') : '-' }}
                        </td>
                        <td class="py-3 px-4 text-right">
                            <form action="{{ route('admin.newsletters.destroy', $sub->id) }}" method="POST" onsubmit="return confirm('Remove this subscriber?');" class="inline">
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
                        <td colspan="6" class="py-8 text-center text-slate-400">
                            No newsletter subscribers yet. Subscribers will appear here when they register via the website.
                        </td>
                    </tr>
                    @endforelse
                </tbody>
            </table>
        </div>

        @if($subscribers->hasPages())
        <div class="p-4 border-t border-slate-200">
            {{ $subscribers->links() }}
        </div>
        @endif
    </div>
</div>
@endsection

