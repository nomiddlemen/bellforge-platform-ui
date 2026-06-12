export default function Discovery() {
  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-slate-200 bg-slate-0">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full mb-2">
            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>Stage 3 of 5
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mt-2">Company Discovery</h1>
          <p className="text-slate-600 mt-2">Search and evaluate target companies matching your thesis</p>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto px-8 py-8">
          <div className="mb-6">
            <input placeholder="Search by company name, sector, or criteria..." className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>

          <div className="space-y-3">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="bg-slate-0 border border-slate-200 rounded-lg p-5 hover:border-primary-300 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">Company {i}</h3>
                    <p className="text-sm text-slate-600 mt-1">Software / Belgium</p>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-xs text-slate-600">Score</p>
                    <p className="text-2xl font-bold text-primary-600">8.{i}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-700 mt-3">Description and key metrics</p>
                <div className="flex gap-2 mt-4">
                  <button className="px-4 py-2 bg-primary-100 text-primary-700 text-sm font-medium rounded-lg hover:bg-primary-200">+ Watchlist</button>
                  <button className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
