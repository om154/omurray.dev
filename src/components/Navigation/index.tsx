'use client'

import classNames from 'classnames';
import Link from "next/link"
import { usePathname } from 'next/navigation'
import LinkedInLogo from '../shared/LinkedInLogo';
import GitHubLogo from './GitHubLogo';
import TwitterLogo from './TwitterLogo';
import { MouseEventHandler, useEffect, useState } from 'react';

export const usePreviousPersistent = (value: any) => {
  const [state, setState] = useState<any>({
    value: value,
    prev: null,
  });

  const current = state.value;

  if (value !== current) {
    setState({
      value: value,
      prev: current,
    });
  }

  return state.prev;
};

interface ListItemProps {
  title: string
  path: string
  active: boolean
  onMouseEnter: MouseEventHandler<HTMLLIElement>
  onMouseLeave: MouseEventHandler<HTMLLIElement>
}

const LinkListItem = ({ title, path, active, onMouseEnter, onMouseLeave }: ListItemProps) => (
  <li className='contents' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    <Link href={path} className={classNames(
      'px-1 md:px-2 py-1 font-sans transition-colors duration-200 ease-linear no-underline text-sm font-regular outline-none select-nonerounded-lg hover:text-primary-900 leading-5',
      {
        'text-primary-900': active,
        'text-neutral-600': !active
      }
    )}>{title}</Link>
  </li>
);

const Navigation = () => {
  const [hovering, setHovering] = useState<boolean>(false);
  const [xOffset, setXOffset] = useState<number | null>(null)
  const [width, setWidth] = useState<number | null>(null)
  const pathName = usePathname();

  const previousXOffset = usePreviousPersistent(xOffset)

  const handleMouseEnter: MouseEventHandler<HTMLLIElement> = (event) => {
    const eventTarget = event.target as HTMLLIElement;

    if (eventTarget) {
      if (eventTarget.offsetLeft) {
        setXOffset(eventTarget.offsetLeft)
      }
      if (eventTarget.clientWidth) {
        setWidth(eventTarget.clientWidth)
      }
    }
  }

  const handleMouseLeave: MouseEventHandler<HTMLLIElement> = (event) => {
    setXOffset(null)
    setWidth(null)
  }

  return (
    <div className="sticky top-0 z-10 flex items-center justify-center py-4 isolate md:justify-between">
      <nav className='relative flex px-2 py-1 border rounded-lg shadow-md border-neutral-200 bg-white/70 backdrop-blur-md'>
        <ul
          className='flex flex-row gap-1 list-none oliver-navigation-menu md:gap-0'
          onMouseLeave={() => hovering && setHovering(false)}
          onMouseEnter={() => !hovering && setHovering(true)}
        >
          <div className={classNames(
            'absolute left-0 -z-10 h-7 rounded bg-neutral-200 backdrop-blur transition-[width,transform,opacity]',
          )} style={
            {
              // default to show no transition
              transitionDuration: '0ms',
              // display the hover state if hovering is true and width is set
              ...(hovering ? {
                opacity: 0.9
              } : {}),
              ...(width ? { width: `${width}px` } : {}),
              // only display the transform transition if the offset changes (not if it goes null -> defined)
              ...(previousXOffset !== null && xOffset !== null ? { transitionDuration: '150ms', } : {}),
              // always translate based on the offset, if defined
              ...(xOffset ? {
                transform: `translate(${xOffset}px)`
              } : {}),
            }
          } />
          <LinkListItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Home" path="/" active={pathName === '/'} />
          <LinkListItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="About" path="/about" active={pathName === '/about'} />
          <LinkListItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Travel" path="/travel" active={pathName === '/travel'} />
          <LinkListItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Interests" path="/interests" active={pathName === '/interests'} />
          <LinkListItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Contact" path="/contact" active={pathName === '/contact'} />
        </ul>
      </nav>
      <div className='hidden md:flex'>
        <div className="box-border flex justify-center w-full pl-2 mx-auto text-center rounded-lg bg-white/70">
          {process.env.NEXT_PUBLIC_LINKEDIN_URL && (
            <Link className="flex m-2" href={process.env.NEXT_PUBLIC_LINKEDIN_URL as string} target="_blank" rel="noreferrer">
              <LinkedInLogo className="transition-colors duration-200 ease-linear fill-neutral-500 hover:fill-neutral-700" />
            </Link>
          )}
          {process.env.NEXT_PUBLIC_GITHUB_URL && (
            <Link className="flex m-2" href={process.env.NEXT_PUBLIC_GITHUB_URL as string} target="_blank" rel="noreferrer">
              <GitHubLogo className="transition-colors duration-200 ease-linear fill-neutral-500 hover:fill-neutral-700" />
            </Link>
          )}
          {process.env.NEXT_PUBLIC_TWITTER_URL && (
            <Link className="flex m-2" href={process.env.NEXT_PUBLIC_TWITTER_URL as string} target="_blank" rel="noreferrer">
              <TwitterLogo className="transition-colors duration-200 ease-linear fill-neutral-500 hover:fill-neutral-700" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
