import Navigation from 'src/components/Navigation'
import PageContainer from 'src/components/shared/PageContainer'
import { Fragment_Mono, Inter, Lora } from 'next/font/google'
import { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'

import './global.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'block',
  variable: '--font-inter',
})

const lora = Lora({
  subsets: ['latin'],
  display: 'block',
  variable: '--font-lora',
})

const fragmentMono = Fragment_Mono({
  subsets: ['latin'],
  display: 'block',
  weight: "400",
  variable: '--font-fragment-mono',
})

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0074DC' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === "production" ? 'https://omurray.dev' : 'http://localhost:3000'),
  title: {
    template: 'Oliver Murray | %s',
    default: 'Oliver Murray',
  },
  description: 'Meet Oliver!',
  generator: 'Next.js',
  applicationName: 'Oliver Murray',
  appleWebApp: {
    capable: true,
    title: 'Oliver Murray',
    statusBarStyle: 'default'
  },
  referrer: 'origin-when-cross-origin',
  keywords: ['Oliver', 'Murray', 'Oliver Murray', 'Software Engineer', 'Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Oliver', url: 'https://omurray.dev' }],
  creator: 'Oliver Murray',
  publisher: 'Oliver Murray',

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  category: 'technology',
  openGraph: {
    title: 'Oliver Murray',
    siteName: 'Oliver Murray',
    description: 'Meet Oliver!',
    url: 'https://omurray.dev',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} ${fragmentMono.variable}`}>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>
        <PageContainer>
          <Navigation />
          {children}
        </PageContainer>
        <Analytics />
      </body>
    </html>
  )
}
