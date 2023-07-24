'use client'

import Image from 'next/image';
import { ChildrenProp } from '../../../utils/props';
import { HeroProps } from '../props';
import AnimateDown from 'src/components/animations/AnimateDown';

const InterestsHero = ({ imgSrc, children, animationDelay, animationDuration }: HeroProps & ChildrenProp) => (
  <AnimateDown
    delay={animationDelay}
    duration={animationDuration}
    className="flex flex-col px-6 py-4 overflow-hidden transition-colors duration-200 ease-in-out rounded-lg md:flex-row-reverse md:gap-8 xl:col-span-2 bg-neutral-100 hover:bg-neutral-200 lg:justify-between md:px-8 md:py-6 xl:max-w-5xl xl:m-auto xl:h-full"
  >
    <div className="flex flex-col justify-start flex-1 order-last mt-4 lg:m-0">
      {children}
    </div>
    {imgSrc &&
      <div className="relative flex justify-center order-first h-60 md:h-full md:w-[20%] xl:w-[40%]">
        <Image src={imgSrc} fill placeholder='blur' alt='interest' className="object-cover object-center max-w-full rounded-md select-none md:object-top" />
      </div>
    }
  </AnimateDown>
);

export default InterestsHero;
