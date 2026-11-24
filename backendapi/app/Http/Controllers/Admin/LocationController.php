<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Location;
use App\Models\ActivityLog;
use Illuminate\Support\Facades\Auth;

class LocationController extends Controller
{
    public function index()
    {
        $locations = Location::orderBy('sort_order')->get();
        return view('admin.locations.index', compact('locations'));
    }

    public function update(Request $request, Location $location)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'hub_name' => 'required|string|max:255',
            'market' => 'required|string|max:100',
            'timezone' => 'required|string|max:100',
            'tz_abbr' => 'required|string|max:20',
            'focus' => 'required|string|max:255',
            'atmosphere' => 'required|string|max:255',
            'image_url' => 'required|string|max:255',
            'pan_keyframe' => 'required|string|max:50',
            'is_active' => 'nullable|boolean',
        ]);

        $validated['is_active'] = $request->has('is_active');
        $location->update($validated);

        ActivityLog::create([
            'user_id' => Auth::id(),
            'user_name' => Auth::user()?->name ?? 'System Admin',
            'user_role' => Auth::user()?->role ?? 'admin',
            'action' => 'updated global hub telemetry for ' . $location->name,
            'module' => 'locations',
            'ip_address' => $request->ip(),
        ]);

        return back()->with('success', "Hub {$location->name} telemetry updated successfully.");
    }
}
