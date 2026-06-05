import cn from 'classnames';
import { ElementType } from 'react';
import { ChildrenProp } from '../../utils/props';
import AnimateFadeIn from '../animations/AnimateFadeIn';

const TEXT_ANIMATION_DURATION = 0.35

interface TextProps {
  className?: string
  /** Override the rendered element while keeping the visual style, e.g. as="h1" */
  as?: ElementType
}

export const H1 = ({ children, className, as: Tag = 'h1' }: TextProps & ChildrenProp) => (
  <AnimateFadeIn duration={TEXT_ANIMATION_DURATION}>
    <Tag className={cn('font-serif font-light box-border text-2xl leading-tight tracking-tight lg:text-3xl', className)}>{children}</Tag>
  </AnimateFadeIn>
);

export const H2 = ({ children, className, as: Tag = 'h2' }: TextProps & ChildrenProp) => (
  <AnimateFadeIn duration={TEXT_ANIMATION_DURATION}>
    <Tag className={cn('font-serif font-light box-border text-neutral-900 text-3xl leading-tight tracking-tight md:text-6xl', className)}>{children}</Tag>
  </AnimateFadeIn>
);

export const H3 = ({ children, className, as: Tag = 'h3' }: TextProps & ChildrenProp) => (
  <AnimateFadeIn duration={TEXT_ANIMATION_DURATION}>
    <Tag className={cn('font-serif font-light box-border text-lg leading-tight tracking-tight md:text-xl lg:text-2xl', className)}>{children}</Tag>
  </AnimateFadeIn>
);

export const H4 = ({ children, className, as: Tag = 'h4' }: TextProps & ChildrenProp) => (
  <AnimateFadeIn duration={TEXT_ANIMATION_DURATION}>
    <Tag className={cn('font-serif font-light box-border text-md leading-tight tracking-tight md:text-2xl lg:text-xl', className)}>{children}</Tag>
  </AnimateFadeIn>
);

export const P = ({ children, className, as: Tag = 'p' }: TextProps & ChildrenProp) => (
  <AnimateFadeIn duration={TEXT_ANIMATION_DURATION}>
    <Tag className={cn('leading-6 tracking-regular', className)}>{children}</Tag>
  </AnimateFadeIn>
);
