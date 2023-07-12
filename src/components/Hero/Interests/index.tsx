import { ChildrenProp } from '../../../utils/props';
import { HeroProps } from '../props';

const InterestsHero = ({ imgPath, children }: HeroProps & ChildrenProp) => (
  <div className="flex flex-col px-6 py-4 overflow-hidden rounded-lg shadow-lg md:flex-row-reverse md:gap-8 xl:col-span-2 bg-neutral-100 lg:justify-between md:px-8 md:py-6 xl:max-w-5xl xl:m-auto xl:h-full">
    <div className="flex flex-col justify-center order-last mt-4 lg:m-0 lg:order-first">
      <div>
        {children}
      </div>
    </div>
    {imgPath !== '' && (
    <div className="flex justify-center order-first max-h-full lg:order-last md:max-w-[33%]">
      <img className="object-cover object-center max-w-full rounded-md " src={imgPath} alt="Oliver" />
    </div>
    )}
  </div>
);

InterestsHero.defaultProps = {
  imgPath: ''
};

export default InterestsHero;
