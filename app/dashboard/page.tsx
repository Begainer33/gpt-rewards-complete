import Link from 'next/link';

const statCards = [
  { label: 'Current balance', value: '$124.80' },
  { label: 'Pending balance', value: '$18.20' },
  { label: 'Lifetime earnings', value: '$1,240.00' },
  { label: 'Streak', value: '7 Days' }
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#07111F] px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Dashboard</p>
            <h1 className="mt-2 text-3xl font-black text-white">Welcome back</h1>
          </div>
          <Link href="/" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200">Home</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {statCards.map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <div className="text-sm text-slate-400">{item.label}</div>
              <div className="mt-3 text-3xl font-black text-white">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 lg:col-span-2">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Quick earn</h2>
              <Link href="/earn" className="text-sm text-cyan-300">View all</Link>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">Offer completion</div>
                    <div className="text-sm text-slate-400">Complete 3 offers for the bonus tier</div>
                  </div>
                  <div className="font-bold text-cyan-300">+$4.00</div>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">Survey reward</div>
                    <div className="text-sm text-slate-400">Profile survey with instant credit</div>
                  </div>
                  <div className="font-bold text-cyan-300">+$3.50</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold text-white">Recent activity</h2>
            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span>Survey approved</span>
                <span className="text-emerald-300">+$3.50</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span>Offer reward</span>
                <span className="text-emerald-300">+$7.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Referral bonus</span>
                <span className="text-emerald-300">+$2.25</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
