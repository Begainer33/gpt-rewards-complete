import { requireAdmin } from '@/lib/auth';

export default function AdminSettingsPage() {
  const user = requireAdmin();

  return (
    <main className="min-h-screen bg-[#07111F] px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Admin</p>
          <h1 className="mt-2 text-3xl font-black text-white">Platform settings</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Website name" value="GPT Rewards Platform" />
          <Field label="Currency" value="USD" />
          <Field label="Minimum payout" value="$10.00" />
          <Field label="Referral percent" value="10%" />
          <Field label="Maintenance mode" value="Off" />
          <Field label="Support timezone" value="UTC" />
        </div>
      </div>
    </main>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
      <div className="text-sm text-slate-400">{label}</div>
      <div className="mt-3 text-xl font-bold text-white">{value}</div>
    </div>
  );
}
