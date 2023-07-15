import Navigation from 'src/components/Navigation'
import PageContainer from 'src/components/shared/PageContainer'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { Metadata } from 'next'

import './global.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const fraunces = localFont({
  src: '../public/static/fonts/Fraunces[SOFT,WONK,opsz,wght].woff2',
  display: 'block',
  variable: '--font-fraunces',
})

export const metadata: Metadata = {
  title: {
    template: 'Oliver Murray | %s',
    default: 'Oliver Murray',
  },
  description: 'The personal website of Oliver Murray.',
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Oliver', 'Murray', 'Oliver Murray', 'Software Engineer', 'Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Oliver', url: 'https://omurray.dev' }],
  creator: 'Oliver Murray',
  publisher: 'Oliver Murray',
  colorScheme: 'light',
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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0074DC' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  category: 'technology',
  openGraph: {
    title: 'Oliver Murray',
    description: 'The personal website of Oliver Murray.',
    url: 'https://omurray.dev',
    siteName: 'Oliver',
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
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>
        <PageContainer>
          <section>
            <Navigation />
          </section>
          <section>
            {children}
          </section>
        </PageContainer>
      </body>
    </html>
  )
}
