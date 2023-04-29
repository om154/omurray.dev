import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../Footer';

interface ListItemProps {
  title: string
  path: string
  active: boolean
}

const LinkListItem = ({ title, path, active }: ListItemProps) => (
  <li>
    <Link to={path} className={classNames(
      'px-1 md:px-2 py-1 font-sans text-sm hover:bg-neutral-200 hover:text-primary-700 rounded-lg',
      {
        'text-primary-700': active
      }
    )}>{title}</Link>
  </li>
);

const Navigation = () => {
  const location = useLocation();

  return (
    <div className="sticky top-0 z-10 flex items-center justify-center py-4 md:px-1 isolate md:justify-between">
      <nav className='relative flex px-1 py-2 border rounded-lg shadow-md border-neutral-200 bg-white/70 backdrop-blur-md'>
        <ul className='flex flex-row gap-2 list-none'>
          <LinkListItem title="Home" path="/" active={location.pathname === '/'} />
          <LinkListItem title="About me" path="/about" active={location.pathname === '/about'} />
          <LinkListItem title="My interests" path="/interests" active={location.pathname === '/interests'} />
          <LinkListItem title="Contact me" path="/contact" active={location.pathname === '/contact'} />
        </ul>
      </nav>
      <div className='hidden md:flex'>
        <Footer />
      </div>
    </div>
  );
};

export default Navigation;
