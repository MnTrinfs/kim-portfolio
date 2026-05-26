import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Navbar } from './components/nav'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

const lora = Lora({
  subsets: ['vietnamese', 'latin'],
  display: 'swap',
  variable: '--font-lora',
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Nguyen Ngoc Thien Kim | Portfolio',
    template: '%s | Nguyen Ngoc Thien Kim',
  },
  description: 'Nguyen Ngoc Thien Kim - Electronics and Telecommunications Student focused on Robotics, Embedded Systems and Circuit Design.',
  openGraph: {
    title: 'Nguyen Ngoc Thien Kim | Portfolio',
    description: 'Nguyen Ngoc Thien Kim - Electronics and Telecommunications Student focused on Robotics, Embedded Systems and Circuit Design.',
    url: baseUrl,
    siteName: 'Nguyen Ngoc Thien Kim Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        lora.variable,
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="text-zinc-900 dark:text-zinc-100 antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-auto min-w-0 max-w-[980px] w-full mx-auto px-4 sm:px-6 md:px-8 mt-8 flex flex-col">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
