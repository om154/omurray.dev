import Link from 'next/link'
import { H1 } from 'src/components/shared/Text'

export default function NotFound() {
  return (
    <div>
      <H1>Oops! Page not found.</H1>
      <H1 className='mt-2'>
        <Link
          href='/'
          className='inline-block text-primary-600 decoration-primary-800 decoration-1 underline-offset-2 hover:decoration-primary-700 hover:text-primary-700 transition-colors duration-300 ease-in-out underline-offset-[6px] break-inside-avoid'
        >
          Go to home ⤴️
        </Link>
      </H1>
    </div>
  )
}
