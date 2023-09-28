import cn from 'classnames';
import Link from 'next/link';
import Pill from '..';
import LinkedInLogo from 'src/components/shared/LinkedInLogo';
import CrunchbaseLogo from '../CrunchbaseLogo';
import ExternalLinkIcon from '../ExternalLinkIcon';
import AmbientLogo from './AmbientLogo';

const ambientLandingPageUrl = 'https://www.ambient.us/'

interface TwinePillProps {
  className?: string
}

const AmbientPill = ({ className }: TwinePillProps) => (
  <Pill className={cn('bg-white', className)}>
    <div className='relative flex items-center w-full h-8'>
      <div className='px-2 py-1.5 bg-black bg-center bg-no-repeat bg-cover rounded-lg bg-image' style={{
        backgroundImage: 'url("/static/img/ambient-bg.png")'
      }}>
        <AmbientLogo fill='#fff' />
      </div>
    </div>
    <div className='flex items-center h-8 row'>
      <Link className="relative flex w-6 h-6 ml-2 mr-1 text-neutral-800 transition-transform duration-200 hover:-translate-y-0.5 ease" href={ambientLandingPageUrl} data-testid="glimpse-external-link" target="_blank" rel="noreferrer">
        <ExternalLinkIcon />
      </Link>
      <Link className="flex ml-2 mr-1 transition-transform duration-200 hover:-translate-y-0.5 ease" href="https://www.linkedin.com/company/we-are-ambient/" target="_blank" rel="noreferrer">
        <LinkedInLogo />
      </Link>
    </div>
  </Pill>
);

export default AmbientPill;
