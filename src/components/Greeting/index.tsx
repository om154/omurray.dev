import Button from '../Button';

const Greeting = () => (
  <section
    id="hero"
    className="flex items-center h-screen min-h-screen px-24 py-0 mb-0 font-normal leading-4 text-gray-800 bg-white border-b-0 rounded font-semiBold font-boldbox-border"
    style={{ inset: 0, zIndex: -1 }}
  >
    <div className="box-border w-full px-4 mx-auto">
      <h1
        className="box-border mt-0 text-5xl tracking-tight opacity-100"
        style={{ opacity: 1, lineHeight: 1.2 }}
      >
        Hey there, my name is
        <span
          className="box-border ml-2 text-5xl text-danger-400"
          style={{ lineHeight: '67.2px' }}
        >
          Oliver
        </span>
        . I&apos;m a
        software engineer who loves building great products.
      </h1>
      <div className="mt-3 text-sm tracking-tight font-regular">P.s. I also love great coffee &amp; natural wine 😄</div>
      <div className="flex justify-start mt-5">
        <Button>
          Get to know me
        </Button>
      </div>
    </div>
  </section>
);

export default Greeting;
