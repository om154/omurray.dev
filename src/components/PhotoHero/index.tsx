import Image from "next/image";

export interface PhotoHeroModel {
  title: string
  month?: string
  year?: string
  emoji?: string
  directory: 'japan' | 'norway' | 'bend'
}

interface Props {
  data: PhotoHeroModel
}

const PhotoHero = ({ data }: Props) => {
  const { title, month, year, emoji, directory } = data;

  return (
    <div className='aspect-[2] sm:col-span-2 p-4 rounded-lg bg-neutral-100 relative flex flex-col justify-center items-center'>
      <div className='w-full mb-2 text-lg leading-none font-regular text-primary-900 top-4 left-4'>
        <div className='flex flex-row items-center'>
          {emoji && <span className='mr-2 text-2xl'>{emoji}</span>}
          <span>{title}</span>
          {month || year ?
            <div className="ml-2 ">
              <span className="text-sm text-neutral-500">{`${month ?? ''}${year ? `, ${year}` : ''}`}</span>
            </div> : <div />}
        </div>
      </div>
      <div className='flex flex-col w-full gap-2 my-4 transition-transform duration-300 ease-out hover:scale-[1.02]'>
        <div className="relative flex flex-row justify-center w-full gap-2">
          <Image src={`/static/img/${directory}/1.jpg`} alt='japan' height={64} width={208} className='hidden md:block object-cover object-center rounded-xl h-[104px]'/>
          <Image src={`/static/img/${directory}/2.jpg`} alt='japan' height={128} width={208} className='object-cover object-center rounded-xl h-[158px] md:h-[208px]'/>
          <Image src={`/static/img/${directory}/3.jpg`} alt='japan' height={85} width={85} className='hidden md:block object-cover object-center rounded-[100px] h-[160px] self-end'/>
        </div>
        <div className="relative flex flex-row justify-center w-full gap-x-0 gap-y-2 md:gap-2">
          <Image src={`/static/img/${directory}/4.jpg`} alt='japan' height={128} width={208} className='object-cover object-center border-8 border-solid border-neutral-100 rounded-xl mt-[-30px] ml-[-8px] md:mt-[-112px] md:mb-[-8px] md:mr-[-8px] md:ml-[-80px]' />
          <Image src={`/static/img/${directory}/5.jpg`} alt='japan' height={150} width={95} className='object-cover object-center rounded-xl h-[150px] w-[95px] rounded-tl-sm' />
        </div>
      </div>
    </div>
  )
}

export default PhotoHero;

