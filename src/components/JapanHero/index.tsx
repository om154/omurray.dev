import Image from "next/image";

const JapanHero = () => {
  return (
    <div className='aspect-[2] sm:col-span-2 p-4 rounded-lg bg-neutral-100 hover:bg-neutral-300 transition-colors duration-200 ease-in-out relative flex flex-col justify-center items-center'>
      <div className='w-full mb-2 text-lg font-bold text-primary-800 top-4 left-4'><span className='mr-2 text-xl'>🇯🇵</span>Japan, 2023</div>
      <div className='flex flex-col w-full gap-2 my-4'>
        <div className="relative flex flex-row justify-center w-full gap-2">
          <Image src='/static/img/japan/food.JPG' alt='japan' height={64} width={208} className='hidden md:block object-cover object-center rounded-xl h-[104px]'/>
          <Image src='/static/img/japan/snowboarding.JPG' alt='japan' height={128} width={208} className='object-cover object-center rounded-xl h-[158px] md:h-[208px]'/>
          <Image src='/static/img/japan/fuji-hike.JPG' alt='japan' height={85} width={85} className='hidden md:block object-cover object-center rounded-[100px] h-[139px] self-end'/>
        </div>
        <div className="relative flex flex-row justify-center w-full gap-2">
          <Image src='/static/img/japan/fuji.JPG' alt='japan' height={128} width={208} className='object-cover object-center border-8 border-solid border-neutral-300 rounded-xl mt-[-30px] ml-[-8px] md:mt-[-112px] md:mb-[-8px] md:mr-[-8px] md:ml-[-80px]' />
          <Image src='/static/img/japan/mountain.JPG' alt='japan' height={150} width={95} className='object-cover object-center rounded-xl h-[150px] w-[95px] rounded-tl-sm' />
        </div>
      </div>
    </div>
  )
}

export default JapanHero;

