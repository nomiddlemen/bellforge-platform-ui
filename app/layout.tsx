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
      <body className="bg-slate-900 text-slate-900">
        {/* Header */}
        <header className="fixed top-0 w-full bg-gradient-to-r from-slate-800 to-slate-700 z-50 shadow-lg">
          <div className="max-w-full px-12 py-5 flex items-center justify-between">
            <a href="/" className="flex-shrink-0">
              <div className="w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
            </a>
            <nav className="flex items-center gap-10">
              <a href="/" className="text-sm font-medium text-white hover:text-primary-400">Home</a>
              <a href="/" className="text-sm font-medium text-white hover:text-primary-400">Vision</a>
              <a href="/" className="text-sm font-medium text-white hover:text-primary-400">About</a>
              <a href="/" className="text-sm font-medium text-white hover:text-primary-400">Contact</a>
              <a href="/" className="text-sm font-medium text-white hover:text-primary-400">Blog</a>
            </nav>
          </div>
        </header>

        <main className="pt-20">{children}</main>
      </body>
    </html>
  )
}
