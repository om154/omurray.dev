const SITE_URL = 'https://omurray.dev'

const sameAs = [
  process.env.NEXT_PUBLIC_GITHUB_URL,
  process.env.NEXT_PUBLIC_LINKEDIN_URL,
  process.env.NEXT_PUBLIC_TWITTER_URL,
].filter(Boolean) as string[]

export const personSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Oliver Murray',
  url: SITE_URL,
  jobTitle: 'Software Engineer',
  image: `${SITE_URL}/static/img/oliver.jpeg`,
  nationality: 'Australia',
  email: `mailto:${process.env.NEXT_PUBLIC_USER_EMAIL_ADDRESS}`,
  sameAs,
})

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Oliver Murray',
  url: SITE_URL,
  inLanguage: 'en-US',
  publisher: { '@id': `${SITE_URL}/#person` },
})

export const profilePageSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${SITE_URL}/#profile`,
  url: SITE_URL,
  name: 'Oliver Murray',
  mainEntity: { '@id': `${SITE_URL}/#person` },
})

interface ProjectListItem {
  url: string
  paragraphs: string[]
}

export const projectsItemListSchema = (items: ProjectListItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${SITE_URL}/projects#list`,
  name: 'Projects by Oliver Murray',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'CreativeWork',
      name: new URL(item.url).hostname.replace(/^www\./, ''),
      url: item.url,
      description: item.paragraphs[0],
      creator: { '@id': `${SITE_URL}/#person` },
    },
  })),
})
