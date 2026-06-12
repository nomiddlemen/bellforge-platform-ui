import Link from 'next/link'

export default function Home() {
  return (
    <div className="p-8 max-w-5xl">
      <div className="mb-16">
        <h1 className="text-5xl font-bold text-slate-900 mb-4">Welcome to Bellforge</h1>
        <p className="text-xl text-slate-600">
          Your AI co-pilot for Entrepreneurship Through Acquisition (ETA)
        </p>
      </div>

      {/* Quick Start */}
      <div className="bg-white p-8 rounded-lg border border-slate-200 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Your 5-Stage Journey</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { num: 1, title: 'Assessment', desc: 'Pre-screening questionnaire', path: '/searcher/assessment' },
            { num: 2, title: 'Thesis', desc: 'Define your search focus', path: '/searcher/thesis' },
            { num: 3, title: 'Discovery', desc: 'Find target companies', path: '/searcher/discovery' },
            { num: 4, title: 'Deal', desc: 'Outreach & negotiation', path: '/searcher/deal' },
            { num: 5, title: 'Operations', desc: '100-day plan & value creation', path: '/searcher/operations' },
          ].map(stage => (
            <Link
              key={stage.num}
              href={stage.path}
              className="p-6 bg-slate-50 border border-slate-200 rounded-lg hover:border-slate-300 hover:bg-white transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                  {stage.num}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{stage.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{stage.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Other Portals */}
      <div className="grid grid-cols-3 gap-6">
        <Link href="/investor" className="p-8 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-colors">
          <p className="text-3xl mb-2">💼</p>
          <h3 className="font-semibold text-slate-900 mb-2">Investor Portal</h3>
          <p className="text-sm text-slate-600">Coming soon</p>
        </Link>
        <Link href="/fund" className="p-8 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-colors">
          <p className="text-3xl mb-2">📊</p>
          <h3 className="font-semibold text-slate-900 mb-2">Fund Listing</h3>
          <p className="text-sm text-slate-600">Coming soon</p>
        </Link>
        <Link href="/admin" className="p-8 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-colors">
          <p className="text-3xl mb-2">⚙️</p>
          <h3 className="font-semibold text-slate-900 mb-2">Admin</h3>
          <p className="text-sm text-slate-600">Coming soon</p>
        </Link>
      </div>
    </div>
  )
}
