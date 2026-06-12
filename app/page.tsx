export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      {/* Welcome */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Welcome back</h1>
        <p className="text-lg text-slate-600">Continue your ETA search journey</p>
      </div>

      {/* Stages Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Your Workflow</h2>

        {/* Desktop - 5 columns */}
        <div className="hidden md:grid md:grid-cols-5 gap-4">
          {[
            { num: 1, title: 'Assessment', desc: 'Profile & readiness', path: '/searcher/assessment', status: 'done' },
            { num: 2, title: 'Thesis', desc: 'Define your focus', path: '/searcher/thesis', status: 'done' },
            { num: 3, title: 'Discovery', desc: 'Find targets', path: '/searcher/discovery', status: 'current' },
            { num: 4, title: 'Deal', desc: 'Outreach & terms', path: '/searcher/deal', status: 'next' },
            { num: 5, title: 'Operations', desc: '100-day plan', path: '/searcher/operations', status: 'next' },
          ].map((stage, i) => (
            <a
              key={i}
              href={stage.path}
              className={`p-6 rounded-lg border-2 transition-all group ${
                stage.status === 'done'
                  ? 'border-primary-600 bg-primary-50 hover:shadow-lg'
                  : stage.status === 'current'
                  ? 'border-primary-600 bg-white shadow-md hover:shadow-lg'
                  : 'border-slate-200 bg-slate-50 hover:border-slate-300'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  stage.status === 'done'
                    ? 'bg-primary-600 text-white'
                    : stage.status === 'current'
                    ? 'bg-primary-100 text-primary-600'
                    : 'bg-slate-200 text-slate-600'
                }`}>
                  {stage.status === 'done' ? '✓' : stage.num}
                </div>
                {stage.status === 'current' && <span className="text-primary-600 font-semibold text-xs">CURRENT</span>}
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{stage.title}</h3>
              <p className="text-sm text-slate-600">{stage.desc}</p>
            </a>
          ))}
        </div>

        {/* Mobile - 2 columns */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {[
            { num: 1, title: 'Assessment', desc: 'Profile', path: '/searcher/assessment', status: 'done' },
            { num: 2, title: 'Thesis', desc: 'Focus', path: '/searcher/thesis', status: 'done' },
            { num: 3, title: 'Discovery', desc: 'Targets', path: '/searcher/discovery', status: 'current' },
            { num: 4, title: 'Deal', desc: 'Outreach', path: '/searcher/deal', status: 'next' },
            { num: 5, title: 'Operations', desc: '100-day', path: '/searcher/operations', status: 'next' },
          ].map((stage, i) => (
            <a
              key={i}
              href={stage.path}
              className={`p-4 rounded-lg border-2 transition-all text-center ${
                stage.status === 'done'
                  ? 'border-primary-600 bg-primary-50 hover:shadow-md'
                  : stage.status === 'current'
                  ? 'border-primary-600 bg-white shadow-md'
                  : 'border-slate-200 bg-slate-50'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-2 ${
                stage.status === 'done'
                  ? 'bg-primary-600 text-white'
                  : stage.status === 'current'
                  ? 'bg-primary-100 text-primary-600'
                  : 'bg-slate-200 text-slate-600'
              }`}>
                {stage.status === 'done' ? '✓' : stage.num}
              </div>
              <h3 className="font-semibold text-slate-900 text-sm">{stage.title}</h3>
              <p className="text-xs text-slate-600 mt-0.5">{stage.desc}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Reviewed', value: '24' },
          { label: 'Watchlist', value: '8' },
          { label: 'Contacted', value: '3' },
        ].map(s => (
          <div key={s.label} className="p-4 rounded-lg bg-white border border-slate-200">
            <p className="text-xs text-slate-600 font-semibold uppercase mb-2">{s.label}</p>
            <p className="text-3xl font-bold text-primary-600">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
