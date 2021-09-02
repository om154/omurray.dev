import cn from 'classnames';
import { ChildrenProp } from '../../utils/props';

const Button = ({ className, children }: { className?:string } & ChildrenProp) => <button className={cn('px-3 py-2 md:px-3.5 md:py-2.5 text-sm border rounded-lg hover:bg-primary-700 hover:text-white border-primary-700 text-primary-700 font-semiBold', className)} type="button">{children}</button>;

Button.defaultProps = {
  className: ''
};

export default Button;
