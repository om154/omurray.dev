import Section from '../Section';
import { P } from '../shared/Text';
import EmailPill from '../Pill/EmailPill';
import Navigation from '../Navigation';
import PageContainer from '../shared/PageContainer';

const ContactMe = () => (
  <PageContainer>
    <Navigation />
    <Section>
      <div className="box-border w-full">
        <div className="text-left">
          <h2 className="font-serif text-3xl font-extralight text-neutral-900 md:text-8xl">Reach out</h2>
        </div>
        <div className="box-border w-full pt-4 ">
          <P>
            Want to chat about an idea? Or, I’ll always welcome a wine or coffee recommendation! 🍷
          </P>
          <div className="flex justify-start mt-4 md:mt-8">
            <EmailPill />
          </div>
        </div>
      </div>
    </Section>
  </PageContainer>
);

export default ContactMe;
