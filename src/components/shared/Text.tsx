import cn from 'classnames';
import type { ElementType } from 'react';
import type { ChildrenProp } from '../../utils/props';
import AnimateFadeIn from '../animations/AnimateFadeIn';

const TEXT_ANIMATION_DURATION = 0.35;

interface TextProps {
  className?: string;
  /** Override the rendered element while keeping the visual style, e.g. as="h1" */
  as?: ElementType;
}

export const H1 = ({
  children,
  className,
  as: Tag = 'h1',
}: TextProps & ChildrenProp) => (
  <AnimateFadeIn duration={TEXT_ANIMATION_DURATION}>
    <Tag
      className={cn(
        'font-heading font-medium box-border text-2xl leading-[1.2] tracking-[-0.02em] text-pretty md:text-3xl lg:text-4xl',
        className,
      )}
    >
      {children}
    </Tag>
  </AnimateFadeIn>
);

export const H2 = ({
  children,
  className,
  as: Tag = 'h2',
}: TextProps & ChildrenProp) => (
  <AnimateFadeIn duration={TEXT_ANIMATION_DURATION}>
    <Tag
      className={cn(
        'font-heading font-semiBold box-border text-neutral-1000 text-4xl leading-none tracking-[-0.03em] md:text-6xl',
        className,
      )}
    >
      {children}
    </Tag>
  </AnimateFadeIn>
);

export const H3 = ({
  children,
  className,
  as: Tag = 'h3',
}: TextProps & ChildrenProp) => (
  <AnimateFadeIn duration={TEXT_ANIMATION_DURATION}>
    <Tag
      className={cn(
        'font-heading font-semiBold box-border text-lg leading-tight tracking-[-0.01em] md:text-xl lg:text-2xl',
        className,
      )}
    >
      {children}
    </Tag>
  </AnimateFadeIn>
);

export const H4 = ({
  children,
  className,
  as: Tag = 'h4',
}: TextProps & ChildrenProp) => (
  <AnimateFadeIn duration={TEXT_ANIMATION_DURATION}>
    <Tag
      className={cn(
        'font-heading font-semiBold box-border text-md leading-tight tracking-[-0.01em] md:text-2xl lg:text-xl',
        className,
      )}
    >
      {children}
    </Tag>
  </AnimateFadeIn>
);

export const P = ({
  children,
  className,
  as: Tag = 'p',
}: TextProps & ChildrenProp) => (
  <AnimateFadeIn duration={TEXT_ANIMATION_DURATION}>
    <Tag className={cn('leading-6 tracking-regular', className)}>
      {children}
    </Tag>
  </AnimateFadeIn>
);
