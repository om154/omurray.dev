import { ReactComponent as CrunchbaseLogo } from '../../../assets/crunchbase-logo.svg';
import { ReactComponent as LinkedInLogo } from '../../../assets/linkedin-logo.svg';
import { ReactComponent as ExternalLinkIcon } from '../../../assets/external-link-icon.svg';

const ShippitPill = () => (
  <span className="inline-block px-3 py-2 font-bold rounded-lg shadow-md bg-neutral-000 text-neutral-900">
    <div className="flex items-center my-1">
      <span className="mr-1 leading-tight no-underline select-none text-md md:text-lg">Shippit</span>
      <a className="flex w-5 h-5 ml-2 mr-1 text-neutral-700" href="https://www.shippit.com/" target="_blank" rel="noreferrer">
        <ExternalLinkIcon className="fill-current" />
      </a>
      <a className="flex w-5 h-5 ml-2 mr-1 text-[#0a66c2]" href="https://www.linkedin.com/company/shippit" target="_blank" rel="noreferrer">
        <LinkedInLogo className="fill-current" />
      </a>
      <a className="flex w-5 h-5 ml-2" href="https://www.crunchbase.com/organization/shippt" target="_blank" rel="noreferrer">
        <CrunchbaseLogo className="fill-current" />
      </a>
    </div>

  </span>
);

export default ShippitPill;
