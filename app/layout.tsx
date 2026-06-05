import Navigation from 'src/components/Navigation'
import PageContainer from 'src/components/shared/PageContainer'
import JsonLd from 'src/components/seo/JsonLd'
import { personSchema, websiteSchema } from 'src/lib/structuredData'
import { Fragment_Mono, Inter, Lora } from 'next/font/google'
import { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import './global.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
})

const fragmentMono = Fragment_Mono({
  subsets: ['latin'],
  display: 'swap',
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

const description =
  'Oliver Murray is a software engineer from Australia, building products at early-stage startups in the US. Explore his projects, travels, and hobbies.'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === "production" ? 'https://omurray.dev' : 'http://localhost:3000'),
  title: {
    template: 'Oliver Murray | %s',
    default: 'Oliver Murray',
  },
  description,
  alternates: {
    canonical: '/',
  },
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
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  category: 'technology',
  openGraph: {
    title: 'Oliver Murray',
    siteName: 'Oliver Murray',
    description,
    url: 'https://omurray.dev',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oliver Murray',
    description,
    creator: '@OliMurray7',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
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
        <JsonLd data={personSchema()} />
        <JsonLd data={websiteSchema()} />
        <a
          href="#main-content"
          className="absolute left-2 top-2 z-50 -translate-y-20 rounded bg-white px-4 py-2 text-primary-900 shadow transition-transform focus:translate-y-0"
        >
          Skip to Content
        </a>
        <PageContainer>
          <Navigation />
          <main id="main-content">{children}</main>
        </PageContainer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
