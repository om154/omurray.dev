import { ChildrenProp } from '../../../utils/props';
import { HeroProps } from '../props';

const AboutMeHero = ({ imgPath, children }: HeroProps & ChildrenProp) => (
  <div className="flex flex-col py-4 md:py-0 md:px-0 md:space-x-12 md:p-0 md:mt-6 md:mb-6 md:justify-around md:flex-row">
    {imgPath !== '' && (
    <div className="flex justify-start">
      <img className="object-cover object-center rounded-md md:w-min-[25em]" src={imgPath} alt="Oliver" />
    </div>
    )}
    <div className="flex flex-col items-center justify-center mt-4 md:m-0">
      <div className="px-4 md:px-0">
        {children}
      </div>
    </div>
  </div>
);

AboutMeHero.defaultProps = {
  imgPath: ''
};

export default AboutMeHero;
