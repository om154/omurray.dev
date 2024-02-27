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
    <AnimateDown key={`travel-grid-item-left-${city}`} delay={(index + 1) * .02} >
      <div className='relative overflow-hidden rounded-lg group'>
        <div className='text-[15px] text-left md:text-md absolute z-10 w-full px-3 md:px-4 pt-[6px] pb-4 font-bold text-[transparent] rounded-tl-lg rounded-tr-lg border group-hover:border group-hover:border-primary-400/20 border-solid group-hover:bg-primary-300 group-hover:text-white bg-[transparent] transition-colors duration-200 select-none'>
          <time className='leading-none' dateTime={arrivalDateTime}>{formattedDateTime}</time>
        </div>
        <div className='relative z-20 flex flex-col justify-start p-3 transition-[colors, transform] duration-200 ease-in-out rounded-lg group-hover:translate-y-9 aspect-square bg-neutral-100 group-hover:bg-neutral-200 group-active:bg-neutral-300'>
          {countryFlagEmoji && <div className='text-[36px] select-none'>{countryFlagEmoji}</div>}
        </div>
        <div className='absolute z-30 w-full bottom-3 left-3 max-w-[130px] tracking-normal font-medium'>
          <div className='break-normal text-md'>{city}, </div>
          <div className='whitespace-nowrap text-md'>{country}</div>
        </div>
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
        <P className='text-neutral-900/90'>
          Over the last couple of years I've been fortunate enough to visit a lots of different countries and cities. Here's a list of some of the places I've been to.
          <div className='grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 sm:grid-flow-row-dense md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8'>
            {/* render travel data as cards */}
            {travelData.map((l, i) => <TravelCard location={l} index={i} />)}
            {/*  a separate card for "Left Melbourne" */}
            <AnimateDown key='travel-grid-item-left-aus' delay={(travelData.length + 1) * .02} >
              <div className='relative overflow-hidden rounded-lg group'>
                <div className='absolute z-10 w-full px-4 pt-2 pb-4 font-bold text-[transparent] rounded-tl-lg rounded-tr-lg group-hover:bg-primary-300 group-hover:text-white bg-[transparent] transition-colors duration-200 select-none'>
                  October 2021
                </div>
                <div
                  className='relative z-20 flex flex-col justify-between p-3 transition-[colors, transform] duration-200 ease-in-out rounded-lg group-hover:translate-y-9 aspect-square bg-neutral-100'
                >
                  <div className='pt-2 pl-1 select-none'>
                    <PlaneTakeoffIcon height={32} width={32} className='text-neutral-900' />
                  </div>
                </div>
                <div className='absolute z-30 w-full bottom-3 left-3 max-w-[130px]'>
                  <div className='whitespace-nowrap'>Left Melbourne!</div>
                </div>
              </div>
            </AnimateDown>
          </div>
        </P>
      </div>
    </div>
  </Section>
);

export default Travel;
