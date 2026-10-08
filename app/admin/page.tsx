import { redirect } from 'next/navigation';
import { requireAdmin } from '@/lib/auth';
import { getAdminSummary } from '@/lib/db';

export default function AdminPage() {
  const user = requireAdmin();
  const summary = getAdminSummary();

  const cards = [
    { label: 'Total users', value: String(summary.totalUsers) },
    { label: 'Wallet value', value: `$${summary.totalBalance.toFixed(2)}` },
    { label: 'Transactions', value: String(summary.totalTransactions) },
    { label: 'Admin', value: user.name }
  ];

  return (
    <main className="min-h-screen bg-[#07111F] px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Admin panel</p>
            <h1 className="mt-2 text-3xl font-black text-white">Overview</h1>
          </div>
          <a href="/dashboard" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200">User panel</a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <div key={card.label} className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <div className="text-sm text-slate-400">{card.label}</div>
              <div className="mt-3 text-3xl font-black text-white">{card.value}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
