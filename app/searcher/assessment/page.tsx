export default function AssessmentPage() {
  return (
    <div className="p-8 max-w-4xl">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded mb-4">
          Stage 1 of 5
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Pre-screening Assessment</h1>
        <p className="text-lg text-slate-600">
          Let's understand your background and readiness for ETA. This helps us tailor the platform to your strengths.
        </p>
      </div>

      {/* Progress */}
      <div className="mb-12">
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map(stage => (
            <div
              key={stage}
              className={`h-2 flex-1 rounded-full ${
                stage === 1 ? 'bg-primary-600' : stage < 1 ? 'bg-primary-600' : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-2">20% complete</p>
      </div>

      {/* Form */}
      <div className="space-y-8 bg-white p-8 rounded-lg border border-slate-200">
        {/* Question 1 */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-3">
            What's your primary background?
          </label>
          <select className="w-full px-4 py-2.5 border border-slate-200 rounded text-slate-900 focus:outline-none focus:border-primary-600">
            <option>Select an option...</option>
            <option>Operations</option>
            <option>Finance</option>
            <option>Technology</option>
            <option>Sales</option>
            <option>Other</option>
          </select>
        </div>

        {/* Question 2 */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-3">
            How many years of professional experience?
          </label>
          <input
            type="number"
            placeholder="e.g. 8"
            className="w-full px-4 py-2.5 border border-slate-200 rounded text-slate-900 focus:outline-none focus:border-primary-600"
          />
        </div>

        {/* Question 3 */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-3">
            Have you led a business or division?
          </label>
          <div className="space-y-2">
            {['Yes, as CEO', 'Yes, as VP/Director', 'No, but managed teams', 'No'].map(option => (
              <label key={option} className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="leadership" className="w-4 h-4" />
                <span className="text-sm text-slate-700">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-6 border-t border-slate-200">
          <button className="px-6 py-2.5 border border-slate-200 text-slate-700 font-semibold rounded hover:bg-slate-50 transition-colors">
            Save & Exit
          </button>
          <button className="ml-auto px-6 py-2.5 bg-primary-600 text-white font-semibold rounded hover:bg-primary-700 transition-colors">
            Continue to Next Stage
          </button>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded">
        <h3 className="font-semibold text-slate-900 mb-2">Why we ask this</h3>
        <p className="text-sm text-slate-600">
          Your background helps us understand your strengths and how to support your ETA search. We use this data across our platform to make better recommendations.
        </p>
      </div>
    </div>
  )
}
