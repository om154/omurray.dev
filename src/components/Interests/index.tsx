import Section from '../Section';
import { H2 } from '../shared/Text';
import Item, { InterestItem } from './Item';
import coffeeImg from '../../assets/img/acoffee.jpeg';
import wineImg from '../../assets/img/radikon.jpeg';
import umpiringImg from '../../assets/img/umpiring.jpeg';

const items: InterestItem[] = [
  {
    title: 'Sports',
    paragraphs: [
      'On weekends I normally umpire in the Victorian Amateur Football Assocation (VAFA) 🏉',
      'I have a strong passion for the game of football, and I love being able to meet new people, exercise, and get involved in the community.',
      'More recently I have come to really enjoy running. After finishing the Melbourne Marathon Festival 10km in 2018, last year I completed the Melbourne half marathon! One day I aspire to complete the marathon 🏃‍♂️'
    ],
    imagePath: umpiringImg
  },
  {
    title: 'Coffee ☕️',
    paragraphs: [
      "I have always loved coffee, but it wasn't until buying a pour over (V60) that I really got the chance to try out some of Melbourne's variety of coffee roasters and learn about the intricacies of coffee brewing and roasting.",
      'Pour over produces a very light, clean cup of coffee and tends to be less acidic than espresso.',
      'Some of my favourite coffee roasters in Melbourne are: Market Lane, Acoffee, Seven Seeds & Methodist. I am always looking for suggestions, so please contact me if you have any! 😎'
    ],
    imagePath: coffeeImg
  },
  {
    title: 'Natural Wine 🍷',
    paragraphs: [
      "The term 'natural wine' isn't regulated but generally refers to minimal-intervention wines; makers of natural wine avoid pesticides, chemicals and any other additives. They also tend not to filter their wines, resulting in a cloudy and unique, orange-looking colour 🍊",
      'Most of them are made to be drank (not to age!) and they often taste very crisp, fresh & fruity - sometimes a bit ⚡️crazy ⚡️. For this reason, natural wines have a freshness, liveliness and character that cannot be found in any other commercially-produced wines.',
      "Try out Australian producers such as Brave New, Lucy M, or Momento Mori and you'll see what I mean! ✌🏻"
    ],
    imagePath: wineImg
  }
];

const Interests = () => (
  <Section alignTop className="bg-white text-neutral-800">
    <div className="box-border w-full px-4 mx-auto">
      <div className="text-center">
        <H2 className="mt-0 mb-2 font-bold">Interests</H2>
      </div>
      {items.map((item: InterestItem) => <Item item={item} />)}
    </div>
  </Section>
);

export default Interests;
