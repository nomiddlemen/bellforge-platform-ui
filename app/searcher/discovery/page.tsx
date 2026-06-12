export default function DiscoveryPage() {
  return (
    <div className="p-8 max-w-6xl">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded mb-4">
          Stage 3 of 5
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Find Target Companies</h1>
        <p className="text-lg text-slate-600">
          Search and evaluate companies matching your thesis.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8 bg-white p-6 rounded-lg border border-slate-200">
        <input
          type="text"
          placeholder="Search by company name, sector, or criteria..."
          className="w-full px-4 py-3 border border-slate-200 rounded text-slate-900 focus:outline-none focus:border-primary-600"
        />
      </div>

      {/* Results */}
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className="bg-white p-6 rounded-lg border border-slate-200 hover:border-slate-300 cursor-pointer transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-slate-900 text-lg">Example Company {i}</h3>
                <p className="text-sm text-slate-600">Software / Belgium</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-500">ETA Score</p>
                <p className="text-2xl font-bold text-primary-600">8.2</p>
              </div>
            </div>
            <p className="text-sm text-slate-700 mb-4">
              Example company description with relevant financial metrics and operational opportunities.
            </p>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-primary-100 text-primary-700 font-semibold rounded text-sm hover:bg-primary-200 transition-colors">
                + Watchlist
              </button>
              <button className="px-4 py-2 bg-primary-600 text-white font-semibold rounded text-sm hover:bg-primary-700 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
