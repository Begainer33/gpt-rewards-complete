import Link from 'next/link';
import { requireAdmin } from '@/lib/auth';

export default function AdminDashboardShell() {
  const admin = requireAdmin();

  const nav = [
    { label: 'Overview', href: '/admin' },
    { label: 'Users', href: '/admin/users' },
    { label: 'Offers', href: '/admin/offers' },
    { label: 'Withdrawals', href: '/admin/withdrawals' },
    { label: 'Settings', href: '/admin/settings' },
    { label: 'Reports', href: '/admin/reports' },
    { label: 'Support', href: '/admin/support' }
  ];

  return (
    <div className="min-h-screen bg-[#07111F] text-slate-100">
      <aside className="fixed left-0 top-0 h-full w-72 border-r border-slate-800 bg-slate-950/90 p-6">
        <div className="mb-8 text-2xl font-black text-cyan-400">Admin Console</div>
        <nav className="space-y-2">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="block rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-500/40 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-4">
          <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Admin</div>
          <div className="mt-2 font-semibold text-white">{admin.name}</div>
          <div className="text-sm text-slate-400">{admin.email}</div>
        </div>
      </aside>

      <main className="ml-72 p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Admin dashboard</p>
            <h1 className="text-3xl font-black text-white">Operations center</h1>
          </div>
          <form action="/api/auth/logout" method="POST">
            <button className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200">Logout</button>
          </form>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard label="Users" value="12,480" />
          <StatCard label="Wallet volume" value="$154,900" />
          <StatCard label="Transactions" value="18,420" />
          <StatCard label="Pending withdrawals" value="432" />
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
