import Greeting from '../Greeting';
import JapanHero from '../JapanHero';

const Home = () => {
  return (
    <div className='grid grid-cols-1 gap-4 mt-2 md:mt-0 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      <div className='h-full row-span-2 mb-4 lg:mb-0 sm:col-span-2 lg:aspect-square'>
        <Greeting />
      </div>
      <JapanHero />
    </div>
  );
};

export default Home;
