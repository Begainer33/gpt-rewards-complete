import { redirect } from 'next/navigation';
import { requireAuth } from '@/lib/auth';
import { getDashboardStats } from '@/lib/db';

export default function ReferralsPage() {
  const user = requireAuth();
  const stats = getDashboardStats(user.id);

  return (
    <main className="min-h-screen bg-[#07111F] px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Referrals</p>
            <h1 className="mt-2 text-3xl font-black text-white">Invite friends and earn more</h1>
          </div>
          <div className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            Referral code: GPT-{user.id}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Stat label="Clicks" value="184" />
          <Stat label="Registrations" value="37" />
          <Stat label="Earnings" value={`$${(stats.totalEarnings ?? 0).toFixed(2)}`} />
        </div>

        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-bold text-white">Your referral link</h2>
          <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-4 md:flex-row md:items-center md:justify-between">
            <span className="break-all text-cyan-300">https://example.com/ref/{user.id}</span>
            <button className="rounded-full bg-cyan-500 px-4 py-2 font-bold text-slate-950">Copy link</button>
          </div>
        </div>
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
      <div className="text-sm text-slate-400">{label}</div>
      <div className="mt-3 text-3xl font-black text-white">{value}</div>
    </div>
  );
}
