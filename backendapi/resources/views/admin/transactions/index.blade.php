@extends('admin.layouts.admin')

@section('title', 'Transaction Mandates')

@section('content')
<div class="space-y-4">
    <!-- Breadcrumb -->
    <div class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-mono">
        <a href="{{ route('admin.dashboard') }}" class="hover:text-blue-600">DASHBOARD</a> / <span>TRANSACTION MANDATES</span>
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
        <div class="p-4 border-b border-slate-200 flex items-center justify-between gap-3">
            <div>
                <h1 class="text-base font-bold text-slate-900">Closed & Active Transaction Mandates</h1>
                <p class="text-xs text-slate-500">Track deal values, strategic advisory mandates, and syndicate execution track record.</p>
            </div>
            <a href="{{ route('admin.transactions.create') }}" class="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition">
                <i data-lucide="plus" class="w-3.5 h-3.5"></i>
                <span>Record Mandate</span>
            </a>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto">
            <table class="w-full text-left text-xs text-slate-600">
                <thead class="bg-slate-50 text-[11px] font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                    <tr>
                        <th class="py-3 px-4">Deal Value</th>
                        <th class="py-3 px-4">Mandate Title</th>
                        <th class="py-3 px-4">Sector</th>
                        <th class="py-3 px-4">Geography</th>
                        <th class="py-3 px-4">Advisory Role</th>
                        <th class="py-3 px-4">Featured</th>
                        <th class="py-3 px-4 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 font-medium">
                    @forelse($transactions as $tx)
                    <tr class="hover:bg-slate-50/80 transition-colors">
                        <td class="py-3 px-4 font-bold text-slate-900 font-mono text-sm text-[#C9A227]">
                            {{ $tx->deal_value }}
                        </td>
                        <td class="py-3 px-4 font-semibold text-slate-800">
                            {{ $tx->title }}
                        </td>
                        <td class="py-3 px-4">
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700">
                                {{ $tx->sector }}
                            </span>
                        </td>
                        <td class="py-3 px-4 font-mono text-[11px] text-slate-600">
                            {{ $tx->geography }}
                        </td>
                        <td class="py-3 px-4 text-slate-600 text-[11px]">
                            {{ $tx->advisory_role ?? 'Lead Advisor' }}
                        </td>
                        <td class="py-3 px-4">
                            @if($tx->is_featured)
                            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                                <i data-lucide="star" class="w-3 h-3 fill-amber-500 text-amber-500"></i> Featured
                            </span>
                            @else
                            <span class="text-slate-400 text-[11px]">-</span>
                            @endif
                        </td>
                        <td class="py-3 px-4 text-right">
                            <div class="inline-flex items-center gap-2">
                                <a href="{{ route('admin.transactions.edit', $tx->id) }}" class="p-1.5 text-slate-500 hover:text-blue-600 rounded-md hover:bg-slate-100 transition" title="Edit">
                                    <i data-lucide="edit-3" class="w-4 h-4"></i>
                                </a>
                                <form action="{{ route('admin.transactions.destroy', $tx->id) }}" method="POST" onsubmit="return confirm('Are you sure you want to delete this mandate?');" class="inline">
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
                            No transaction mandates recorded yet. Click "Record Mandate" to add one.
                        </td>
                    </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>
</div>
@endsection

