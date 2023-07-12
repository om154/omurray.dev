import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import Pill from '..';

interface AccenturePillProps {
  className?: string
}

const AccenturePill = ({ className }: AccenturePillProps) => (
  <Pill className={cn('bg-white', className)}>
    <div className='relative flex items-center w-full h-8 row'>
      <Image src='/static/svg/accenture.svg' width={75} height={32} alt='accenture' className="md:h-5 md:mr-2" />
    </div>
    <div className='flex row'>
      <Link className="relative flex w-5 h-5 ml-2 mr-1 text-neutral-800" href="https://www.accenture.com/" data-testid="accenture-external-link" target="_blank" rel="noreferrer">
        <Image src='/static/svg/external-link-icon.svg' fill alt='external' className="fill-current" />
      </Link>
      <Link className="relative flex w-5 h-5 ml-2 mr-1 text-[#0a66c2]" href="https://www.linkedin.com/company/accenture" target="_blank" rel="noreferrer">
        <Image src='/static/svg/linkedin-logo.svg' fill alt='linkedin' className="fill-current" />
      </Link>
    </div>
  </Pill>
);

AccenturePill.defaultProps = {
  className: ''
};

export default AccenturePill;
