import Link from "next/link";
import Section from '../Section';
import { H1 } from '../shared/Text';
import AnimateDown from "../animations/AnimateDown";
import { PartyPopper } from "lucide-react";

const Greeting = () => (
  <AnimateDown className='flex flex-col h-full'>
    <div className="flex flex-row justify-start w-full lg:px-4">
      <div className="flex flex-row gap-4 px-4 py-3 border border-solid rounded-md shadow-md border-primary-800/50 lg:px-4 text-primary-900 bg-sky-blue-500/25">
        <div className="flex flex-col justify-center">
          <PartyPopper width={32} height={32} />
        </div>
        <div>
          <h2 className="text-lg font-semiBold">Check out my new blog!</h2>
          <p className="mr-1 text-md text-regular">You can read my first post on <a className="underline decoration-sky-blue-900" href='https://omurray.blog'>omurray.blog ↗</a></p>
        </div>
      </div>
    </div>
    <Section className="items-center mt-6 mb-2 bg-transparent">
      <div className="box-border w-full max-w-5xl mx-auto text-left lg:px-4 text-primary-900">
        <H1 className="mt-0">
          Hey, my name is{' '}
          <span className="text-primary-600">Oliver 👋🏻{' '}</span>
          <span className='inline-block break-inside-avoid'>Welcome to my website!</span>
          {' '}I&apos;m a{' '}
          <Link
            href='/about'
            className='inline-block text-primary-600 decoration-[transparent] hover:decoration-primary-700 hover:text-primary-700 transition-colors duration-300 ease-in-out underline-offset-[6px] break-inside-avoid'
          >
            software engineer
          </Link>
          {' '}who loves building great products.
        </H1>
      </div>
      <div className="box-border w-full max-w-5xl mx-auto mt-6 text-left lg:px-4 text-primary-900">
        <H1 className="mt-0">
          In my spare time I enjoy{' '}
          <Link
            href='/hobbies'
            className='inline-block text-primary-600 decoration-[transparent] hover:decoration-primary-700 hover:text-primary-700 transition-colors duration-300 ease-in-out underline-offset-[6px] break-inside-avoid'
          >
            running
          </Link>
          {' '}and{' '}
          <Link
            href='/hobbies'
            className='inline-block text-primary-600 decoration-[transparent] hover:decoration-[rgb(110,163,71)] hover:text-[rgb(110,163,71)] transition-colors duration-300 ease-in-out underline-offset-[6px] break-inside-avoid'
          >
            hiking ⛰️
          </Link>
          {' '}In the morning, you can find me drinking{' '}
          <Link
            href='/hobbies'
            className='inline-block text-primary-600 decoration-[transparent] hover:decoration-[rgb(80,62,51)] hover:text-[rgb(80,62,51)] transition-colors duration-300 ease-in-out underline-offset-[6px] break-inside-avoid'
          >
            filter coffee ☕️
          </Link>
          {' '}or in the evening,{' '}
          <Link
            href='/hobbies'
            className='inline-block text-primary-600 decoration-[transparent] hover:decoration-[rgb(243,119,32)] hover:text-[rgb(243,119,32)] transition-colors duration-300 ease-in-out underline-offset-[6px] break-inside-avoid'
          >
            natural wine 🍊
          </Link>
        </H1>
      </div>
      <div className="box-border w-full max-w-5xl mx-auto mt-6 text-left lg:px-4 text-primary-900">
        <H1 className="mt-0">
          I travel a lot, so I spend plenty of time exploring and meeting people in{' '}
          <Link
            href='/travel'
            className='inline-block text-primary-600 decoration-[transparent] hover:decoration-[rgb(34,85,192)] hover:text-[rgb(34,85,192)] transition-colors duration-300 ease-in-out underline-offset-[6px] break-inside-avoid'
          >
            new places 🌎
          </Link>
        </H1>
      </div>
    </Section>
  </AnimateDown>
);

export default Greeting;
