import Section from '../Section';
import { P } from '../shared/Text';
import EmailPill from '../Pill/EmailPill';

interface TravelLocation {
  name: string
  emoji: string
}

const travelLocations: TravelLocation[] = [
  { name: 'Left Australia! Oct 5, 2021', emoji: '✈️' },
  { name: 'Austin, TX', emoji: '🇺🇸' },
  { name: 'Tampa, FL', emoji: '🇺🇸' },
  { name: 'Tucson, AZ', emoji: '🇺🇸' },
  { name: 'Puerto Rico', emoji: '🇺🇸' },
  { name: 'San Diego, CA', emoji: '🇺🇸' },
  { name: 'Los Angeles, CA', emoji: '🇺🇸' },
  { name: 'Santa Barbara, CA', emoji: '🇺🇸' },
  { name: 'Santa Cruz, CA', emoji: '🇺🇸' },
  { name: 'San Francisco, CA', emoji: '🇺🇸' },
  { name: 'Las Vegas, NV', emoji: '🇺🇸' },
  { name: 'Williams & Flagstaff, AZ', emoji: '🇺🇸' },
  { name: 'CDMX, Mexico', emoji: '🇲🇽' },
  { name: 'Oaxaca, Mexico', emoji: '🇲🇽' },
  { name: 'Portland, OR', emoji: '🇺🇸' },
  { name: 'Bend, OR', emoji: '🇺🇸' },
  { name: 'Vancouver, BC', emoji: '🇨🇦' },
  { name: 'Seattle, WA', emoji: '🇺🇸' },
  { name: 'Boulder, CO', emoji: '🇺🇸' },
  { name: 'Auckland, New Zealand', emoji: '🇳🇿' },
  { name: 'Queenstown, New Zealand', emoji: '🇳🇿' },
  { name: 'Melbourne, Australia', emoji: '🇦🇺' },
  { name: 'Tokyo, Japan', emoji: '🇯🇵' },
  { name: 'Sapporo, Japan ', emoji: '🇯🇵' },
  { name: 'Niseko, Japan ', emoji: '🇯🇵' },
  { name: 'Cape Town, South Africa', emoji: '🇿🇦' },
  { name: 'Kruger National Park, South Africa', emoji: '🇿🇦' },
  { name: 'Istanbul, Türkiye', emoji: '🇹🇷' },
  { name: 'Bordeaux, France', emoji: '🇫🇷' },
  { name: 'Paris, France', emoji: '🇫🇷' },
  { name: 'Lisbon, Portugal', emoji: '🇵🇹' },
  { name: 'Cascais, Portugal', emoji: '🇵🇹' },
  { name: 'Ericeira, Portugal', emoji: '🇵🇹' },
  { name: 'Oslo, Norway', emoji: '🇳🇴' },
  { name: 'Lofoten, Norway', emoji: '🇳🇴' },
  { name: 'Bergen, Norway', emoji: '🇳🇴' },
  // { name: 'Rome, Italy', emoji: '🇮🇹' },
  // { name: 'Berlin, Germany', emoji: '🇩🇪' },
  // { name: 'Copenhagen, Denmark', emoji: '🇩🇰' },
  // { name: 'Stockholm, Sweden', emoji: '🇸🇪' },
];

const Travel = () => (
  <Section>
    <div className="box-border w-full">
      <div className="mb-2 text-left">
        <h2 className="font-serif text-3xl font-extralight text-neutral-900 md:text-8xl selection:bg-primary-700 selection:text-white">Adventures</h2>
      </div>
      <div className="box-border w-full">
        <P>
          Over the last few years I've visited:
          <div className='grid grid-cols-2 gap-4 mt-2 sm:grid-flow-row-dense md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8'>
            {travelLocations.reverse().map(l =>
              <div className='flex flex-col justify-between p-3 rounded-lg aspect-square bg-neutral-100'>
                <div className='text-[32px] select-none'>{l.emoji}</div>
                <div>{l.name}</div>
              </div>
            )}
          </div>
        </P>
      </div>
    </div>
  </Section>
);

export default Travel;
