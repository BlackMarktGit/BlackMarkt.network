@extends('admin.layouts.admin')

@section('title', 'Global Financial Hubs')

@section('content')
<div class="space-y-4">
    <!-- Breadcrumb -->
    <div class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-mono">
        <a href="{{ route('admin.dashboard') }}" class="hover:text-blue-600">DASHBOARD</a> / <span>LOCATIONS</span>
    </div>

    <div class="flex items-center justify-between pb-3 border-b border-slate-200">
        <div>
            <h1 class="text-xl font-bold text-slate-900">8 Global Financial Capitals & Hub Telemetry</h1>
            <p class="text-xs text-slate-500 mt-0.5">Controls the continuous loop animation on the Hero canvas and live market data.</p>
        </div>
    </div>

    <!-- Grid of Hubs -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        @foreach($locations as $hub)
        <div class="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between" x-data="{ editOpen: false }">
            <div>
                <div class="h-32 bg-slate-900 relative bg-cover bg-center" style="background-image: url('{{ $hub->image_url }}');">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <div class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-[#C9A227] font-bold border border-[#C9A227]/30">
                        {{ $hub->city_code }}
                    </div>
                    <div class="absolute bottom-2 left-3 right-3 text-white">
                        <h3 class="text-sm font-bold tracking-tight">{{ $hub->name }}</h3>
                        <p class="text-[10px] text-slate-300 font-mono truncate">{{ $hub->market }}</p>
                    </div>
                </div>

                <div class="p-3.5 space-y-2 text-xs">
                    <div>
                        <p class="text-[10px] text-slate-400 uppercase font-mono">Financial District</p>
                        <p class="font-semibold text-slate-800 text-xs truncate">{{ $hub->hub_name }}</p>
                    </div>
                    <div>
                        <p class="text-[10px] text-slate-400 uppercase font-mono">Strategic Focus</p>
                        <p class="text-slate-600 text-[11px] line-clamp-2 leading-relaxed">{{ $hub->focus }}</p>
                    </div>
                </div>
            </div>

            <div class="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span class="text-[10px] font-mono text-slate-500">{{ $hub->tz_abbr }} ({{ $hub->timezone }})</span>
                <button @click="editOpen = true" class="px-2.5 py-1 text-xs font-semibold rounded bg-blue-600 text-white hover:bg-blue-500 shadow-sm">
                    Edit Telemetry
                </button>
            </div>

            <!-- Edit Hub Modal -->
            <div x-show="editOpen" x-cloak class="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
                <div @click.away="editOpen = false" class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-xs space-y-4">
                    <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                        <h3 class="text-sm font-bold text-slate-900">Edit Hub: {{ $hub->name }} ({{ $hub->city_code }})</h3>
                        <button @click="editOpen = false" class="text-slate-400 hover:text-slate-600 text-lg font-bold">&times;</button>
                    </div>

                    <form action="{{ route('admin.locations.update', $hub->id) }}" method="POST" class="space-y-3">
                        @csrf
                        @method('PUT')
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">City Name</label>
                            <input type="text" name="name" value="{{ $hub->name }}" class="w-full px-3 py-1.5 border border-slate-200 rounded-lg">
                        </div>
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">Financial District / Hub</label>
                            <input type="text" name="hub_name" value="{{ $hub->hub_name }}" class="w-full px-3 py-1.5 border border-slate-200 rounded-lg">
                        </div>
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">Market Index (e.g. LSE / FTSE 100)</label>
                            <input type="text" name="market" value="{{ $hub->market }}" class="w-full px-3 py-1.5 border border-slate-200 rounded-lg">
                        </div>
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">Timezone (e.g. Europe/London)</label>
                            <input type="text" name="timezone" value="{{ $hub->timezone }}" class="w-full px-3 py-1.5 border border-slate-200 rounded-lg">
                        </div>
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">Timezone Abbreviation (e.g. GMT/BST)</label>
                            <input type="text" name="tz_abbr" value="{{ $hub->tz_abbr }}" class="w-full px-3 py-1.5 border border-slate-200 rounded-lg">
                        </div>
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">Strategic Focus</label>
                            <input type="text" name="focus" value="{{ $hub->focus }}" class="w-full px-3 py-1.5 border border-slate-200 rounded-lg">
                        </div>
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">Atmosphere</label>
                            <input type="text" name="atmosphere" value="{{ $hub->atmosphere }}" class="w-full px-3 py-1.5 border border-slate-200 rounded-lg">
                        </div>
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">Skyline Image URL</label>
                            <input type="text" name="image_url" value="{{ $hub->image_url }}" class="w-full px-3 py-1.5 border border-slate-200 rounded-lg font-mono">
                        </div>
                        <div>
                            <label class="block font-semibold text-slate-700 mb-1">Pan Animation Keyframe</label>
                            <select name="pan_keyframe" class="w-full px-3 py-1.5 border border-slate-200 rounded-lg bg-white">
                                <option value="pan-subtle-right" {{ $hub->pan_keyframe === 'pan-subtle-right' ? 'selected' : '' }}>pan-subtle-right</option>
                                <option value="pan-subtle-left" {{ $hub->pan_keyframe === 'pan-subtle-left' ? 'selected' : '' }}>pan-subtle-left</option>
                                <option value="pan-subtle-zoom" {{ $hub->pan_keyframe === 'pan-subtle-zoom' ? 'selected' : '' }}>pan-subtle-zoom</option>
                                <option value="pan-subtle-zoom-out" {{ $hub->pan_keyframe === 'pan-subtle-zoom-out' ? 'selected' : '' }}>pan-subtle-zoom-out</option>
                            </select>
                        </div>

                        <div class="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                            <button type="button" @click="editOpen = false" class="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600">Cancel</button>
                            <button type="submit" class="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold">Save Telemetry</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        @endforeach
    </div>
</div>
@endsection
