import Interests from "src/components/Interests"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interests'
}

export default function Page() {
  return <Interests />
}
