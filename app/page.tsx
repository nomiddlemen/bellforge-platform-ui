export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="relative w-full h-96 bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative text-center text-white z-10 max-w-3xl px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Your ETA Search<br />
            <span className="italic font-light">Five stages to success</span>
          </h1>
          <p className="text-lg text-white/90 mb-8">
            From self-assessment to operational planning, we guide you through every step of finding and acquiring your company
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/searcher/assessment" className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary-600 transition-colors">
              Start Your Journey
            </a>
            <a href="#workflow" className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary-600 transition-colors">
              View Workflow
            </a>
          </div>
        </div>
      </div>

      {/* Workflow Section */}
      <div id="workflow" className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">Five-Stage Process</h2>
        <p className="text-center text-slate-600 mb-12">Follow the complete ETA workflow</p>

        {/* Desktop - horizontal */}
        <div className="hidden md:block mb-12">
          {/* Connection lines */}
          <svg className="w-full h-20 mb-4" viewBox="0 0 1200 80" preserveAspectRatio="none">
            <line x1="80" y1="40" x2="240" y2="40" stroke="#d1d5db" strokeWidth="2" />
            <line x1="280" y1="40" x2="440" y2="40" stroke="#d1d5db" strokeWidth="2" />
            <line x1="480" y1="40" x2="640" y2="40" stroke="#d1d5db" strokeWidth="2" />
            <line x1="680" y1="40" x2="840" y2="40" stroke="#d1d5db" strokeWidth="2" />
          </svg>

          <div className="grid grid-cols-5 gap-4">
            {[
              { num: 1, title: 'Assessment', desc: 'Profile & readiness' },
              { num: 2, title: 'Thesis', desc: 'Define your focus' },
              { num: 3, title: 'Discovery', desc: 'Find targets' },
              { num: 4, title: 'Deal', desc: 'Outreach & terms' },
              { num: 5, title: 'Operations', desc: '100-day plan' },
            ].map((stage, i) => (
              <a
                key={i}
                href={`/searcher/${['assessment', 'thesis', 'discovery', 'deal', 'operations'][i]}`}
                className="group text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 font-bold text-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  {stage.num}
                </div>
                <h3 className="font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">{stage.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{stage.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile - vertical */}
        <div className="md:hidden space-y-3">
          {[
            { num: 1, title: 'Assessment', desc: 'Profile & readiness' },
            { num: 2, title: 'Thesis', desc: 'Define your focus' },
            { num: 3, title: 'Discovery', desc: 'Find targets' },
            { num: 4, title: 'Deal', desc: 'Outreach & terms' },
            { num: 5, title: 'Operations', desc: '100-day plan' },
          ].map((stage, i) => (
            <a
              key={i}
              href={`/searcher/${['assessment', 'thesis', 'discovery', 'deal', 'operations'][i]}`}
              className="flex items-center gap-4 p-4 rounded-lg border border-slate-200 group hover:border-primary-600 hover:bg-primary-50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 font-bold flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                {stage.num}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{stage.title}</h3>
                <p className="text-sm text-slate-600">{stage.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { label: 'Active Searchers', value: '120+' },
              { label: 'Deals Closed', value: '45' },
              { label: 'Success Rate', value: '82%' },
            ].map(s => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-primary-600 mb-2">{s.value}</p>
                <p className="text-slate-600 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
