import { Metadata } from 'next'
import Link from 'next/link'
import Section from "src/components/Section"
import { H2, H3, P } from "src/components/shared/Text"

export const metadata: Metadata = {
  title: 'Resources'
}

export default function Page() {
  const handleAuthors = (authors: string[]) => {
    if (authors.length <= 0) {
      return null
    } else if (authors.length === 1) {
      return authors[0]
    }

    return authors.map((a, i) => i === authors.length - 2 ? `${a} ` : i === authors.length - 1 ? `& ${a}` : `${a}, `)
  }

  return (
    <Section alignTop>
      <div className="box-border w-full">
        <div className="mb-2 text-left">
          <H2>Resources</H2>
          <P className='mt-2'>Things I've read, listened to or watched lately that I think are worth sharing —</P>
        </div>
        <div>
          {data.map(d => (
            <div className='mt-4'>
              <h4>{new Date(d.date).toLocaleDateString('default', { day: 'numeric', month: 'long', year: 'numeric' })}</h4>
              <ul className='flex flex-col gap-2 py-3'>
                {d.items.map(({ title, url, label, authors, themes }) => (
                  <li className='flex flex-row justify-between'>
                    <div className='flex flex-col'>
                      <Link
                        href={url}
                        className='text-primary-700 decoration-primary-700 hover:decoration-primary-600 hover:text-primary-600 transition-colors duration-300 ease-in-out underline-offset-[2px] break-inside-avoid'
                      >
                        {label}
                      </Link>
                      <p className='flex flex-row gap-2 mt-0.5 font-light items-centertext-sm text-neutral-700'>
                        <span>{handleAuthors(authors)}</span>
                      </p>
                    </div>
                    <div className='flex flex-col justify-end'>
                      {themes ?
                        (
                          <div className='flex flex-row gap-2 mt-1'>
                            {themes.map(t => (
                              <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-lg select-none bg-primary-200/50 text-primary-700 ring-1 ring-inset ring-primary-700/10">{t}</span>
                            ))}
                          </div>
                        )
                        :
                        null}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

const data = [
  {
    date: '12-06-2023',
    items: [
      {
        label: 'Ensure to balance consumption with creation',  // my specified summary/name
        title: 'The Release Ratio: How to Make Use of Everything You Know', // the actual name of the resource
        authors: [
          'Lawrence Yeo'
        ],
        url: 'https://moretothat.com/release-ratio/',
        themes: [
          'learning',
          'thinking',
        ]
      },
      {
        label: '🧠 The Psychology of Design — 106 Cognitive Biases & Principles That Affect Your UX',
        title: 'Growth Design',
        authors: [
          'Dan Benoni',
          'Louis-Xavier Lavallee'
        ],
        url: 'https://growth.design/psychology',
        themes: [
          'psychology',
          'design',
        ]
      },
      {
        label: 'Delegation, Working Remotely, Coaching, levelshealth.com and more',
        title: 'Sam Corcos on The Tim Ferriss Show',
        url: 'https://www.youtube.com/watch?v=MtrkDoQFArU&t=7410s&pp=ygUXc2FtIGNvY29yb3MgdGltIGZlcnJpc3M%3D',
        authors: [
          'Tim Ferriss',
          'Sam Corcos'
        ],
        themes: [
          'delegation',
          'remote work',
        ]
      }
    ]
  }
]
