import Section from '../Section';
import { P } from '../shared/Text';
import Navigation from '../Navigation';
import PageContainer from '../shared/PageContainer';
import EmailPill from '../Pill/EmailPill';

const Travel = () => (
  <PageContainer>
    <Navigation />
    <Section>
      <div className="box-border w-full">
        <div className="text-left">
          <h2 className="font-serif text-3xl font-extralight text-neutral-900 md:text-8xl">Adventures!</h2>
        </div>
        <div className="box-border w-full pt-4 ">
          <P>
            Over the last few years I've visited the following places, in most cases for months at a time:
            <ul className='mx-8 my-4 list-disc'>
              <li>Austin, TX 🇺🇸</li>
              <li>Tampa, FL 🇺🇸</li>
              <li>Tucson, AZ 🇺🇸</li>
              <li>Puerto Rico 🇺🇸</li>
              <li>San Diego, CA 🇺🇸</li>
              <li>Los Angeles, CA 🇺🇸</li>
              <li>Santa Barbara, CA 🇺🇸</li>
              <li>Santa Cruz, CA 🇺🇸</li>
              <li>San Francisco, CA 🇺🇸</li>
              <li>Las Vegas, NV 🇺🇸</li>
              <li>Williams & Flagstaff, AZ 🇺🇸</li>
              <li>CDMX, Mexico 🇲🇽</li>
              <li>Oaxaca, Mexico 🇲🇽</li>
              <li>Portland, OR 🇺🇸</li>
              <li>Bend, OR 🇺🇸</li>
              <li>Vancouver, BC 🇨🇦</li>
              <li>Seattle, WA 🇺🇸</li>
              <li>Boulder, CO 🇺🇸</li>
              <li>Auckland, New Zealand 🇳🇿</li>
              <li>Queenstown, New Zealand 🇳🇿</li>
              <li>Melbourne, Australia 🇦🇺</li>
              <li>Tokyo, Japan 🇯🇵</li>
              <li>Sapporo, Japan 🇯🇵</li>
              <li>Istanbul, Türkiye 🇹🇷</li>
              <li>Cape Town, South Africa 🇿🇦</li>
            </ul>
          </P>
          <P>Expect to see more about my travels here in the near future!</P>
          <P className='mb-4'>Where should I go next? Let me know!</P>
          <EmailPill />
        </div>
      </div>
    </Section>
  </PageContainer>
);

export default Travel;
