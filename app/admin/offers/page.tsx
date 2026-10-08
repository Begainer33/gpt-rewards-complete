import { requireAdmin } from '@/lib/auth';

export default function OffersManagementPage() {
  const user = requireAdmin();

  const offers = [
    { title: 'Profile Survey', reward: '$3.50', status: 'Active', category: 'Survey' },
    { title: 'Bonus Offer', reward: '$4.00', status: 'Active', category: 'Offer' },
    { title: 'Daily Check-In', reward: '$1.00', status: 'Paused', category: 'Daily' }
  ];

  return (
    <main className="min-h-screen bg-[#07111F] px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Admin</p>
            <h1 className="mt-2 text-3xl font-black text-white">Manage offers</h1>
          </div>
          <button className="rounded-full bg-cyan-500 px-5 py-2 font-bold text-slate-950">Create offer</button>
        </div>

        <div className="space-y-4">
          {offers.map((offer) => (
            <div key={offer.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xl font-bold text-white">{offer.title}</div>
                  <div className="mt-1 text-sm text-slate-400">{offer.category}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-lg font-bold text-cyan-300">{offer.reward}</div>
                  <div className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs uppercase text-slate-300">{offer.status}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
