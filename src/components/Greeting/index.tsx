import Button from '../Button';
import Section from '../Section';
import { H1 } from '../shared/Text';

const Greeting = () => (
  <Section fullScreen className="bg-white">
    <div className="box-border w-full px-4 mx-auto text-center text-gray-800 md:text-left">
      <H1 className="mt-0 font-bold">
        Hey there, my name is
        <span
          className="box-border ml-2 text-danger-400"
        >
          Oliver
        </span>
        . I&apos;m a
        software engineer who loves building great products.
      </H1>
      <div className="mt-3 text-xs tracking-tight md:text-sm font-regular">P.s. I also love great coffee &amp; natural wine 😄</div>
      <div className="flex justify-center mt-5 md:justify-start">
        <Button>
          Get to know me
        </Button>
      </div>
    </div>
  </Section>
);

export default Greeting;
