import Link from 'next/link';
import { requireAuth } from '@/lib/auth';

export default function UserDashboardShell() {
  const user = requireAuth();

  const nav = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Earn', href: '/earn' },
    { label: 'Wallet', href: '/wallet' },
    { label: 'Missions', href: '/missions' },
    { label: 'Surveys', href: '/surveys' },
    { label: 'Referrals', href: '/referrals' },
    { label: 'Shop', href: '/shop' },
    { label: 'Support', href: '/support' },
    { label: 'Notifications', href: '/notifications' },
    { label: 'Withdraw', href: '/withdraw' }
  ];

  return (
    <div className="min-h-screen bg-[#07111F] text-slate-100">
      <aside className="fixed left-0 top-0 h-full w-72 border-r border-slate-800 bg-slate-950/90 p-6">
        <div className="mb-8 text-2xl font-black text-cyan-400">GPT Rewards</div>
        <nav className="space-y-2">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="block rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-500/40 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-4">
          <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Signed in</div>
          <div className="mt-2 font-semibold text-white">{user.name}</div>
          <div className="text-sm text-slate-400">{user.email}</div>
        </div>
      </aside>

      <main className="ml-72 p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Member dashboard</p>
            <h1 className="text-3xl font-black text-white">Overview</h1>
          </div>
          <form action="/api/auth/logout" method="POST">
            <button className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200">Logout</button>
          </form>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard label="Balance" value="$124.80" />
          <StatCard label="Pending" value="$18.20" />
          <StatCard label="Earnings" value="$1,240.00" />
          <StatCard label="Streak" value="7 Days" />
        </div>
      </main>
    </div>
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
