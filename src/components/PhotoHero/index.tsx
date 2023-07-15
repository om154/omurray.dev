'use client'

import Image from "next/image";
import AnimateDown from "../animations/AnimateDown";

export interface PhotoHeroModel {
  title: string
  month?: string
  year?: string
  emoji?: string
  imgSrc: string[]
}

interface Props {
  data: PhotoHeroModel
}

const PhotoHero = ({ data }: Props) => {
  const { title, month, year, emoji, imgSrc } = data;

  return (
    <AnimateDown
      delay={.2}
      className='aspect-[2] sm:col-span-2 p-4 rounded-lg bg-neutral-100 relative flex flex-col justify-center items-center'
    >
      <div className='w-full mb-2 text-lg leading-none font-regular text-primary-900 top-4 left-4'>
        <div className='flex flex-row items-center'>
          {emoji && <span className='mr-2 text-2xl'>{emoji}</span>}
          <span>{title}</span>
          {month || year ?
            <div className="ml-4 md:ml-2">
              <span className="text-xs md:text-sm text-neutral-500">{`${month ?? ''}${year ? `, ${year}` : ''}`}</span>
            </div> : <div />}
        </div>
      </div>
      <div className='flex flex-col w-full gap-2 my-4 transition-transform duration-300 ease-out hover:scale-[1.02]'>
        <div className="relative flex flex-row justify-center w-full gap-2">
          <Image src={imgSrc[0]} placeholder='blur' alt='japan' height={64} width={208} className='hidden md:block object-cover object-center rounded-xl h-[104px]'/>
          <Image src={imgSrc[1]} placeholder='blur' alt='japan' height={128} width={208} className='object-cover object-center rounded-xl h-[158px] md:h-[208px]'/>
          <Image src={imgSrc[2]} placeholder='blur' alt='japan' height={85} width={85} className='hidden md:block object-cover object-center rounded-[100px] h-[160px] self-end'/>
        </div>
        <div className="relative flex flex-row justify-center w-full gap-x-0 gap-y-2 md:gap-2">
          <Image src={imgSrc[3]} placeholder='blur' alt='japan' height={128} width={208} className='object-cover object-center border-8 border-solid border-neutral-100 rounded-xl mt-[-30px] ml-[-8px] md:mt-[-112px] md:mb-[-8px] md:mr-[-8px] md:ml-[-80px]' />
          <Image src={imgSrc[4]} placeholder='blur' alt='japan' height={150} width={95} className='object-cover object-center rounded-xl h-[150px] w-[95px] rounded-tl-sm' />
        </div>
      </div>
    </AnimateDown>
  )
}

export default PhotoHero;

