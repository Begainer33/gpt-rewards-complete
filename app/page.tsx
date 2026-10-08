import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#07111F] text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950/70 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-black text-cyan-400">GPT Rewards</div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/earn">Earn</Link>
            <Link href="/admin">Admin</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200">Login</Link>
            <Link href="/register" className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold text-slate-950">Join now</Link>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Earn • Grow • Redeem
          </div>
          <h1 className="text-5xl font-black tracking-tight text-white md:text-6xl">
            Rewarding your time with real GPT-powered opportunities.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Discover offers, surveys, tasks, bonuses, and daily missions while tracking your earnings and rewards in a premium dashboard experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/register" className="rounded-full bg-cyan-500 px-6 py-3 font-bold text-slate-950">Create account</Link>
            <Link href="/login" className="rounded-full border border-slate-700 px-6 py-3 font-bold text-white">Sign in</Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-10 text-sm text-slate-300">
            <div>
              <div className="text-2xl font-black text-white">30k+</div>
              <div>Active users</div>
            </div>
            <div>
              <div className="text-2xl font-black text-white">$2.5M</div>
              <div>Paid out</div>
            </div>
            <div>
              <div className="text-2xl font-black text-white">4.9/5</div>
              <div>User rating</div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-glow">
          <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-400">Available balance</div>
                <div className="mt-2 text-4xl font-black text-white">$124.80</div>
              </div>
              <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">+18.2%</div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Quick earn</span>
                  <span>Reward</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-semibold text-white">Offer completion</span>
                  <span className="font-bold text-cyan-300">+$4.00</span>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Daily mission</span>
                  <span>Progress</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-semibold text-white">3/5 offers</span>
                  <span className="font-bold text-emerald-300">60%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
