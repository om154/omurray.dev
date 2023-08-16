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

interface AboutMeCardProps extends AboutMeCard {
  index: number
}

const AboutMeCard = ({ index, content, stage, year, Pill }: AboutMeCardProps) => (
  <AnimateDown delay={.1 + (index * .1)} className='flex flex-col justify-between px-5 pt-3 pb-5 font-sans transition-colors duration-200 ease-in-out rounded-lg aspect-squar bg-neutral-100 hover:bg-neutral-200'>
    <div>
      <div className='mb-2 text-sm text-left text-neutral-600'>{year}</div>
      <P>
        {content}
      </P>
    </div>
    <div>
      {/* <div className='flex flex-row justify-between'> */}

        {stage ? <div className='mt-2 text-sm text-right text-neutral-600'>{stage}</div> : <div />}
      {/* </div> */}
      <div className="flex flex-col items-center mt-3 space-x-2 lg:space-x-0 lg:flex-row lg:justify-around">
        {Pill}
      </div>
    </div>
  </AnimateDown>
)

interface AboutMeCard {
  content: ReactNode
  year: string
  stage?: string
  Pill: ReactNode
}

const cards: AboutMeCard[] = [
  // twine
  {
    content: <>
      At <Link className="decoration-[transparent] hover:decoration-primary-900 hover:text-primary-900" href="https://www.twine.us/" target="_blank" rel="noreferrer">twine</Link>
      {' '}we build products to connect remote teams. Our platform has powered thousands of conversations!
      <div className='mt-1' />
      Our latest product -{' '}
      <Link className="decoration-[transparent] hover:decoration-primary-900 hover:text-primary-900" href="https://www.twine.us/ambient" target="_blank" rel="noreferrer">twine Ambient</Link>
      {' '}- is an AI Chief of Staff that summarizes, threads, and shares important context from meetings, Slack, and other sources from across your business.
    </>,
    year: '2022 - 2023',
    stage: 'Seed stage, Zoom Ventures',
    Pill: <TwinePill className="my-1 select-none lg:m-0" />
  },
  // Glimpse
  {
    content: <>
      At{' '}
      <Link className="inline whitespace-break-spaces decoration-[transparent] hover:decoration-primary-900 hover:text-primary-900" href="https://www.joinglimpse.com/" target="_blank" rel="noreferrer">Glimpse</Link>
      {' '}I joined 4 ex-Duke students as was the first external hire. I worked with the founders to define the platform architecture and shipped new features to scale and refine our video chat platform.
      {' '}
      <div className='mt-1 '/>
      I also lead the development of our Zoom app, which ultimately made us a target for acquisition.
    </>,
    year: '2021 - 2022',
    stage: 'Seed stage, Y Combinator',
    Pill: <GlimpsePill className="mt-1 select-none lg:m-0" />
  },
  // Shippit
  {
    content: <>
      I previously worked in Engineering at a Sydney-based start-up named
      {' '}
      <Link className="decoration-[transparent] hover:decoration-primary-900 hover:text-primary-900" href="https://www.shippit.com/" target="_blank" rel="noreferrer">Shippit</Link>.
      {' '}Their SaaS product helps streamline shipping & fulfilment for retailers.
    </>,
    year: '2020 - 2021',
    stage: 'Series B, Tiger Global',
    Pill: <ShippitPill className="my-1 select-none lg:m-0" />
  },
  // Accenture
  {
    content: <>
      At
      {' '}
      <Link className="decoration-[transparent] hover:decoration-primary-900 hover:text-primary-900" href="https://www.accenture.com/" target="_blank" rel="noreferrer">Accenture</Link>
      {' '}
      I worked on multiple projects developing large-scale enterprise
      applications to help clients effectively capture, manage and analyze data from dozens of sources.
    </>,
    year: '2018 - 2020',
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
          Software Engineer originally from Melbourne, Australia. I moved to the United States 🇺🇸 in 2021 and I'm now working on the problem of connection & context for remote teams at
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
            <AboutMeCard index={i} content={c.content} Pill={c.Pill} stage={c.stage} year={c.year} />
          ))}
        </div>
      </AboutMeHero>
    </div>
  </Section>
);

export default AboutMe;
