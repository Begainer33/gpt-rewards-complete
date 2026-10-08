import { requireAdmin } from '@/lib/auth';

export default function ReportsPage() {
  const user = requireAdmin();

  const metrics = [
    { label: 'Revenue', value: '$24,500' },
    { label: 'Conversion', value: '8.2%' },
    { label: 'CPA', value: '$4.70' },
    { label: 'Retention', value: '72%' }
  ];

  return (
    <main className="min-h-screen bg-[#07111F] px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Admin</p>
          <h1 className="mt-2 text-3xl font-black text-white">Performance reports</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <div className="text-sm text-slate-400">{item.label}</div>
              <div className="mt-3 text-3xl font-black text-white">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
