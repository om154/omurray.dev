import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://omurray.dev',
      lastModified: new Date(),
    },
    {
      url: 'https://omurray.dev/about',
      lastModified: new Date(),
    },
    {
      url: 'https://omurray.dev/hobbies',
      lastModified: new Date(),
    },
    {
      url: 'https://omurray.dev/travel',
      lastModified: new Date(),
    },
    {
      url: 'https://omurray.dev/projects',
      lastModified: new Date(),
    },
  ]
}
