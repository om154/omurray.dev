import Section from '../Section';
import { H1 } from '../shared/Text';

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
        <span
          className="text-primary-600"
        >
          software engineer
        </span> who loves building great products.
      </H1>
    </div>
    <div className="box-border w-full max-w-5xl px-4 mx-auto mt-6 text-center text-primary-900 md:text-left">
      <H1 className="mt-0">
        In my spare time I enjoy{' '}
        <span
          className="text-primary-600"
        >running
        </span> and <span
          className="text-primary-600"
        >hiking
        </span> ⛰️ In the morning, you can find me drinking <span
          className="text-primary-600"
        >filter coffee</span> ☕️ or in the evening, <span
          className="text-primary-600"
        >natural wine</span> 🍊
      </H1>
    </div>
    <div className="box-border w-full max-w-5xl px-4 mx-auto mt-6 text-center text-primary-900 md:text-left">
      <H1 className="mt-0">
        I travel a lot, so I also spend plenty of time exploring and meeting people in <span
          className="text-primary-600"
        >new places</span> 🌎
      </H1>
    </div>
  </Section>
);

export default Greeting;

// font - variation - settings: "opsz" 72, "SOFT" 50;
// letter - spacing: -.03em;
// }
