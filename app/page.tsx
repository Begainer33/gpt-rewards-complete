export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#07111F] text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950/70 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-black text-cyan-400">GPT Rewards</div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="/">Home</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/earn">Earn</a>
            <a href="/admin">Admin</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="/login" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200">Login</a>
            <a href="/register" className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold text-slate-950">Join now</a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-glow">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Production platform</p>
          <h1 className="mt-4 text-4xl font-black text-white">GPT rewards platform foundation is live.</h1>
          <p className="mt-4 max-w-2xl text-slate-300">The app is now structured around a real database-backed user system, wallet and transactions, offer engine, and admin flow.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/register" className="rounded-full bg-cyan-500 px-6 py-3 font-bold text-slate-950">Create account</a>
            <a href="/login" className="rounded-full border border-slate-700 px-6 py-3 font-bold text-white">Login</a>
          </div>
        </div>
      </section>
    </main>
  );
}
