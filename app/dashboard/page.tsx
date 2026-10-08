import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth';

export default function DashboardPage() {
  const user = getCurrentUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <main className="min-h-screen bg-[#07111F] px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Dashboard</p>
            <h1 className="mt-2 text-3xl font-black text-white">Welcome back, {user.name}</h1>
          </div>
          <form action="/api/auth/logout" method="POST">
            <button className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200">Logout</button>
          </form>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard label="Current balance" value="$124.80" />
          <StatCard label="Pending balance" value="$18.20" />
          <StatCard label="Lifetime earnings" value="$1,240.00" />
          <StatCard label="Daily streak" value="7 Days" />
        </div>
      </div>
    </main>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
      <div className="text-sm text-slate-400">{label}</div>
      <div className="mt-3 text-3xl font-black text-white">{value}</div>
    </div>
  );
}
