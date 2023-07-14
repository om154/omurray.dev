import cn from 'classnames';
import { ChildrenProp } from '../../utils/props';

interface PillProps {
  className?: string
}

const Pill = ({ children, className }: ChildrenProp & PillProps) => (
  <div className={cn('w-full px-3 py-2 font-bold rounded-lg shadow-md bg-white text-primary-900', className)}>
    <div className="flex items-center justify-between">
      {children}
    </div>
  </div>
);

Pill.defaultProps = {
  className: ''
};

export default Pill;
