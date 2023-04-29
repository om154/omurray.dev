import { ChildrenProp } from '../../../utils/props';
import { HeroProps } from '../props';

const InterestsHero = ({ imgPath, children }: HeroProps & ChildrenProp) => (
  <div className="flex flex-col px-6 py-4 rounded-lg shadow-lg bg-primary-100 lg:justify-around lg:flex-row lg:space-x-6 md:px-12 md:py-8 xl:max-w-5xl xl:m-auto">
    <div className="flex flex-col justify-center order-last mt-4 lg:m-0 lg:w-1/2 lg:order-first">
      <div>
        {children}
      </div>
    </div>
    {imgPath !== '' && (
    <div className="flex justify-center order-first max-h-full lg:w-1/2 lg:order-last">
      <img className="object-cover object-center max-w-full rounded-md " src={imgPath} alt="Oliver" />
    </div>
    )}

  </div>
);

InterestsHero.defaultProps = {
  imgPath: ''
};

export default InterestsHero;
