import { requireAuth } from '@/lib/auth';
import { getDashboardStats } from '@/lib/db';

export default function WalletPage() {
  const user = requireAuth();
  const stats = getDashboardStats(user.id);

  return (
    <main className="min-h-screen bg-[#07111F] px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Wallet</p>
          <h1 className="mt-2 text-3xl font-black text-white">Balance & transactions</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-sm text-slate-400">Available</div>
            <div className="mt-3 text-3xl font-black text-white">${(stats.availableBalance ?? 0).toFixed(2)}</div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-sm text-slate-400">Pending</div>
            <div className="mt-3 text-3xl font-black text-white">${(stats.pendingBalance ?? 0).toFixed(2)}</div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-sm text-slate-400">Lifetime earnings</div>
            <div className="mt-3 text-3xl font-black text-white">${(stats.totalEarnings ?? 0).toFixed(2)}</div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-5 text-xl font-bold text-white">Recent transactions</h2>
          <div className="space-y-4">
            {(stats.transactions ?? []).map((tx) => (
              <div key={tx.id} className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-950 p-4">
                <div>
                  <div className="font-semibold text-white">{tx.type}</div>
                  <div className="text-sm text-slate-400">{new Date(tx.created_at).toLocaleString()}</div>
                </div>
                <div className={tx.status === 'approved' ? 'text-emerald-300' : 'text-yellow-300'}>
                  {tx.status === 'approved' ? '+' : ''}${tx.amount.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
