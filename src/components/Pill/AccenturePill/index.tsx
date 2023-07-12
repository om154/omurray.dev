import cn from 'classnames';
import Image from 'next/image';
import Pill from '..';

interface AccenturePillProps {
  className?: string
}

const AccenturePill = ({ className }: AccenturePillProps) => (
  <Pill className={cn('bg-white', className)}>
    <div className='flex row'>
      <Image src='static/svg/accenture.svg' alt='accenture' className="w-20 h-8 md:h-5 md:mr-2" />
    </div>
    <div className='flex row'>
      <a className="flex ml-2 mr-1 text-neutral-800" href="https://www.accenture.com/" data-testid="accenture-external-link" target="_blank" rel="noreferrer">
        <Image src='static/svg/external-link-icon.svg' width={20} height={20} alt='external' className="fill-current" />
      </a>
      <a className="flex ml-2 mr-1 text-[#0a66c2]" href="https://www.linkedin.com/company/accenture" target="_blank" rel="noreferrer">
        <Image src='static/svg/linkedin-logo.svg' width={20} height={20} alt='linkedin' className="fill-current" />
      </a>
    </div>
  </Pill>
);

AccenturePill.defaultProps = {
  className: ''
};

export default AccenturePill;
