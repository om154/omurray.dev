import cn from 'classnames';
import { ReactComponent as CrunchbaseLogo } from '../../../assets/crunchbase-logo.svg';
import { ReactComponent as LinkedInLogo } from '../../../assets/linkedin-logo.svg';
import { ReactComponent as ExternalLinkIcon } from '../../../assets/external-link-icon.svg';
import glimpseLogoImg from '../../../assets/img/glimpse.webp';
import Pill from '..';

interface GlimpsePillProps {
  className?: string
}

const GlimpseLogo = () => <img className="h-6 mr-2 " src={glimpseLogoImg} alt="Glimpse" />;

const GlimpsePill = ({ className }: GlimpsePillProps) => (
  <Pill className={cn('bg-white', className)}>
    <GlimpseLogo />
    <a className="flex ml-2 mr-1 text-neutral-800" href="https://www.joinglimpse.com/" data-testid="glimpse-external-link" target="_blank" rel="noreferrer">
      <ExternalLinkIcon className="w-5 h-5 fill-current" />
    </a>
    <a className="flex ml-2 mr-1 text-[#0a66c2]" href="https://www.linkedin.com/company/joinglimpse" target="_blank" rel="noreferrer">
      <LinkedInLogo className="w-5 h-5 fill-current" />
    </a>
    <a className="flex ml-2" href="https://www.crunchbase.com/organization/glimpse-838d" target="_blank" rel="noreferrer">
      <CrunchbaseLogo className="w-5 h-5 fill-current" />
    </a>
  </Pill>
);

GlimpsePill.defaultProps = {
  className: ''
};

export default GlimpsePill;
