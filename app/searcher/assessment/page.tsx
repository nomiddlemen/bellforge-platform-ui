export default function Assessment() {
  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-slate-200 bg-slate-0">
        <div className="max-w-4xl mx-auto px-8 py-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full mb-2">
            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>Stage 1 of 5
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mt-2">Pre-screening Assessment</h1>
          <p className="text-slate-600 mt-2">Tell us about your background and experience</p>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto px-8 py-8">
          <div className="bg-slate-0 rounded-lg border border-slate-200 p-8 mb-8">
            <div className="flex gap-1 mb-6">
              {[1,2,3,4,5].map(i => <div key={i} className={`h-1 flex-1 rounded-full ${i === 1 ? 'bg-primary-500' : 'bg-slate-200'}`}></div>)}
            </div>
            <p className="text-xs text-slate-600 font-medium">20% complete</p>
          </div>

          <div className="bg-slate-0 rounded-lg border border-slate-200 p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Primary professional background</label>
                <select className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>Select...</option>
                  {['Operations', 'Finance', 'Technology', 'Sales', 'Other'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Years of experience</label>
                <input type="number" placeholder="8" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Have you led a business?</label>
                <div className="space-y-2">
                  {['Yes, as CEO', 'Yes, as VP/Director', 'Managed teams', 'No'].map(o => (
                    <label key={o} className="flex items-center gap-3">
                      <input type="radio" name="leadership" className="w-4 h-4" />
                      <span className="text-sm text-slate-700">{o}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-6 border-t border-slate-200">
                <button className="px-6 py-2.5 border border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-50">Save & Exit</button>
                <button className="ml-auto px-6 py-2.5 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
