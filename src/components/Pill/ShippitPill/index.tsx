import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import Pill from '..';

interface ShippitPillProps {
  className?: string
}

const ShippitPill = ({ className }: ShippitPillProps) => (
  <Pill className={cn('bg-white', className)}>
    <div className='relative flex items-center w-full h-8 row'>
      <Image src="/static/img/shippit.png" height={28} width={75} alt='shippit-logo' />
    </div>
    <div className='flex row'>
      <Link className="relative flex w-5 h-5 ml-2 mr-1 text-neutral-800" href="https://www.shippit.com/" data-testid="shippit-external-link" target="_blank" rel="noreferrer">
        <Image src='/static/svg/external-link-icon.svg' fill alt='external' className="fill-current" />
      </Link>
      <Link className="flex ml-2 mr-1 text-[#0a66c2] h-5 w-5 relative" href="https://www.linkedin.com/company/shippit" target="_blank" rel="noreferrer">
        <Image src='/static/svg/linkedin-logo.svg' fill alt='linkedin' className="fill-current" />
      </Link>
      <Link className="relative flex w-5 h-5 ml-2" href="https://www.crunchbase.com/organization/shippt" target="_blank" rel="noreferrer">
        <Image src='/static/svg/crunchbase-logo.svg' fill alt='crunchbase' className="fill-current" />
      </Link>
    </div>
  </Pill>
);

ShippitPill.defaultProps = {
  className: ''
};

export default ShippitPill;
