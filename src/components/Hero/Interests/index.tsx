import { ChildrenProp } from '../../../utils/props';
import { HeroProps } from '../props';

const InterestsHero = ({ imgPath, children }: HeroProps & ChildrenProp) => (
  <div className="flex flex-col m-4 rounded-md shadow-xl md:m-10 bg-neutral-200 md:space-x-4 md:mt-10 md:mb-10 md:justify-around md:flex-row">
    {imgPath !== '' && (
    <div className="flex justify-center max-h-full md:w-1/2 md:order-last">
      <img className="object-cover object-center max-w-full " src={imgPath} alt="Oliver" />
    </div>
    )}
    <div className="flex flex-col justify-center mt-2 md:m-0 md:w-1/2 md:order-first">
      <div>
        {children}
      </div>
    </div>
  </div>
);

InterestsHero.defaultProps = {
  imgPath: ''
};

export default InterestsHero;
