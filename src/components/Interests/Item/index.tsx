import InterestsHero from '../../Hero/Interests';
import { H3, P } from '../../shared/Text';

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
      <H3 className="font-bold text-center text-primary-800 md:text-left">
        {title}
      </H3>
      <div>
        {paragraphs.map((paragraph : string) => <P className="mt-6">{paragraph}</P>)}
      </div>
    </div>
  </InterestsHero>
);

export default Item;
