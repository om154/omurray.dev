import cn from 'classnames';
import { ChildrenProp } from '../../utils/props';

interface TextProps {
  className?: string
}

export const H2 = ({ children, className }: TextProps & ChildrenProp) => (
  <h2 className={cn('box-border text-2xl leading-tight tracking-tight opacity-100 md:text-5xl', className)}>{children}</h2>
);

H2.defaultProps = {
  className: ''
};
