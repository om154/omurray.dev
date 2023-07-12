import Image from 'next/image';
import { ChildrenProp } from '../../../utils/props';
import { HeroProps } from '../props';

const InterestsHero = ({ imgPath, children }: HeroProps & ChildrenProp) => (
  <div className="flex flex-col px-6 py-4 overflow-hidden rounded-lg shadow-lg md:flex-row-reverse md:gap-8 xl:col-span-2 bg-neutral-100 lg:justify-between md:px-8 md:py-6 xl:max-w-5xl xl:m-auto xl:h-full">
    <div className="flex flex-col justify-center flex-1 order-last mt-4 lg:m-0 lg:order-first">
      <div>
        {children}
      </div>
    </div>
    {imgPath &&
      <div className="relative flex justify-center order-first h-60 md:h-full  lg:order-last md:w-[20%] xl:w-[40%]">
        <Image src={imgPath} fill alt='interest' className="object-cover object-center max-w-full rounded-md" />
      </div>
    }
  </div>
);

InterestsHero.defaultProps = {
  imgPath: ''
};

export default InterestsHero;
