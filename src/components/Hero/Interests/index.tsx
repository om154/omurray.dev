import { ChildrenProp } from '../../../utils/props';
import { HeroProps } from '../props';

const InterestsHero = ({ imgPath, children }: HeroProps & ChildrenProp) => (
  <div className="flex flex-col px-6 py-6 rounded-lg shadow-lg bg-primary-100 md:justify-around md:flex-row md:space-x-6">
    <div className="flex flex-col justify-center order-last mt-4 md:m-0 md:w-1/2 md:order-first">
      <div>
        {children}
      </div>
    </div>
    {imgPath !== '' && (
    <div className="flex justify-center order-first max-h-full md:w-1/2 md:order-last">
      <img className="object-cover object-center max-w-full " src={imgPath} alt="Oliver" />
    </div>
    )}

  </div>
);

InterestsHero.defaultProps = {
  imgPath: ''
};

export default InterestsHero;
