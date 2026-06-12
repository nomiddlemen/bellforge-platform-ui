export default function Thesis() {
  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-slate-200 bg-slate-0">
        <div className="max-w-4xl mx-auto px-8 py-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full mb-2">
            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>Stage 2 of 5
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mt-2">Define Your Thesis</h1>
          <p className="text-slate-600 mt-2">Narrow down sector, geography, and value creation strategy</p>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto px-8 py-8">
          <div className="space-y-6">
            <div className="bg-slate-0 rounded-lg border border-slate-200 p-8">
              <h3 className="font-semibold text-slate-900 mb-4">Sector & Geography</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Target sectors</label>
                  <input placeholder="e.g. Software, Manufacturing" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Geography</label>
                  <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <option>Belgium</option>
                    <option>France</option>
                    <option>Netherlands</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-slate-0 rounded-lg border border-slate-200 p-8">
              <h3 className="font-semibold text-slate-900 mb-4">Value Creation Plan</h3>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Key value levers</label>
                <textarea placeholder="Sales growth, margin improvement, operational efficiency..." className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 h-24"></textarea>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="px-6 py-2.5 border border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-50">Back</button>
              <button className="ml-auto px-6 py-2.5 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700">Next: Discovery</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
