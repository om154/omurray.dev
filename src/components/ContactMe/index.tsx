import Section from '../Section';
import { H2, P } from '../shared/Text';
import EmailPill from '../Pill/EmailPill';

const ContactMe = () => (
  <Section>
    <div className="box-border w-full">
      <div className="mb-2 text-left">
        <H2>Reach out</H2>
      </div>
      <div className="box-border w-full p-4 rounded-lg bg-neutral-100">
        <P>
          Want to chat about an idea? Or, I’ll always welcome a wine or coffee recommendation! 🍷
        </P>
        <div className="flex justify-start mt-4 md:mt-4">
          <EmailPill />
        </div>
      </div>
    </div>
  </Section>
);

export default ContactMe;
