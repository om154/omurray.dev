import cn from 'classnames';
import Link from 'next/link';
import Pill from '..';
import LinkedInLogo from 'src/components/shared/LinkedInLogo';
import PunchupLogo from './PunchupLogo';
import ExternalLinkIcon from '../ExternalLinkIcon';
import CrunchbaseLogo from '../CrunchbaseLogo';

interface PunchupPillProps {
  className?: string
}

const PunchupPill = ({ className }: PunchupPillProps) => (
  <Pill className={cn('bg-white', className)}>
    <div className='relative flex items-center h-8 py-0.5 row'>
      <PunchupLogo width={90.833} height={20}/>
    </div>
    <div className='flex items-center row'>
      <Link
        className="relative flex w-6 h-6 ml-2 mr-1 text-neutral-800 transition-transform duration-200 hover:-translate-y-0.5 ease"
        href="https://punchup.live/"
        data-testid="punchup-external-link"
        target="_blank"
        rel="noreferrer"
      >
        <ExternalLinkIcon />
      </Link>
      <Link
        className="flex ml-2 mr-1 transition-transform duration-200 hover:-translate-y-0.5 ease"
        href="https://www.linkedin.com/company/punchup-live/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInLogo />
      </Link>
      <Link
        className="relative flex w-5 h-5 ml-2 transition-transform duration-200 hover:-translate-y-0.5 ease"
        href="https://www.crunchbase.com/organization/punchup-live"
        target="_blank"
        rel="noreferrer"
      >
        <CrunchbaseLogo />
      </Link>
    </div>
  </Pill>
);

export default PunchupPill;
