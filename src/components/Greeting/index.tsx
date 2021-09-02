import Section from '../Section';
import { H1 } from '../shared/Text';

const Greeting = () => (
  <Section fullScreen className="items-center bg-neutral-300">
    <div className="box-border w-full max-w-5xl px-4 mx-auto text-center text-primary-900 md:text-left">
      <H1 className="mt-0 font-bold">
        Hey, my name is
        {' '}
        <span
          className="text-primary-600"
        >
          Oliver
        </span>
        .
      </H1>
      <H1 className="mt-0 font-bold">
        I&apos;m a
        software engineer who loves building great products.
      </H1>
    </div>
  </Section>
);

export default Greeting;
