import InterestsHero from 'src/components/Hero/Hobbies';
import { P } from '../../shared/Text';

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
    <h3 className="font-sans text-2xl font-medium text-left text-primary-800 md:text-left tracking-regular">{title}</h3>
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
