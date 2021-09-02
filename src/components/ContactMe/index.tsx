import Section from '../Section';
import { H2, P } from '../shared/Text';
import EmailPill from '../Pill/EmailPill';

const ContactMe = () => (
  <Section className="text-white bg-primary-600">
    <div className="box-border w-full px-4 mx-auto xl:max-w-5xl">
      <div className="text-left">
        <H2 className="mt-0 mb-2 font-bold">Contact Me</H2>
      </div>
      <P>
        Want to chat about an idea? Or better, if have a wine or coffee recommendation... 👀
      </P>
      <div className="flex justify-center mt-4">
        <EmailPill />
      </div>
    </div>
  </Section>
);

export default ContactMe;
