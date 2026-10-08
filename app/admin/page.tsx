export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#07111F] px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Admin panel</p>
            <h1 className="mt-2 text-3xl font-black text-white">Overview</h1>
          </div>
          <button className="rounded-full bg-cyan-500 px-5 py-2 font-bold text-slate-950">Site settings</button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
            <div className="text-sm text-slate-400">Total users</div>
            <div className="mt-3 text-3xl font-black text-white">12,480</div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
            <div className="text-sm text-slate-400">Pending rewards</div>
            <div className="mt-3 text-3xl font-black text-white">$8,460</div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
            <div className="text-sm text-slate-400">Approved rewards</div>
            <div className="mt-3 text-3xl font-black text-white">$54,980</div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
            <div className="text-sm text-slate-400">Pending withdrawals</div>
            <div className="mt-3 text-3xl font-black text-white">432</div>
          </div>
        </div>
      </div>
    </main>
  );
}
