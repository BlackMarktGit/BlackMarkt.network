@extends('admin.layouts.admin')

@section('title', 'Dashboard')

@section('content')
<div class="space-y-6">
    <!-- Top Action Row (Matching Screenshot 3) -->
    <div class="flex items-center justify-between">
        <div>
            <p class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-mono">DASHBOARD</p>
        </div>
        <button class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-sm transition">
            <i data-lucide="layout-grid" class="w-3.5 h-3.5 text-blue-600"></i>
            <span>Manage Widgets</span>
        </button>
    </div>

    <!-- Alert / System Notice (Matching Screenshot 3) -->
    <div class="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200/80 text-blue-900 text-xs flex items-center gap-2.5">
        <i data-lucide="info" class="w-4 h-4 text-blue-600 shrink-0"></i>
        <span>Welcome to the <strong>Black Markt Enterprise CMS</strong>. Use the sidebar to manage all platform pages, sovereign mandates, blog intelligence, and system settings.</span>
    </div>

    <!-- 4 Vibrant Metric Stat Cards (Matching Screenshot 3) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Card 1: Orders / Mandates -->
        <div class="relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-[#06B6D4] to-[#0891B2] text-white shadow-sm flex items-center justify-between">
            <div>
                <p class="text-xs font-semibold text-cyan-100 uppercase tracking-wider">Orders</p>
                <p class="text-3xl font-extrabold mt-1 tracking-tight">{{ $ordersCount }}</p>
            </div>
            <i data-lucide="shopping-cart" class="w-12 h-12 text-white/20 absolute -right-2 -bottom-2"></i>
        </div>

        <!-- Card 2: Products / Advisory Reports -->
        <div class="relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white shadow-sm flex items-center justify-between">
            <div>
                <p class="text-xs font-semibold text-blue-100 uppercase tracking-wider">Products</p>
                <p class="text-3xl font-extrabold mt-1 tracking-tight">{{ $productsCount }}</p>
            </div>
            <i data-lucide="shopping-bag" class="w-12 h-12 text-white/20 absolute -right-2 -bottom-2"></i>
        </div>

        <!-- Card 3: Customers / Institutional Funds -->
        <div class="relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] text-white shadow-sm flex items-center justify-between">
            <div>
                <p class="text-xs font-semibold text-blue-100 uppercase tracking-wider">Customers</p>
                <p class="text-3xl font-extrabold mt-1 tracking-tight">{{ $customersCount }}</p>
            </div>
            <i data-lucide="users" class="w-12 h-12 text-white/20 absolute -right-2 -bottom-2"></i>
        </div>

        <!-- Card 4: Reviews / Inquiries -->
        <div class="relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] text-white shadow-sm flex items-center justify-between">
            <div>
                <p class="text-xs font-semibold text-blue-200 uppercase tracking-wider">Reviews</p>
                <p class="text-3xl font-extrabold mt-1 tracking-tight">{{ $reviewsCount }}</p>
            </div>
            <i data-lucide="message-square" class="w-12 h-12 text-white/20 absolute -right-2 -bottom-2"></i>
        </div>
    </div>

    <!-- Site Analytics Chart & World Geo Map (Matching Screenshot 3) -->
    <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
        <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
            <h2 class="text-sm font-bold text-slate-800">Site Analytics</h2>
            <select class="text-xs border border-slate-200 rounded-lg px-2.5 py-1 text-slate-600 bg-white focus:outline-none">
                <option>This Year</option>
                <option>This Month</option>
                <option>Today</option>
            </select>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Line Graph (2 cols) -->
            <div class="lg:col-span-2">
                <div class="h-64">
                    <canvas id="analyticsChart"></canvas>
                </div>
            </div>

            <!-- World Map Vector Graphic (1 col) -->
            <div class="flex flex-col items-center justify-center bg-slate-50 rounded-xl p-4 border border-slate-100 relative">
                <div class="absolute top-3 right-3 flex flex-col gap-1 z-10">
                    <button class="w-6 h-6 rounded bg-white border border-slate-200 shadow-sm text-slate-600 flex items-center justify-center font-bold text-xs hover:bg-slate-100">+</button>
                    <button class="w-6 h-6 rounded bg-white border border-slate-200 shadow-sm text-slate-600 flex items-center justify-center font-bold text-xs hover:bg-slate-100">-</button>
                </div>
                <!-- World Map SVG Graphic -->
                <svg viewBox="0 0 1000 500" class="w-full h-auto text-blue-200 max-h-48" fill="currentColor">
                    <path d="M150,150 Q200,80 300,120 Q350,180 280,240 Q200,220 150,150 Z" class="fill-blue-300/60 hover:fill-blue-400 transition" />
                    <path d="M480,100 Q560,80 620,130 Q580,220 500,180 Z" class="fill-blue-400/80 hover:fill-blue-500 transition" />
                    <!-- Africa Sovereign Territory -->
                    <path d="M480,200 Q560,190 580,270 Q520,380 480,320 Q440,240 480,200 Z" class="fill-blue-600 hover:fill-blue-700 transition" />
                    <circle cx="485" cy="115" r="4" class="fill-[#C9A227]" /> <!-- London -->
                    <circle cx="230" cy="140" r="4" class="fill-[#C9A227]" /> <!-- New York -->
                    <circle cx="485" cy="265" r="5" class="fill-[#C9A227] animate-ping" /> <!-- Lagos -->
                    <circle cx="530" cy="285" r="4" class="fill-[#C9A227]" /> <!-- Nairobi -->
                    <circle cx="510" cy="360" r="4" class="fill-[#C9A227]" /> <!-- Johannesburg -->
                </svg>
                <p class="text-[11px] font-mono text-slate-500 mt-3 text-center">8 Connected Sovereign Hubs • Live Global Telemetry</p>
            </div>
        </div>

        <!-- Analytics Metric Counters Row -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-100">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center">
                    <i data-lucide="eye" class="w-4 h-4"></i>
                </div>
                <div>
                    <p class="text-[11px] text-slate-400 font-semibold uppercase">Sessions</p>
                    <p class="text-base font-bold text-slate-800">{{ number_format($analytics['sessions']) }}</p>
                </div>
            </div>

            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <i data-lucide="users" class="w-4 h-4"></i>
                </div>
                <div>
                    <p class="text-[11px] text-slate-400 font-semibold uppercase">Visitors</p>
                    <p class="text-base font-bold text-slate-800">{{ number_format($analytics['visitors']) }}</p>
                </div>
            </div>

            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                    <i data-lucide="file" class="w-4 h-4"></i>
                </div>
                <div>
                    <p class="text-[11px] text-slate-400 font-semibold uppercase">Pageviews</p>
                    <p class="text-base font-bold text-slate-800">{{ number_format($analytics['pageviews']) }}</p>
                </div>
            </div>

            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
                    <i data-lucide="zap" class="w-4 h-4"></i>
                </div>
                <div>
                    <p class="text-[11px] text-slate-400 font-semibold uppercase">Bounce Rate</p>
                    <p class="text-base font-bold text-slate-800">{{ $analytics['bounce_rate'] }}</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Middle 4 Intelligence Cards (Matching Screenshot 3) -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- 1. Most Visited Pages -->
        <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex flex-col justify-between">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 class="text-xs font-bold text-slate-800">Most Visited Pages</h3>
                <span class="text-[10px] text-slate-400 font-mono">Today</span>
            </div>
            <div class="py-10 text-center text-slate-400">
                <i data-lucide="smile" class="w-8 h-8 mx-auto mb-2 text-slate-300"></i>
                <p class="text-xs font-medium">No results found</p>
            </div>
        </div>

        <!-- 2. Top Browsers -->
        <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex flex-col justify-between">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 class="text-xs font-bold text-slate-800">Top Browsers</h3>
                <span class="text-[10px] text-slate-400 font-mono">Today</span>
            </div>
            <div class="py-10 text-center text-slate-400">
                <i data-lucide="smile" class="w-8 h-8 mx-auto mb-2 text-slate-300"></i>
                <p class="text-xs font-medium">No results found</p>
            </div>
        </div>

        <!-- 3. Top Referrers -->
        <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex flex-col justify-between">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 class="text-xs font-bold text-slate-800">Top Referrers</h3>
                <span class="text-[10px] text-slate-400 font-mono">Today</span>
            </div>
            <div class="py-10 text-center text-slate-400">
                <i data-lucide="smile" class="w-8 h-8 mx-auto mb-2 text-slate-300"></i>
                <p class="text-xs font-medium">No results found</p>
            </div>
        </div>

        <!-- 4. Recent Posts (Numbered list 1 to 10 - Screenshot 3) -->
        <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex flex-col">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
                <h3 class="text-xs font-bold text-slate-800">Recent Posts</h3>
            </div>
            <div class="space-y-2 overflow-y-auto max-h-56 pr-1 text-xs">
                @foreach($recentPosts as $idx => $post)
                <div class="flex items-start gap-2 py-1 border-b border-slate-50 last:border-0">
                    <span class="text-slate-400 font-bold font-mono text-[10px] w-4">{{ $idx + 1 }}</span>
                    <div class="flex-1 min-w-0">
                        <a href="{{ route('admin.blog.posts.edit', $post->id) }}" class="text-blue-600 hover:underline truncate block font-medium">
                            {{ $post->title }}
                        </a>
                        <span class="text-[10px] text-slate-400 font-mono">{{ $post->created_at->format('Y-m-d') }}</span>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </div>

    <!-- Lower Split Grid: Real-Time Activity Logs & Ecommerce Widget (Screenshot 3) -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Real-Time Activity Logs (2 cols - Screenshot 3) -->
        <div class="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-5">
            <h3 class="text-xs font-bold text-slate-800 pb-3 border-b border-slate-100 mb-3">Activity Logs</h3>
            
            <div class="space-y-3">
                @foreach($activityLogs as $log)
                <div class="flex items-start gap-3 py-2 border-b border-slate-50 last:border-0 text-xs">
                    <!-- Leaf icon logo badge matching screenshot -->
                    <div class="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                        <i data-lucide="sprout" class="w-4 h-4"></i>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-slate-700">
                            <strong class="text-slate-900">{{ $log->user_name }}</strong> 
                            <span class="px-1.5 py-0.2 rounded bg-blue-600 text-white text-[10px] font-semibold">{{ $log->user_role }}</span>
                            {{ $log->action }}
                        </p>
                        <p class="text-[10px] text-slate-400 font-mono mt-0.5">
                            {{ $log->created_at->diffForHumans() }} 
                            @if($log->ip_address)
                            <span class="text-blue-600">[{{ $log->ip_address }}]</span>
                            @endif
                        </p>
                    </div>
                </div>
                @endforeach
            </div>

            <!-- Activity Logs Pagination Footer (Screenshot 3) -->
            <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Showing 1 to 10 of {{ $activityLogs->total() }} records</span>
                <div class="flex items-center gap-1">
                    {{ $activityLogs->links('pagination::simple-tailwind') }}
                </div>
            </div>
        </div>

        <!-- Ecommerce / Advisory Telemetry Widget (1 col - Screenshot 3) -->
        <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col justify-between">
            <div>
                <h3 class="text-xs font-bold text-slate-800 pb-3 border-b border-slate-100 mb-4">Ecommerce & Advisory</h3>

                <div class="space-y-4 text-xs">
                    <div>
                        <p class="text-xl font-extrabold text-slate-900 font-mono">$0.00</p>
                        <p class="text-[11px] text-slate-400">Revenue this month</p>
                    </div>

                    <div class="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                        <div>
                            <p class="text-base font-bold text-emerald-600 font-mono">1</p>
                            <p class="text-[10px] text-slate-500 leading-tight">order(s) processing in this month</p>
                        </div>
                        <div>
                            <p class="text-base font-bold text-blue-600 font-mono">0</p>
                            <p class="text-[10px] text-slate-500 leading-tight">order(s) completed in this month</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                        <div>
                            <p class="text-base font-bold text-amber-500 font-mono">0</p>
                            <p class="text-[10px] text-slate-500 leading-tight">product(s) will be out of stock soon</p>
                        </div>
                        <div>
                            <p class="text-base font-bold text-red-500 font-mono">0</p>
                            <p class="text-[10px] text-slate-500 leading-tight">product(s) out of stock</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-6 pt-4 border-t border-slate-100 text-center">
                <a href="{{ route('admin.inquiries.index') }}" class="text-xs text-blue-600 hover:underline font-semibold">
                    View Inquiries & Consultation Pipeline &rarr;
                </a>
            </div>
        </div>
    </div>
</div>
@endsection

@push('scripts')
<script>
    document.addEventListener('DOMContentLoaded', function () {
        const ctx = document.getElementById('analyticsChart').getContext('2d');
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: @json($analytics['months']),
                datasets: [
                    {
                        label: 'Sessions',
                        data: @json($analytics['sessions_data']),
                        borderColor: '#3B82F6',
                        backgroundColor: 'rgba(59, 130, 246, 0.25)',
                        fill: true,
                        tension: 0.4,
                        borderWidth: 2,
                    },
                    {
                        label: 'Visitors',
                        data: @json($analytics['visitors_data']),
                        borderColor: '#EC4899',
                        backgroundColor: 'rgba(236, 72, 153, 0.20)',
                        fill: true,
                        tension: 0.4,
                        borderWidth: 2,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: { grid: { display: false } },
                    y: { 
                        beginAtZero: true,
                        ticks: {
                            callback: function(v) { return v.toLocaleString(); }
                        }
                    }
                }
            }
        });
    });
</script>
@endpush
