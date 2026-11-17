import { ImageResponse } from 'next/og';
import { formatPostDate, getPost, posts } from 'src/content/writing/posts';

export const alt = 'A post by Oliver Murray';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = getPost((await params).slug);

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '80px',
        background:
          'linear-gradient(135deg, #093262 0%, #0D4A91 60%, #1162C0 100%)',
        color: '#FFFFFF',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: '#197AEB',
          }}
        />
        <div style={{ fontSize: '32px', color: '#A6CBF7' }}>
          omurray.dev / writing
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            fontSize: '84px',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}
        >
          {post?.title ?? 'Writing'}
        </div>
        {post?.description && (
          <div
            style={{
              fontSize: '36px',
              marginTop: '28px',
              color: '#D5E6FB',
              lineHeight: 1.3,
            }}
          >
            {post.description}
          </div>
        )}
      </div>
      <div style={{ display: 'flex', fontSize: '28px', color: '#A6CBF7' }}>
        {post
          ? `Oliver Murray · ${formatPostDate(post.publishedAt)}`
          : 'Oliver Murray'}
      </div>
    </div>,
    {
      ...size,
    },
  );
}
