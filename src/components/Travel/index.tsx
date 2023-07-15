'use client'

import Section from '../Section';
import AnimateDown from '../animations/AnimateDown';
import { H2, P } from '../shared/Text';
import { TravelLocation, travelData } from './travelData';

interface TravelCardProps {
  location: TravelLocation
  index: number
}

const TravelCard = ({ location, index }: TravelCardProps) => {
  const { city, state, stateAbbreviation, country, countryAbbreviation, countryFlagEmoji, arrivalDateTime } = location

  return (
    <AnimateDown
      key={`travel-grid-item-${city}`}
      className='flex flex-col justify-between p-3 transition-colors duration-200 ease-in-out rounded-lg aspect-square bg-neutral-100 hover:bg-neutral-300'
      delay={(index + 1) * .02}
    >
      {countryFlagEmoji && <div className='text-[32px] select-none'>{countryFlagEmoji}</div>}
      <div>
        <div>{city},</div>
        <div>{country}</div>
      </div>
    </AnimateDown>
  )
}

const Travel = () => (
  <Section>
    <div className="box-border w-full">
      <div className="mb-2 text-left">
        <H2>Adventures</H2>
      </div>
      <div className="box-border w-full">
        <P>
          Over the last few years I've visited:
          <div className='grid grid-cols-2 gap-4 mt-2 sm:grid-flow-row-dense md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8'>
            {travelData.map((l, i) => <TravelCard location={l} index={i} />)}
            <AnimateDown
              key={`travel-grid-item-left-aus`}
              className='flex flex-col justify-between p-3 transition-colors duration-200 ease-in-out rounded-lg aspect-square bg-neutral-100 hover:bg-neutral-300'
              delay={(travelData.length + 1) * .02}
            >
              <div className='text-[32px] select-none'>✈️</div>
              <div>
                <div>Left Melbourne!</div>
              </div>
            </AnimateDown>
          </div>
        </P>
      </div>
    </div>
  </Section>
);

export default Travel;
