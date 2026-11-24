<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Inquiry;
use App\Models\ActivityLog;
use Illuminate\Support\Facades\Auth;

class InquiryController extends Controller
{
    public function index(Request $request)
    {
        $query = Inquiry::query();

        if ($request->filled('search')) {
            $query->where('name', 'like', '%' . $request->search . '%')
                  ->orWhere('email', 'like', '%' . $request->search . '%')
                  ->orWhere('organization', 'like', '%' . $request->search . '%');
        }

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        $inquiries = $query->orderBy('id', 'desc')->paginate($request->get('limit', 10));

        return view('admin.inquiries.index', compact('inquiries'));
    }

    public function show(Inquiry $inquiry)
    {
        if ($inquiry->status === 'Unread') {
            $inquiry->update(['status' => 'Read']);
        }

        return response()->json($inquiry);
    }

    public function updateStatus(Request $request, Inquiry $inquiry)
    {
        $request->validate([
            'status' => 'required|in:Unread,Read,In Discussion,Closed',
            'internal_notes' => 'nullable|string',
        ]);

        $inquiry->update([
            'status' => $request->status,
            'internal_notes' => $request->internal_notes ?? $inquiry->internal_notes,
        ]);

        return back()->with('success', 'Inquiry status updated.');
    }

    public function destroy(Inquiry $inquiry)
    {
        $inquiry->delete();
        return back()->with('success', 'Inquiry deleted.');
    }

    public function export()
    {
        $inquiries = Inquiry::latest()->get();
        $filename = 'blackmarkt_inquiries_' . date('Y-m-d') . '.csv';

        $headers = [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => "attachment; filename=\"$filename\"",
        ];

        $callback = function () use ($inquiries) {
            $file = fopen('php://output', 'w');
            fputcsv($file, ['ID', 'Name', 'Email', 'Phone', 'Organization', 'Capital Range', 'Message', 'Status', 'Date']);

            foreach ($inquiries as $inq) {
                fputcsv($file, [
                    $inq->id,
                    $inq->name,
                    $inq->email,
                    $inq->phone,
                    $inq->organization,
                    $inq->capital_range,
                    $inq->message,
                    $inq->status,
                    $inq->created_at->format('Y-m-d H:i'),
                ]);
            }
            fclose($file);
        };

        ActivityLog::create([
            'user_id' => Auth::id(),
            'user_name' => Auth::user()?->name ?? 'System Admin',
            'user_role' => Auth::user()?->role ?? 'admin',
            'action' => 'exported consultation inquiries to CSV',
            'module' => 'inquiries',
            'ip_address' => request()->ip(),
        ]);

        return response()->stream($callback, 200, $headers);
    }
}
