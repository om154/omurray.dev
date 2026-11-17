import type { ComponentType } from 'react';
import MyEssentialsForMac from './my-essentials-for-mac.mdx';

export interface Post {
  slug: string;
  title: string;
  description: string;
  /** ISO date, e.g. 2026-04-17 */
  publishedAt: string;
  Content: ComponentType;
}

/** Newest first. */
export const posts: Post[] = [
  {
    slug: 'my-essentials-for-mac',
    title: 'My Essentials for Mac',
    description: 'The settings, apps, and hardware I set up on every Mac.',
    publishedAt: '2026-04-17',
    Content: MyEssentialsForMac,
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatPostDate = (publishedAt: string) =>
  new Date(publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
