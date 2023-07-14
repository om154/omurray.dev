import { v4 as uuidv4 } from 'uuid';
import Section from '../Section';
import Item, { InterestItem } from './Item';
import { H2 } from '../shared/Text';

const items: InterestItem[] = [
  {
    title: 'Sports 🏃🏻‍♂️',
    paragraphs: [
      'Lately, I have really enjoyed running 🏃🏻‍♂️ I also recently tried hiking, and trail running after years on the road! ⛰️',
      'In the past I have run at the Melbourne Marathon Festival, including the 10km and the Half Marathon. One day I aspire to complete a marathon!',
      'When I lived in Melbourne, I umpired Australian Rules football including two years at the Victorian State League. 🏉',
    ],
    imagePath: '/static/img/running.jpeg'
  },
  {
    title: 'Coffee  ☕️',
    paragraphs: [
      "I have always loved coffee, but learning to make pour over coffee opened up a whole new experiences of Melbourne's finest coffee roasters. I love to learn about the intricacies of coffee brewing and roasting.",
      'Pour over filters produce a very light, clean cup of coffee and they tend to be much less acidic than espresso. It\'s now a daily habit to make pour over using a v60, even whilst traveling!',
      'Some of my favourite coffee roasters in Melbourne are: Market Lane, Acoffee, Seven Seeds & Methodist. I am always looking for suggestions, so please share!'
    ],
    imagePath: '/static/img/acoffee.jpeg'
  },
  {
    title: 'Natural Wine  🍷',
    paragraphs: [
      'The phrase \'natural wine\' generally refers to wine made with minimal intervention. This means avoiding using pesticides, chemicals and any other additives. Natural winemakers also tend not to filter their wines, resulting in a cloudy and unique, orange-looking colour 🍊',
      'Most are made to drink (not to cellar) and often taste crisp, fresh & fruity... sometimes a bit crazy!',
      "There are dozens, but some  Australian producers I've liked are Lucy M, Brave New and Momento Mori. Try them and you'll see what I mean! ✌🏻"
    ],
    imagePath: '/static/img/susucaru.jpeg'
  }
];

const Interests = () => (
  <Section alignTop>
    <div className="w-full mb-2 text-left">
      <H2>Interests</H2>
    </div>
    <div className='box-border grid grid-cols-1 gap-4 md:grid-flow-row-dense md:auto-rows-fr md:grid-cols-1 xl:grid-cols-4'>
      {items.map((item: InterestItem) => <Item key={uuidv4()} item={item} />)}
    </div>
  </Section>
);

export default Interests;
