import InterestsHero from 'src/components/Hero/Hobbies';
import { H2, H3, P } from '../../shared/Text';

export interface InterestItem {
  title: string
  paragraphs: string[]
  imagePath?: string
}

interface ItemProps {
  item: InterestItem
  animationDelay: number
}

const Item = ({ item: { title, paragraphs, imagePath }, animationDelay }: ItemProps) => (
  <InterestsHero imgSrc={imagePath} animationDelay={animationDelay}>
    <H3 className="text-center text-primary-800 md:text-left">{title}</H3>
    <div className='mt-1'>
      {paragraphs.map((paragraph: string, i: number) => (
        <P key={`hobbies-item-p-${i}`} className="mt-2 md:mt-4">
          {paragraph}
        </P>
      ))}
    </div>
  </InterestsHero>
);

export default Item;
