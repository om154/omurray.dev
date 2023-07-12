import cn from 'classnames';
import { ReactComponent as CrunchbaseLogo } from 'public/static/svg/crunchbase-logo.svg';
import { ReactComponent as LinkedInLogo } from 'public/static/svg/linkedin-logo.svg';
import { ReactComponent as ExternalLinkIcon } from 'public/static/svg/external-link-icon.svg';
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
        <ExternalLinkIcon className="w-5 h-5 fill-current" />
      </a>
      <a className="flex ml-2 mr-1 text-[#0a66c2]" href="https://www.linkedin.com/company/shippit" target="_blank" rel="noreferrer">
        <LinkedInLogo className="w-5 h-5 fill-current" />
      </a>
      <a className="flex ml-2" href="https://www.crunchbase.com/organization/shippt" target="_blank" rel="noreferrer">
        <CrunchbaseLogo className="w-5 h-5 fill-current" />
      </a>
    </div>
  </Pill>
);

ShippitPill.defaultProps = {
  className: ''
};

export default ShippitPill;
