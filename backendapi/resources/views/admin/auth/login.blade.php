<!DOCTYPE html>
<html lang="en" class="h-full">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign In | Black Markt Enterprise CMS</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        navy: {
                            950: '#070C15',
                            900: '#0B1320',
                            850: '#0F172A',
                            800: '#131F33',
                            700: '#1E293B',
                        },
                        brand: {
                            gold: '#C9A227',
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
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.8/dist/cdn.min.js"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="h-full bg-navy-950 font-sans antialiased text-slate-100">

    <div class="h-full flex flex-col md:flex-row">
        <!-- ==========================================================================
             LEFT SPLIT PANE: AUTHENTICATION FORM (Mirrored from Screenshot 4)
             ========================================================================== -->
        <div class="w-full md:w-[380px] lg:w-[420px] 2xl:w-[460px] bg-[#0F172A] p-8 sm:p-12 flex flex-col justify-between border-r border-slate-800/80 z-10 flex-shrink-0">
            <div>
                <!-- Brand Logo (Matching Screenshot 4) -->
                <div class="flex items-center gap-3 mb-8">
                    <div class="w-9 h-9 rounded-xl bg-[#C9A227] flex items-center justify-center text-slate-950 font-black shadow-lg shadow-[#C9A227]/25">
                        <i data-lucide="layers" class="w-5 h-5"></i>
                    </div>
                    <span class="text-2xl font-bold tracking-tight text-white">agon</span>
                </div>

                <!-- Subtitle -->
                <h1 class="text-base font-semibold text-slate-200 mb-6">Sign In Below</h1>

                @if($errors->any())
                <div class="mb-5 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                    <i data-lucide="alert-circle" class="w-4 h-4 shrink-0"></i>
                    <span>{{ $errors->first() }}</span>
                </div>
                @endif

                <!-- Login Form -->
                <form action="{{ route('admin.login.submit') }}" method="POST" class="space-y-4" x-data="{ showPass: false }">
                    @csrf
                    
                    <!-- Email / Username Input -->
                    <div>
                        <label for="login" class="block text-xs font-semibold text-slate-300 mb-1.5">
                            Email/Username <span class="text-red-400">*</span>
                        </label>
                        <input 
                            type="text" 
                            name="login" 
                            id="login" 
                            value="{{ old('login', 'admin') }}" 
                            required 
                            autofocus
                            placeholder="admin or admin@company.com"
                            class="w-full px-3.5 py-2.5 bg-[#0B1320] border border-slate-700/80 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                        >
                    </div>

                    <!-- Password Input with Show/Hide toggle -->
                    <div>
                        <div class="flex items-center justify-between mb-1.5">
                            <label for="password" class="block text-xs font-semibold text-slate-300">
                                Password <span class="text-red-400">*</span>
                            </label>
                            <a href="#" class="text-xs text-blue-400 hover:text-blue-300 transition">
                                Lost your password?
                            </a>
                        </div>
                        <div class="relative">
                            <input 
                                :type="showPass ? 'text' : 'password'" 
                                name="password" 
                                id="password" 
                                value="admin"
                                required 
                                placeholder="Enter password"
                                class="w-full pl-3.5 pr-10 py-2.5 bg-[#0B1320] border border-slate-700/80 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                            >
                            <button 
                                type="button" 
                                @click="showPass = !showPass" 
                                class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200"
                            >
                                <i data-lucide="eye" x-show="!showPass" class="w-4 h-4"></i>
                                <i data-lucide="eye-off" x-show="showPass" class="w-4 h-4" x-cloak></i>
                            </button>
                        </div>
                    </div>

                    <!-- Remember Me Checkbox -->
                    <div class="flex items-center pt-1">
                        <input 
                            type="checkbox" 
                            name="remember" 
                            id="remember" 
                            checked
                            class="w-4 h-4 rounded bg-slate-900 border-slate-700 text-blue-600 focus:ring-blue-500 focus:ring-offset-slate-900"
                        >
                        <label for="remember" class="ml-2 text-xs text-slate-300 cursor-pointer select-none">
                            Remember me?
                        </label>
                    </div>

                    <!-- Submit Button -->
                    <div class="pt-2">
                        <button 
                            type="submit" 
                            class="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg shadow-lg shadow-blue-600/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0F172A]"
                        >
                            <i data-lucide="log-in" class="w-4 h-4"></i>
                            <span>Sign in</span>
                        </button>
                    </div>
                </form>

                <!-- Demo Credentials Helper Callout -->
                <div class="mt-8 p-3 rounded-lg bg-blue-950/40 border border-blue-500/20 text-[11px] text-blue-200/90 font-mono space-y-1">
                    <p class="font-bold text-blue-300">Quick Demo Access:</p>
                    <p>Username: <span class="text-white font-semibold">admin</span></p>
                    <p>Password: <span class="text-white font-semibold">admin</span> (or <span class="text-white">password</span>)</p>
                </div>
            </div>

            <!-- Left Footer Branding -->
            <div class="pt-8 text-[11px] text-slate-500 font-mono">
                Black Markt Sovereign Capital Governance
            </div>
        </div>

        <!-- ==========================================================================
             RIGHT SPLIT PANE: ARCHITECTURAL BACKDROP (Mirrored from Screenshot 4)
             ========================================================================== -->
        <div class="hidden md:block flex-1 relative bg-cover bg-center overflow-hidden" style="background-image: url('/images/cities/london.jpg');">
            <!-- Vignette & Luxury Gradient Overlays -->
            <div class="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0B1320]/40 to-transparent"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>

            <!-- Floating City Telemetry Tag -->
            <div class="absolute top-8 right-8 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-mono flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-[#C9A227] animate-ping"></span>
                <span>LONDON • GLOBAL ADVISORY HQ</span>
            </div>

            <!-- Bottom Right Watermark & Platform Version (Matching Screenshot 4) -->
            <div class="absolute bottom-8 right-8 text-right text-white drop-shadow-md">
                <h2 class="text-xl font-bold tracking-tight text-white mb-0.5">Archi Elite / Black Markt</h2>
                <p class="text-xs text-slate-300 font-mono">Copyright {{ date('Y') }} &copy; Archi Elite. Version 1.20.0</p>
            </div>
        </div>
    </div>

    <script>
        lucide.createIcons();
    </script>
</body>
</html>
