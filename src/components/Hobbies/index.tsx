import Section from '../Section';
import Item, { InterestItem } from './Item';
import { H2, P } from '../shared/Text';
import runningImg from 'public/static/img/running.jpeg'
import coffeeImg from 'public/static/img/acoffee.jpeg'
import wineImg from 'public/static/img/susucaru.jpeg'
import tennisImg from 'public/static/img/rolandgarros.jpeg'

const items: InterestItem[] = [
  {
    title: '🏃🏻‍♂️ Running & hiking',
    paragraphs: [
      'My go-to form of exercise is running. Recently I started hiking and running on trails too! ⛰️',
      'In the past I have run at the Melbourne Marathon Festival, including the 10km and the Half Marathon - one day I aspire to complete a marathon!',
      'When I lived in Melbourne, I umpired Australian Rules football including two years at the Victorian State League. 🏉',
    ],
    imagePath: runningImg
  },
  {
    title: '☕️ Making coffee',
    paragraphs: [
      "I have always loved coffee, but learning to make pour over coffee opened up a whole experience of Melbourne's coffee scene. I really enjoy learning about the intricacies of coffee brewing and roasting.",
      'Pour over brewing produces a very light, clean cup of coffee ands tends to be much less acidic than espresso. It\'s now a daily habit to make pour over using a v60, even whilst traveling!',
      'Some of my favourite coffee roasters in Melbourne are Market Lane and Seven Seeds. I am always looking for suggestions, so please send them my way!'
    ],
    imagePath: coffeeImg
  },
  {
    title: '🍷 Drinking natural wine',
    paragraphs: [
      'The phrase \'natural wine\' generally refers to wine made with minimal intervention. This means avoiding using pesticides, chemicals and any other additives. Natural winemakers also tend not to filter their wines, resulting in a cloudy and unique, orange-looking colour 🍊',
      'Most are made to drink (not to cellar) and often taste crisp, fresh & fruity... sometimes a bit crazy!',
      "There are dozens, but some  Australian producers I've liked are Lucy M, Brave New and Momento Mori. Try them and you'll see what I mean! ✌🏻"
    ],
    imagePath: wineImg
  },
  {
    title: '🎾 Playing & watching sports',
    paragraphs: [
      'I\'m a big sports fan, and I grew up playing Cricket and Australian Rules football.',
      'Every year, my parents would take me to the Australian Open and earlier this year I was fortunate enough to visit Paris during Roland-Garros!',
      'My girlfriend & I had a blast watching the 🇩🇪 Zverev vs Tiafoe 🇺🇸 match in the Quarter Finals.'
    ],
    imagePath: tennisImg
  }
];

const Hobbies = () => (
  <Section alignTop>
    <div className="w-full mb-2 text-left">
      <H2>Hobbies</H2>
      <P className='mt-2 text-neutral-900/90'>Most days you can find me...</P>
    </div>
    <div className='box-border grid grid-cols-1 gap-4 md:grid-flow-row-dense md:auto-rows-fr md:grid-cols-1 xl:grid-cols-4'>
      {items.map((item: InterestItem, index: number) => (
        <Item
          key={`hobbies-grid-item-${item.title.toLocaleLowerCase()}`}
          item={item}
          animationDelay={(index + 1) * .15}
        />
      ))}
    </div>
  </Section>
);

export default Hobbies;
