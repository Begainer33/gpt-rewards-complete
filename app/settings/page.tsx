import { requireAuth } from '@/lib/auth';

export default function SettingsPage() {
  const user = requireAuth();

  const settings = [
    { label: 'Display name', value: user.name },
    { label: 'Email', value: user.email },
    { label: 'Currency', value: 'USD' },
    { label: 'Language', value: 'English' },
    { label: 'Referral code', value: `GPT-${user.id}` },
    { label: 'Notification preference', value: 'Enabled' }
  ];

  return (
    <main className="min-h-screen bg-[#07111F] px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Account</p>
          <h1 className="mt-2 text-3xl font-black text-white">Profile settings</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {settings.map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <div className="text-sm text-slate-400">{item.label}</div>
              <div className="mt-3 text-xl font-bold text-white">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
