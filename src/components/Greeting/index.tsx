import Link from "next/link";
import Section from '../Section';
import { H1 } from '../shared/Text';

const Greeting = () => (
  <Section className="items-center h-full bg-transparent">
    <div className="box-border w-full max-w-5xl mx-auto text-left lg:px-4 text-primary-900">
      <H1 className="mt-0">
        Hey, my name is
        {' '}
        <span
          className="text-primary-600"
        >
          Oliver 👋🏻{' '}
        </span>
        <span className='inline-block break-inside-avoid'>Welcome to my website!</span>
        {' '}I&apos;m a{' '}
        <Link
          href='/about'
          className="inline-block text-primary-600 hover:underline underline-offset-4 decoration-primary-500 break-inside-avoid"
        >
          software engineer
        </Link> who loves building great products.
      </H1>
    </div>
    <div className="box-border w-full max-w-5xl mx-auto mt-6 text-left lg:px-4 text-primary-900">
      <H1 className="mt-0">
        In my spare time I enjoy{' '}
        <Link
          href='/interests'
          className="inline-block text-primary-600 hover:underline underline-offset-4 decoration-primary-500 break-inside-avoid"
        >running
        </Link> and <Link
          href='/interests'
          className="inline-block text-primary-600 hover:underline underline-offset-4 decoration-[rgb(110,163,71)] break-inside-avoid"
        >hiking ⛰️
        </Link><br/>In the morning, you can find me drinking <Link
          href='/interests'
          className="inline-block text-primary-600 hover:underline underline-offset-4 decoration-[rgb(80,62,51)] break-inside-avoid"
        >filter coffee ☕️</Link> or in the evening, <Link
          href='/interests'
          className="inline-block text-primary-600 hover:underline underline-offset-4 decoration-[rgb(255,139,44)] break-inside-avoid"
        >natural wine 🍊</Link>
      </H1>
    </div>
    <div className="box-border w-full max-w-5xl mx-auto mt-6 text-left lg:px-4 text-primary-900">
      <H1 className="mt-0">
        I travel a lot, so I also spend plenty of time exploring and meeting people in <Link
          href='/travel'
          className="inline-block text-primary-600 hover:underline underline-offset-4 decoration-[rgb(168,226,159)] break-inside-avoid"
        >new places 🌎</Link>
      </H1>
    </div>
  </Section>
);

export default Greeting;

// font - variation - settings: "opsz" 72, "SOFT" 50;
// letter - spacing: -.03em;
// }
