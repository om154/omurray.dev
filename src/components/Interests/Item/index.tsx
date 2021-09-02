import InterestsHero from '../../Hero/Interests';
import { H3 } from '../../shared/Text';

export interface InterestItem {
  title: string
  paragraphs: string[]
  imagePath?: string
}

interface ItemProps {
  item: InterestItem
}

const Item = ({ item: { title, paragraphs, imagePath } }: ItemProps) => (
  <InterestsHero imgPath={imagePath}>
    <div>
      <H3 className="font-bold text-primary-800">
        {title}
      </H3>
      <div>
        {paragraphs.map((paragraph : string) => <p className="mt-6 text-sm leading-4 md:leading-6 md:text-md lg:text-lg font-regular">{paragraph}</p>)}
      </div>
    </div>
  </InterestsHero>
);

export default Item;
