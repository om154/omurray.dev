import AboutMe from "src/components/AboutMe"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About'
}

export default function Page() {
  return <AboutMe />
}
