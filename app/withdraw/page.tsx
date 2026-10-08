import { redirect } from 'next/navigation';
import { requireAuth } from '@/lib/auth';
import { getDashboardStats } from '@/lib/db';

export default function WithdrawPage() {
  const user = requireAuth();
  const stats = getDashboardStats(user.id);

  return (
    <main className="min-h-screen bg-[#07111F] px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Cashout</p>
          <h1 className="mt-2 text-3xl font-black text-white">Withdraw your balance</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-sm text-slate-400">Available balance</div>
            <div className="mt-3 text-4xl font-black text-white">${(stats.availableBalance ?? 0).toFixed(2)}</div>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-3">PayPal</div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-3">Crypto wallet</div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-3">Gift card</div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold text-white">Request withdrawal</h2>
            <form className="mt-5 space-y-4">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Payment method</label>
                <select className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-cyan-500">
                  <option>PayPal</option>
                  <option>Crypto</option>
                  <option>Gift card</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Amount</label>
                <input type="number" min="10" step="0.01" placeholder="25.00" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-cyan-500" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Destination details</label>
                <textarea rows={4} placeholder="Enter wallet/email/address" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-cyan-500"></textarea>
              </div>
              <button className="w-full rounded-full bg-cyan-500 px-5 py-3 font-bold text-slate-950">Submit withdrawal</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
