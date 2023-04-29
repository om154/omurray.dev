import Section from '../Section';
import { H2, P } from '../shared/Text';
import EmailPill from '../Pill/EmailPill';
import Navigation from '../Navigation';
import PageContainer from '../shared/PageContainer';

const ContactMe = () => (
  <PageContainer>
    <Navigation />
    <Section>
      <div className="box-border w-full">
        <div className="text-left">
          <h2 className="font-serif text-6xl font-extralight text-neutral-900 md:text-8xl">Contact me</h2>
        </div>
        <div className="box-border w-full px-4 pt-10">
          <P>
            Want to chat about an idea? Or, I’ll always welcome a wine or coffee recommendation! 🍷
          </P>
          <div className="flex justify-start mt-8">
            <EmailPill />
          </div>
        </div>
      </div>
    </Section>
  </PageContainer>
);

export default ContactMe;
