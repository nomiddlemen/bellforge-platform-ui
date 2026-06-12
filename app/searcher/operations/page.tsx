export default function OperationsPage() {
  return (
    <div className="p-8 max-w-6xl">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-navy-100 text-navy-700 text-xs font-semibold rounded mb-4">
          Stage 5 of 5
        </div>
        <h1 className="text-4xl font-bold text-navy-900 mb-3">Build Operational Plan</h1>
        <p className="text-lg text-navy-600">
          100-day plan, value levers, and financial modeling.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-navy-200">
          <p className="text-xs text-navy-500 font-semibold uppercase mb-1">Days Elapsed</p>
          <p className="text-3xl font-bold text-navy-900">32</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-navy-200">
          <p className="text-xs text-navy-500 font-semibold uppercase mb-1">Key Initiatives</p>
          <p className="text-3xl font-bold text-navy-900">8</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-navy-200">
          <p className="text-xs text-navy-500 font-semibold uppercase mb-1">Health</p>
          <p className="text-3xl font-bold text-navy-900">On Track</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* 100-Day Plan */}
        <div className="bg-white p-8 rounded-lg border border-navy-200">
          <h2 className="font-semibold text-navy-900 text-lg mb-6">100-Day Plan</h2>
          <div className="space-y-4">
            {[
              { phase: 'Days 1-30', focus: 'Quick wins & team alignment' },
              { phase: 'Days 31-60', focus: 'Process improvements' },
              { phase: 'Days 61-100', focus: 'Growth & scaling' },
            ].map((plan, i) => (
              <div key={i} className="pb-4 border-b border-navy-200 last:border-b-0">
                <p className="font-semibold text-navy-900 text-sm">{plan.phase}</p>
                <p className="text-sm text-navy-600 mt-1">{plan.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Value Levers */}
        <div className="bg-white p-8 rounded-lg border border-navy-200">
          <h2 className="font-semibold text-navy-900 text-lg mb-6">Value Creation Levers</h2>
          <div className="space-y-4">
            {[
              { lever: 'Sales Growth', potential: '+35%' },
              { lever: 'Margin Improvement', potential: '+12%' },
              { lever: 'Operational Efficiency', potential: '+8%' },
            ].map((lever, i) => (
              <div key={i} className="pb-4 border-b border-navy-200 last:border-b-0 flex items-center justify-between">
                <p className="font-semibold text-navy-900 text-sm">{lever.lever}</p>
                <p className="text-sm text-navy-600 font-semibold">{lever.potential}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="mt-8">
        <h2 className="font-semibold text-navy-900 text-lg mb-4">Tools</h2>
        <div className="grid grid-cols-3 gap-4">
          <button className="bg-white p-4 rounded-lg border border-navy-200 text-left hover:bg-navy-50">
            <p className="font-semibold text-navy-900 text-sm">Financial Model</p>
            <p className="text-xs text-navy-500 mt-1">3-year projections</p>
          </button>
          <button className="bg-white p-4 rounded-lg border border-navy-200 text-left hover:bg-navy-50">
            <p className="font-semibold text-navy-900 text-sm">KPI Dashboard</p>
            <p className="text-xs text-navy-500 mt-1">Track post-acq metrics</p>
          </button>
          <button className="bg-white p-4 rounded-lg border border-navy-200 text-left hover:bg-navy-50">
            <p className="font-semibold text-navy-900 text-sm">Risk Register</p>
            <p className="text-xs text-navy-500 mt-1">Mitigation planning</p>
          </button>
        </div>
      </div>
    </div>
  )
}
