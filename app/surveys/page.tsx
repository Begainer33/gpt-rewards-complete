import { requireAuth } from '@/lib/auth';

export default function SurveysPage() {
  const user = requireAuth();

  const surveys = [
    { title: 'Market research survey', reward: '$3.50', time: '10 min', qualification: 'High' },
    { title: 'Product feedback', reward: '$2.25', time: '8 min', qualification: 'Medium' },
    { title: 'Consumer profile survey', reward: '$5.00', time: '15 min', qualification: 'High' }
  ];

  return (
    <main className="min-h-screen bg-[#07111F] px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Surveys</p>
          <h1 className="mt-2 text-3xl font-black text-white">Earn from survey completions</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {surveys.map((survey) => (
            <div key={survey.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <div className="text-xl font-bold text-white">{survey.title}</div>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
                <span>Reward</span>
                <span className="font-bold text-cyan-300">{survey.reward}</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm text-slate-300">
                <span>Estimated time</span>
                <span>{survey.time}</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm text-slate-300">
                <span>Qualification</span>
                <span>{survey.qualification}</span>
              </div>
              <button className="mt-6 w-full rounded-full bg-cyan-500 px-4 py-2.5 font-bold text-slate-950">Start survey</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
