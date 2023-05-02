import Section from '../Section';
import { H1 } from '../shared/Text';
import { Link } from 'react-router-dom';

const Greeting = () => (
  <Section className="items-center h-full rounded-lg bg-neutral-300">
    <div className="box-border w-full max-w-5xl px-4 mx-auto text-center text-primary-900 md:text-left">
      <H1 className="mt-0">
        Hey, my name is
        {' '}
        <span
          className="text-primary-600"
        >
          Oliver
        </span>
        {' '}👋🏻 Welcome to my website!{' '}
        I&apos;m a{' '}
        <Link
          to='/about'
          className="text-primary-600"
        >
          software engineer
        </Link> who loves building great products.
      </H1>
    </div>
    <div className="box-border w-full max-w-5xl px-4 mx-auto mt-6 text-center text-primary-900 md:text-left">
      <H1 className="mt-0">
        In my spare time I enjoy{' '}
        <Link
          to='/interests'
          className="text-primary-600"
        >running
        </Link> and <Link
          to='/interests'
          className="text-primary-600"
        >hiking
        </Link> ⛰️ In the morning, you can find me drinking <Link
          to='/interests'
          className="text-primary-600"
        >filter coffee</Link> ☕️ or in the evening, <Link
          to='/interests'
          className="text-primary-600"
        >natural wine</Link> 🍊
      </H1>
    </div>
    <div className="box-border w-full max-w-5xl px-4 mx-auto mt-6 text-center text-primary-900 md:text-left">
      <H1 className="mt-0">
        I travel a lot, so I also spend plenty of time exploring and meeting people in <Link
          to='/interests'
          className="text-primary-600"
        >new places</Link> 🌎
      </H1>
    </div>
  </Section>
);

export default Greeting;

// font - variation - settings: "opsz" 72, "SOFT" 50;
// letter - spacing: -.03em;
// }
