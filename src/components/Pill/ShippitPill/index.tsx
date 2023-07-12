import cn from 'classnames';
import Image from 'next/image';
import Pill from '..';

interface ShippitPillProps {
  className?: string
}

const ShippitPill = ({ className }: ShippitPillProps) => (
  <Pill className={cn('bg-white', className)}>
    <div className='flex row'>
      <img src="static/svg/img/shippit.png" className="w-auto h-8 md:h-6 md:mr-2" alt='shippit-logo' />
    </div>
    <div className='flex row'>
      <a className="flex ml-2 mr-1 text-neutral-800" href="https://www.shippit.com/" data-testid="shippit-external-link" target="_blank" rel="noreferrer">
        <Image src='static/svg/external-link-icon.svg' width={20} height={20} alt='external' className="fill-current" />
      </a>
      <a className="flex ml-2 mr-1 text-[#0a66c2]" href="https://www.linkedin.com/company/shippit" target="_blank" rel="noreferrer">
        <Image src='static/svg/linkedin-logo.svg' width={20} height={20} alt='linkedin' className="fill-current" />
      </a>
      <a className="flex ml-2" href="https://www.crunchbase.com/organization/shippt" target="_blank" rel="noreferrer">
        <Image src='static/svg/crunchbase-logo.svg' width={20} height={20} alt='crunchbase' className="fill-current" />
      </a>
    </div>
  </Pill>
);

ShippitPill.defaultProps = {
  className: ''
};

export default ShippitPill;
