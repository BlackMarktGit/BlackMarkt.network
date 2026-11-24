@extends('admin.layouts.admin')

@section('title', $transaction->id ? 'Edit Mandate: ' . $transaction->title : 'Record Mandate')

@section('content')
<div class="space-y-6 max-w-4xl">
    <!-- Breadcrumb -->
    <div class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-mono">
        <a href="{{ route('admin.dashboard') }}" class="hover:text-blue-600">DASHBOARD</a> / 
        <a href="{{ route('admin.transactions.index') }}" class="hover:text-blue-600">TRANSACTIONS</a> / 
        <span>{{ $transaction->id ? 'EDIT MANDATE' : 'RECORD NEW MANDATE' }}</span>
    </div>

    <!-- Header -->
    <div class="flex items-center justify-between pb-4 border-b border-slate-200">
        <div>
            <h1 class="text-xl font-bold text-slate-900">{{ $transaction->id ? 'Edit Transaction Mandate' : 'Record Transaction Mandate' }}</h1>
            <p class="text-xs text-slate-500 mt-1">Configure deal volume, syndicate geography, sector parameters, and advisory narrative.</p>
        </div>
        <a href="{{ route('admin.transactions.index') }}" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition">
            <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i>
            <span>Back to Transactions</span>
        </a>
    </div>

    @if ($errors->any())
    <div class="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs space-y-1">
        <div class="font-bold flex items-center gap-2">
            <i data-lucide="alert-circle" class="w-4 h-4 text-rose-600"></i>
            <span>Please correct the errors:</span>
        </div>
        <ul class="list-disc list-inside pl-4 space-y-0.5 text-rose-700">
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif

    <form 
        action="{{ $transaction->id ? route('admin.transactions.update', $transaction->id) : route('admin.transactions.store') }}" 
        method="POST" 
        class="space-y-6"
    >
        @csrf
        @if($transaction->id)
            @method('PUT')
        @endif

        <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4 text-xs">
            <h2 class="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
                <i data-lucide="award" class="w-4 h-4 text-blue-600"></i>
                <span>Mandate Financial Parameters</span>
            </h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="sm:col-span-2">
                    <label class="block font-semibold text-slate-700 mb-1">Mandate Title *</label>
                    <input 
                        type="text" 
                        name="title" 
                        value="{{ old('title', $transaction->title) }}" 
                        required 
                        placeholder="e.g. Pan-African Subsea Telecom Fiber Debt Syndication"
                        class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 text-sm font-semibold focus:outline-none focus:border-blue-500"
                    >
                </div>

                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Deal Value *</label>
                    <input 
                        type="text" 
                        name="deal_value" 
                        value="{{ old('deal_value', $transaction->deal_value) }}" 
                        required 
                        placeholder="$650M or Undisclosed"
                        class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-mono font-bold text-[#C9A227] focus:outline-none focus:border-blue-500"
                    >
                </div>

                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Sector *</label>
                    <input 
                        type="text" 
                        name="sector" 
                        value="{{ old('sector', $transaction->sector) }}" 
                        required 
                        placeholder="Digital Infrastructure / Energy / Telecom"
                        class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500"
                    >
                </div>

                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Geography / Corridor *</label>
                    <input 
                        type="text" 
                        name="geography" 
                        value="{{ old('geography', $transaction->geography) }}" 
                        required 
                        placeholder="West Africa &bull; London / Lagos"
                        class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500"
                    >
                </div>

                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Advisory Role</label>
                    <input 
                        type="text" 
                        name="advisory_role" 
                        value="{{ old('advisory_role', $transaction->advisory_role) }}" 
                        placeholder="Sole Financial Advisor & Syndicate Structurer"
                        class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500"
                    >
                </div>

                <div class="sm:col-span-2">
                    <label class="block font-semibold text-slate-700 mb-1">Executive Summary *</label>
                    <textarea 
                        name="summary" 
                        rows="3" 
                        required 
                        placeholder="Concise overview of transaction structure, sovereign partners, and capital allocators..."
                        class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500 leading-relaxed"
                    >{{ old('summary', $transaction->summary) }}</textarea>
                </div>

                <div class="sm:col-span-2">
                    <label class="block font-semibold text-slate-700 mb-1">Case Study Narrative (Optional)</label>
                    <textarea 
                        name="case_study" 
                        rows="4" 
                        placeholder="Detailed deal milestones, restructuring mechanics, and investor yield outcome..."
                        class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500"
                    >{{ old('case_study', $transaction->case_study) }}</textarea>
                </div>
            </div>

            <!-- Display Controls -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-100">
                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Display Order</label>
                    <input 
                        type="number" 
                        name="sort_order" 
                        value="{{ old('sort_order', $transaction->sort_order ?? 0) }}" 
                        class="w-32 px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-mono focus:outline-none focus:border-blue-500"
                    >
                </div>

                <div class="flex items-center pt-5">
                    <label class="inline-flex items-center gap-2 cursor-pointer font-semibold text-slate-700">
                        <input 
                            type="checkbox" 
                            name="is_featured" 
                            value="1" 
                            {{ old('is_featured', $transaction->is_featured) ? 'checked' : '' }}
                            class="rounded text-blue-600 focus:ring-blue-500"
                        >
                        <span>Feature on Homepage Mandates Banner</span>
                    </label>
                </div>
            </div>
        </div>

        <!-- Form Actions -->
        <div class="flex items-center justify-end gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <a href="{{ route('admin.transactions.index') }}" class="px-4 py-2 text-xs font-semibold rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700">Cancel</a>
            <button type="submit" class="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
                <i data-lucide="check" class="w-4 h-4"></i>
                <span>{{ $transaction->id ? 'Update Mandate' : 'Save Mandate' }}</span>
            </button>
        </div>
    </form>
</div>
@endsection

