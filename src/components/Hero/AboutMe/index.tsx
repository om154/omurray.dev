import Image from 'next/image';
import AnimateFadeIn from 'src/components/animations/AnimateFadeIn';
import type { ChildrenProp } from '../../../utils/props';
import type { HeroProps } from '../props';

const AboutMeHero = ({
  imgSrc,
  children,
  animationDelay,
  animationDuration,
}: HeroProps & ChildrenProp) => (
  <AnimateFadeIn
    delay={animationDelay}
    duration={animationDuration}
    className="grid grid-flow-row pb-4 lg:grid-flow-col md:py-0 md:px-0 lg:space-x-12 md:p-0 md:mb-6 md:justify-around md:flex-row"
  >
    {imgSrc && (
      <div className="hidden mb-4 lg:block lg:w-[25em] lg:shrink-0 lg:self-start lg:sticky lg:top-24 lg:mb-0">
        <Image
          placeholder="blur"
          className="w-full h-auto aspect-[4/5] object-cover object-center rounded-lg outline-1 -outline-offset-1 outline-black/10 select-none"
          src={imgSrc}
          alt="Oliver Murray"
        />
      </div>
    )}
    <div className="flex flex-col items-center justify-center">{children}</div>
  </AnimateFadeIn>
);

export default AboutMeHero;
