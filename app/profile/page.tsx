import { requireAuth } from '@/lib/auth';

export default function ProfilePage() {
  const user = requireAuth();

  return (
    <main className="min-h-screen bg-[#07111F] px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Profile</p>
          <h1 className="mt-2 text-3xl font-black text-white">Your profile</h1>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <div className="grid gap-5 md:grid-cols-2">
            <Info label="Full name" value={user.name} />
            <Info label="Email" value={user.email} />
            <Info label="Role" value={user.role} />
            <Info label="Account status" value={user.status} />
          </div>
        </div>
      </div>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
      <div className="text-sm text-slate-400">{label}</div>
      <div className="mt-2 text-lg font-bold text-white">{value}</div>
    </div>
  );
}
