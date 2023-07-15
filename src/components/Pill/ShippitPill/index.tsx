import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import Pill from '..';
import LinkedInLogo from 'src/components/shared/LinkedInLogo';
import shippitLogo from 'public/static/img/shippit.png'
import CrunchbaseLogo from '../CrunchbaseLogo';
import ExternalLinkIcon from '../ExternalLinkIcon';

interface ShippitPillProps {
  className?: string
}

const ShippitPill = ({ className }: ShippitPillProps) => (
  <Pill className={cn('bg-white', className)}>
    <div className='relative flex items-center w-full h-8 row'>
      <Image src={shippitLogo} height={28} width={75} alt='shippit-logo' />
    </div>
    <div className='flex items-center row'>
      <Link className="relative flex w-6 h-6 ml-2 mr-1 text-neutral-800" href="https://www.shippit.com/" data-testid="shippit-external-link" target="_blank" rel="noreferrer">
        <ExternalLinkIcon />
      </Link>
      <Link className="flex ml-2 mr-1" href="https://www.linkedin.com/company/shippit" target="_blank" rel="noreferrer">
        <LinkedInLogo />
      </Link>
      <Link className="relative flex w-5 h-5 ml-2" href="https://www.crunchbase.com/organization/shippt" target="_blank" rel="noreferrer">
        <CrunchbaseLogo />
      </Link>
    </div>
  </Pill>
);

export default ShippitPill;
