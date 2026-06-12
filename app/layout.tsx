import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Bellforge',
  description: 'European ETA platform',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-slate-900">
        {/* Header */}
        <header className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-primary-600">Bellforge</a>
            <nav className="flex items-center gap-8">
              <a href="/" className="text-sm font-medium text-slate-700 hover:text-slate-900">Home</a>
              <a href="/searcher/assessment" className="text-sm font-medium text-slate-700 hover:text-slate-900">Platform</a>
              <a href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900">About</a>
              <button className="px-6 py-2 border-2 border-primary-600 text-primary-600 font-medium rounded-full hover:bg-primary-50 transition-colors">
                Sign in
              </button>
            </nav>
          </div>
        </header>

        {/* Main */}
        <main>{children}</main>
      </body>
    </html>
  )
}
