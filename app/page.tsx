export default function Home() {
  return (
    <>
      {/* Hero - exactly like screenshot */}
      <div className="relative w-full h-screen bg-gradient-to-b from-slate-300 to-slate-400 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white max-w-4xl px-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Your ETA Search<br />
            <span className="italic font-light">Five stages to success</span>
          </h1>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            From self-assessment through operations planning, we guide you through every step of finding and acquiring the right company for your future
          </p>
          <div className="flex gap-6 justify-center">
            <a href="/searcher/assessment" className="px-12 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary-600 transition-all text-lg">
              Start Your Journey
            </a>
            <a href="#workflow" className="px-12 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary-600 transition-all text-lg">
              View Workflow
            </a>
          </div>
        </div>
      </div>

      {/* Workflow Section - Odoo style */}
      <div id="workflow" className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Five-Stage Workflow</h2>
        <p className="text-lg text-slate-600 text-center mb-16">Follow the proven ETA process</p>

        {/* Stages with connections - Odoo style */}
        <div className="space-y-8">
          {/* Row 1: Assessment -> Thesis -> Discovery */}
          <div className="flex items-stretch justify-between gap-6">
            {/* Assessment */}
            <a href="/searcher/assessment" className="flex-1 group">
              <div className="bg-white rounded-lg border-2 border-slate-200 p-8 h-full hover:border-primary-600 hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary-100 text-primary-600 font-bold text-xl flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Assessment</h3>
                    <p className="text-sm text-slate-600">Profile & readiness</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600">Understand your background, experience, and readiness for ETA</p>
              </div>
            </a>

            {/* Arrow */}
            <div className="flex items-center">
              <div className="text-4xl text-slate-300">→</div>
            </div>

            {/* Thesis */}
            <a href="/searcher/thesis" className="flex-1 group">
              <div className="bg-white rounded-lg border-2 border-slate-200 p-8 h-full hover:border-primary-600 hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary-100 text-primary-600 font-bold text-xl flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Thesis</h3>
                    <p className="text-sm text-slate-600">Define focus</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600">Narrow down sector, geography, and value creation strategy</p>
              </div>
            </a>

            {/* Arrow */}
            <div className="flex items-center">
              <div className="text-4xl text-slate-300">→</div>
            </div>

            {/* Discovery */}
            <a href="/searcher/discovery" className="flex-1 group">
              <div className="bg-white rounded-lg border-2 border-primary-600 p-8 h-full shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary-100 text-primary-600 font-bold text-xl flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Discovery</h3>
                    <p className="text-sm text-slate-600">Find targets</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600">Search and evaluate companies matching your thesis</p>
              </div>
            </a>
          </div>

          {/* Row 2: Deal -> Operations */}
          <div className="flex items-stretch justify-center gap-6" style={{ marginLeft: '25%', marginRight: '25%' }}>
            {/* Deal */}
            <a href="/searcher/deal" className="flex-1 group">
              <div className="bg-white rounded-lg border-2 border-slate-200 p-8 h-full hover:border-primary-600 hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary-100 text-primary-600 font-bold text-xl flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Deal</h3>
                    <p className="text-sm text-slate-600">Outreach & terms</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600">Reach out to sellers and negotiate deal terms</p>
              </div>
            </a>

            {/* Arrow */}
            <div className="flex items-center">
              <div className="text-4xl text-slate-300">→</div>
            </div>

            {/* Operations */}
            <a href="/searcher/operations" className="flex-1 group">
              <div className="bg-white rounded-lg border-2 border-slate-200 p-8 h-full hover:border-primary-600 hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary-100 text-primary-600 font-bold text-xl flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Operations</h3>
                    <p className="text-sm text-slate-600">100-day plan</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600">Plan value creation and operational improvements</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { label: 'Active Searchers', value: '120+' },
              { label: 'Deals Closed', value: '45' },
              { label: 'Success Rate', value: '82%' },
            ].map(s => (
              <div key={s.label}>
                <p className="text-4xl font-bold text-primary-600 mb-2">{s.value}</p>
                <p className="text-slate-700 font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
