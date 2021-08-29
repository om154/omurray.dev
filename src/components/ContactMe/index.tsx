import Section from '../Section';
import { H2 } from '../shared/Text';

const ContactMe = () => (
  <Section className="bg-purple-400 text-neutral-000">
    <div className="box-border w-full px-4 mx-auto">
      <div className="text-left">
        <H2 className="mt-0 mb-2 font-bold">Contact Me</H2>
      </div>
      <p className="text-sm leading-4 font-regular">
        Want to chat about an idea? Or better, do you have a wine or coffee recommendation? 👀
      </p>
      <p className="text-sm leading-4 font-regular">
        You can contact me at 📫
        {' '}
        <a href={`mailto:${process.env.REACT_APP_USER_EMAIL_ADDRESS}`}>{process.env.REACT_APP_USER_EMAIL_ADDRESS}</a>
      </p>

    </div>
  </Section>
);

export default ContactMe;
