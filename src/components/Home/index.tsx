import Greeting from '../Greeting';
import PhotoHero, { PhotoHeroModel } from '../PhotoHero';

const photoHeroes: PhotoHeroModel[] = [
  {
    title: 'Japan',
    month: 'February',
    year: '2023',
    emoji: '🇯🇵',
    directory: 'japan'
  },
  {
    title: 'Norway',
    month: 'June',
    year: '2023',
    emoji: '🇳🇴',
    directory: 'norway'
  },
  {
    title: 'Oregon',
    month: 'July',
    year: '2022',
    emoji: '⛰️',
    directory: 'bend'
  }
]

const Home = () => {
  return (
    <div className='grid grid-cols-1 gap-4 mt-2 overflow-hidden sm:mt-0 sm:grid-flow-row-dense lg:grid-cols-4'>
      <div className='row-span-2 my-4 sm:col-span-2 '>
        <Greeting />
      </div>
      {photoHeroes.map(h =>
        <div className='row-span-2 lg:mb-0 sm:col-span-2'>
          <PhotoHero data={h} />
        </div>
      )}
    </div>
  );
};

export default Home;
