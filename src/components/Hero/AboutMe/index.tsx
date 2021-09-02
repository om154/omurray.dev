import { ChildrenProp } from '../../../utils/props';
import { HeroProps } from '../props';

const AboutMeHero = ({ imgPath, children }: HeroProps & ChildrenProp) => (
  <div className="flex flex-col md:space-x-4 md:mt-6 md:mb-6 md:justify-around md:flex-row">
    {imgPath !== '' && (
    <div className="flex justify-center">
      <img className="object-cover object-center w-48 rounded-md md:w-72 lg:w-96 xl:w-3/4" src={imgPath} alt="Oliver" />
    </div>
    )}
    <div className="flex flex-col justify-center mt-4 md:m-0">
      <div className="md:w-72 lg:w-96">
        {children}
      </div>
    </div>
  </div>
);

AboutMeHero.defaultProps = {
  imgPath: ''
};

export default AboutMeHero;
