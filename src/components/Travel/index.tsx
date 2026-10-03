import { PlaneTakeoffIcon } from 'lucide-react';
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

  const dateTime = new Date(arrivalDateTime)
  const formattedDateTime = dateTime.toLocaleDateString('default', { month: 'long', year: 'numeric' })

  return (
    <AnimateDown
      delay={(index + 1) * .02}
      className='flex flex-col justify-between self-stretch w-full min-w-0 p-3 transition-colors duration-200 ease-in-out rounded-lg aspect-square bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300'
    >
      {countryFlagEmoji && <div className='text-[2.25rem] select-none'>{countryFlagEmoji}</div>}
      <div className='tracking-normal font-medium'>
        <div className='break-normal text-md'>{city}, </div>
        <div className='whitespace-nowrap text-md'>{country}</div>
        <time className='block mt-1 text-sm font-regular text-neutral-700' dateTime={arrivalDateTime}>{formattedDateTime}</time>
      </div>
    </AnimateDown>
  )
}

const Travel = () => (
  <Section>
    <div className="box-border w-full">
      <div className="mb-2 text-left">
        <H2 as="h1">Adventures</H2>
      </div>
      <div className="box-border w-full">
        <P className='text-neutral-900/90'>
          Over the last couple of years I've been fortunate enough to visit a lots of different countries and cities. Here's a list of some of the places I've been to.
        </P>
        <div className='grid grid-cols-1 gap-4 mt-4 isolate sm:grid-cols-2 sm:grid-flow-row-dense md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8'>
          {travelData.map((l, i) => <TravelCard key={`${l.city}-${l.country}`} location={l} index={i} />)}
          <AnimateDown
            delay={(travelData.length + 1) * .02}
            className='flex flex-col justify-between self-stretch w-full min-w-0 p-3 rounded-lg aspect-square bg-neutral-100'
          >
            <div className='pt-2 pl-1 select-none'>
              <PlaneTakeoffIcon height={32} width={32} className='text-neutral-900' />
            </div>
            <div>
              <div>Left Melbourne!</div>
              <time className='block mt-1 text-sm text-neutral-700' dateTime='2021-10'>October 2021</time>
            </div>
          </AnimateDown>
        </div>
      </div>
    </div>
  </Section>
);

export default Travel;
