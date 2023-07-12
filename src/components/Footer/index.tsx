'use client'

import Image from 'next/image'
import Link from 'next/link'
import LinkedInLogo from '../shared/LinkedInLogo';

const Footer = () => (
  <footer className="box-border flex justify-center w-full pl-2 mx-auto text-center rounded-lg bg-white/70">
    {process.env.REACT_APP_TWITTER_URL && (
      <Link className="flex m-2" href={process.env.REACT_APP_TWITTER_URL} target="_blank" rel="noreferrer">
        <LinkedInLogo className="transition-all duration-250 fill-neutral-500 hover:fill-neutral-700" />
      </Link>
    )}
    {process.env.REACT_APP_GITHUB_URL && (
      <Link className="flex m-2" href={process.env.REACT_APP_GITHUB_URL} target="_blank" rel="noreferrer">
        <Image src='/static/svg/github-logo.svg' width={20} height={20} alt='github' className="transition-all duration-250 fill-neutral-500 hover:fill-neutral-700 " />
      </Link>
    )}
    {process.env.REACT_APP_LINKEDIN_URL && (
      <Link className="flex m-2" href={process.env.REACT_APP_LINKEDIN_URL} target="_blank" rel="noreferrer">
        <Image src='/static/svg/twitter-logo.svg' width={20} height={20} alt='twitter' className="transition-all duration-250 fill-neutral-500 hover:fill-neutral-700 " />
      </Link>
    )}
  </footer>
);

export default Footer;
