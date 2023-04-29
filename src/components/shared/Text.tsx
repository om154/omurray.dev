import cn from 'classnames';
import { ChildrenProp } from '../../utils/props';

interface TextProps {
  className?: string
}

export const H1 = ({ children, className }: TextProps & ChildrenProp) => (
  <h1 className={cn('font-serif font-light box-border text-3xl leading-tight tracking-tight md:text-4xl', className)}>{children}</h1>
);

export const H2 = ({ children, className }: TextProps & ChildrenProp) => (
  <h2 className={cn('font-serif font-regular box-border text-2xl leading-tight tracking-tight md:text-4xl', className)}>{children}</h2>
);

export const H3 = ({ children, className }: TextProps & ChildrenProp) => (
  <h3 className={cn('font-serif font-regular box-border text-lg leading-tight tracking-tight md:text-2xl', className)}>{children}</h3>
);

export const H4 = ({ children, className }: TextProps & ChildrenProp) => (
  <h4 className={cn('font-serif font-regular box-border text-md leading-tight tracking-tight md:text-xl', className)}>{children}</h4>
);

export const P = ({ children, className }: TextProps & ChildrenProp) => (
  <p className={cn('text-sm leading-4 md:leading-6 md:text-md lg:text-lg font-regular', className)}>{children}</p>
);

H1.defaultProps = {
  className: ''
};

H2.defaultProps = {
  className: ''
};

H3.defaultProps = {
  className: ''
};

H4.defaultProps = {
  className: ''
};

P.defaultProps = {
  className: ''
};
