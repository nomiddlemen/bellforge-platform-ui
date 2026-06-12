export default function Deal() {
  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-slate-200 bg-slate-0">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full mb-2">
            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>Stage 4 of 5
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mt-2">Deal Management</h1>
          <p className="text-slate-600 mt-2">Outreach, negotiation, and deal tracking tools</p>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto px-8 py-8">
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Active Outreach', value: '12' },
              { label: 'In Negotiation', value: '3' },
              { label: 'LOIs Signed', value: '1' },
            ].map((s, i) => (
              <div key={i} className="bg-slate-0 rounded-lg border border-slate-200 p-4">
                <p className="text-xs text-slate-600 font-semibold uppercase mb-2">{s.label}</p>
                <p className="text-3xl font-bold text-slate-900">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900">Deal Pipeline</h3>
            {[
              { name: 'Company A', stage: 'Outreach', date: 'Today' },
              { name: 'Company B', stage: 'Initial Call', date: '3 days ago' },
              { name: 'Company C', stage: 'LOI', date: '1 week ago' },
            ].map((d, i) => (
              <div key={i} className="bg-slate-0 border border-slate-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-slate-900">{d.name}</h4>
                    <p className="text-xs text-slate-600 mt-1">{d.date}</p>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-primary-100 text-primary-700 rounded-full font-medium">{d.stage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
