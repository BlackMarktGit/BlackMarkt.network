@extends('admin.layouts.admin')

@section('title', 'Platform Settings')

@section('content')
<div class="space-y-6 max-w-6xl" x-data="{ modalOpen: false, modalTitle: '', modalFields: [] }">
    <!-- Breadcrumb (Matching Image 3) -->
    <div class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-mono">
        <a href="{{ route('admin.dashboard') }}" class="hover:text-blue-600">DASHBOARD</a> / <span>SETTINGS</span>
    </div>

    <!-- Quick Save Form Wrapper -->
    <form action="{{ route('admin.settings.update') }}" method="POST" id="settingsForm">
        @csrf
        
        <!-- ==========================================================================
             1. COMMON GROUP (Matching Image 3)
             ========================================================================== -->
        <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-6">
            <h2 class="text-sm font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">Common</h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <!-- General -->
                <div class="p-4 rounded-xl border border-slate-100 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer bg-slate-50/50 group" @click="modalTitle = 'General Settings'; modalOpen = true">
                    <div class="flex items-start gap-3">
                        <div class="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                            <i data-lucide="settings" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <h3 class="text-xs font-bold text-slate-800">General</h3>
                            <p class="text-[11px] text-slate-500 mt-0.5 leading-relaxed">View and update your general settings, site name, logo, copyright</p>
                        </div>
                    </div>
                </div>

                <!-- Email -->
                <div class="p-4 rounded-xl border border-slate-100 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer bg-slate-50/50 group" @click="modalTitle = 'Email SMTP Settings'; modalOpen = true">
                    <div class="flex items-start gap-3">
                        <div class="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                            <i data-lucide="mail" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <h3 class="text-xs font-bold text-slate-800">Email</h3>
                            <p class="text-[11px] text-slate-500 mt-0.5 leading-relaxed">View and update your email settings and SMTP credentials</p>
                        </div>
                    </div>
                </div>

                <!-- Email templates -->
                <div class="p-4 rounded-xl border border-slate-100 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer bg-slate-50/50 group">
                    <div class="flex items-start gap-3">
                        <div class="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                            <i data-lucide="file-code" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <h3 class="text-xs font-bold text-slate-800">Email templates</h3>
                            <p class="text-[11px] text-slate-500 mt-0.5 leading-relaxed">Email templates using HTML & system variables</p>
                        </div>
                    </div>
                </div>

                <!-- Media -->
                <div class="p-4 rounded-xl border border-slate-100 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer bg-slate-50/50 group">
                    <div class="flex items-start gap-3">
                        <div class="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                            <i data-lucide="image" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <h3 class="text-xs font-bold text-slate-800">Media</h3>
                            <p class="text-[11px] text-slate-500 mt-0.5 leading-relaxed">View and update your media upload and storage settings</p>
                        </div>
                    </div>
                </div>

                <!-- Permalink -->
                <div class="p-4 rounded-xl border border-slate-100 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer bg-slate-50/50 group">
                    <div class="flex items-start gap-3">
                        <div class="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                            <i data-lucide="link" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <h3 class="text-xs font-bold text-slate-800">Permalink</h3>
                            <p class="text-[11px] text-slate-500 mt-0.5 leading-relaxed">View and update your permalink and URL slug structure</p>
                        </div>
                    </div>
                </div>

                <!-- Admin appearance -->
                <div class="p-4 rounded-xl border border-slate-100 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer bg-slate-50/50 group" @click="modalTitle = 'Admin Appearance'; modalOpen = true">
                    <div class="flex items-start gap-3">
                        <div class="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                            <i data-lucide="palette" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <h3 class="text-xs font-bold text-slate-800">Admin appearance</h3>
                            <p class="text-[11px] text-slate-500 mt-0.5 leading-relaxed">View and update logo, favicon, dark layout, colors</p>
                        </div>
                    </div>
                </div>

                <!-- API Settings -->
                <div class="p-4 rounded-xl border border-slate-100 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer bg-slate-50/50 group">
                    <div class="flex items-start gap-3">
                        <div class="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                            <i data-lucide="code" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <h3 class="text-xs font-bold text-slate-800">API Settings</h3>
                            <p class="text-[11px] text-slate-500 mt-0.5 leading-relaxed">View and update your API token authentication and CORS</p>
                        </div>
                    </div>
                </div>

                <!-- Cache -->
                <div class="p-4 rounded-xl border border-slate-100 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer bg-slate-50/50 group">
                    <div class="flex items-start gap-3">
                        <div class="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                            <i data-lucide="cpu" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <h3 class="text-xs font-bold text-slate-800">Cache</h3>
                            <p class="text-[11px] text-slate-500 mt-0.5 leading-relaxed">Configure caching for sub-50ms optimized API speed</p>
                        </div>
                    </div>
                </div>

                <!-- Website Tracking -->
                <div class="p-4 rounded-xl border border-slate-100 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer bg-slate-50/50 group">
                    <div class="flex items-start gap-3">
                        <div class="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                            <i data-lucide="activity" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <h3 class="text-xs font-bold text-slate-800">Website Tracking</h3>
                            <p class="text-[11px] text-slate-500 mt-0.5 leading-relaxed">Google Analytics G-Tag, Pixel and custom telemetry scripts</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ==========================================================================
             2. LOCALIZATION GROUP (Matching Image 3)
             ========================================================================== -->
        <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-6">
            <h2 class="text-sm font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">Localization</h2>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex items-start gap-3">
                    <div class="p-2.5 rounded-lg bg-blue-50 text-blue-600">
                        <i data-lucide="globe-2" class="w-5 h-5"></i>
                    </div>
                    <div>
                        <h3 class="text-xs font-bold text-slate-800">Locales</h3>
                        <p class="text-[11px] text-slate-500 mt-0.5">View, download and import locales</p>
                    </div>
                </div>

                <div class="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex items-start gap-3">
                    <div class="p-2.5 rounded-lg bg-blue-50 text-blue-600">
                        <i data-lucide="languages" class="w-5 h-5"></i>
                    </div>
                    <div>
                        <h3 class="text-xs font-bold text-slate-800">Theme Translations</h3>
                        <p class="text-[11px] text-slate-500 mt-0.5">Manage the theme translations</p>
                    </div>
                </div>

                <div class="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex items-start gap-3">
                    <div class="p-2.5 rounded-lg bg-blue-50 text-blue-600">
                        <i data-lucide="message-square" class="w-5 h-5"></i>
                    </div>
                    <div>
                        <h3 class="text-xs font-bold text-slate-800">Other Translations</h3>
                        <p class="text-[11px] text-slate-500 mt-0.5">Manage admin and plugin translations</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- ==========================================================================
             3. ECOMMERCE & BUSINESS GROUP (Matching Image 3)
             ========================================================================== -->
        <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-6">
            <h2 class="text-sm font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">Ecommerce & Advisory Mandates</h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div class="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex items-start gap-3">
                    <div class="p-2.5 rounded-lg bg-blue-50 text-blue-600">
                        <i data-lucide="dollar-sign" class="w-5 h-5"></i>
                    </div>
                    <div>
                        <h3 class="text-xs font-bold text-slate-800">Currencies</h3>
                        <p class="text-[11px] text-slate-500 mt-0.5">Exchange rates, USD, GBP, EUR, NGN, KES, ZAR</p>
                    </div>
                </div>

                <div class="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex items-start gap-3">
                    <div class="p-2.5 rounded-lg bg-blue-50 text-blue-600">
                        <i data-lucide="map-pin" class="w-5 h-5"></i>
                    </div>
                    <div>
                        <h3 class="text-xs font-bold text-slate-800">Store locators / Hubs</h3>
                        <p class="text-[11px] text-slate-500 mt-0.5">London HQ and 8 African regional advisory nodes</p>
                    </div>
                </div>

                <div class="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex items-start gap-3">
                    <div class="p-2.5 rounded-lg bg-blue-50 text-blue-600">
                        <i data-lucide="receipt" class="w-5 h-5"></i>
                    </div>
                    <div>
                        <h3 class="text-xs font-bold text-slate-800">Invoices</h3>
                        <p class="text-[11px] text-slate-500 mt-0.5">Sequential numbering format, tax calculation</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- ==========================================================================
             4. OTHERS GROUP (Matching Image 3)
             ========================================================================== -->
        <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <h2 class="text-sm font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">Others</h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex items-start gap-3">
                    <div class="p-2.5 rounded-lg bg-blue-50 text-blue-600">
                        <i data-lucide="bot" class="w-5 h-5"></i>
                    </div>
                    <div>
                        <h3 class="text-xs font-bold text-slate-800">AI Writer</h3>
                        <p class="text-[11px] text-slate-500 mt-0.5">AI writer prompt parameter settings</p>
                    </div>
                </div>

                <div class="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex items-start gap-3">
                    <div class="p-2.5 rounded-lg bg-blue-50 text-blue-600">
                        <i data-lucide="mail-check" class="w-5 h-5"></i>
                    </div>
                    <div>
                        <h3 class="text-xs font-bold text-slate-800">Newsletter</h3>
                        <p class="text-[11px] text-slate-500 mt-0.5">Subscriber list and Mailchimp sync</p>
                    </div>
                </div>

                <div class="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex items-start gap-3">
                    <div class="p-2.5 rounded-lg bg-blue-50 text-blue-600">
                        <i data-lucide="shield" class="w-5 h-5"></i>
                    </div>
                    <div>
                        <h3 class="text-xs font-bold text-slate-800">Captcha</h3>
                        <p class="text-[11px] text-slate-500 mt-0.5">reCAPTCHA v3 & Turnstile validation</p>
                    </div>
                </div>

                <div class="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex items-start gap-3">
                    <div class="p-2.5 rounded-lg bg-blue-50 text-blue-600">
                        <i data-lucide="megaphone" class="w-5 h-5"></i>
                    </div>
                    <div>
                        <h3 class="text-xs font-bold text-slate-800">Announcement</h3>
                        <p class="text-[11px] text-slate-500 mt-0.5">Top marquee alerts & press briefs</p>
                    </div>
                </div>
            </div>
        </div>
    </form>

    <!-- Modal for Editing Settings -->
    <div x-show="modalOpen" x-cloak class="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
        <div @click.away="modalOpen = false" class="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 text-xs space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 class="text-sm font-bold text-slate-900" x-text="modalTitle"></h3>
                <button @click="modalOpen = false" class="text-slate-400 hover:text-slate-600 text-lg font-bold">&times;</button>
            </div>

            <form action="{{ route('admin.settings.update') }}" method="POST" class="space-y-4">
                @csrf
                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Platform Brand Name</label>
                    <input type="text" name="site_name" value="{{ \App\Models\Setting::get('site_name', 'Black Markt Network Consultancy') }}" class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800">
                </div>

                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Tagline</label>
                    <input type="text" name="site_tagline" value="{{ \App\Models\Setting::get('site_tagline', 'Connecting African Opportunity With Global Capital') }}" class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800">
                </div>

                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Contact Email</label>
                    <input type="email" name="site_email" value="{{ \App\Models\Setting::get('site_email', 'advisory@blackmarkt.network') }}" class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800">
                </div>

                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Contact Phone</label>
                    <input type="text" name="site_phone" value="{{ \App\Models\Setting::get('site_phone', '+44 (0) 20 7946 0912') }}" class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800">
                </div>

                <div class="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                    <button type="button" @click="modalOpen = false" class="px-4 py-2 rounded-lg border border-slate-200 text-slate-600">Cancel</button>
                    <button type="submit" class="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold">Save Settings</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
