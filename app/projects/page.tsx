import Section from 'src/components/Section';
import Item, { InterestItem } from 'src/components/Hobbies/Item';
import { H2, P } from 'src/components/shared/Text';
import comedyFyiImg from 'public/static/img/comedyFyi.png'
import firesideImg from 'public/static/img/fireside.png'
import backyardImg from 'public/static/img/backyard.png'
import thinValueImg from 'public/static/img/thinvaluePoker.png'
import omurrayDevImg from 'public/static/img/omurrayDev.png'
import { Metadata } from 'next'
import ProjectItem, { ProjectItemModel } from './ProjectItem';

export const metadata: Metadata = {
  title: 'Projects'
}

const items: ProjectItemModel[] = [
  {
    paragraphs: [
      'An app to find tickets to shows by the United States\' best comedians.',
      'For any show, you can find a link to buy tickets and see other shows nearby on a map.',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind',
      'Mapbox',
      'Vercel'
    ],
    url: 'https://comedy.fyi',
    imagePath: comedyFyiImg
  },
  {
    paragraphs: [
      'Backyard is a platform that allows anyone to rent space, or make money renting out their space for storage. Launching soon!',
    ],
    technologies: [
      'React',
      'Remix',
      'Vite',
      'TypeScript',
      'Tailwind',
      'Supabase',
      'Postgres',
      'Severless on AWS (sst)',
    ],
    url: 'https://usebackyard.com',
    imagePath: backyardImg
  },
  {
    paragraphs: [
      'Fireside helps you record a podcast with your loved ones. We generate nostalgic, sentimental questions for you and faciliate recording and storage so you can focus on their stories.',
      'Launching soon!'
    ],
    technologies: [
      'React',
      'Remix',
      'TypeScript',
      'Tailwind',
      'Neon',
      'Severless on AWS (sst)',
    ],
    url: 'https://recordfireside.com',
    imagePath: firesideImg
  },
  {
    paragraphs: [
      'A personal website for my brother, Lachlan, who is an amatuer poker player working to get staked as a professional.',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind',
      'Vercel'
    ],
    url: 'https://thinvalue.poker',
    imagePath: thinValueImg
  },
  {
    paragraphs: [
      'You\'re here! 🎉',
      'A personal website about me including my travels, projects and hobbies.',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind',
      'Framer',
      'Vercel'
    ],
    url: 'https://omurray.dev',
    imagePath: omurrayDevImg
  },
];


export default function Page() {
  return <Section alignTop>
    <div className="w-full text-left">
      <H2>Projects</H2>
      <P className='mt-2 text-neutral-900/90'>A few things I've been working on lately</P>
    </div>
    <div className='box-border grid grid-cols-1 gap-4 mt-4 md:grid-flow-row-dense md:auto-rows-fr md:grid-cols-1 xl:grid-cols-4'>
      {items.map((item: ProjectItemModel, index: number) => (
        <ProjectItem
          key={`hobbies-grid-item-${index}`}
          item={item}
          animationDelay={(index + 1) * .15}
        />
      ))}
    </div>
  </Section>
}
