import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Bellforge Platform',
  description: 'AI-powered ETA platform',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-navy-50 text-navy-900">
        <div className="flex h-screen">
          {/* Sidebar */}
          <nav className="w-64 bg-white border-r border-navy-200 flex flex-col overflow-hidden">
            <div className="p-6 border-b border-navy-200">
              <h1 className="text-xl font-bold text-navy-900">Bellforge</h1>
              <p className="text-sm text-navy-500 mt-1">ETA Platform</p>
            </div>

            {/* User Type Selector */}
            <div className="p-4 border-b border-navy-200">
              <label className="text-xs font-semibold text-navy-600 uppercase tracking-wide block mb-2">
                Mode
              </label>
              <select className="w-full px-3 py-2 text-sm border border-navy-200 rounded bg-white text-navy-900 focus:outline-none focus:border-navy-600">
                <option value="searcher">🔍 Searcher</option>
                <option value="investor">💼 Investor</option>
                <option value="fund">📊 Fund</option>
                <option value="admin">⚙️ Admin</option>
              </select>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold text-navy-600 uppercase tracking-wide mb-3">
                    Your Journey
                  </p>
                  <nav className="space-y-1">
                    {[
                      { num: '1', label: 'Assessment', path: '/searcher/assessment' },
                      { num: '2', label: 'Thesis', path: '/searcher/thesis' },
                      { num: '3', label: 'Discovery', path: '/searcher/discovery' },
                      { num: '4', label: 'Deal', path: '/searcher/deal' },
                      { num: '5', label: 'Operations', path: '/searcher/operations' },
                    ].map(item => (
                      <a
                        key={item.path}
                        href={item.path}
                        className="flex items-center gap-2 px-3 py-2 text-sm text-navy-700 hover:bg-navy-50 rounded transition-colors"
                      >
                        <span className="font-semibold text-navy-600">{item.num}</span>
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-navy-200 text-xs text-navy-500">
              <button className="w-full px-3 py-2 text-left hover:bg-navy-50 rounded">
                Logout
              </button>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
