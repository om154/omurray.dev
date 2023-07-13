import Image from 'next/image'
import { ChildrenProp } from '../../../utils/props';
import { HeroProps } from '../props';

const AboutMeHero = ({ imgPath, children }: HeroProps & ChildrenProp) => (
  <div className="grid grid-flow-row pb-4 lg:grid-flow-col md:py-0 md:px-0 lg:space-x-12 md:p-0 md:mb-6 md:justify-around md:flex-row">
    {imgPath &&
      <div className="lg:relative hidden mb-4 lg:w-[25em] lg:justify-start lg:mb-0 lg:flex">
        <Image fill className="object-cover object-center rounded-md" src={imgPath} alt="Oliver" />
      </div>
    }
    <div className="flex flex-col items-center justify-center">
      {children}
    </div>
  </div>
);

AboutMeHero.defaultProps = {
  imgPath: ''
};

export default AboutMeHero;
