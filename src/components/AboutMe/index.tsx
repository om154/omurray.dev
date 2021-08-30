import Section from '../Section';
import { H2 } from '../shared/Text';
import oliverImg from '../../assets/oliver.jpeg';

function calculateAge(birthday : string) {
  const dateOfBirth = new Date(birthday);
  const monthDiff = Date.now() - dateOfBirth.getTime();
  const ageDate = new Date(monthDiff);

  const year = ageDate.getUTCFullYear();
  const age = Math.abs(year - 1970);
  return age;
}

const AboutMe = () => (
  <Section alignTop className="bg-purple-400 text-neutral-000">
    <div className="box-border w-full px-4 mx-auto">
      <div className="text-center">
        <H2 className="mt-0 mb-2 font-bold">About Me</H2>
      </div>
      <div className="flex flex-col mt-2 mb-2 md:mt-6 md:mb-6 md:justify-around md:flex-row">
        <div className="flex justify-center mt-2 mb-2 md:m-0">
          <img className="object-cover object-center w-48 md:w-72" src={oliverImg} alt="Oliver" />
        </div>
        <div className="flex flex-col justify-center mt-2 mb-2 md:m-0">
          <div className="md:w-72">
            <p className="text-sm leading-4 font-regular">
              I&apos;m a
              {' '}
              {calculateAge(process.env.REACT_APP_DATE_OF_BIRTH!)}
              {' '}
              year old Software Engineer currently living in Melbourne.
              I work in one of the Engineering Squads at
              {' '}
              <a className="no-underline text-neutral-100" href="https://www.shippit.com/" target="_blank" rel="noreferrer">Shippit</a>
              .
              Our mission is to build
              the network that brings people & goods together in the leanest way possible.
            </p>
            <p className="mt-2 text-sm leading-4 font-regular">
              In my spare time I like to go running, cycling and dining out at some of
              Melbourne&apos;s great cafes, bars & restaurants. In the mornings, you&apos;re likely
              to find me drinking coffee, and in the evenings sharing a bottle of natural
              wine with friends. I am also a big sports fan - AFL Football in particular.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default AboutMe;
