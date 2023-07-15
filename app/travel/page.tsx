import Travel from "src/components/Travel"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travel'
}

export default function Page() {
  return <Travel />
}
