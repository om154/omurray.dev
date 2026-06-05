import Travel from "src/components/Travel"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travel',
  description:
    "Places Oliver has travelled to around the world, and where he's headed next.",
  alternates: {
    canonical: '/travel',
  },
}

export default function Page() {
  return <Travel />
}
