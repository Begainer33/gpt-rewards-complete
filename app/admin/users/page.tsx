import { requireAdmin } from '@/lib/auth';

export default function AdminUsersPage() {
  const user = requireAdmin();

  return (
    <main className="min-h-screen bg-[#07111F] px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Admin</p>
          <h1 className="mt-2 text-3xl font-black text-white">Users</h1>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <div className="text-sm text-slate-400">User</div>
              <div className="mt-2 font-semibold text-white">Demo User</div>
              <div className="mt-1 text-sm text-slate-400">demo.user@example.com</div>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <div className="text-sm text-slate-400">Role</div>
              <div className="mt-2 font-semibold text-white">member</div>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <div className="text-sm text-slate-400">Actions</div>
              <div className="mt-2 flex gap-2">
                <button className="rounded-full border border-slate-700 px-3 py-1 text-xs">View</button>
                <button className="rounded-full bg-cyan-500 px-3 py-1 text-xs font-bold text-slate-950">Adjust</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
