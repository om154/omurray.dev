import { v4 as uuidv4 } from 'uuid';
import Section from '../Section';
import Item, { InterestItem } from './Item';
import coffeeImg from '../../assets/img/acoffee.jpeg';
import wineImg from '../../assets/img/susucaru.jpeg';
import runningImg from '../../assets/img/running.jpeg';
import Navigation from '../Navigation';
import PageContainer from '../shared/PageContainer';

const items: InterestItem[] = [
  {
    title: 'Sports 🏃🏻‍♂️',
    paragraphs: [
      'I have really been enjoyined running lately 🏃🏻‍♂️ I also recently tried out hiking & trail running after years on the road ⛰️',
      'I ran the Melbourne Marathon Festival, including the 10km and the Half Marathon. One day I aspire to complete a marathon!',
      'When I lived in Melbourne, I umpired Australian Rules football first locally, and for two years at the Victorian State League. 🏉',
    ],
    imagePath: runningImg
  },
  {
    title: 'Coffee  ☕️',
    paragraphs: [
      "I have always liked coffee, but it wasn't until trying filter coffee that I really experienced some of Melbourne's finest coffee roasters. I love to learn about the intricacies of coffee brewing and roasting.",
      'Pour over filters produce a very light, clean cup of coffee and it tends to be much less acidic than espresso. It\'s now a daily habit to wake up and make a cup of filter coffee!',
      'Some of my favourite coffee roasters in Melbourne are: Market Lane, Acoffee, Seven Seeds & Methodist. I am always looking for suggestions, so please pass them on!'
    ],
    imagePath: coffeeImg
  },
  {
    title: 'Natural Wine  🍷',
    paragraphs: [
      'The phrase \'natural wine\' generally refers to wine made with minimal intervention. Really, this means avoiding pesticides, chemicals and any other additives. Natural winemakers also tend not to filter their wines, resulting in a cloudy and unique, orange-looking colour 🍊.',
      'Most are made to drink (not to cellar) and often taste crisp, fresh & fruity... sometimes a bit crazy!',
      "There are dozens, but some  Australian producers I've liked are Lucy M, Brave New and Momento Mori. Try them and you'll see what I mean! ✌🏻"
    ],
    imagePath: wineImg
  }
];

const Interests = () => (
  <PageContainer>
    <Navigation />
    <Section alignTop>
      <div className="box-border w-full">
        <div className="text-left">
          <h2 className="font-serif text-6xl font-extralight text-neutral-900 md:text-8xl">My interests</h2>
        </div>
        <div className="box-border w-full mx-auto space-y-6 md:my-6">
          {items.map((item: InterestItem) => <Item key={uuidv4()} item={item} />)}
        </div>
        <div className="h-4" />
      </div>
    </Section>
  </PageContainer>
);

export default Interests;
