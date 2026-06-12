export default function Operations() {
  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-slate-200 bg-slate-0">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full mb-2">
            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>Stage 5 of 5
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mt-2">Operational Planning</h1>
          <p className="text-slate-600 mt-2">100-day plan, value levers, and KPI tracking</p>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto px-8 py-8">
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Days Elapsed', value: '32' },
              { label: 'Key Initiatives', value: '8' },
              { label: 'Health', value: 'On Track' },
            ].map((s, i) => (
              <div key={i} className="bg-slate-0 rounded-lg border border-slate-200 p-4">
                <p className="text-xs text-slate-600 font-semibold uppercase mb-2">{s.label}</p>
                <p className="text-2xl font-bold text-slate-900">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-0 rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-4">100-Day Plan</h3>
              <div className="space-y-3">
                {[
                  { phase: 'Days 1-30', focus: 'Quick wins' },
                  { phase: 'Days 31-60', focus: 'Process improvements' },
                  { phase: 'Days 61-100', focus: 'Growth & scaling' },
                ].map((p, i) => (
                  <div key={i} className="pb-3 border-b border-slate-200 last:border-b-0">
                    <p className="font-medium text-slate-900 text-sm">{p.phase}</p>
                    <p className="text-xs text-slate-600 mt-1">{p.focus}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-0 rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Value Levers</h3>
              <div className="space-y-3">
                {[
                  { lever: 'Sales Growth', pot: '+35%' },
                  { lever: 'Margin Improvement', pot: '+12%' },
                  { lever: 'Operational Efficiency', pot: '+8%' },
                ].map((l, i) => (
                  <div key={i} className="pb-3 border-b border-slate-200 last:border-b-0 flex justify-between items-center">
                    <p className="font-medium text-slate-900 text-sm">{l.lever}</p>
                    <p className="text-sm text-primary-600 font-semibold">{l.pot}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
