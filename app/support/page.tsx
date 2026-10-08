import { requireAuth } from '@/lib/auth';

export default function SupportPage() {
  const user = requireAuth();

  return (
    <main className="min-h-screen bg-[#07111F] px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Support</p>
          <h1 className="mt-2 text-3xl font-black text-white">Help center</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold text-white">Create a support ticket</h2>
            <form className="mt-5 space-y-4">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Category</label>
                <select className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-cyan-500">
                  <option>Wallet</option>
                  <option>Offer</option>
                  <option>Withdrawal</option>
                  <option>Referral</option>
                  <option>Account</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Subject</label>
                <input type="text" placeholder="Issue summary" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-cyan-500" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Message</label>
                <textarea rows={5} placeholder="Describe the issue in detail" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-cyan-500"></textarea>
              </div>
              <button className="rounded-full bg-cyan-500 px-5 py-2.5 font-bold text-slate-950">Submit ticket</button>
            </form>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold text-white">Recent tickets</h2>
            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
                <div className="font-semibold text-white">Withdrawal review</div>
                <div className="mt-1 text-slate-400">Status: In progress</div>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
                <div className="font-semibold text-white">Offer payout</div>
                <div className="mt-1 text-slate-400">Status: Resolved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
