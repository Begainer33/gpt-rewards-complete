import { requireAdmin } from '@/lib/auth';

export default function SupportAdminPage() {
  const user = requireAdmin();

  const tickets = [
    { title: 'Withdrawal review', status: 'Open', priority: 'Medium' },
    { title: 'Offer payout issue', status: 'Resolved', priority: 'High' },
    { title: 'Referral bonus missing', status: 'Open', priority: 'High' }
  ];

  return (
    <main className="min-h-screen bg-[#07111F] px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Admin</p>
          <h1 className="mt-2 text-3xl font-black text-white">Support desk</h1>
        </div>

        <div className="space-y-4">
          {tickets.map((ticket) => (
            <div key={ticket.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xl font-bold text-white">{ticket.title}</div>
                  <div className="mt-1 text-sm text-slate-400">Priority: {ticket.priority}</div>
                </div>
                <div className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs uppercase text-slate-300">{ticket.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
