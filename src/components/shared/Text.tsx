import cn from 'classnames';
import { ChildrenProp } from '../../utils/props';
import AnimateFadeIn from '../animations/AnimateFadeIn';

const TEXT_ANIMATION_DURATION = 0.35

interface TextProps {
  className?: string
}

export const H1 = ({ children, className }: TextProps & ChildrenProp) => (
  <AnimateFadeIn duration={TEXT_ANIMATION_DURATION}>
    <h1 className={cn('font-serif font-light box-border text-2xl leading-tight tracking-tight lg:text-3xl', className)}>{children}</h1>
  </AnimateFadeIn>
);

export const H2 = ({ children, className }: TextProps & ChildrenProp) => (
  <AnimateFadeIn duration={TEXT_ANIMATION_DURATION}>
    <h2 className={cn('font-serif font-light box-border text-neutral-900 text-3xl leading-tight tracking-tight md:text-6xl', className)}>{children}</h2>
  </AnimateFadeIn>
);

export const H3 = ({ children, className }: TextProps & ChildrenProp) => (
  <AnimateFadeIn duration={TEXT_ANIMATION_DURATION}>
    <h3 className={cn('font-serif font-light box-border text-lg leading-tight tracking-tight md:text-xl lg:text-2xl', className)}>{children}</h3>
  </AnimateFadeIn>
);

export const H4 = ({ children, className }: TextProps & ChildrenProp) => (
  <AnimateFadeIn duration={TEXT_ANIMATION_DURATION}>
    <h4 className={cn('font-serif font-light box-border text-md leading-tight tracking-tight md:text-2xl lg:text-xl', className)}>{children}</h4>
  </AnimateFadeIn>
);

export const P = ({ children, className }: TextProps & ChildrenProp) => (
  <AnimateFadeIn duration={TEXT_ANIMATION_DURATION}>
    <div className={cn('leading-6 tracking-regular', className)}>{children}</div>
  </AnimateFadeIn>
);
