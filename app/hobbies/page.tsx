import Hobbies from "src/components/Hobbies"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hobbies',
  description:
    "What Oliver gets up to outside of work - running and hiking, making coffee, natural wine, and sports.",
  alternates: {
    canonical: '/hobbies',
  },
}

export default function Page() {
  return <Hobbies />
}
