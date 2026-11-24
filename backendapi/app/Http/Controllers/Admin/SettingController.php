<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Setting;
use App\Models\ActivityLog;
use Illuminate\Support\Facades\Auth;

class SettingController extends Controller
{
    public function index()
    {
        $allSettings = Setting::all()->groupBy('group');

        return view('admin.settings.index', compact('allSettings'));
    }

    public function update(Request $request)
    {
        $settings = $request->except(['_token', '_method']);

        foreach ($settings as $key => $value) {
            $existing = Setting::where('key', $key)->first();
            $group = $existing ? $existing->group : 'common';
            $type = $existing ? $existing->type : 'text';

            Setting::set($key, $value, $group, $type);
        }

        ActivityLog::create([
            'user_id' => Auth::id(),
            'user_name' => Auth::user()?->name ?? 'System Admin',
            'user_role' => Auth::user()?->role ?? 'admin',
            'action' => 'updated platform settings',
            'module' => 'settings',
            'ip_address' => $request->ip(),
        ]);

        return back()->with('success', 'Platform settings updated successfully.');
    }
}
