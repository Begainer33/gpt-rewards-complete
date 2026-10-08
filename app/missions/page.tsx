import { requireAuth } from '@/lib/auth';

export default function MissionsPage() {
  const user = requireAuth();

  const missions = [
    { title: 'Complete 3 offers', progress: '2 / 3', reward: '$4.00', status: 'In progress' },
    { title: 'Earn $25 this week', progress: '$18.40 / $25', reward: '$8.00', status: 'Almost there' },
    { title: 'Refer 3 friends', progress: '1 / 3', reward: '$12.00', status: 'New' }
  ];

  return (
    <main className="min-h-screen bg-[#07111F] px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Missions</p>
          <h1 className="mt-2 text-3xl font-black text-white">Daily objectives</h1>
        </div>

        <div className="space-y-4">
          {missions.map((mission) => (
            <div key={mission.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xl font-bold text-white">{mission.title}</div>
                  <div className="mt-1 text-sm text-slate-400">{mission.progress}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase text-cyan-300">{mission.status}</div>
                  <div className="font-bold text-cyan-300">Reward: {mission.reward}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
