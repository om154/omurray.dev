import cn from 'classnames';
import { ChildrenProp } from '../../utils/props';

interface TextProps {
  className?: string
}

export const H1 = ({ children, className }: TextProps & ChildrenProp) => (
  <h2 className={cn('box-border text-2xl leading-tight tracking-tight md:text-5xl', className)}>{children}</h2>
);

H1.defaultProps = {
  className: ''
};

export const H2 = ({ children, className }: TextProps & ChildrenProp) => (
  <h2 className={cn('box-border text-xl leading-tight tracking-tight md:text-5xl', className)}>{children}</h2>
);

H2.defaultProps = {
  className: ''
};
