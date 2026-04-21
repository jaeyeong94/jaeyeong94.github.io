import { ImageResponse } from 'next/og';

export const ogImageSize = {
  width: 1200,
  height: 630,
} as const;

export const ogImageContentType = 'image/png';

interface CreateOgImageParams {
  eyebrow: string;
  title: string;
  summary: string;
  meta: string;
  siteName: string;
}

export function createOgImage({
  eyebrow,
  title,
  summary,
  meta,
  siteName,
}: CreateOgImageParams) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          background:
            'radial-gradient(circle at top left, rgba(126, 91, 255, 0.28), transparent 34%), radial-gradient(circle at right center, rgba(66, 193, 214, 0.22), transparent 28%), linear-gradient(135deg, #11141b 0%, #0b0d12 100%)',
          color: '#f5f7fa',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            padding: '56px 64px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '940px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 24,
                fontSize: 22,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: '#a8b2c3',
              }}
            >
              {eyebrow}
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 68,
                lineHeight: 1.04,
                fontWeight: 700,
                letterSpacing: '-0.04em',
              }}
            >
              {title}
            </div>
            <div
              style={{
                display: 'flex',
                marginTop: 24,
                maxWidth: '920px',
                fontSize: 29,
                lineHeight: 1.35,
                color: '#d1d7e1',
              }}
            >
              {summary}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  fontSize: 24,
                  color: '#f5f7fa',
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 999,
                    background: '#7e5bff',
                  }}
                />
                Ted Ryu
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: 20,
                  color: '#a8b2c3',
                }}
              >
                {meta}
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.16)',
                padding: '12px 18px',
                fontSize: 20,
                color: '#dbe2ef',
              }}
            >
              {siteName}
            </div>
          </div>
        </div>
      </div>
    ),
    ogImageSize,
  );
}
