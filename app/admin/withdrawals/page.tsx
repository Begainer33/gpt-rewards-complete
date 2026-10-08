import { requireAdmin } from '@/lib/auth';

export default function WithdrawalsAdminPage() {
  const user = requireAdmin();

  const requests = [
    { user: 'Demo User', amount: '$25.00', method: 'PayPal', status: 'Pending' },
    { user: 'Alice Smith', amount: '$75.00', method: 'Crypto', status: 'Processing' },
    { user: 'John Doe', amount: '$40.50', method: 'Gift Card', status: 'Approved' }
  ];

  return (
    <main className="min-h-screen bg-[#07111F] px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Admin</p>
          <h1 className="mt-2 text-3xl font-black text-white">Withdrawal requests</h1>
        </div>

        <div className="space-y-4">
          {requests.map((req) => (
            <div key={req.user + req.amount} className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xl font-bold text-white">{req.user}</div>
                  <div className="mt-1 text-sm text-slate-400">{req.method}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-lg font-bold text-cyan-300">{req.amount}</div>
                  <div className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs uppercase text-slate-300">{req.status}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
