import { ImageResponse } from 'next/og'

export const alt = 'Oliver Murray - Software Engineer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #093262 0%, #0D4A91 60%, #1162C0 100%)',
          color: '#FFFFFF',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: '#197AEB',
            }}
          />
          <div style={{ fontSize: '32px', color: '#A6CBF7' }}>omurray.dev</div>
        </div>
        <div
          style={{
            fontSize: '96px',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          Oliver Murray
        </div>
        <div
          style={{
            fontSize: '40px',
            marginTop: '24px',
            color: '#D5E6FB',
          }}
        >
          Software Engineer
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
