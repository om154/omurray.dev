import Greeting from '../Greeting';
import PhotoHero from '../PhotoHero';

const Home = () => {
  return (
    <div className='grid grid-cols-1 gap-4 mt-2 overflow-hidden md:mt-0 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      <div className='h-full row-span-2 mb-4 lg:mb-2 sm:col-span-2 '>
        <Greeting />
      </div>
      <div className='row-span-2 lg:mb-0 sm:col-span-2'>
        <PhotoHero title='Japan, 2023' emoji='🇯🇵' directory='japan' />
      </div>
      <div className='row-span-2 lg:mb-0 sm:col-span-2'>
        <PhotoHero title='Norway, 2023' emoji='🇳🇴' directory='norway' />
      </div>
    </div>
  );
};

export default Home;
