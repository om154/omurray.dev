import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import Pill from '..';

interface GlimpsePillProps {
  className?: string
}

const GlimpseLogo = () => <img className="h-8 p-1 md:p-0 md:h-6 md:mr-2 " src="static/svg/img/glimpse.webp" alt="Glimpse" />;

const GlimpsePill = ({ className }: GlimpsePillProps) => (
  <Pill className={cn('bg-white', className)}>
    <div className='flex row'>
      <GlimpseLogo />
    </div>
    <div className='flex row'>
      <Link className="flex ml-2 mr-1 text-neutral-800" href="https://www.joinglimpse.com/" data-testid="glimpse-external-link" target="_blank" rel="noreferrer">
        <Image src='static/svg/external-link-icon.svg' width={20} height={20} alt='external' className="fill-current" />
      </Link>
      <Link className="flex ml-2 mr-1 text-[#0a66c2]" href="https://www.linkedin.com/company/joinglimpse" target="_blank" rel="noreferrer">
        <Image src='static/svg/linkedin-logo.svg' width={20} height={20} alt='linkedin' className="fill-current" />
      </Link>
      <Link className="flex ml-2" href="https://www.crunchbase.com/organization/glimpse-838d" target="_blank" rel="noreferrer">
        <Image src='static/svg/crunchbase-logo.svg' width={20} height={20} alt='crunchbase' className="fill-current" />
      </Link>
    </div>
  </Pill>
);

GlimpsePill.defaultProps = {
  className: ''
};

export default GlimpsePill;
