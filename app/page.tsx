export default function Home() {
  return (
    <div className="bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[calc(100vh-80px)] bg-gradient-to-br from-amber-900 via-slate-700 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/25"></div>

        <div className="relative z-10 text-center text-white max-w-5xl px-8">
          <h1 className="text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Your ETA Search
            <br />
            <span className="text-5xl lg:text-6xl font-light italic">Five stages to success</span>
          </h1>

          <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed font-light">
            From self-assessment through operations planning, we guide you through every step of finding and acquiring the right company
          </p>

          <div className="flex gap-8 justify-center flex-wrap">
            <a href="/searcher/assessment" className="px-10 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 text-lg">
              Start Your Journey
            </a>
            <a href="#workflow" className="px-10 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 text-lg">
              View Workflow
            </a>
          </div>
        </div>
      </div>

      {/* Workflow Section */}
      <div id="workflow" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-slate-900 mb-6 text-center">Your Five-Stage Journey</h2>
          <p className="text-xl text-slate-600 text-center mb-20">Follow the proven ETA workflow</p>

          {/* Workflow Modules - Odoo style with connections */}
          <div className="space-y-12">
            {/* Top row: 1, 2, 3 */}
            <div className="flex items-end justify-between gap-8">
              {[1, 2, 3].map((num, i) => (
                <div key={num} className="flex-1">
                  <a href={`/searcher/${['assessment', 'thesis', 'discovery'][i]}`} className="block group">
                    <div className={`bg-white rounded-xl p-8 border-2 transition-all duration-300 ${
                      num === 3 ? 'border-primary-600 shadow-xl' : 'border-slate-200 hover:border-slate-300'
                    }`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl transition-all duration-300 ${
                          num === 3 ? 'bg-primary-600 text-white' : 'bg-slate-100 text-slate-700 group-hover:bg-primary-100 group-hover:text-primary-600'
                        }`}>
                          {num}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900">
                            {['Assessment', 'Thesis', 'Discovery'][i]}
                          </h3>
                          <p className="text-slate-600 font-medium">
                            {['Profile & readiness', 'Define focus', 'Find targets'][i]}
                          </p>
                        </div>
                      </div>
                      <p className="text-slate-700 leading-relaxed">
                        {['Understand your background and readiness for ETA', 'Narrow sector, geography, and value creation strategy', 'Search and evaluate companies matching your thesis'][i]}
                      </p>
                    </div>
                  </a>

                  {/* Arrow down for 1, 2, 3 */}
                  {num < 3 && (
                    <div className="text-center mt-6 text-4xl text-slate-400">↓</div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom row: 4, 5 (centered) */}
            <div className="flex items-end justify-center gap-8" style={{ maxWidth: '66.67%', margin: '0 auto' }}>
              {[4, 5].map((num, i) => (
                <div key={num} className="flex-1">
                  <a href={`/searcher/${['deal', 'operations'][i]}`} className="block group">
                    <div className={`bg-white rounded-xl p-8 border-2 transition-all duration-300 ${
                      num === 4 ? 'border-primary-600 shadow-xl' : 'border-slate-200 hover:border-slate-300'
                    }`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl transition-all duration-300 ${
                          num === 4 ? 'bg-primary-600 text-white' : 'bg-slate-100 text-slate-700 group-hover:bg-primary-100 group-hover:text-primary-600'
                        }`}>
                          {num}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900">
                            {['Deal', 'Operations'][i]}
                          </h3>
                          <p className="text-slate-600 font-medium">
                            {['Outreach & terms', '100-day plan'][i]}
                          </p>
                        </div>
                      </div>
                      <p className="text-slate-700 leading-relaxed">
                        {['Reach out to sellers and negotiate deal terms', 'Plan value creation and operational improvements'][i]}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-3 gap-12 text-center">
            {[
              { value: '120+', label: 'Active Searchers' },
              { value: '45', label: 'Deals Closed' },
              { value: '82%', label: 'Success Rate' },
            ].map(stat => (
              <div key={stat.label}>
                <p className="text-5xl font-bold text-primary-400 mb-2">{stat.value}</p>
                <p className="text-white text-lg font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
