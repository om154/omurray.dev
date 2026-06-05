import AboutMe from "src/components/AboutMe"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About me',
  description:
    'Oliver Murray is a software engineer from Australia who moved to the US in 2021 to build products at early-stage startups.',
  alternates: {
    canonical: '/about',
  },
}

export default function Page() {
  return <AboutMe />
}
