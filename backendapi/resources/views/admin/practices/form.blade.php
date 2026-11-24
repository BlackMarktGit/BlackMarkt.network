@extends('admin.layouts.admin')

@section('title', $practice->id ? 'Edit Practice: ' . $practice->title : 'Add Advisory Practice')

@section('content')
<div class="space-y-6 max-w-4xl">
    <!-- Breadcrumb -->
    <div class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-mono">
        <a href="{{ route('admin.dashboard') }}" class="hover:text-blue-600">DASHBOARD</a> / 
        <a href="{{ route('admin.practices.index') }}" class="hover:text-blue-600">PRACTICES</a> / 
        <span>{{ $practice->id ? 'EDIT: ' . $practice->title : 'ADD NEW PRACTICE' }}</span>
    </div>

    <!-- Header -->
    <div class="flex items-center justify-between pb-4 border-b border-slate-200">
        <div>
            <h1 class="text-xl font-bold text-slate-900">{{ $practice->id ? 'Edit Advisory Practice' : 'Add Advisory Practice' }}</h1>
            <p class="text-xs text-slate-500 mt-1">Configure practice capabilities, mandate parameters, metrics, and deliverables.</p>
        </div>
        <a href="{{ route('admin.practices.index') }}" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition">
            <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i>
            <span>Back to Practices</span>
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
        action="{{ $practice->id ? route('admin.practices.update', $practice->id) : route('admin.practices.store') }}" 
        method="POST" 
        class="space-y-6"
    >
        @csrf
        @if($practice->id)
            @method('PUT')
        @endif

        <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4 text-xs">
            <h2 class="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
                <i data-lucide="briefcase" class="w-4 h-4 text-blue-600"></i>
                <span>Practice Overview</span>
            </h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="sm:col-span-2">
                    <label class="block font-semibold text-slate-700 mb-1">Practice Title *</label>
                    <input 
                        type="text" 
                        name="title" 
                        value="{{ old('title', $practice->title) }}" 
                        required 
                        placeholder="e.g. Corporate Strategy & Capital Allocation"
                        class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 text-sm font-semibold focus:outline-none focus:border-blue-500"
                    >
                </div>

                <div>
                    <label class="block font-semibold text-slate-700 mb-1">URL Slug</label>
                    <input 
                        type="text" 
                        name="slug" 
                        value="{{ old('slug', $practice->slug) }}" 
                        placeholder="corporate-strategy"
                        class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-mono focus:outline-none focus:border-blue-500"
                    >
                </div>

                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Eyebrow Badge</label>
                    <input 
                        type="text" 
                        name="eyebrow" 
                        value="{{ old('eyebrow', $practice->eyebrow) }}" 
                        placeholder="STRATEGIC PORTFOLIO ADVISORY"
                        class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-mono uppercase focus:outline-none focus:border-blue-500"
                    >
                </div>

                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Deal / Mandate Size</label>
                    <input 
                        type="text" 
                        name="deal_size" 
                        value="{{ old('deal_size', $practice->deal_size) }}" 
                        placeholder="$450M – $5B+"
                        class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-mono focus:outline-none focus:border-blue-500"
                    >
                </div>

                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Icon Key</label>
                    <input 
                        type="text" 
                        name="icon" 
                        value="{{ old('icon', $practice->icon) }}" 
                        placeholder="chess, server, handshake, sync"
                        class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-mono focus:outline-none focus:border-blue-500"
                    >
                </div>

                <div class="sm:col-span-2">
                    <label class="block font-semibold text-slate-700 mb-1">Short Description (Cards) *</label>
                    <textarea 
                        name="short_desc" 
                        rows="2" 
                        required 
                        class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500"
                    >{{ old('short_desc', $practice->short_desc) }}</textarea>
                </div>

                <div class="sm:col-span-2">
                    <label class="block font-semibold text-slate-700 mb-1">Full Mandate Description</label>
                    <textarea 
                        name="full_desc" 
                        rows="4" 
                        class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500"
                    >{{ old('full_desc', $practice->full_desc) }}</textarea>
                </div>
            </div>

            <!-- Capabilities & Deliverables -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-100">
                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Core Capabilities (1 item per line)</label>
                    <textarea 
                        name="capabilities_text" 
                        rows="5" 
                        placeholder="Sovereign Balance Sheet Structuring&#10;Cross-Border M&A Synergies&#10;Fiduciary Capital Allocation"
                        class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-mono text-[11px] focus:outline-none focus:border-blue-500"
                    >{{ old('capabilities_text', is_array($practice->capabilities) ? implode("\n", $practice->capabilities) : '') }}</textarea>
                </div>

                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Key Deliverables (1 item per line)</label>
                    <textarea 
                        name="deliverables_text" 
                        rows="5" 
                        placeholder="Institutional Strategic Mandate Dossier&#10;5-Year Capital Allocation Roadmap&#10;Cross-Border Regulatory Matrix"
                        class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-mono text-[11px] focus:outline-none focus:border-blue-500"
                    >{{ old('deliverables_text', is_array($practice->deliverables) ? implode("\n", $practice->deliverables) : '') }}</textarea>
                </div>
            </div>

            <!-- Display Settings -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-100">
                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Sort Order</label>
                    <input 
                        type="number" 
                        name="sort_order" 
                        value="{{ old('sort_order', $practice->sort_order ?? 0) }}" 
                        class="w-32 px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-mono focus:outline-none focus:border-blue-500"
                    >
                </div>

                <div class="flex items-center pt-5">
                    <label class="inline-flex items-center gap-2 cursor-pointer font-semibold text-slate-700">
                        <input 
                            type="checkbox" 
                            name="is_active" 
                            value="1" 
                            {{ old('is_active', $practice->id ? $practice->is_active : true) ? 'checked' : '' }}
                            class="rounded text-blue-600 focus:ring-blue-500"
                        >
                        <span>Active on Platform</span>
                    </label>
                </div>
            </div>
        </div>

        <!-- Form Actions -->
        <div class="flex items-center justify-end gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <a href="{{ route('admin.practices.index') }}" class="px-4 py-2 text-xs font-semibold rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700">Cancel</a>
            <button type="submit" class="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
                <i data-lucide="check" class="w-4 h-4"></i>
                <span>{{ $practice->id ? 'Update Practice' : 'Save Practice' }}</span>
            </button>
        </div>
    </form>
</div>
@endsection

