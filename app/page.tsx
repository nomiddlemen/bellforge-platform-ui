import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-slate-200 bg-slate-0">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Welcome back</h1>
          <p className="text-lg text-slate-600">Continue your ETA search journey</p>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-8 py-8">
          {/* Progress */}
          <div className="mb-12">
            <h2 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-4">Progress</h2>
            <div className="grid grid-cols-5 gap-3">
              {[
                { s: 1, t: 'Assessment', st: 'done' },
                { s: 2, t: 'Thesis', st: 'done' },
                { s: 3, t: 'Discovery', st: 'now' },
                { s: 4, t: 'Deal', st: 'next' },
                { s: 5, t: 'Operations', st: 'next' },
              ].map(x => (
                <div key={x.s} className={`p-3 rounded-lg border-2 ${x.st === 'done' ? 'border-primary-500 bg-primary-50' : x.st === 'now' ? 'border-primary-500 bg-slate-0' : 'border-slate-200 bg-slate-50'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs mb-2 ${x.st === 'done' ? 'bg-primary-500 text-white' : x.st === 'now' ? 'bg-primary-100 text-primary-700' : 'bg-slate-200 text-slate-600'}`}>
                    {x.st === 'done' ? '✓' : x.s}
                  </div>
                  <p className="text-xs font-medium text-slate-900">{x.t}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mb-12">
            <h2 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-4">Your workflow</h2>
            <div className="grid grid-cols-3 gap-6">
              {[
                { path: '/searcher/assessment', icon: '✓', title: 'Assessment', desc: 'Your profile', status: 'completed' },
                { path: '/searcher/thesis', icon: '📊', title: 'Thesis', desc: 'Search parameters', status: 'completed' },
                { path: '/searcher/discovery', icon: '🔍', title: 'Company Discovery', desc: 'Find & evaluate targets', status: 'in-progress' },
              ].map((item, i) => (
                <Link key={i} href={item.path} className="group p-6 rounded-lg border border-slate-200 bg-slate-0 hover:border-primary-500 hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                    </div>
                    <span className="text-2xl ml-3">{item.icon}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-600 group-hover:gap-2.5 transition-all">
                    <span>Continue</span>
                    <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div>
            <h2 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-4">Activity</h2>
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: 'Reviewed', value: '24' },
                { label: 'Watchlist', value: '8' },
                { label: 'Contacted', value: '3' },
                { label: 'Replies', value: '1' },
              ].map(s => (
                <div key={s.label} className="p-4 rounded-lg bg-slate-0 border border-slate-200">
                  <p className="text-xs text-slate-600 font-semibold uppercase tracking-wide mb-2">{s.label}</p>
                  <p className="text-3xl font-bold text-slate-900">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
