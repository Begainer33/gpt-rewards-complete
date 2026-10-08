import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07111F] px-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-glow">
        <div className="mb-6 text-center">
          <div className="text-3xl font-black text-cyan-400">GPT Rewards</div>
          <h1 className="mt-4 text-2xl font-bold text-white">Create account</h1>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Full name</label>
            <input type="text" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-cyan-500" placeholder="John Smith" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input type="email" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-cyan-500" placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Password</label>
            <input type="password" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-cyan-500" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full rounded-xl bg-cyan-500 px-4 py-3 font-bold text-slate-950">Register</button>
        </form>

        <div className="mt-5 text-center text-sm text-slate-400">
          Already have an account? <Link href="/login" className="text-cyan-300">Login</Link>
        </div>
      </div>
    </main>
  );
}
