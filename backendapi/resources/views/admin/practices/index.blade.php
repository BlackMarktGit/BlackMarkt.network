@extends('admin.layouts.admin')

@section('title', 'Advisory Practices')

@section('content')
<div class="space-y-4">
    <!-- Breadcrumb -->
    <div class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-mono">
        <a href="{{ route('admin.dashboard') }}" class="hover:text-blue-600">DASHBOARD</a> / <span>ADVISORY PRACTICES</span>
    </div>

    @if(session('success'))
    <div class="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-between">
        <div class="flex items-center gap-2">
            <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i>
            <span>{{ session('success') }}</span>
        </div>
    </div>
    @endif

    <!-- Main Card -->
    <div class="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <!-- Top Action Bar -->
        <div class="p-4 border-b border-slate-200 flex items-center justify-between gap-3">
            <div>
                <h1 class="text-base font-bold text-slate-900">Advisory Practice Areas</h1>
                <p class="text-xs text-slate-500">Manage client practice capabilities, ticket sizes, and deliverables.</p>
            </div>
            <a href="{{ route('admin.practices.create') }}" class="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition">
                <i data-lucide="plus" class="w-3.5 h-3.5"></i>
                <span>Add Practice</span>
            </a>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto">
            <table class="w-full text-left text-xs text-slate-600">
                <thead class="bg-slate-50 text-[11px] font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                    <tr>
                        <th class="py-3 px-4">Order</th>
                        <th class="py-3 px-4">Practice Title</th>
                        <th class="py-3 px-4">Eyebrow</th>
                        <th class="py-3 px-4">Deal Size Range</th>
                        <th class="py-3 px-4">Capabilities</th>
                        <th class="py-3 px-4">Status</th>
                        <th class="py-3 px-4 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 font-medium">
                    @forelse($practices as $practice)
                    <tr class="hover:bg-slate-50/80 transition-colors">
                        <td class="py-3 px-4 font-mono text-slate-400">#{{ $practice->sort_order }}</td>
                        <td class="py-3 px-4">
                            <div class="font-bold text-slate-900">{{ $practice->title }}</div>
                            <div class="text-[11px] text-slate-400 font-mono">/practices/{{ $practice->slug }}</div>
                        </td>
                        <td class="py-3 px-4 text-[#C9A227] font-semibold tracking-wider text-[10px] uppercase font-mono">
                            {{ $practice->eyebrow ?? 'ADVISORY' }}
                        </td>
                        <td class="py-3 px-4 font-bold text-slate-800 font-mono">
                            {{ $practice->deal_size ?? 'Custom' }}
                        </td>
                        <td class="py-3 px-4">
                            <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-700">
                                {{ count($practice->capabilities ?? []) }} items
                            </span>
                        </td>
                        <td class="py-3 px-4">
                            @if($practice->is_active)
                            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Active
                            </span>
                            @else
                            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-500">
                                Inactive
                            </span>
                            @endif
                        </td>
                        <td class="py-3 px-4 text-right">
                            <div class="inline-flex items-center gap-2">
                                <a href="{{ route('admin.practices.edit', $practice->id) }}" class="p-1.5 text-slate-500 hover:text-blue-600 rounded-md hover:bg-slate-100 transition" title="Edit">
                                    <i data-lucide="edit-3" class="w-4 h-4"></i>
                                </a>
                                <form action="{{ route('admin.practices.destroy', $practice->id) }}" method="POST" onsubmit="return confirm('Are you sure you want to delete this practice?');" class="inline">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="p-1.5 text-slate-400 hover:text-rose-600 rounded-md hover:bg-slate-100 transition" title="Delete">
                                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                                    </button>
                                </form>
                            </div>
                        </td>
                    </tr>
                    @empty
                    <tr>
                        <td colspan="7" class="py-8 text-center text-slate-400">
                            No advisory practices configured. Click "Add Practice" to create one.
                        </td>
                    </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>
</div>
@endsection

