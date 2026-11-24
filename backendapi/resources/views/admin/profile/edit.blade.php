@extends('admin.layouts.admin')

@section('title', 'Admin Profile & Security')

@section('content')
<div class="space-y-6 max-w-2xl">
    <!-- Breadcrumb -->
    <div class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-mono">
        <a href="{{ route('admin.dashboard') }}" class="hover:text-blue-600">DASHBOARD</a> / <span>ADMIN PROFILE & SECURITY</span>
    </div>

    @if(session('success'))
    <div class="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
        <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i>
        <span>{{ session('success') }}</span>
    </div>
    @endif

    @if($errors->any())
    <div class="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs space-y-1">
        <div class="font-bold flex items-center gap-2">
            <i data-lucide="alert-circle" class="w-4 h-4 text-rose-600"></i>
            <span>Validation errors:</span>
        </div>
        <ul class="list-disc list-inside pl-4 text-rose-700">
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif

    <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-5 text-xs">
        <div class="flex items-center gap-4 pb-4 border-b border-slate-100">
            <div class="w-12 h-12 rounded-xl bg-[#0B1320] text-[#C9A227] flex items-center justify-center font-bold text-lg border border-[#C9A227]/30">
                <i data-lucide="shield-check" class="w-6 h-6"></i>
            </div>
            <div>
                <h1 class="text-base font-bold text-slate-900">{{ $user->name }}</h1>
                <p class="text-slate-400 font-mono text-[11px]">{{ $user->email }} &bull; Role: {{ strtoupper($user->role ?? 'SUPER_ADMIN') }}</p>
            </div>
        </div>

        <form action="{{ route('admin.profile.update') }}" method="POST" class="space-y-4">
            @csrf
            @method('PUT')

            <div>
                <label class="block font-semibold text-slate-700 mb-1">Full Name</label>
                <input type="text" name="name" value="{{ old('name', $user->name) }}" required class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-medium focus:outline-none focus:border-blue-500">
            </div>

            <div>
                <label class="block font-semibold text-slate-700 mb-1">Admin Email Address</label>
                <input type="email" name="email" value="{{ old('email', $user->email) }}" required class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-mono focus:outline-none focus:border-blue-500">
            </div>

            <div class="pt-3 border-t border-slate-100 space-y-3">
                <h3 class="font-bold text-slate-800 text-xs flex items-center gap-2">
                    <i data-lucide="lock" class="w-3.5 h-3.5 text-blue-600"></i>
                    <span>Change Password (Leave blank to keep current)</span>
                </h3>

                <div>
                    <label class="block font-semibold text-slate-700 mb-1">Current Password</label>
                    <input type="password" name="current_password" placeholder="Enter current password" class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-mono focus:outline-none focus:border-blue-500">
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="block font-semibold text-slate-700 mb-1">New Password</label>
                        <input type="password" name="password" placeholder="Minimum 6 characters" class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-mono focus:outline-none focus:border-blue-500">
                    </div>
                    <div>
                        <label class="block font-semibold text-slate-700 mb-1">Confirm New Password</label>
                        <input type="password" name="password_confirmation" placeholder="Repeat new password" class="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-mono focus:outline-none focus:border-blue-500">
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button type="submit" class="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition">
                    <i data-lucide="save" class="w-4 h-4"></i>
                    <span>Save Changes</span>
                </button>
            </div>
        </form>
    </div>
</div>
@endsection

