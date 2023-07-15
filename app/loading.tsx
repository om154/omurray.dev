import Section from "src/components/Section";

export default function RootLoading() {
  return (
    <div className='grid grid-cols-1 gap-4 mt-2 overflow-hidden sm:mt-0 sm:grid-flow-row-dense lg:grid-cols-4'>
      <div className='row-span-2 my-4 sm:col-span-2 '>
        <Section className="items-center h-full bg-transparent">
          <div className="box-border w-full max-w-5xl mx-auto text-left lg:px-4 text-primary-900 md:min-h-[460px]">
            <div className='flex flex-col items-center justify-center h-full gap-4 lg:px-4'>
              <div className="w-full h-5 rounded-sm bg-neutral-200 animate-pulse" />
              <div className="w-full h-5 rounded-sm bg-neutral-200 animate-pulse" />
              <div className="w-full h-5 rounded-sm bg-neutral-200 animate-pulse" />
              <div />
              <div className="w-full h-5 rounded-sm bg-neutral-200 animate-pulse" />
              <div className="w-full h-5 rounded-sm bg-neutral-200 animate-pulse" />
              <div className="w-full h-5 rounded-sm bg-neutral-200 animate-pulse" />
              <div />
              <div className="w-full h-5 rounded-sm bg-neutral-200 animate-pulse" />
              <div className="w-full h-5 rounded-sm bg-neutral-200 animate-pulse" />
              <div className="w-full h-5 rounded-sm bg-neutral-200 animate-pulse" />
            </div>
          </div>
        </Section>
      </div>
      {[1, 2, 3].map(h =>
        <div className='row-span-2 lg:mb-0 sm:col-span-2' key={`skeleton-grid-item-${h}`}>
          <div className='aspect-[2] sm:col-span-2 p-4 rounded-lg bg-neutral-200 relative flex flex-col justify-center items-center h-full animate-pulse' />
        </div>
      )}
    </div>
  );
};
