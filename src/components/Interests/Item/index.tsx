import Hero from '../../Hero';
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
  <Hero imgPath={imagePath}>
    <div>
      <H3>
        {title}
      </H3>
      <div>
        {paragraphs.map((paragraph : string) => <p>{paragraph}</p>)}
      </div>
    </div>
  </Hero>
);

export default Item;
