import cn from 'classnames';
import { ReactComponent as CrunchbaseLogo } from '../../../assets/crunchbase-logo.svg';
import { ReactComponent as LinkedInLogo } from '../../../assets/linkedin-logo.svg';
import { ReactComponent as ExternalLinkIcon } from '../../../assets/external-link-icon.svg';
import { ReactComponent as ShippitLogo } from '../../../assets/shippit.svg';
import Pill from '..';

interface ShippitPillProps {
  className?: string
}

const ShippitPill = ({ className }: ShippitPillProps) => (
  <Pill className={cn('bg-[#0074DC]', className)}>
    <ShippitLogo className="h-5 mr-2" />
    <a className="flex w-5 h-5 ml-2 mr-1 text-white" href="https://www.shippit.com/" target="_blank" rel="noreferrer">
      <ExternalLinkIcon className="fill-current" />
    </a>
    <a className="flex w-5 h-5 ml-2 mr-1 text-white" href="https://www.linkedin.com/company/shippit" target="_blank" rel="noreferrer">
      <LinkedInLogo className="fill-current" />
    </a>
    <a className="flex w-5 h-5 ml-2" href="https://www.crunchbase.com/organization/shippt" target="_blank" rel="noreferrer">
      <CrunchbaseLogo className="fill-current" />
    </a>
  </Pill>
);

ShippitPill.defaultProps = {
  className: ''
};

export default ShippitPill;
