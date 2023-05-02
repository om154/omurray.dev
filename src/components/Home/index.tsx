import Greeting from '../Greeting';
import Navigation from '../Navigation';
import PageContainer from '../shared/PageContainer';

const Home = () => {
  return (
    <PageContainer>
      <Navigation />
      <div className='grid grid-cols-1 gap-4 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <div className='h-full row-span-2 sm:col-span-2 lg:aspect-square'>
          <Greeting />
        </div>
        <div className='aspect-[2] sm:col-span-2 px-1 pb-2 rounded-lg bg-neutral-800'>
          {/* TODO: add content */}
        </div>
        <div className='px-1 pb-2 rounded-lg aspect-squar bg-neutral-400'>
          {/* TODO: add content */}
        </div>
        <div className='px-1 pb-2 rounded-lg aspect-square bg-neutral-600'>
          {/* TODO: add content */}
        </div>
        <div className='px-1 pb-2 aspect-square bg-neutral-300'>
          {/* TODO: add content */}
        </div>
        <div className='aspect-[2] sm:col-span-2 px-1 pb-2 rounded-lg bg-neutral-800'>
          {/* TODO: add content */}
        </div>
        <div className='px-1 pb-2 rounded-lg aspect-square bg-neutral-600'>
          {/* TODO: add content */}
        </div>
        <div className='px-1 pb-2 rounded-lg aspect-square bg-neutral-400'>
          {/* TODO: add content */}
        </div>
        <div className='px-1 pb-2 rounded-lg aspect-square bg-neutral-700'>
          {/* TODO: add content */}
        </div>
        <div className='px-1 pb-2 rounded-lg aspect-square bg-neutral-200'>
          {/* TODO: add content */}
        </div>
        <div className='px-1 pb-2 rounded-lg aspect-square bg-neutral-300'>
          {/* TODO: add content */}
        </div>
        <div className='aspect-[2] sm:col-span-2 px-1 pb-2 rounded-lg bg-neutral-600'>
          {/* TODO: add content */}
        </div>
        <div className='px-1 pb-2 rounded-lg aspect-square bg-neutral-400'>
          {/* TODO: add content */}
        </div>
        <div className='px-1 pb-2 rounded-lg aspect-square bg-neutral-600'>
          {/* TODO: add content */}
        </div>
        <div className='px-1 pb-2 rounded-lg aspect-square bg-neutral-500'>
          {/* TODO: add content */}
        </div>
        <div className='px-1 pb-2 rounded-lg aspect-square bg-neutral-500'>
          {/* TODO: add content */}
        </div>
        <div className='px-1 pb-2 rounded-lg aspect-square bg-neutral-300'>
          {/* TODO: add content */}
        </div>
        <div className='px-1 pb-2 rounded-lg aspect-square bg-neutral-600'>
          {/* TODO: add content */}
        </div>
      </div>
    </PageContainer>
  );
};

export default Home;
