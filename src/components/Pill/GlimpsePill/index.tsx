import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import Pill from '..';
import LinkedInLogo from 'src/components/shared/LinkedInLogo';
import glimpseLogo from 'public/static/img/glimpse.webp'
import CrunchbaseLogo from '../CrunchbaseLogo';
import ExternalLinkIcon from '../ExternalLinkIcon';

interface GlimpsePillProps {
  className?: string
}

const GlimpseLogo = () => <Image className="p-1 md:mr-2" width={80} height={32} src={glimpseLogo} alt="Glimpse" />;

const GlimpsePill = ({ className }: GlimpsePillProps) => (
  <Pill className={cn('bg-white', className)}>
    <div className='relative flex items-center row h-[32px] w-[80px]'>
      <GlimpseLogo />
    </div>
    <div className='flex items-center row'>
      <Link className="relative flex w-6 h-6 ml-2 mr-1 text-neutral-800" href="https://www.joinglimpse.com/" data-testid="glimpse-external-link" target="_blank" rel="noreferrer">
        <ExternalLinkIcon />
      </Link>
      <Link className="flex ml-2 mr-1" href="https://www.linkedin.com/company/joinglimpse" target="_blank" rel="noreferrer">
        <LinkedInLogo />
      </Link>
      <Link className="relative flex w-5 h-5 ml-2" href="https://www.crunchbase.com/organization/glimpse-838d" target="_blank" rel="noreferrer">
        <CrunchbaseLogo />
      </Link>
    </div>
  </Pill>
);

GlimpsePill.defaultProps = {
  className: ''
};

export default GlimpsePill;
