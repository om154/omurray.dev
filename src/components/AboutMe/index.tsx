import Section from '../Section';
import { H2, P } from '../shared/Text';
import oliverImg from '../../assets/oliver.jpeg';
import ShippitPill from '../Pill/ShippitPill';
import AccenturePill from '../Pill/AccenturePill';
import AboutMeHero from '../Hero/AboutMe';

function calculateAge(birthday : string) {
  const dateOfBirth = new Date(birthday);
  const monthDiff = Date.now() - dateOfBirth.getTime();
  const ageDate = new Date(monthDiff);

  const year = ageDate.getUTCFullYear();
  const age = Math.abs(year - 1970);
  return age;
}

const AboutMe = () => (
  <Section alignTop className="bg-primary-600 text-neutral-100">
    <div className="box-border w-full mx-auto xl:max-w-5xl">
      <div className="text-center">
        <H2 className="mt-0 mb-2 font-bold">About Me</H2>
      </div>
      <AboutMeHero imgPath={oliverImg}>
        <P>
          I&apos;m a
          {' '}
          {calculateAge(process.env.REACT_APP_DATE_OF_BIRTH!)}
          {' '}
          year old Software Engineer currently living in Melbourne, Australia.
          I work in one of the Engineering Squads at
          {' '}
          <a className="no-underline hover:underline" href="https://www.shippit.com/" target="_blank" rel="noreferrer">Shippit</a>
          {' '}
          - our mission is to build
          the network that brings people & goods together in the leanest way possible.
        </P>
        <P className="mt-2">
          Prior to that, I spent time working at
          {' '}
          <a className="no-underline hover:underline" href="https://www.accenture.com/" target="_blank" rel="noreferrer">Accenture</a>
          {' '}
          building large-scale web applications to help enterprise clients manage
          & analyse their data.
        </P>
        <div className="flex flex-col items-center my-4 space-x-2 md:my-6 lg:space-x-0 lg:flex-row lg:justify-around">
          <ShippitPill className="my-1 lg:m-0" />
          <AccenturePill className="my-1 lg:my-0 lg:ml-1" />
        </div>
        <P>
          In my spare time I like to go running, cycling and enjoy dining out at some of
          Melbourne&apos;s great cafes, bars & restaurants (when I can). In the mornings,
          you&apos;re likely to find me drinking coffee, and in the evenings sharing a
          bottle of wine over a meal with friends 😁
        </P>
      </AboutMeHero>
    </div>
  </Section>
);

export default AboutMe;
