export default function RootLoading() {
  return (
    <div className='grid grid-cols-1 gap-4 mt-2 overflow-hidden sm:mt-0 sm:grid-flow-row-dense lg:grid-cols-4'>
      <div className='row-span-2 my-4 sm:col-span-2 '>
        skeleton text here
      </div>
      {[1, 2, 3].map(h =>
        <div className='row-span-2 lg:mb-0 sm:col-span-2'>
          skeleton hero here
        </div>
      )}
    </div>
  );
};
