import Button from '../Button';
import Section from '../Section';

const Greeting = () => (
  <Section className="bg-white">
    <div className="box-border w-full px-4 mx-auto text-center text-gray-800 md:text-left">
      <h1
        className="box-border mt-0 text-2xl font-bold leading-tight tracking-tight opacity-100 md:text-5xl"
      >
        Hey there, my name is
        <span
          className="box-border ml-2 text-danger-400"
        >
          Oliver
        </span>
        . I&apos;m a
        software engineer who loves building great products.
      </h1>
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
