<!DOCTYPE html>
<html lang="en" class="h-full">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'Admin Dashboard') | Black Markt Enterprise CMS</title>
    
    <!-- Google Fonts: Plus Jakarta Sans & Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS (Play CDN with full utility suite) -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        navy: {
                            900: '#0B1320',
                            800: '#0F172A',
                            700: '#1E293B',
                            600: '#334155',
                        },
                        brand: {
                            gold: '#C9A227',
                            goldLight: '#DFBA42',
                            blue: '#2563EB',
                        }
                    },
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                        mono: ['"JetBrains Mono"', 'monospace'],
                    }
                }
            }
        }
    </script>
    
    <!-- Alpine.js & Lucide Icons -->
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.8/dist/cdn.min.js"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    
    <!-- Chart.js for Interactive Dashboard Graphs -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.7/dist/chart.umd.min.js"></script>

    <style>
        [x-cloak] { display: none !important; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(148, 163, 184, 0.25); border-radius: 9999px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(148, 163, 184, 0.45); }
    </style>
</head>
<body class="h-full bg-[#F8FAFC] text-slate-800 font-sans antialiased" x-data="{ sidebarOpen: true, searchOpen: false }">
    <div class="min-h-full flex">
        
        <!-- ==========================================================================
             ENTERPRISE DARK NAVY SIDEBAR (Mirrored directly from Screenshots 1, 2, 3)
             ========================================================================== -->
        <aside 
            class="w-64 bg-[#0F172A] text-slate-300 flex-shrink-0 flex flex-col transition-all duration-300 border-r border-slate-800 z-30"
            :class="{ '-ml-64': !sidebarOpen }"
        >
            <!-- Logo Header -->
            <div class="h-16 flex items-center px-6 border-b border-slate-800/80 bg-[#0B1320]/60 gap-3">
                <a href="{{ route('admin.dashboard') }}" class="flex items-center gap-2.5 text-white font-bold text-lg tracking-tight">
                    <div class="w-8 h-8 rounded-lg bg-[#C9A227] flex items-center justify-center text-slate-950 font-black shadow-lg shadow-[#C9A227]/20">
                        <i data-lucide="layers" class="w-5 h-5"></i>
                    </div>
                    <span>agon <span class="text-[10px] text-[#C9A227] font-mono tracking-wider ml-1 px-1.5 py-0.5 rounded bg-[#C9A227]/10 border border-[#C9A227]/30">CMS</span></span>
                </a>
            </div>

            <!-- Navigation Links -->
            <nav class="flex-1 px-3 py-4 space-y-1 overflow-y-auto text-sm">
                <!-- 1. Dashboard -->
                <a href="{{ route('admin.dashboard') }}" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors {{ request()->routeIs('admin.dashboard') ? 'bg-blue-600 text-white font-semibold shadow-md' : '' }}">
                    <i data-lucide="home" class="w-4 h-4"></i>
                    <span>Dashboard</span>
                </a>

                <!-- 2. Ecommerce / Deal Room (Badge 15) -->
                <div x-data="{ open: false }">
                    <button @click="open = !open" class="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors">
                        <div class="flex items-center gap-3">
                            <i data-lucide="shopping-bag" class="w-4 h-4"></i>
                            <span>Ecommerce</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="px-1.5 py-0.5 text-[11px] font-bold rounded-full bg-blue-600 text-white">15</span>
                            <i data-lucide="chevron-down" class="w-3.5 h-3.5 transition-transform" :class="{ 'rotate-180': open }"></i>
                        </div>
                    </button>
                    <div x-show="open" x-cloak class="pl-9 pr-2 py-1 space-y-1 text-xs text-slate-400">
                        <a href="{{ route('admin.dashboard') }}" class="block py-1.5 hover:text-white">Advisory Products</a>
                        <a href="{{ route('admin.dashboard') }}" class="block py-1.5 hover:text-white">Retainer Orders</a>
                        <a href="{{ route('admin.dashboard') }}" class="block py-1.5 hover:text-white">Customers / Funds</a>
                        <a href="{{ route('admin.dashboard') }}" class="block py-1.5 hover:text-white">Invoices</a>
                    </div>
                </div>

                <!-- 3. Pages (Active Blue Pill - Screenshot 2) -->
                <a href="{{ route('admin.pages.index') }}" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors {{ request()->routeIs('admin.pages.*') ? 'bg-blue-600 text-white font-semibold shadow-md' : '' }}">
                    <i data-lucide="file-text" class="w-4 h-4"></i>
                    <span>Pages</span>
                </a>

                <!-- 3b. Practices (Advisory Services) -->
                <a href="{{ route('admin.practices.index') }}" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors {{ request()->routeIs('admin.practices.*') ? 'bg-blue-600 text-white font-semibold shadow-md' : '' }}">
                    <i data-lucide="briefcase" class="w-4 h-4"></i>
                    <span>Practices</span>
                </a>

                <!-- 3c. Transactions (Closed Mandates) -->
                <a href="{{ route('admin.transactions.index') }}" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors {{ request()->routeIs('admin.transactions.*') ? 'bg-blue-600 text-white font-semibold shadow-md' : '' }}">
                    <i data-lucide="award" class="w-4 h-4"></i>
                    <span>Transactions</span>
                </a>

                <!-- 4. Blog (Dropdown - Screenshot 1) -->
                <div x-data="{ open: {{ request()->routeIs('admin.blog.*') ? 'true' : 'false' }} }">
                    <button @click="open = !open" class="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors {{ request()->routeIs('admin.blog.*') ? 'text-white' : '' }}">
                        <div class="flex items-center gap-3">
                            <i data-lucide="newspaper" class="w-4 h-4"></i>
                            <span>Blog</span>
                        </div>
                        <i data-lucide="chevron-down" class="w-3.5 h-3.5 transition-transform" :class="{ 'rotate-180': open }"></i>
                    </button>
                    <div x-show="open" class="pl-9 pr-2 py-1 space-y-1 text-xs text-slate-400">
                        <a href="{{ route('admin.blog.posts.index') }}" class="block py-1.5 hover:text-white {{ request()->routeIs('admin.blog.posts.*') ? 'text-blue-400 font-semibold' : '' }}">Posts</a>
                        <a href="{{ route('admin.blog.categories.index') }}" class="block py-1.5 hover:text-white {{ request()->routeIs('admin.blog.categories.*') ? 'text-blue-400 font-semibold' : '' }}">Categories</a>
                    </div>
                </div>

                <!-- 9. Contact / Inquiries (Badge with dynamic unread count) -->
                <a href="{{ route('admin.inquiries.index') }}" class="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors {{ request()->routeIs('admin.inquiries.*') ? 'bg-blue-600 text-white font-semibold' : '' }}">
                    <div class="flex items-center gap-3">
                        <i data-lucide="mail" class="w-4 h-4"></i>
                        <span>Contact</span>
                    </div>
                    @php $unreadCount = \App\Models\Inquiry::where('status', 'Unread')->count(); @endphp
                    @if($unreadCount > 0)
                    <span class="px-1.5 py-0.5 text-[11px] font-bold rounded-full bg-blue-600 text-white">{{ $unreadCount }}</span>
                    @endif
                </a>

                <!-- 11. Newsletters -->
                <a href="{{ route('admin.newsletters.index') }}" class="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors {{ request()->routeIs('admin.newsletters.*') ? 'bg-blue-600 text-white font-semibold' : '' }}">
                    <div class="flex items-center gap-3">
                        <i data-lucide="send" class="w-4 h-4"></i>
                        <span>Newsletters</span>
                    </div>
                    @php $subsCount = \App\Models\Newsletter::count(); @endphp
                    @if($subsCount > 0)
                    <span class="px-1.5 py-0.5 text-[11px] font-bold rounded-full bg-slate-700 text-slate-300">{{ $subsCount }}</span>
                    @endif
                </a>

                <!-- 12. Locations (8 Global Hubs) -->
                <a href="{{ route('admin.locations.index') }}" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors {{ request()->routeIs('admin.locations.*') ? 'bg-blue-600 text-white font-semibold' : '' }}">
                    <i data-lucide="globe" class="w-4 h-4"></i>
                    <span>Locations</span>
                </a>

                <!-- 13. Media -->
                <a href="{{ route('admin.dashboard') }}" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors">
                    <i data-lucide="image" class="w-4 h-4"></i>
                    <span>Media</span>
                </a>

                <!-- 14. Appearance -->
                <a href="{{ route('admin.dashboard') }}" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors">
                    <i data-lucide="palette" class="w-4 h-4"></i>
                    <span>Appearance</span>
                </a>

                <!-- 15. Plugins -->
                <a href="{{ route('admin.dashboard') }}" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors">
                    <i data-lucide="plug" class="w-4 h-4"></i>
                    <span>Plugins</span>
                </a>

                <!-- 16. Tools -->
                <a href="{{ route('admin.dashboard') }}" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors">
                    <i data-lucide="wrench" class="w-4 h-4"></i>
                    <span>Tools</span>
                </a>

                <!-- 17. Settings (Image 3) -->
                <a href="{{ route('admin.settings.index') }}" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors {{ request()->routeIs('admin.settings.*') ? 'bg-blue-600 text-white font-semibold' : '' }}">
                    <i data-lucide="settings" class="w-4 h-4"></i>
                    <span>Settings</span>
                </a>

                <!-- 18. Platform Administration / Profile -->
                <a href="{{ route('admin.profile.edit') }}" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors {{ request()->routeIs('admin.profile.*') ? 'bg-blue-600 text-white font-semibold' : '' }}">
                    <i data-lucide="shield-check" class="w-4 h-4"></i>
                    <span>Admin Security</span>
                </a>
            </nav>

            <!-- Sidebar Footer -->
            <div class="p-3 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono flex items-center justify-between">
                <span>v1.20.0</span>
                <span class="inline-flex items-center gap-1.5 text-emerald-400">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    API Active
                </span>
            </div>
        </aside>

        <!-- ==========================================================================
             MAIN CONTENT CANVAS
             ========================================================================== -->
        <div class="flex-1 flex flex-col min-w-0 overflow-y-auto">
            <!-- Top Command Bar (Screenshots 1, 2, 3) -->
            <header class="h-16 bg-white border-b border-slate-200 sticky top-0 z-20 flex items-center justify-between px-6 gap-4">
                <div class="flex items-center gap-4 flex-1">
                    <button @click="sidebarOpen = !sidebarOpen" class="text-slate-500 hover:text-slate-700 p-1 rounded-md">
                        <i data-lucide="menu" class="w-5 h-5"></i>
                    </button>

                    <!-- Search with Ctrl/Cmd + K shortcut -->
                    <div class="relative max-w-md w-full">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <i data-lucide="search" class="w-4 h-4"></i>
                        </div>
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            class="w-full pl-9 pr-14 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition"
                        >
                        <div class="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none">
                            <kbd class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200 text-slate-600 border border-slate-300">ctrl/cmd + k</kbd>
                        </div>
                    </div>
                </div>

                <!-- Right Top Tools -->
                <div class="flex items-center gap-3 text-slate-600">
                    <!-- View Website button -->
                    <a href="http://localhost:5173" target="_blank" class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition">
                        <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                        <span>View website</span>
                    </a>

                    <!-- Dark Mode Toggle -->
                    <button class="p-2 rounded-lg hover:bg-slate-100 text-slate-500" title="Toggle Theme">
                        <i data-lucide="moon" class="w-4 h-4"></i>
                    </button>

                    <!-- Notifications Bell (Badge 10) -->
                    <div class="relative">
                        <button class="p-2 rounded-lg hover:bg-slate-100 text-slate-500">
                            <i data-lucide="bell" class="w-4 h-4"></i>
                            <span class="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">10</span>
                        </button>
                    </div>

                    <!-- Messages / Inquiries (Badge 15) -->
                    <div class="relative">
                        <button class="p-2 rounded-lg hover:bg-slate-100 text-slate-500">
                            <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                            <span class="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">15</span>
                        </button>
                    </div>

                    <!-- User Profile Dropdown -->
                    <div class="flex items-center gap-2.5 pl-3 border-l border-slate-200" x-data="{ userMenu: false }">
                        <div class="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                            <i data-lucide="user" class="w-4 h-4"></i>
                        </div>
                        <div class="hidden md:block text-left cursor-pointer" @click="userMenu = !userMenu">
                            <p class="text-xs font-semibold text-slate-800 leading-tight">{{ Auth::user()?->name ?? 'Administrator' }}</p>
                            <p class="text-[10px] text-slate-500 font-mono leading-tight">{{ Auth::user()?->email ?? 'admin@blackmarkt.network' }}</p>
                        </div>
                        
                        <!-- Dropdown Menu -->
                        <div x-show="userMenu" @click.away="userMenu = false" x-cloak class="absolute right-6 top-14 w-48 bg-white rounded-lg shadow-xl border border-slate-200 py-1 text-xs z-50">
                            <div class="px-4 py-2 border-b border-slate-100">
                                <p class="font-bold text-slate-800">{{ Auth::user()?->name ?? 'Administrator' }}</p>
                                <p class="text-slate-500 font-mono text-[10px]">{{ strtoupper(Auth::user()?->role ?? 'SUPER_ADMIN') }}</p>
                            </div>
                            <a href="{{ route('admin.profile.edit') }}" class="block px-4 py-2 text-slate-700 hover:bg-slate-50">Profile & Security</a>
                            <a href="{{ route('admin.settings.index') }}" class="block px-4 py-2 text-slate-700 hover:bg-slate-50">Settings</a>
                            <form action="{{ route('admin.logout') }}" method="POST">
                                @csrf
                                <button type="submit" class="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50">Log Out</button>
                            </form>
                        </div>
                    </div>
                </div>
            </header>

            <!-- Alerts / Toast Messages -->
            @if(session('success'))
            <div class="mx-6 mt-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center justify-between shadow-sm">
                <div class="flex items-center gap-2">
                    <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i>
                    <span>{{ session('success') }}</span>
                </div>
                <button onclick="this.parentElement.remove()" class="text-emerald-600 hover:text-emerald-800">&times;</button>
            </div>
            @endif

            @if(session('error'))
            <div class="mx-6 mt-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs flex items-center justify-between shadow-sm">
                <div class="flex items-center gap-2">
                    <i data-lucide="alert-triangle" class="w-4 h-4 text-red-600"></i>
                    <span>{{ session('error') }}</span>
                </div>
                <button onclick="this.parentElement.remove()" class="text-red-600 hover:text-red-800">&times;</button>
            </div>
            @endif

            <!-- Page Content -->
            <main class="flex-1 p-6">
                @yield('content')
            </main>

            <!-- Footer matching Screenshot 1, 2, 3 -->
            <footer class="h-12 border-t border-slate-200 px-6 flex items-center justify-between text-xs text-slate-500 bg-white">
                <div>
                    Copyright {{ date('Y') }} &copy; <span class="font-medium text-slate-700">Black Markt / Archi Elite</span>. Version 1.20.0
                </div>
                <div class="text-[11px] text-slate-400 font-mono">
                    Page loaded in 0.35 seconds
                </div>
            </footer>
        </div>
    </div>

    <script>
        lucide.createIcons();
    </script>
    @stack('scripts')
</body>
</html>
