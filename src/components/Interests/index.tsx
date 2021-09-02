import Section from '../Section';
import { H2 } from '../shared/Text';
import Item, { InterestItem } from './Item';
import coffeeImg from '../../assets/img/acoffee.jpeg';
import wineImg from '../../assets/img/susucaru.jpeg';
import runningImg from '../../assets/img/running.jpeg';

const items: InterestItem[] = [
  {
    title: 'Sports',
    paragraphs: [
      'I\'m a big fan of all things sports, and am always looking to try new things!',
      'Recently I have gotten a lot of enjoyment out of running. Anything from slow long runs to quicker & shorter tempo or interval sessions! 🏃🏻‍♂️',
      'In the past I have participated in the Melbourne Marathon Festival, including the 10km in 2018 and the half marathon in 2019! One day I aspire to complete a marathon 😬',
      'Previously, I umpired Australian rules football in the Victorian Amateur Football Assocation (VAFA) and at AFL Victoria\'s State League 🏉',
    ],
    imagePath: runningImg
  },
  {
    title: 'Coffee  ☕️',
    paragraphs: [
      "I have always loved coffee, but it wasn't until trying filter coffee that I really got the chance to try out some of Melbourne's variety of coffee roasters and learn about the intricacies of coffee brewing and roasting.",
      'Pour over produces a very light, clean cup of coffee and tends to be much less acidic than espresso. It\'s now a daily habit to wake up and make a cup of filter coffee!',
      'Some of my favourite coffee roasters in Melbourne are: Market Lane, Acoffee, Seven Seeds & Methodist. I am always looking for suggestions, so please contact me if you have any! 😎'
    ],
    imagePath: coffeeImg
  },
  {
    title: 'Natural Wine  🍷',
    paragraphs: [
      'The phrase natural wine generally refers to minimal intervention wines. Really, this means avoiding pesticides, chemicals and any other additives. Natural winemakers also tend not to filter their wines, resulting in a cloudy and unique, orange-looking colour 🍊',
      'Most are made to be drank (not to age!) and often taste crisp, fresh & fruity... sometimes a bit ⚡️crazy⚡️',
      'Natural wines have a freshness, liveliness and character that I\'m yet to find in other commercially-produced wines!',
      "Try out Australian producers such as Lucy M, Brave New or Momento Mori and you'll see what I mean! ✌🏻"
    ],
    imagePath: wineImg
  }
];

const Interests = () => (
  <Section alignTop className="bg-neutral-300 text-primary-900">
    <div className="text-center">
      <H2 className="mt-0 mb-2 font-bold text-primary-800">Interests</H2>
    </div>
    <div className="box-border w-full mx-auto space-y-6 md:my-6">
      {items.map((item: InterestItem) => <Item item={item} />)}
    </div>
  </Section>
);

export default Interests;
