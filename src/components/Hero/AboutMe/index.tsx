import { ChildrenProp } from '../../../utils/props';
import { HeroProps } from '../props';

const AboutMeHero = ({ imgPath, children }: HeroProps & ChildrenProp) => (
  <div className="grid grid-flow-row pb-4 mt-4 lg:grid-flow-col md:py-0 md:px-0 lg:space-x-12 md:p-0 md:mb-6 md:justify-around md:flex-row">
    {imgPath !== '' && (
      <div className="flex justify-center w-full mb-4 lg:justify-start lg:mb-0">
        <img className="object-cover object-center rounded-md sm:w-[25em]" src={imgPath} alt="Oliver" />
    </div>
    )}
    <div className="flex flex-col items-center justify-center lg:mt-4 md:m-0">
      <div className="px-2 lg:px-0">
        {children}
      </div>
    </div>
  </div>
);

AboutMeHero.defaultProps = {
  imgPath: ''
};

export default AboutMeHero;
