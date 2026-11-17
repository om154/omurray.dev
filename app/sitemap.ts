import type { MetadataRoute } from 'next';
import { posts } from 'src/content/writing/posts';

const routes: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
}[] = [
  { path: '', changeFrequency: 'monthly', priority: 1.0 },
  { path: '/about', changeFrequency: 'yearly', priority: 0.8 },
  { path: '/projects', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/writing', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/resources', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/hobbies', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/travel', changeFrequency: 'yearly', priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = routes.map(({ path, changeFrequency, priority }) => ({
    url: `https://omurray.dev${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const writing = posts.map((post) => ({
    url: `https://omurray.dev/writing/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...pages, ...writing];
}
