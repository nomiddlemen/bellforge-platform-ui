export default function DealPage() {
  return (
    <div className="p-8 max-w-6xl">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-navy-100 text-navy-700 text-xs font-semibold rounded mb-4">
          Stage 4 of 5
        </div>
        <h1 className="text-4xl font-bold text-navy-900 mb-3">Build the Deal</h1>
        <p className="text-lg text-navy-600">
          Outreach, LOI preparation, and deal management tools.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-navy-200">
          <p className="text-xs text-navy-500 font-semibold uppercase mb-1">Active Outreach</p>
          <p className="text-3xl font-bold text-navy-900">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-navy-200">
          <p className="text-xs text-navy-500 font-semibold uppercase mb-1">In Negotiation</p>
          <p className="text-3xl font-bold text-navy-900">3</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-navy-200">
          <p className="text-xs text-navy-500 font-semibold uppercase mb-1">LOIs Signed</p>
          <p className="text-3xl font-bold text-navy-900">1</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Deals */}
        <div className="space-y-4">
          <h2 className="font-semibold text-navy-900 text-lg">Deal Pipeline</h2>
          {[
            { name: 'Company A', stage: 'Outreach', date: 'Today' },
            { name: 'Company B', stage: 'Initial Call', date: '3 days ago' },
            { name: 'Company C', stage: 'LOI Preparation', date: '1 week ago' },
          ].map((deal, i) => (
            <div key={i} className="bg-white p-4 rounded-lg border border-navy-200">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-navy-900">{deal.name}</h3>
                <span className="text-xs px-2 py-1 bg-navy-100 text-navy-700 rounded">{deal.stage}</span>
              </div>
              <p className="text-xs text-navy-500">{deal.date}</p>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="space-y-4">
          <h2 className="font-semibold text-navy-900 text-lg">Tools</h2>
          <div className="space-y-3">
            <button className="w-full bg-white p-4 rounded-lg border border-navy-200 text-left hover:bg-navy-50">
              <p className="font-semibold text-navy-900">Email Drafting</p>
              <p className="text-xs text-navy-500 mt-1">AI-assisted outreach templates</p>
            </button>
            <button className="w-full bg-white p-4 rounded-lg border border-navy-200 text-left hover:bg-navy-50">
              <p className="font-semibold text-navy-900">LOI Builder</p>
              <p className="text-xs text-navy-500 mt-1">Structured letter of intent</p>
            </button>
            <button className="w-full bg-white p-4 rounded-lg border border-navy-200 text-left hover:bg-navy-50">
              <p className="font-semibold text-navy-900">Diligence Checklist</p>
              <p className="text-xs text-navy-500 mt-1">Track your due diligence</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
