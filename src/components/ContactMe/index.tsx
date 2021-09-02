import Section from '../Section';
import { H2 } from '../shared/Text';
import EmailPill from '../Pill/EmailPill';

const ContactMe = () => (
  <Section className="bg-primary-600 text-white">
    <div className="box-border w-full px-4 mx-auto">
      <div className="text-left">
        <H2 className="mt-0 mb-2 font-bold">Contact Me</H2>
      </div>
      <p className="text-sm leading-4 font-regular md:text-md">
        Want to chat about an idea? Or better, if have a wine or coffee recommendation... 👀
      </p>
      <div className="flex justify-center mt-4">
        <EmailPill />
      </div>
    </div>
  </Section>
);

export default ContactMe;
