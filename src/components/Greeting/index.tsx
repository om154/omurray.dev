import Section from '../Section';
import { H1 } from '../shared/Text';
import AnimateDown from "../animations/AnimateDown";
import AccentLink from '../shared/AccentLink';

const Greeting = () => (
  <AnimateDown className='flex flex-col h-full'>
    <Section className="items-center my-2 bg-transparent">
      <div className="box-border w-full max-w-5xl mx-auto text-left lg:px-4 text-primary-900">
        <H1 className="mt-0">
          Hey, my name is{' '}
          <span className="text-primary-600">Oliver 👋🏻{' '}</span>
          <span className='inline-block break-inside-avoid'>Welcome to my website!</span>
          {' '}I&apos;m a{' '}
          <AccentLink href='/about'>software engineer</AccentLink>
          {' '}who loves building great products.
        </H1>
      </div>
      <div className="box-border w-full max-w-5xl mx-auto mt-6 text-left lg:px-4 text-primary-900">
        <H1 as="p" className="mt-0">
          In my spare time I enjoy{' '}
          <AccentLink href='/hobbies'>running</AccentLink>
          {' '}and{' '}
          <AccentLink href='/hobbies' accentColor='rgb(110,163,71)'>hiking ⛰️</AccentLink>
          {' '}In the morning, you can find me drinking{' '}
          <AccentLink href='/hobbies' accentColor='rgb(80,62,51)'>filter coffee ☕️</AccentLink>
          {' '}or in the evening,{' '}
          <AccentLink href='/hobbies' accentColor='rgb(243,119,32)'>natural wine 🍊</AccentLink>
        </H1>
      </div>
      <div className="box-border w-full max-w-5xl mx-auto mt-6 text-left lg:px-4 text-primary-900">
        <H1 as="p" className="mt-0">
          I travel a lot, so I spend plenty of time exploring and meeting people in{' '}
          <AccentLink href='/travel' accentColor='rgb(34,85,192)'>new places 🌎</AccentLink>
        </H1>
      </div>
    </Section>
  </AnimateDown>
);

export default Greeting;
