import cn from 'classnames';
import Image from 'next/image';
import Pill from '..';

interface TwinePillProps {
  className?: string
}

const TwinePill = ({ className }: TwinePillProps) => (
  <Pill className={cn('bg-white', className)}>
    <div className='flex row'>
      <Image src='static/svg/twine.svg' height={32} alt='twine' className="p-1 fill-current md:p-0 md:mr-2" />
    </div>
    <div className='flex row'>
      <a className="flex ml-2 mr-1 text-neutral-800" href="https://www.twine.us/" data-testid="glimpse-external-link" target="_blank" rel="noreferrer">
        <Image src='static/svg/external-link-icon.svg' width={20} height={20} alt='external' className="fill-current" />
      </a>
      <a className="flex ml-2 mr-1 text-[#0a66c2]" href="https://www.linkedin.com/company/wearetwine" target="_blank" rel="noreferrer">
        <Image src='static/svg/linkedin-logo.svg' width={20} height={20} alt='linkedin' className="fill-current" />
      </a>
      <a className="flex ml-2" href="https://www.crunchbase.com/organization/twine-121c" target="_blank" rel="noreferrer">
        <Image src='static/svg/crunchbase-logo.svg' width={20} height={20} alt='crunchbase' className="fill-current" />
      </a>
    </div>
  </Pill>
);

TwinePill.defaultProps = {
  className: ''
};

export default TwinePill;
