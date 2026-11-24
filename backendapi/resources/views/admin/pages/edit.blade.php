@extends('admin.layouts.admin')

@section('title', 'Edit Page: ' . $page->title)

@section('content')
<div class="space-y-6 max-w-5xl">
    <!-- Breadcrumb -->
    <div class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-mono">
        <a href="{{ route('admin.dashboard') }}" class="hover:text-blue-600">DASHBOARD</a> / 
        <a href="{{ route('admin.pages.index') }}" class="hover:text-blue-600">PAGES</a> / 
        <span>EDIT: {{ $page->title }}</span>
    </div>

    <!-- Edit Header -->
    <div class="flex items-center justify-between pb-4 border-b border-slate-200">
        <div>
            <h1 class="text-xl font-bold text-slate-900">Visual Page & Section Content Editor</h1>
            <p class="text-xs text-slate-500 mt-1">Configure live text, headlines, metrics, and CTAs across the entire platform.</p>
        </div>
        <div class="flex items-center gap-2">
            <a href="http://localhost:5173" target="_blank" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition">
                <i data-lucide="eye" class="w-3.5 h-3.5"></i>
                <span>Preview On Website</span>
            </a>
            <a href="{{ route('admin.pages.index') }}" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition">
                <span>&larr; Back to Pages</span>
            </a>
        </div>
    </div>

    <form action="{{ route('admin.pages.update', $page->id) }}" method="POST" class="space-y-6">
        @csrf
        @method('PUT')

        <!-- Page Base Configuration Card -->
        <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <h2 class="text-sm font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <i data-lucide="settings" class="w-4 h-4 text-blue-600"></i>
                <span>Page General Settings</span>
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Page Title *</label>
                    <input type="text" name="title" value="{{ old('title', $page->title) }}" required class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500">
                </div>

                <div>
                    <label class="block font-semibold text-slate-700 mb-1">URL Slug *</label>
                    <input type="text" name="slug" value="{{ old('slug', $page->slug) }}" required class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-mono focus:outline-none focus:border-blue-500">
                </div>

                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Page Layout Template *</label>
                    <select name="template" class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500 bg-white">
                        <option value="Homepage" {{ $page->template === 'Homepage' ? 'selected' : '' }}>Homepage</option>
                        <option value="Default" {{ $page->template === 'Default' ? 'selected' : '' }}>Default</option>
                        <option value="Page detail" {{ $page->template === 'Page detail' ? 'selected' : '' }}>Page detail</option>
                    </select>
                </div>

                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Publish Status *</label>
                    <select name="status" class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500 bg-white">
                        <option value="Published" {{ $page->status === 'Published' ? 'selected' : '' }}>Published (Live on Website)</option>
                        <option value="Pending" {{ $page->status === 'Pending' ? 'selected' : '' }}>Pending Review</option>
                        <option value="Draft" {{ $page->status === 'Draft' ? 'selected' : '' }}>Draft</option>
                    </select>
                </div>

                <div class="md:col-span-2">
                    <label class="block font-semibold text-slate-700 mb-1">SEO Meta Description</label>
                    <textarea name="meta_description" rows="2" class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500">{{ old('meta_description', $page->meta_description) }}</textarea>
                </div>
            </div>
        </div>

        @if($page->template === 'Homepage' || $page->slug === 'home')
        <!-- ==========================================================================
             HERO SECTION DYNAMIC CMS EDITOR
             ========================================================================== -->
        @php
            $heroSection = $page->sections->where('section_key', 'hero')->first();
            $heroContent = $heroSection ? $heroSection->content : [];
        @endphp
        <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-6" x-data="{ expanded: true }">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100 cursor-pointer" @click="expanded = !expanded">
                <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded-lg bg-[#C9A227]/15 text-[#C9A227] flex items-center justify-center font-bold">
                        <i data-lucide="sparkles" class="w-4 h-4"></i>
                    </div>
                    <div>
                        <h2 class="text-sm font-bold text-slate-900">Hero Section Content</h2>
                        <p class="text-[11px] text-slate-500">Eyebrow, Headline lines, copy, CTAs, and 3-Pillar Telemetry Ribbon.</p>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <input type="hidden" name="sections[hero][title]" value="Hero Section">
                    <label class="inline-flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                        <input type="checkbox" name="sections[hero][is_active]" value="1" {{ ($heroSection && $heroSection->is_active) ? 'checked' : 'checked' }} class="rounded border-slate-300 text-blue-600 focus:ring-blue-500">
                        <span>Active</span>
                    </label>
                    <i data-lucide="chevron-down" class="w-4 h-4 text-slate-400 transition-transform" :class="{ 'rotate-180': expanded }"></i>
                </div>
            </div>

            <div x-show="expanded" class="pt-5 space-y-4 text-xs">
                <!-- Eyebrow -->
                <div>
                    <label class="block font-semibold text-slate-700 mb-1">
                        Hero Eyebrow Text <span class="text-[#C9A227] font-mono text-[10px] ml-1">(Locks on single line with gold pulsating dot)</span>
                    </label>
                    <input 
                        type="text" 
                        name="sections[hero][content][eyebrow]" 
                        value="{{ $heroContent['eyebrow'] ?? 'Strategic Capital Advisory • Africa Growth Markets' }}"
                        class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-medium focus:outline-none focus:border-blue-500"
                    >
                </div>

                <!-- Headline Line 1 & Line 2 -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="block font-semibold text-slate-700 mb-1">
                            Headline Line 1 <span class="text-blue-600 font-mono text-[10px] ml-1">("Connecting African Opportunity")</span>
                        </label>
                        <input 
                            type="text" 
                            name="sections[hero][content][headline_line1]" 
                            value="{{ $heroContent['headline_line1'] ?? 'Connecting African Opportunity' }}"
                            class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-bold focus:outline-none focus:border-blue-500"
                        >
                    </div>

                    <div>
                        <label class="block font-semibold text-slate-700 mb-1">
                            Headline Line 2 <span class="text-blue-600 font-mono text-[10px] ml-1">("With Global Capital")</span>
                        </label>
                        <input 
                            type="text" 
                            name="sections[hero][content][headline_line2]" 
                            value="{{ $heroContent['headline_line2'] ?? 'With Global Capital' }}"
                            class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-bold focus:outline-none focus:border-blue-500"
                        >
                    </div>
                </div>

                <!-- Value Proposition Subhead Copy -->
                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Value Proposition Narrative Copy</label>
                    <textarea 
                        name="sections[hero][content][subhead]" 
                        rows="3" 
                        class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500 leading-relaxed"
                    >{{ $heroContent['subhead'] ?? 'Black Markt Network Consultancy is an independent strategic capital advisory firm connecting ambitious African businesses, project sponsors, governments and institutions with institutional capital, expertise and transformative partnerships.' }}</textarea>
                </div>

                <!-- CTAs -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
                    <div>
                        <label class="block font-semibold text-slate-700 mb-1">Primary Button Label (Gold)</label>
                        <input 
                            type="text" 
                            name="sections[hero][content][cta_primary_label]" 
                            value="{{ $heroContent['cta_primary_label'] ?? 'Request a Strategic Consultation' }}"
                            class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500"
                        >
                    </div>
                    <div>
                        <label class="block font-semibold text-slate-700 mb-1">Primary Button URL</label>
                        <input 
                            type="text" 
                            name="sections[hero][content][cta_primary_url]" 
                            value="{{ $heroContent['cta_primary_url'] ?? '/book-consultation' }}"
                            class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-mono focus:outline-none focus:border-blue-500"
                        >
                    </div>

                    <div>
                        <label class="block font-semibold text-slate-700 mb-1">Secondary Button Label (Outline)</label>
                        <input 
                            type="text" 
                            name="sections[hero][content][cta_secondary_label]" 
                            value="{{ $heroContent['cta_secondary_label'] ?? 'Services' }}"
                            class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500"
                        >
                    </div>
                    <div>
                        <label class="block font-semibold text-slate-700 mb-1">Secondary Button URL</label>
                        <input 
                            type="text" 
                            name="sections[hero][content][cta_secondary_url]" 
                            value="{{ $heroContent['cta_secondary_url'] ?? '#services' }}"
                            class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-mono focus:outline-none focus:border-blue-500"
                        >
                    </div>
                </div>

                <!-- Fiduciary Badge Text -->
                <div class="pt-2 border-t border-slate-100">
                    <label class="block font-semibold text-slate-700 mb-1">Fiduciary Discretion Badge Text</label>
                    <input 
                        type="text" 
                        name="sections[hero][content][fiduciary_badge]" 
                        value="{{ $heroContent['fiduciary_badge'] ?? 'Strict Fiduciary Discretion • Sovereign Grade Governance' }}"
                        class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500"
                    >
                </div>

                <!-- 3-Pillar Telemetry Ribbon -->
                <div class="pt-2 border-t border-slate-100">
                    <p class="font-bold text-slate-800 mb-2">3-Pillar Telemetry Glass Ribbon (Mobile & Tablet)</p>
                    <div class="grid grid-cols-3 gap-3">
                        <div class="p-3 bg-slate-50 rounded-lg border border-slate-100">
                            <label class="block font-mono text-[10px] text-slate-500 uppercase">Pillar 1 Value</label>
                            <input 
                                type="text" 
                                name="sections[hero][content][telemetry_ribbon][0][value]" 
                                value="{{ $heroContent['telemetry_ribbon'][0]['value'] ?? '$4.2B+' }}"
                                class="w-full mt-1 px-2 py-1 border border-slate-200 rounded text-slate-900 font-bold"
                            >
                            <input type="hidden" name="sections[hero][content][telemetry_ribbon][0][label]" value="Pipeline">
                            <span class="text-[10px] text-slate-400 mt-1 block">Label: Pipeline</span>
                        </div>

                        <div class="p-3 bg-slate-50 rounded-lg border border-slate-100">
                            <label class="block font-mono text-[10px] text-slate-500 uppercase">Pillar 2 Value</label>
                            <input 
                                type="text" 
                                name="sections[hero][content][telemetry_ribbon][1][value]" 
                                value="{{ $heroContent['telemetry_ribbon'][1]['value'] ?? '70+' }}"
                                class="w-full mt-1 px-2 py-1 border border-slate-200 rounded text-slate-900 font-bold"
                            >
                            <input type="hidden" name="sections[hero][content][telemetry_ribbon][1][label]" value="Network">
                            <span class="text-[10px] text-slate-400 mt-1 block">Label: Network</span>
                        </div>

                        <div class="p-3 bg-slate-50 rounded-lg border border-slate-100">
                            <label class="block font-mono text-[10px] text-slate-500 uppercase">Pillar 3 Value</label>
                            <input 
                                type="text" 
                                name="sections[hero][content][telemetry_ribbon][2][value]" 
                                value="{{ $heroContent['telemetry_ribbon'][2]['value'] ?? 'LON + 8 Hubs' }}"
                                class="w-full mt-1 px-2 py-1 border border-slate-200 rounded text-slate-900 font-bold"
                            >
                            <input type="hidden" name="sections[hero][content][telemetry_ribbon][2][label]" value="Presence">
                            <span class="text-[10px] text-slate-400 mt-1 block">Label: Presence</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ==========================================================================
             ABOUT US SECTION DYNAMIC CMS EDITOR
             ========================================================================== -->
        @php
            $aboutSection = $page->sections->where('section_key', 'about_us')->first();
            $aboutContent = $aboutSection ? $aboutSection->content : [];
        @endphp
        <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-6" x-data="{ expanded: false }">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100 cursor-pointer" @click="expanded = !expanded">
                <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                        <i data-lucide="info" class="w-4 h-4"></i>
                    </div>
                    <div>
                        <h2 class="text-sm font-bold text-slate-900">About Us Section Content</h2>
                        <p class="text-[11px] text-slate-500">Pedigree headline, narrative body, and core counters.</p>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <input type="hidden" name="sections[about_us][title]" value="About Us Section">
                    <label class="inline-flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                        <input type="checkbox" name="sections[about_us][is_active]" value="1" {{ ($aboutSection && $aboutSection->is_active) ? 'checked' : 'checked' }} class="rounded border-slate-300 text-blue-600 focus:ring-blue-500">
                        <span>Active</span>
                    </label>
                    <i data-lucide="chevron-down" class="w-4 h-4 text-slate-400 transition-transform" :class="{ 'rotate-180': expanded }"></i>
                </div>
            </div>

            <div x-show="expanded" class="pt-5 space-y-4 text-xs">
                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Eyebrow</label>
                    <input 
                        type="text" 
                        name="sections[about_us][content][eyebrow]" 
                        value="{{ $aboutContent['eyebrow'] ?? 'INSTITUTIONAL ADVISORY PEDIGREE' }}"
                        class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500"
                    >
                </div>
                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Headline</label>
                    <input 
                        type="text" 
                        name="sections[about_us][content][headline]" 
                        value="{{ $aboutContent['headline'] ?? 'Unlocking High-Yield Sovereign Capital Across Emerging Africa' }}"
                        class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-bold focus:outline-none focus:border-blue-500"
                    >
                </div>
                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Narrative Body</label>
                    <textarea 
                        name="sections[about_us][content][body]" 
                        rows="3" 
                        class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500 leading-relaxed"
                    >{{ $aboutContent['body'] ?? 'Operating from London with active regional coverage across Lagos, Nairobi, Johannesburg, Cairo, Accra, and Kigali, Black Markt operates at the intersection of sovereign discretion, deep institutional syndication, and tier-1 corporate finance execution.' }}</textarea>
                </div>
            </div>
        </div>
        @endif

        <!-- Floating Sticky Save Actions Bar -->
        <div class="sticky bottom-6 bg-slate-900/90 backdrop-blur-md text-white p-4 rounded-xl shadow-2xl flex items-center justify-between border border-slate-800 z-30">
            <div class="flex items-center gap-2 text-xs">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i>
                <span class="text-slate-300">All modifications are deployed immediately to the REST API.</span>
            </div>

            <div class="flex items-center gap-3">
                <a href="{{ route('admin.pages.index') }}" class="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition">
                    Cancel
                </a>
                <button type="submit" class="px-5 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition flex items-center gap-2">
                    <i data-lucide="save" class="w-4 h-4"></i>
                    <span>Save & Publish Changes</span>
                </button>
            </div>
        </div>
    </form>
</div>
@endsection
