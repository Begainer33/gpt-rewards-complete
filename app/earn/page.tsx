import { requireAuth } from '@/lib/auth';
import { listOffers } from '@/lib/db';

export default function EarnPage() {
  const user = requireAuth();
  const offers = listOffers();

  return (
    <main className="min-h-screen bg-[#07111F] px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Earn</p>
          <h1 className="mt-2 text-3xl font-black text-white">Available offers</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {offers.map((offer) => (
            <div key={offer.id} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <div className="mb-3 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase text-cyan-300">
                {offer.category}
              </div>
              <h2 className="text-xl font-bold text-white">{offer.title}</h2>
              <p className="mt-3 text-sm text-slate-300">{offer.description}</p>
              <div className="mt-6 flex items-center justify-between">
                <div className="text-2xl font-black text-cyan-300">${offer.reward.toFixed(2)}</div>
                <form action="/api/earn" method="POST">
                  <input type="hidden" name="offerId" value={offer.id} />
                  <button className="rounded-full bg-cyan-500 px-4 py-2 font-bold text-slate-950">Complete</button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
