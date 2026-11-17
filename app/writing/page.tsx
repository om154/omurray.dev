import type { Metadata } from 'next';
import Link from 'next/link';
import AnimateDown from 'src/components/animations/AnimateDown';
import Section from 'src/components/Section';
import { H2, P } from 'src/components/shared/Text';
import { formatPostDate, posts } from 'src/content/writing/posts';

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Notes and essays by Oliver Murray on software, tools, and the things he uses every day.',
  alternates: {
    canonical: '/writing',
  },
};

export default function Page() {
  return (
    <Section alignTop>
      <div className="w-full text-left">
        <H2 as="h1">Writing</H2>
        <P className="mt-3 text-lg text-neutral-900/90">
          Notes on the tools and ideas I use every day
        </P>
      </div>
      <ul className="grid w-full grid-cols-1 gap-4 mt-4 list-none xl:grid-cols-2">
        {posts.map((post, index) => (
          <li key={post.slug}>
            <AnimateDown delay={(index + 1) * 0.15} className="h-full">
              <Link
                href={`/writing/${post.slug}`}
                className="flex flex-col h-full px-6 py-5 no-underline transition-colors duration-200 ease-in-out rounded-lg md:px-8 md:py-6 bg-neutral-100 hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-primary-700"
              >
                <article>
                  <time
                    dateTime={post.publishedAt}
                    className="block text-sm text-neutral-700"
                  >
                    {formatPostDate(post.publishedAt)}
                  </time>
                  <h2 className="mt-1 font-heading font-semiBold text-2xl leading-tight tracking-[-0.01em] text-balance text-primary-800">
                    {post.title}
                  </h2>
                  <p className="mt-2 leading-6 text-pretty text-neutral-900/90">
                    {post.description}
                  </p>
                </article>
              </Link>
            </AnimateDown>
          </li>
        ))}
      </ul>
    </Section>
  );
}
