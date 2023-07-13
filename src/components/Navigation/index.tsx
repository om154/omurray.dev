'use client'

import classNames from 'classnames';
import Link from "next/link"
import { usePathname } from 'next/navigation'
import LinkedInLogo from '../shared/LinkedInLogo';
import GitHubLogo from './GitHubLogo';
import TwitterLogo from './TwitterLogo';

interface ListItemProps {
  title: string
  path: string
  active: boolean
}

const LinkListItem = ({ title, path, active }: ListItemProps) => (
  <li className='contents'>
    <Link href={path} className={classNames(
      'px-1 md:px-2 py-1 font-sans transition-colors duration-200 ease-linear no-underline text-sm font-regular outline-none select-none hover:bg-neutral-200  hover:text-primary-900 rounded-lg leading-5',
      {
        'text-primary-900': active,
        'text-neutral-600':!active
      }
    )}>{title}</Link>
  </li>
);

const Navigation = () => {
  const pathName = usePathname();

  return (
    <div className="sticky top-0 z-10 flex items-center justify-center py-4 isolate md:justify-between">
      <nav className='relative flex px-2 py-1 border rounded-lg shadow-md border-neutral-200 bg-white/70 backdrop-blur-md'>
        <ul className='flex flex-row gap-1 list-none md:gap-0'>
          <LinkListItem title="Home" path="/" active={pathName === '/'} />
          <LinkListItem title="About" path="/about" active={pathName === '/about'} />
          <LinkListItem title="Travel" path="/travel" active={pathName === '/travel'} />
          <LinkListItem title="Interests" path="/interests" active={pathName === '/interests'} />
          <LinkListItem title="Contact" path="/contact" active={pathName === '/contact'} />
        </ul>
      </nav>
      <div className='hidden md:flex'>
        <div className="box-border flex justify-center w-full pl-2 mx-auto text-center rounded-lg bg-white/70">
          {process.env.NEXT_PUBLIC_LINKEDIN_URL && (
            <Link className="flex m-2" href={process.env.NEXT_PUBLIC_LINKEDIN_URL as string} target="_blank" rel="noreferrer">
              <LinkedInLogo className="transition-all duration-250 fill-neutral-500 hover:fill-neutral-700" />
            </Link>
           )}
          {process.env.NEXT_PUBLIC_GITHUB_URL && (
            <Link className="flex m-2" href={process.env.NEXT_PUBLIC_GITHUB_URL as string} target="_blank" rel="noreferrer">
              <GitHubLogo className="transition-all duration-250 fill-neutral-500 hover:fill-neutral-700" />
            </Link>
           )}
          {process.env.NEXT_PUBLIC_TWITTER_URL && (
            <Link className="flex m-2" href={process.env.NEXT_PUBLIC_TWITTER_URL as string} target="_blank" rel="noreferrer">
              <TwitterLogo className="transition-all duration-250 fill-neutral-500 hover:fill-neutral-700" />
            </Link>
           )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
