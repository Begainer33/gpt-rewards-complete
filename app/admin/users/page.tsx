import { requireAdmin } from '@/lib/auth';

export default function AdminUsersPage() {
  const user = requireAdmin();

  const members = [
    { name: 'Demo User', email: 'demo.user@example.com', role: 'member', balance: '$124.80' },
    { name: 'Demo Admin', email: 'demo.admin@example.com', role: 'admin', balance: '$0.00' },
    { name: 'Alice Smith', email: 'alice@example.com', role: 'member', balance: '$87.40' }
  ];

  return (
    <main className="min-h-screen bg-[#07111F] px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Admin</p>
          <h1 className="mt-2 text-3xl font-black text-white">Users</h1>
        </div>

        <div className="space-y-4">
          {members.map((person) => (
            <div key={person.email} className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xl font-bold text-white">{person.name}</div>
                  <div className="mt-1 text-sm text-slate-400">{person.email}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs uppercase text-slate-300">{person.role}</div>
                  <div className="text-lg font-bold text-cyan-300">{person.balance}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
