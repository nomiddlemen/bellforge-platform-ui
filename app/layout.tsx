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
        {/* Header - exactly like screenshot */}
        <header className="bg-white border-b border-slate-200">
          <div className="max-w-full px-8 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold text-primary-600">Bellforge</a>
            <nav className="flex items-center gap-12">
              <a href="/" className="text-sm font-medium text-slate-900 hover:text-primary-600">Home</a>
              <a href="/" className="text-sm font-medium text-slate-900 hover:text-primary-600">Vision</a>
              <a href="/" className="text-sm font-medium text-slate-900 hover:text-primary-600">About</a>
              <a href="/" className="text-sm font-medium text-slate-900 hover:text-primary-600">Contact</a>
              <a href="/" className="text-sm font-medium text-slate-900 hover:text-primary-600">Blog</a>
            </nav>
          </div>
        </header>

        {/* Main */}
        <main>{children}</main>
      </body>
    </html>
  )
}
