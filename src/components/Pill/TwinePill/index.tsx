import cn from 'classnames';
import Link from 'next/link';
import Pill from '..';
import LinkedInLogo from 'src/components/shared/LinkedInLogo';
import CrunchbaseLogo from '../CrunchbaseLogo';
import TwineLogo from './TwineLogo';
import ExternalLinkIcon from '../ExternalLinkIcon';

interface TwinePillProps {
  className?: string
}

const TwinePill = ({ className }: TwinePillProps) => (
  <Pill className={cn('bg-white', className)}>
    <div className='relative flex items-center w-full h-8 row'>
      <TwineLogo />
    </div>
    <div className='flex items-center h-8 row'>
      <Link className="relative flex w-6 h-6 ml-2 mr-1 text-neutral-800" href="https://www.twine.us/" data-testid="glimpse-external-link" target="_blank" rel="noreferrer">
        <ExternalLinkIcon />
      </Link>
      <Link className="flex ml-2 mr-1" href="https://www.linkedin.com/company/wearetwine" target="_blank" rel="noreferrer">
        <LinkedInLogo />
      </Link>
      <Link className="relative flex w-5 h-5 ml-2" href="https://www.crunchbase.com/organization/twine-121c" target="_blank" rel="noreferrer">
        <CrunchbaseLogo />
      </Link>
    </div>
  </Pill>
);

TwinePill.defaultProps = {
  className: ''
};

export default TwinePill;
