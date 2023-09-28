import AboutMe from "src/components/AboutMe"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About me'
}

export default function Page() {
  return <AboutMe />
}
