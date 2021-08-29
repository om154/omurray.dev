import cn from 'classnames';
import { ChildrenProp } from '../../utils/props';

const Button = ({ className, children }: { className?:string } & ChildrenProp) => <button className={cn('px-5 py-3 border rounded-lg hover:bg-neutral-700 hover:text-neutral-000 border-neutral-700 text-neutral-700 font-semiBold', className)} type="button">{children}</button>;

Button.defaultProps = {
  className: ''
};

export default Button;
