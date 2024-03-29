import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import Pill from '..';
import LinkedInLogo from 'src/components/shared/LinkedInLogo';
import AccentureLogo from './AccentureLogo';
import ExternalLinkIcon from '../ExternalLinkIcon';
import CrunchbaseLogo from '../CrunchbaseLogo';

interface AccenturePillProps {
  className?: string
}

const AccenturePill = ({ className }: AccenturePillProps) => (
  <Pill className={cn('bg-white', className)}>
    <div className='relative flex items-center w-full h-8 row'>
      <AccentureLogo />
    </div>
    <div className='flex items-center row'>
      <Link className="relative flex w-6 h-6 ml-2 mr-1 text-neutral-800 transition-transform duration-200 hover:-translate-y-0.5 ease" href="https://www.accenture.com/" data-testid="accenture-external-link" target="_blank" rel="noreferrer">
        <ExternalLinkIcon />
      </Link>
      <Link className="flex ml-2 mr-1 transition-transform duration-200 hover:-translate-y-0.5 ease" href="https://www.linkedin.com/company/accenture" target="_blank" rel="noreferrer">
        <LinkedInLogo />
      </Link>
      <div className="relative flex w-5 h-5 ml-2">
        <CrunchbaseLogo opacity={0.5} className='hover:cursor-not-allowed' />
      </div>
    </div>
  </Pill>
);

export default AccenturePill;
