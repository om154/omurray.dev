'use client'

import classNames from 'classnames';
import Link from "next/link"
import { usePathname } from 'next/navigation'
import Footer from '../Footer';

interface ListItemProps {
  title: string
  path: string
  active: boolean
}

const LinkListItem = ({ title, path, active }: ListItemProps) => (
  <li className='contents'>
    <Link href={path} className={classNames(
      'px-1 md:px-2 py-1 font-sans text-sm hover:bg-neutral-200  hover:text-primary-900 rounded-lg leading-5 transiiton-all duration-200',
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
        <Footer />
      </div>
    </div>
  );
};

export default Navigation;
