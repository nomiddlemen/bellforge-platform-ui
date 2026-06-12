export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <div className="mb-8">
        <span className="text-sm font-semibold text-primary-600 uppercase">Stage STAGE of 5</span>
        <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-3">STAGE Title</h1>
        <p className="text-lg text-slate-600">STAGE description</p>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-8 mb-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-3">Form Field</label>
            <input type="text" placeholder="Enter text" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="px-6 py-2.5 border border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-50">Back</button>
        <button className="ml-auto px-6 py-2.5 border-2 border-primary-600 text-primary-600 font-semibold rounded-full hover:bg-primary-600 hover:text-white transition-colors">Next</button>
      </div>
    </div>
  )
}
