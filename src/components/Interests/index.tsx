import Section from '../Section';
import { H2 } from '../shared/Text';

const Interests = () => (
  <Section alignTop className="bg-white text-neutral-800">
    <div className="box-border w-full px-4 mx-auto">
      <div className="text-center">
        <H2 className="mt-0 mb-2 font-bold">Interests</H2>
      </div>
      <p className="text-sm leading-4 font-regular">
        Some of my hobbies & interests are listed below
      </p>
      <ul>
        <li>Coffee</li>
        <li>Natural wine</li>
        <li>Running</li>
        <li>More to come...</li>
      </ul>
    </div>
  </Section>
);

export default Interests;
