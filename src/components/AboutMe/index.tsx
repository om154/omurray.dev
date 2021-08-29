import Section from '../Section';
import { H2 } from '../shared/Text';

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
      <p className="text-sm leading-4 font-regular">
        I&apos;m a
        {' '}
        {calculateAge(process.env.REACT_APP_DATE_OF_BIRTH!)}
        {' '}
        year old Software Engineer living in Melbourne.
        I am currently working for Accenture and I spend most of my day developing
        web applications using React.
        In my spare time I like to go running, cycling and dining out at some of
        Melbourne&apos;s great cafes, bars & restaurants. In the mornings, you&apos;re likely
        to find me drinking coffee, and in the evenings sharing a bottle of natural
        wine with friends. I am also a big sports fan - AFL Football in particular.
      </p>
    </div>
  </Section>
);

export default AboutMe;
