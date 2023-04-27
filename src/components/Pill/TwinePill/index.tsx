import cn from 'classnames';
import { ReactComponent as TwineLogo } from '../../../assets/twine.svg';
import { ReactComponent as CrunchbaseLogo } from '../../../assets/crunchbase-logo.svg';
import { ReactComponent as LinkedInLogo } from '../../../assets/linkedin-logo.svg';
import { ReactComponent as ExternalLinkIcon } from '../../../assets/external-link-icon.svg';
import Pill from '..';

interface TwinePillProps {
  className?: string
}

const TwinePill = ({ className }: TwinePillProps) => (
  <Pill className={cn('bg-white', className)}>
    <TwineLogo className="h-4 mr-2 fill-current" />
    <a className="flex ml-2 mr-1 text-neutral-800" href="https://www.twine.us/" data-testid="glimpse-external-link" target="_blank" rel="noreferrer">
      <ExternalLinkIcon className="w-5 h-5 fill-current" />
    </a>
    <a className="flex ml-2 mr-1 text-[#0a66c2]" href="https://www.linkedin.com/company/wearetwine" target="_blank" rel="noreferrer">
      <LinkedInLogo className="w-5 h-5 fill-current" />
    </a>
    <a className="flex ml-2" href="https://www.crunchbase.com/organization/twine-121c" target="_blank" rel="noreferrer">
      <CrunchbaseLogo className="w-5 h-5 fill-current" />
    </a>
  </Pill>
);

TwinePill.defaultProps = {
  className: ''
};

export default TwinePill;