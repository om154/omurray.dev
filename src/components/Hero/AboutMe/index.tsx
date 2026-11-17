import Image from 'next/image';
import type { ReactNode } from 'react';
import AnimateFadeIn from 'src/components/animations/AnimateFadeIn';
import type { ChildrenProp } from '../../../utils/props';
import type { HeroProps } from '../props';

interface AboutMeHeroProps extends HeroProps {
  title: ReactNode;
}

const AboutMeHero = ({
  imgSrc,
  title,
  children,
  animationDelay,
  animationDuration,
}: AboutMeHeroProps & ChildrenProp) => (
  <AnimateFadeIn
    delay={animationDelay}
    duration={animationDuration}
    className="grid grid-flow-row pb-4 lg:grid-flow-col md:py-0 md:px-0 lg:space-x-12 md:p-0 md:mb-6 md:justify-around md:flex-row"
  >
    <div className="mb-4 lg:w-[25em] lg:shrink-0 lg:self-start lg:sticky lg:top-24 lg:mb-0">
      {title}
      {imgSrc && (
        <Image
          placeholder="blur"
          sizes="400px"
          className="hidden w-full h-auto mt-4 aspect-[4/5] object-cover object-center rounded-lg outline-1 -outline-offset-1 outline-black/10 select-none lg:block"
          src={imgSrc}
          alt="Oliver Murray"
        />
      )}
    </div>
    <div className="flex flex-col items-center justify-center">{children}</div>
  </AnimateFadeIn>
);

export default AboutMeHero;
