import Navigation from 'src/components/Navigation'
import PageContainer from 'src/components/shared/PageContainer'
import { Inter, Lora } from 'next/font/google'
import { Metadata } from 'next'

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

export const metadata: Metadata = {
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
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>
        <PageContainer>
          <Navigation />
          {children}
        </PageContainer>
      </body>
    </html>
  )
}
