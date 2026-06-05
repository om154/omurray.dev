import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Oliver Murray',
    short_name: 'Oliver Murray',
    description:
      'Oliver Murray is a software engineer from Australia, building products at early-stage startups in the US. Explore his projects, travels, and hobbies.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0074DC',
    icons: [
      {
        src: '/icon.png',
        sizes: '421x421',
        type: 'image/png',
      },
      {
        src: '/apple-icon.jpg',
        sizes: '421x421',
        type: 'image/jpeg',
      },
    ],
  }
}
