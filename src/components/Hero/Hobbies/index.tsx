import Image from 'next/image';
import AnimateDown from 'src/components/animations/AnimateDown';
import type { ChildrenProp } from '../../../utils/props';
import type { HeroProps } from '../props';

interface InterestsHeroProps extends HeroProps {
  alt: string;
}

const InterestsHero = ({
  imgSrc,
  alt,
  children,
  animationDelay,
  animationDuration,
}: InterestsHeroProps & ChildrenProp) => (
  <AnimateDown
    delay={animationDelay}
    duration={animationDuration}
    className="flex flex-col px-6 py-4 overflow-hidden rounded-lg md:flex-row-reverse md:gap-8 xl:col-span-2 bg-neutral-100 lg:justify-between md:px-8 md:py-6 xl:max-w-5xl xl:m-auto xl:h-full"
  >
    <div className="flex flex-col justify-start flex-1 order-last mt-4 lg:m-0">
      {children}
    </div>
    {imgSrc && (
      <div className="order-first md:w-[30%] md:shrink-0 md:self-start xl:w-[40%]">
        <Image
          src={imgSrc}
          placeholder="blur"
          alt={alt}
          className="w-full h-60 object-cover object-center rounded-lg outline-1 -outline-offset-1 outline-black/10 select-none md:h-auto md:aspect-[4/5]"
        />
      </div>
    )}
  </AnimateDown>
);

export default InterestsHero;
