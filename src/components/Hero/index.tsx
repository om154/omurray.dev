import { ChildrenProp } from '../../utils/props';

interface HeroProps {
  imgPath?: string
}

const Hero = ({ imgPath, children }: HeroProps & ChildrenProp) => (
  <div className="flex flex-col md:space-x-4 md:mt-6 md:mb-6 md:justify-around md:flex-row">
    {imgPath !== '' && (
    <div className="flex justify-center">
      <img className="object-cover object-center w-48 md:w-72 lg:w-96 xl:w-3/4" src={imgPath} alt="Oliver" />
    </div>
    )}
    <div className="flex flex-col justify-center mt-2 md:m-0">
      <div className="md:w-72 lg:w-96 xl:w-1/2">
        {children}
      </div>
    </div>
  </div>
);

Hero.defaultProps = {
  imgPath: ''
};

export default Hero;
