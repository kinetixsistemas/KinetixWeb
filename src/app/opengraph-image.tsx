import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'Kinetix Sistemas — Software, web y automatización en Venezuela';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: 'linear-gradient(135deg, #0d0f14 0%, #0a2240 58%, #062356 100%)',
          color: '#ffffff',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-180px',
            right: '-120px',
            width: '520px',
            height: '520px',
            borderRadius: 9999,
            background: 'radial-gradient(circle, rgba(0,199,143,0.35) 0%, rgba(0,199,143,0) 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-260px',
            left: '-100px',
            width: '620px',
            height: '620px',
            borderRadius: 9999,
            background: 'radial-gradient(circle, rgba(0,67,143,0.65) 0%, rgba(0,67,143,0) 70%)',
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 9999,
              background: '#00C78F',
              display: 'flex',
            }}
          />
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: '#00C78F',
            }}
          >
            Venezuela
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>
            Kinetix Sistemas
          </div>
          <div style={{ width: 180, height: 6, borderRadius: 4, background: '#00C78F', display: 'flex' }} />
          <div style={{ fontSize: 36, fontWeight: 400, lineHeight: 1.25, color: 'rgba(255,255,255,0.82)' }}>
            Software, web y automatización en Venezuela
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: 22, color: 'rgba(255,255,255,0.55)' }}>
          kinetixsistemas.com
        </div>
      </div>
    ),
    { ...size },
  );
}
