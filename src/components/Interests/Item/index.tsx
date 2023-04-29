import { v4 as uuidv4 } from 'uuid';
import InterestsHero from '../../Hero/Interests';
import { H2, P } from '../../shared/Text';

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
      <H2 className="font-bold text-center text-primary-800 md:text-left">
        {title}
      </H2>
      <div>
        {paragraphs.map((paragraph: string) => <P key={uuidv4()} className="mt-4 md:mt-6">{paragraph}</P>)}
      </div>
    </div>
  </InterestsHero>
);

export default Item;
