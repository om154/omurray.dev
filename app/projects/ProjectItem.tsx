'use client'

import Image from "next/image"
import Link from "next/link"
import AnimateDown from "src/components/animations/AnimateDown"
import AnimateFadeIn from "src/components/animations/AnimateFadeIn"
import { P } from "src/components/shared/Text"

export interface ProjectItemModel {
  url: string
  paragraphs: string[]
  technologies: string[]
  imagePath: string
}

interface ProjectItemProps {
  item: ProjectItemModel
  animationDelay: number
}

const ProjectItem = ({ item: { paragraphs, technologies, url, imagePath }, animationDelay }: ProjectItemProps) => (
  <AnimateDown
    delay={animationDelay}
    className="flex flex-col w-full px-6 py-4 overflow-hidden transition-colors duration-200 ease-in-out rounded-lg md:flex-row-reverse md:gap-8 xl:col-span-2 bg-neutral-100 hover:bg-neutral-200 lg:justify-between md:px-8 md:py-6 xl:max-w-5xl xl:m-auto xl:h-full"
  >
    <div className="flex flex-col justify-start flex-1 order-last mt-4 lg:m-0">
      <Link href={url} className="font-bold text-center transition-colors text-primary-700 md:text-left hover:text-primary-800" target="_blank" rel="noreferrer">
        <AnimateFadeIn duration={0.35}>
          <h3 className='box-border font-mono text-xl leading-tight tracking-tight lg:text-2xl'>{url}</h3>
        </AnimateFadeIn>
      </Link>
      <div className='mt-1'>
        {paragraphs.map((paragraph: string, i: number) => (
          <P key={`hobbies-item-p-${i}`} className="mt-2 md:mt-4">
            {paragraph}
          </P>
        ))}
      </div>
      <div className="mt-1">
        Built using: {technologies.map((t, i) => <span className="font-bold">{i === technologies.length - 1 ? ' and ' : ' '}{t}{i === technologies.length - 1 ? '.' : ','}</span>)}
      </div>
    </div>
    <div className="relative flex justify-center order-first h-60 md:h-full md:w-[20%] xl:w-[40%] shadow-md">
      <Image src={imagePath} fill placeholder='blur' alt='interest' className="object-cover object-top max-w-full rounded-md select-none" />
    </div>
  </AnimateDown>
);

export default ProjectItem
