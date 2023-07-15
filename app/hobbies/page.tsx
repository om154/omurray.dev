import Hobbies from "src/components/Hobbies"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hobbies'
}

export default function Page() {
  return <Hobbies />
}
