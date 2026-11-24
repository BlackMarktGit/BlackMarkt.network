<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Transaction;
use App\Models\ActivityLog;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class TransactionController extends Controller
{
    public function index()
    {
        $transactions = Transaction::orderBy('sort_order')->orderBy('id', 'desc')->get();
        return view('admin.transactions.index', compact('transactions'));
    }

    public function create()
    {
        return view('admin.transactions.form', ['transaction' => new Transaction()]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:transactions,slug',
            'deal_value' => 'required|string|max:100',
            'sector' => 'required|string|max:100',
            'geography' => 'required|string|max:100',
            'advisory_role' => 'nullable|string|max:255',
            'summary' => 'required|string',
            'case_study' => 'nullable|string',
            'sort_order' => 'nullable|integer',
            'is_featured' => 'nullable|boolean',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['title']);
        }

        $validated['is_featured'] = $request->has('is_featured');
        $validated['sort_order'] = $validated['sort_order'] ?? 0;

        $transaction = Transaction::create($validated);
        Cache::forget('api_transactions');

        ActivityLog::create([
            'user_id' => Auth::id(),
            'user_name' => Auth::user()?->name ?? 'System Admin',
            'user_role' => Auth::user()?->role ?? 'admin',
            'action' => 'created transaction mandate ' . $transaction->title,
            'module' => 'transactions',
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.transactions.index')->with('success', 'Transaction mandate recorded successfully.');
    }

    public function edit(Transaction $transaction)
    {
        return view('admin.transactions.form', compact('transaction'));
    }

    public function update(Request $request, Transaction $transaction)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:transactions,slug,' . $transaction->id,
            'deal_value' => 'required|string|max:100',
            'sector' => 'required|string|max:100',
            'geography' => 'required|string|max:100',
            'advisory_role' => 'nullable|string|max:255',
            'summary' => 'required|string',
            'case_study' => 'nullable|string',
            'sort_order' => 'nullable|integer',
            'is_featured' => 'nullable|boolean',
        ]);

        $validated['is_featured'] = $request->has('is_featured');
        $validated['sort_order'] = $validated['sort_order'] ?? 0;

        $transaction->update($validated);
        Cache::forget('api_transactions');

        ActivityLog::create([
            'user_id' => Auth::id(),
            'user_name' => Auth::user()?->name ?? 'System Admin',
            'user_role' => Auth::user()?->role ?? 'admin',
            'action' => 'updated transaction mandate ' . $transaction->title,
            'module' => 'transactions',
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.transactions.index')->with('success', 'Transaction mandate updated successfully.');
    }

    public function destroy(Transaction $transaction)
    {
        $title = $transaction->title;
        $transaction->delete();
        Cache::forget('api_transactions');

        ActivityLog::create([
            'user_id' => Auth::id(),
            'user_name' => Auth::user()?->name ?? 'System Admin',
            'user_role' => Auth::user()?->role ?? 'admin',
            'action' => 'deleted transaction mandate ' . $title,
            'module' => 'transactions',
            'ip_address' => request()->ip(),
        ]);

        return redirect()->route('admin.transactions.index')->with('success', 'Transaction mandate removed successfully.');
    }
}

