export default function ThesisPage() {
  return (
    <div className="p-8 max-w-5xl">
      <div className="mb-12">
        <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded mb-4">
          Stage 2 of 5
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Define Your Thesis</h1>
        <p className="text-lg text-slate-600">
          Narrow your search focus. Sector, geography, size, and operational bets.
        </p>
      </div>

      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-48">
          <div className="bg-white p-6 rounded-lg border border-slate-200 sticky top-8">
            <h3 className="font-semibold text-slate-900 mb-4">Templates</h3>
            <nav className="space-y-2">
              {['Software/SaaS', 'Manufacturing', 'Services', 'Retail', 'Healthcare'].map(t => (
                <button key={t} className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">
                  {t}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main */}
        <div className="flex-1">
          <div className="space-y-6 bg-white p-8 rounded-lg border border-slate-200">
            {/* Sector */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">Sectors</label>
              <input
                type="text"
                placeholder="e.g. SaaS, Manufacturing..."
                className="w-full px-4 py-2.5 border border-slate-200 rounded text-slate-900 focus:outline-none focus:border-primary-600"
              />
            </div>

            {/* Geography */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">Geography</label>
              <select className="w-full px-4 py-2.5 border border-slate-200 rounded text-slate-900 focus:outline-none focus:border-primary-600">
                <option>Belgium</option>
                <option>France</option>
                <option>Netherlands</option>
                <option>Multi-country</option>
              </select>
            </div>

            {/* Size */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">Target Company Size</label>
              <div className="space-y-2">
                {['€1-5M revenue', '€5-20M revenue', '€20-100M revenue', 'Any size'].map(size => (
                  <label key={size} className="flex items-center gap-3">
                    <input type="radio" name="size" className="w-4 h-4" />
                    <span className="text-sm text-slate-700">{size}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Operational Bets */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">What could you improve?</label>
              <textarea
                placeholder="e.g. Sales process, operational efficiency..."
                className="w-full px-4 py-2.5 border border-slate-200 rounded text-slate-900 focus:outline-none focus:border-primary-600 h-24"
              />
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-6 border-t border-slate-200">
              <button className="px-6 py-2.5 border border-slate-200 text-slate-700 font-semibold rounded hover:bg-slate-50">
                Back
              </button>
              <button className="ml-auto px-6 py-2.5 bg-primary-600 text-white font-semibold rounded hover:bg-primary-700 transition-colors">
                Next: Company Discovery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
