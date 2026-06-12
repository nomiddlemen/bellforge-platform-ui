import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Bellforge',
  description: 'Entrepreneurship Through Acquisition',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-slate-0 text-slate-900">
        <div className="flex h-screen bg-slate-50">
          <aside className="w-72 bg-slate-0 border-r border-slate-200 flex flex-col overflow-hidden shadow-sm">
            <div className="px-6 py-5 border-b border-slate-200">
              <div className="flex items-baseline gap-2">
                <h1 className="text-2xl font-bold text-primary-700">Bellforge</h1>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">ETA</span>
              </div>
              <p className="text-xs text-slate-500 mt-2">Entrepreneurship Through Acquisition</p>
            </div>

            <div className="px-6 py-4 border-b border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-700 font-semibold">S</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">Searcher</p>
                  <p className="text-xs text-slate-500">Your journey</p>
                </div>
              </div>
              <select className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg bg-slate-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option value="searcher">🔍 Searcher</option>
                <option value="investor">💼 Investor</option>
                <option value="fund">📊 Fund</option>
                <option value="admin">⚙️ Admin</option>
              </select>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-6">
              <div className="space-y-8">
                <div>
                  <p className="text-xs font-semibold text-slate-600 uppercase tracking-widest px-3 mb-3">Your Journey</p>
                  <div className="space-y-1">
                    {[
                      { num: '1', label: 'Assessment', desc: 'Pre-screening', path: '/searcher/assessment' },
                      { num: '2', label: 'Thesis', desc: 'Define focus', path: '/searcher/thesis' },
                      { num: '3', label: 'Discovery', desc: 'Find targets', path: '/searcher/discovery' },
                      { num: '4', label: 'Deal', desc: 'Outreach', path: '/searcher/deal' },
                      { num: '5', label: 'Operations', desc: '100-day plan', path: '/searcher/operations' },
                    ].map(item => (
                      <a key={item.path} href={item.path} className="flex items-start gap-3 px-3 py-2.5 text-sm rounded-lg hover:bg-slate-100 transition-colors group">
                        <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-700 font-semibold flex items-center justify-center text-xs group-hover:bg-primary-200 flex-shrink-0">{item.num}</div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-slate-900">{item.label}</p>
                          <p className="text-xs text-slate-500">{item.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-600 uppercase tracking-widest px-3 mb-3">Platforms</p>
                  <div className="space-y-1">
                    <a href="/investor" className="block px-3 py-2.5 text-sm rounded-lg hover:bg-slate-100 transition-colors text-slate-700">Investor Portal</a>
                    <a href="/fund" className="block px-3 py-2.5 text-sm rounded-lg hover:bg-slate-100 transition-colors text-slate-700">Fund Listing</a>
                    <a href="/admin" className="block px-3 py-2.5 text-sm rounded-lg hover:bg-slate-100 transition-colors text-slate-700">Admin Panel</a>
                  </div>
                </div>
              </div>
            </nav>

            <div className="px-3 py-4 border-t border-slate-200 space-y-2">
              <a href="#" className="block px-3 py-2.5 text-sm text-slate-700 rounded-lg hover:bg-slate-100 transition-colors">Settings</a>
              <button className="w-full px-3 py-2.5 text-sm text-slate-700 rounded-lg hover:bg-slate-100 transition-colors text-left">Logout</button>
            </div>
          </aside>

          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  )
}
