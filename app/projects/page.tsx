import Section from 'src/components/Section';
import Item, { InterestItem } from 'src/components/Hobbies/Item';
import { H2 } from 'src/components/shared/Text';
import comedyFyiImg from 'public/static/img/comedyFyi.png'
import selfStoreImg from 'public/static/img/selfstore.png'
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
      'An app to find tickets for shows from the United States\' best comedians.',
      'For any show, you can find a link to buy tickets and see a map with other shows nearby.',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind'
    ],
    url: 'https://comedy.fyi',
    imagePath: comedyFyiImg
  },
  {
    paragraphs: [
      'A personal website for my brother, Lachlan, who is an amatuer poker player working to get staked as a professional.',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind'
    ],
    url: 'https://thinvalue.poker',
    imagePath: thinValueImg
  },
  {
    paragraphs: [
      'A platform that allows anyone to make money renting out their unused space for storage.',
    ],
    technologies: [
      'Next.js',
      'React',
      'Tailwind',
      'TypeScript',
      'Node.js',
      'MongoDB'
    ],
    url: 'https://getselfstore.com',
    imagePath: selfStoreImg
  },
  {
    paragraphs: [
      'You\'re here!',
      'A personal website about me including my travels, projects and hobbies.',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind',
      'Framer Motion'
    ],
    url: 'https://omurray.dev',
    imagePath: omurrayDevImg
  },
];


export default function Page() {
  return <Section alignTop>
    <div className="w-full mb-2 text-left">
      <H2>Projects</H2>
    </div>
    <div className='box-border grid grid-cols-1 gap-4 md:grid-flow-row-dense md:auto-rows-fr md:grid-cols-1 xl:grid-cols-4'>
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
