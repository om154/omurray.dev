import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import Pill from '..';

interface GlimpsePillProps {
  className?: string
}

const GlimpseLogo = () => <Image className="h-8 p-1 md:p-0 md:h-6 md:mr-2" height={32} width={80} src="/static/img/glimpse.webp" alt="Glimpse" />;

const GlimpsePill = ({ className }: GlimpsePillProps) => (
  <Pill className={cn('bg-white', className)}>
    <div className='relative flex w-full h-8 row items-center'>
      <GlimpseLogo />
    </div>
    <div className='flex row'>
      <Link className="relative flex w-5 h-5 ml-2 mr-1 text-neutral-800" href="https://www.joinglimpse.com/" data-testid="glimpse-external-link" target="_blank" rel="noreferrer">
        <Image src='/static/svg/external-link-icon.svg' fill alt='external' className="fill-current" />
      </Link>
      <Link className="flex ml-2 mr-1 text-[#0a66c2] h-5 w-5 relative" href="https://www.linkedin.com/company/joinglimpse" target="_blank" rel="noreferrer">
        <Image src='/static/svg/linkedin-logo.svg' fill alt='linkedin' className="fill-current" />
      </Link>
      <Link className="relative flex w-5 h-5 ml-2" href="https://www.crunchbase.com/organization/glimpse-838d" target="_blank" rel="noreferrer">
        <Image src='/static/svg/crunchbase-logo.svg' fill alt='crunchbase' className="fill-current" />
      </Link>
    </div>
  </Pill>
);

GlimpsePill.defaultProps = {
  className: ''
};

export default GlimpsePill;
