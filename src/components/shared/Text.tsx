import cn from 'classnames';
import { ChildrenProp } from '../../utils/props';

interface TextProps {
  className?: string
}

export const H1 = ({ children, className }: TextProps & ChildrenProp) => (
  <h1 className={cn('font-serif font-light box-border text-2xl leading-tight tracking-tight md:text-3xl lg:text-4xl selection:bg-primary-700 selection:text-white', className)}>{children}</h1>
);

export const H2 = ({ children, className }: TextProps & ChildrenProp) => (
  <h2 className={cn('font-serif font-light box-border text-neutral-900 text-3xl leading-tight tracking-tight md:text-6xl', className)}>{children}</h2>
);

export const H3 = ({ children, className }: TextProps & ChildrenProp) => (
  <h3 className={cn('font-serif font-regular box-border text-lg leading-tight tracking-tight md:text-xl lg:text-2xl selection:bg-primary-700 selection:text-white', className)}>{children}</h3>
);

export const H4 = ({ children, className }: TextProps & ChildrenProp) => (
  <h4 className={cn('font-serif font-regular box-border text-md leading-tight tracking-tight md:text-2xl lg:text-xl selection:bg-primary-700 selection:text-white', className)}>{children}</h4>
);

export const P = ({ children, className }: TextProps & ChildrenProp) => (
  <div className={cn('leading-6 tracking-tight selection:bg-primary-700 selection:text-white', className)}>{children}</div>
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
