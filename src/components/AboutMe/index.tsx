import Section from '../Section';
import { H2, P } from '../shared/Text';
import oliverImg from '../../assets/oliver.jpeg';
import ShippitPill from '../Pill/ShippitPill';
import AccenturePill from '../Pill/AccenturePill';
import AboutMeHero from '../Hero/AboutMe';
import GlimpsePill from '../Pill/GlimpsePill';

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

const AboutMe = () => (
  <Section alignTop className="bg-primary-600 text-neutral-100">
    <div className="box-border w-full mx-auto xl:max-w-5xl">
      <div className="text-center">
        <H2 className="mt-0 font-bold">About Me</H2>
      </div>
      <AboutMeHero imgPath={oliverImg}>
        <P>
          Hey 👋🏻 I&apos;m Oliver, a
          {process.env.REACT_APP_DATE_OF_BIRTH && ` ${calculateAge(process.env.REACT_APP_DATE_OF_BIRTH)} year old `}
          Software Engineer from Melbourne, Australia.
          I am working to make video chat more social at
          {' '}
          <a className="no-underline hover:underline" href="https://www.joinglimpse.com/" target="_blank" rel="noreferrer">Glimpse</a>
          .
          We intend to make online events and socialising seamless and enjoyable.
          Just think about what it&apos;s like trying to socialise on a Zoom call with 100 people,
          or worse, 1,000! We&apos;re addressing this.
        </P>
        <div className="flex flex-col items-center my-3 space-x-2 md:my-6 lg:space-x-0 lg:flex-row lg:justify-around">
          <GlimpsePill className="my-1 lg:m-0" />
        </div>
        <P>
          Previously I worked in Engineering at
          {' '}
          <a className="no-underline hover:underline" href="https://www.shippit.com/" target="_blank" rel="noreferrer">Shippit</a>
          , a Sydney-based start-up
          creating the network that brings
          people & goods together in the leanest way possible.
          I also spent time at
          {' '}
          <a className="no-underline hover:underline" href="https://www.accenture.com/" target="_blank" rel="noreferrer">Accenture</a>
          {' '}
          developing large-scale web
          applications to help their clients effectively capture, manage and analyse their data.
        </P>
        <div className="my-3 md:my-6">
          <div className="flex flex-col items-center space-x-2 space-y-2 lg:space-y-0 lg:space-x-0 lg:flex-row lg:justify-around">
            <ShippitPill className="my-1 lg:m-0" />
            <AccenturePill className="my-1 lg:my-0 lg:ml-1" />
          </div>
        </div>
        <P>
          In my spare time I like to travel and I particularly enjoy running and dining out at
          great cafes & restaurants. In the mornings you’ll find me
          drinking coffee, and in the evenings sharing a bottle of wine over a meal with friends.
        </P>
      </AboutMeHero>
    </div>
  </Section>
);

export default AboutMe;
