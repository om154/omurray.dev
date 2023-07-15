'use client'

import Link from 'next/link';
import Section from '../Section';
import { H2, H3, P } from '../shared/Text';
import ShippitPill from '../Pill/ShippitPill';
import AccenturePill from '../Pill/AccenturePill';
import AboutMeHero from '../Hero/AboutMe';
import GlimpsePill from '../Pill/GlimpsePill';
import TwinePill from '../Pill/TwinePill';
import ContactLinks from '../Navigation/ContactLinks';
import aboutMeImg from 'public/static/img/oliver.jpeg'
import AnimateDown from '../animations/AnimateDown';
import { ReactNode } from 'react';

export function calculateAge(birthday: string) {
  const splitDate = birthday.split('-');
  const birthYear = Number(splitDate[2]);
  const birthMonth = Number(splitDate[1]);
  const birthDay = Number(splitDate[0]);

  const dateOfBirth = new Date(birthYear, birthMonth, birthDay);
  const monthDiff = Date.now() - dateOfBirth.getTime();
  const ageDate = new Date(monthDiff);

  const year = ageDate.getUTCFullYear();
  const age = Math.abs(year - 1970);
  return age;
}

interface AboutMeCardProps {
  index: number
  content: ReactNode
  Pill: ReactNode
}

const AboutMeCard = ({ index, content, Pill }: AboutMeCardProps) => (
  <AnimateDown delay={.1 + (index * .1)} className='flex flex-col justify-between p-5 font-sans transition-colors duration-200 ease-in-out rounded-lg aspect-squar bg-neutral-100 hover:bg-neutral-200'>
    <P>
      {content}
    </P>
    <div className="flex flex-col items-center mt-3 space-x-2 lg:space-x-0 lg:flex-row lg:justify-around">
      {Pill}
    </div>
  </AnimateDown>
)

interface AboutMeCard {
  content: ReactNode
  Pill: ReactNode
}

const cards: AboutMeCard[] = [
  // twine
  {
    content: <>
      At twine we&apos;re focused on helping connect remote teams, and are fully remote ourselves!
      {' '}
      Our platform makes remote work fun & engaging by connecting employees at key moments such as onboarding, all hands and other events.
    </>,
    Pill: <TwinePill className="my-1 select-none lg:m-0" />
  },
  // Glimpse
  {
    content: <>
      I started out working on the problem of connection for remote teams at
      {' '}
      <Link className="inline-block decoration-[transparent] hover:decoration-primary-900 hover:text-primary-900" href="https://www.joinglimpse.com/" target="_blank" rel="noreferrer">Glimpse</Link>
      , but we teamed up when twine acquired us in early 2022.
    </>,
    Pill: <GlimpsePill className="mt-1 select-none lg:m-0" />
  },
  // Shippit
  {
    content: <>
      In the past I worked in Engineering at
      {' '}
      <Link className="decoration-[transparent] hover:decoration-primary-900 hover:text-primary-900" href="https://www.shippit.com/" target="_blank" rel="noreferrer">Shippit</Link>
      , a Sydney-based start-up
      creating the network that brings
      people & goods together in the leanest way possible.
    </>,
    Pill: <ShippitPill className="my-1 select-none lg:m-0" />
  },
  // Accenture
  {
    content: <>
      I also spent time at
      {' '}
      <Link className="decoration-[transparent] hover:decoration-primary-900 hover:text-primary-900" href="https://www.accenture.com/" target="_blank" rel="noreferrer">Accenture</Link>
      {' '}
      developing large-scale web
      applications to help their clients effectively capture, manage and analyze their data.
    </>,
    Pill: <AccenturePill className="my-1 select-none lg:my-0 lg:ml-1" />
  }
]

const AboutMe = () => (
  <Section alignTop>
    <div className="box-border w-full">
      <div className="mb-2 text-left">
        <H2>About me</H2>
      </div>
      <AboutMeHero imgSrc={aboutMeImg} animationDuration={.35}>
        <P>
          Hey 👋🏻 I&apos;m Oliver, a
          {process.env.NEXT_PUBLIC_DATE_OF_BIRTH && ` ${calculateAge(process.env.NEXT_PUBLIC_DATE_OF_BIRTH)} year old `}
          Software Engineer originally from Melbourne, Australia. I moved to the United States 🇺🇸 in 2021 and I'm now working on connecting remote teams at
          {' '}
          <Link className="decoration-[transparent] hover:decoration-primary-900 hover:text-primary-900" href="https://www.twine.us/" target="_blank" rel="noreferrer">twine</Link>
          !
        </P>
        <div className='flex flex-row justify-end w-full mt-2 md:hidden'>
          <ContactLinks />
        </div>
        <div className='w-full my-4 border-[0.5px] border-black border-opacity-20 border-solid'/>
        <div className="w-full text-left md:mt-2">
          <H3>Experience building software</H3>
        </div>
        <div className='grid grid-cols-1 gap-4 mt-4 sm:grid-flow-row-dense lg:grid-cols-2'>
          {cards.map((c, i) => (
            <AboutMeCard index={i} content={c.content} Pill={c.Pill} />
          ))}
        </div>
      </AboutMeHero>
    </div>
  </Section>
);

export default AboutMe;
