<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Newsletter;
use App\Models\ActivityLog;
use Illuminate\Support\Facades\Auth;

class NewsletterController extends Controller
{
    public function index(Request $request)
    {
        $query = Newsletter::query();

        if ($request->filled('search')) {
            $query->where('email', 'like', '%' . $request->search . '%');
        }

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        $subscribers = $query->orderBy('id', 'desc')->paginate($request->get('limit', 20));

        return view('admin.newsletters.index', compact('subscribers'));
    }

    public function export()
    {
        $subscribers = Newsletter::orderBy('id', 'desc')->get();

        $filename = 'blackmarkt_newsletter_subscribers_' . date('Y_m_d_His') . '.csv';

        $headers = [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => "attachment; filename=\"$filename\"",
        ];

        $callback = function () use ($subscribers) {
            $file = fopen('php://output', 'w');
            fputcsv($file, ['ID', 'Email', 'Status', 'IP Address', 'Subscribed At']);

            foreach ($subscribers as $sub) {
                fputcsv($file, [
                    $sub->id,
                    $sub->email,
                    $sub->status ?? 'Subscribed',
                    $sub->ip_address,
                    $sub->created_at?->toIso8601String(),
                ]);
            }

            fclose($file);
        };

        return response()->stream($callback, 200, $headers);
    }

    public function destroy(Newsletter $newsletter)
    {
        $email = $newsletter->email;
        $newsletter->delete();

        ActivityLog::create([
            'user_id' => Auth::id(),
            'user_name' => Auth::user()?->name ?? 'System Admin',
            'user_role' => Auth::user()?->role ?? 'admin',
            'action' => 'removed subscriber ' . $email,
            'module' => 'newsletter',
            'ip_address' => request()->ip(),
        ]);

        return back()->with('success', 'Subscriber removed successfully.');
    }
}

