import Navigation from 'src/components/Navigation'
import PageContainer from 'src/components/shared/PageContainer'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧑🏼‍💻</text></svg>" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#197AEB" />
        <meta
          name="description"
          content="The personal website of Oliver Murray."
        />
        <title>Oliver Murray</title>
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
