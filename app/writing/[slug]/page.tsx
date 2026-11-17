import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Section from 'src/components/Section';
import JsonLd from 'src/components/seo/JsonLd';
import { H2, P } from 'src/components/shared/Text';
import { formatPostDate, getPost, posts } from 'src/content/writing/posts';
import { blogPostingSchema } from 'src/lib/structuredData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/writing/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `/writing/${post.slug}`,
      siteName: 'Oliver Murray',
      locale: 'en_US',
      publishedTime: post.publishedAt,
      authors: ['Oliver Murray'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: '@OliMurray7',
    },
  };
}

export default async function Page({ params }: PageProps) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const { Content } = post;

  return (
    <Section alignTop>
      <JsonLd data={blogPostingSchema(post)} />
      <article className="w-full max-w-2xl pt-10 pb-12 md:pt-16 text-neutral-900">
        <Link
          href="/writing"
          className="text-sm no-underline text-neutral-700 hover:text-primary-800"
        >
          ← Writing
        </Link>
        <header className="mt-4">
          <H2 as="h1" className="text-balance">
            {post.title}
          </H2>
          <P className="mt-3 text-lg text-neutral-900/90">{post.description}</P>
          <time
            dateTime={post.publishedAt}
            className="block mt-2 text-sm text-neutral-700"
          >
            {formatPostDate(post.publishedAt)}
          </time>
        </header>
        <div className="mt-6">
          <Content />
        </div>
      </article>
    </Section>
  );
}
