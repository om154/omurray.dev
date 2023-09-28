import cn from 'classnames';
import Link from 'next/link';
import Pill from '..';
import LinkedInLogo from 'src/components/shared/LinkedInLogo';
import CrunchbaseLogo from '../CrunchbaseLogo';
import TwineLogo from './TwineLogo';
import ExternalLinkIcon from '../ExternalLinkIcon';

const twineLandingPageUrl = 'https://web.archive.org/web/20230602054111/https://www.twine.us/'

interface TwinePillProps {
  className?: string
}

const TwinePill = ({ className }: TwinePillProps) => (
  <Pill className={cn('bg-white', className)}>
    <div className='relative flex items-center w-full h-8'>
      <TwineLogo />
    </div>
    <div className='flex items-center h-8 row'>
      <Link className="relative flex w-6 h-6 ml-2 mr-1 text-neutral-800 transition-transform duration-200 hover:-translate-y-0.5 ease" href={twineLandingPageUrl} data-testid="glimpse-external-link" target="_blank" rel="noreferrer">
        <ExternalLinkIcon />
      </Link>
      <Link className="flex ml-2 mr-1 transition-transform duration-200 hover:-translate-y-0.5 ease" href="https://www.linkedin.com/company/wearetwine" target="_blank" rel="noreferrer">
        <LinkedInLogo />
      </Link>
      <Link className="relative flex w-5 h-5 ml-2 transition-transform duration-200 hover:-translate-y-0.5 ease" href="https://www.crunchbase.com/organization/twine-121c" target="_blank" rel="noreferrer">
        <CrunchbaseLogo />
      </Link>
    </div>
  </Pill>
);

export default TwinePill;
