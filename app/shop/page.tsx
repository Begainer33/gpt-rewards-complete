import { requireAuth } from '@/lib/auth';

export default function ShopPage() {
  const user = requireAuth();

  const items = [
    { name: 'Premium avatar', price: '$15', category: 'Avatar' },
    { name: 'Glow frame', price: '$12', category: 'Frame' },
    { name: 'Boost booster', price: '$20', category: 'Boosters' },
    { name: 'Loot box', price: '$10', category: 'Loot box' }
  ];

  return (
    <main className="min-h-screen bg-[#07111F] px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Shop</p>
          <h1 className="mt-2 text-3xl font-black text-white">Virtual rewards store</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div key={item.name} className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-3 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase text-cyan-300">{item.category}</div>
              <div className="text-xl font-bold text-white">{item.name}</div>
              <div className="mt-6 flex items-center justify-between">
                <div className="text-2xl font-black text-cyan-300">{item.price}</div>
                <button className="rounded-full bg-cyan-500 px-4 py-2 font-bold text-slate-950">Buy</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
