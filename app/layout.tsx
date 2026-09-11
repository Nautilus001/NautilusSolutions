import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Meridian Labs — Software Consulting & Custom Development',
    template: '%s — Meridian Labs',
  },
  description:
    'Meridian Labs is a local software consultancy delivering web design, custom application development, platform migrations, and workflow optimization for growing businesses.',
  generator: 'v0.app',
  keywords: [
    'software consulting',
    'custom app development',
    'web design',
    'platform migration',
    'workflow optimization',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f1e9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <body className="antialiased font-sans">
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
