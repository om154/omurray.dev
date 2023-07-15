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
  <InterestsHero imgSrc={imagePath}>
    <div>
      <h2 className="box-border font-serif text-xl leading-tight tracking-tight text-center font-regular md:text-2xl lg:text-3xl text-primary-800 md:text-left">
        {title}
      </h2>
      <div>
        {paragraphs.map((paragraph: string, i: number) => <P key={`interests-item-p-${i}`} className="mt-4 md:mt-6">{paragraph}</P>)}
      </div>
    </div>
  </InterestsHero>
);

export default Item;
