import Greeting from '../Greeting';
import PhotoHero, { PhotoHeroModel } from '../PhotoHero';
import { photoHeroes } from './photoHeroes';

const Home = () => {
  return (
    <div className='grid grid-cols-1 gap-4 mt-2 overflow-hidden sm:mt-0 sm:grid-flow-row-dense lg:grid-cols-4'>
      <div className='row-span-2 my-4 sm:col-span-2 '>
        <Greeting />
      </div>
      {photoHeroes.map((h, i) =>
        <div key={`photo-hero-${h.title.toLocaleLowerCase()}`} className='row-span-2 lg:mb-0 sm:col-span-2'>
          <PhotoHero data={h} animationDelay={(i + 1) * .2} />
        </div>
      )}
    </div>
  );
};

export default Home;
