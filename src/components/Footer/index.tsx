'use client'

import Image from 'next/image'
import Link from 'next/link'
import LinkedInLogo from '../shared/LinkedInLogo';
import GitHubLogo from './GitHubLogo';
import TwitterLogo from './TwitterLogo';

const Footer = () => (
  <footer className="box-border flex justify-center w-full pl-2 mx-auto text-center rounded-lg bg-white/70">
    {process.env.REACT_APP_TWITTER_URL && (
      <Link className="flex m-2" href={process.env.REACT_APP_TWITTER_URL} target="_blank" rel="noreferrer">
        <LinkedInLogo className="transition-all duration-250 fill-neutral-500 hover:fill-neutral-700" />
      </Link>
    )}
    {process.env.REACT_APP_GITHUB_URL && (
      <Link className="flex m-2" href={process.env.REACT_APP_GITHUB_URL} target="_blank" rel="noreferrer">
        <GitHubLogo className="transition-all duration-250 fill-neutral-500 hover:fill-neutral-700" />
      </Link>
    )}
    {process.env.REACT_APP_LINKEDIN_URL && (
      <Link className="flex m-2" href={process.env.REACT_APP_LINKEDIN_URL} target="_blank" rel="noreferrer">
        <TwitterLogo className="transition-all duration-250 fill-neutral-500 hover:fill-neutral-700" />
      </Link>
    )}
  </footer>
);

export default Footer;
