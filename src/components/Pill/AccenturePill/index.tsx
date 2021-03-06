import cn from 'classnames';
import { ReactComponent as LinkedInLogo } from '../../../assets/linkedin-logo.svg';
import { ReactComponent as ExternalLinkIcon } from '../../../assets/external-link-icon.svg';
import { ReactComponent as AccentureLogo } from '../../../assets/accenture.svg';
import Pill from '..';

interface AccenturePillProps {
  className?: string
}

const AccenturePill = ({ className }: AccenturePillProps) => (
  <Pill className={cn('bg-white', className)}>
    <AccentureLogo className="w-20 h-5 mr-2" />
    <a className="flex ml-2 mr-1 text-neutral-800" href="https://www.accenture.com/" data-testid="accenture-external-link" target="_blank" rel="noreferrer">
      <ExternalLinkIcon className="w-5 h-5 fill-current" />
    </a>
    <a className="flex ml-2 mr-1 text-[#0a66c2]" href="https://www.linkedin.com/company/accenture" target="_blank" rel="noreferrer">
      <LinkedInLogo className="w-5 h-5 fill-current" />
    </a>
  </Pill>
);

AccenturePill.defaultProps = {
  className: ''
};

export default AccenturePill;
