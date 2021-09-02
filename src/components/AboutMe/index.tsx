import Section from '../Section';
import { H2 } from '../shared/Text';
import oliverImg from '../../assets/oliver.jpeg';
import ShippitPill from '../Pill/ShippitPill';
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
    <div className="box-border w-full mx-auto">
      <div className="text-center">
        <H2 className="mt-0 mb-2 font-bold">About Me</H2>
      </div>
      <AboutMeHero imgPath={oliverImg}>
        <p className="leading-4 text-md md:leading-6 md:text-md lg:text-lg font-regular">
          I&apos;m a
          {' '}
          {calculateAge(process.env.REACT_APP_DATE_OF_BIRTH!)}
          {' '}
          year old Software Engineer currently living in Melbourne.
          I work in one of the Engineering Squads at
          {' '}
          <a className="no-underline" href="https://www.shippit.com/" target="_blank" rel="noreferrer">Shippit</a>
          . Our mission is to build
          the network that brings people & goods together in the leanest way possible.
        </p>
        <p className="mt-2 leading-4 text-md md:leading-6 md:text-md lg:text-lg font-regular">
          In my spare time I like to go running, cycling and dining out at some of
          Melbourne&apos;s great cafes, bars & restaurants. In the mornings, you&apos;re likely
          to find me drinking coffee, and in the evenings sharing a bottle of natural
          wine with friends.
        </p>
        <div className="flex justify-center mt-4">
          <ShippitPill />
        </div>
      </AboutMeHero>
    </div>
  </Section>
);

export default AboutMe;
