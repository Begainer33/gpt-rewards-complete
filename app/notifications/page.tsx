import { requireAuth } from '@/lib/auth';

export default function NotificationsPage() {
  const user = requireAuth();

  const items = [
    { title: 'Offer reward approved', detail: 'Your survey reward has been credited to your wallet.', time: '2 hours ago', unread: true },
    { title: 'Withdrawal update', detail: 'Your payout has moved to processing.', time: 'Yesterday', unread: false },
    { title: 'Referral milestone', detail: 'You reached 3 active referrals this month.', time: '2 days ago', unread: false }
  ];

  return (
    <main className="min-h-screen bg-[#07111F] px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Notifications</p>
          <h1 className="mt-2 text-3xl font-black text-white">Your updates</h1>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.title} className={`rounded-3xl border p-5 ${item.unread ? 'border-cyan-500/40 bg-cyan-500/5' : 'border-slate-800 bg-slate-900'}`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-semibold text-white">{item.title}</div>
                  <div className="mt-2 text-sm text-slate-300">{item.detail}</div>
                </div>
                <div className="text-xs text-slate-400">{item.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
