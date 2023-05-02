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
      'px-1 md:px-2 py-1 font-sans text-sm hover:bg-neutral-200 text-primary-900 hover:text-primary-700 rounded-lg leading-5',
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
      <nav className='relative flex p-1 border rounded-lg shadow-md border-neutral-200 bg-white/70 backdrop-blur-md'>
        <ul className='flex flex-row list-none'>
          <LinkListItem title="Home" path="/" active={location.pathname === '/'} />
          <LinkListItem title="About" path="/about" active={location.pathname === '/about'} />
          <LinkListItem title="Travel" path="/travel" active={location.pathname === '/travel'} />
          <LinkListItem title="Interests" path="/interests" active={location.pathname === '/interests'} />
          <LinkListItem title="Contact" path="/contact" active={location.pathname === '/contact'} />
        </ul>
      </nav>
      <div className='hidden md:flex'>
        <Footer />
      </div>
    </div>
  );
};

export default Navigation;
