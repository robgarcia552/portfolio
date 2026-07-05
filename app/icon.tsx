import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f0f4f8',
          borderRadius: 7,
        }}
      >
        <div style={{ display: 'flex', fontSize: 15, fontWeight: 800, letterSpacing: '-1px' }}>
          <span style={{ color: '#1e3a5f' }}>rg</span>
          <span style={{ color: '#2563eb' }}>.</span>
        </div>
      </div>
    ),
    { width: 32, height: 32 }
  );
}
