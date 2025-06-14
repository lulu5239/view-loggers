import { NextRequest, NextResponse, userAgent } from 'next/server';

const webhook = process.env.WEBHOOK_URL;

export async function middleware(req) {
  const ua = userAgent(req)?.ua;
  const ip =
    req.ip ||
    req.headers.get('x-forwarded-for')?.split(',')[0] ||
    'Unknown IP';
  if (!ua || ua.startsWith('vercel-')) {
    return NextResponse.rewrite(new URL('/vercel.html', req.url));
  }

  const source = ['Mozilla/5.0 (compatible; Discordbot/', 'Twitterbot/'].find(u =>
    ua?.startsWith(u)
  );
  const page = req.url.split('/').slice(-1)[0];

  await fetch(webhook, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      embeds: [
        {
          title: 'Triggered view-logger',
          description: source
            ? `Source user-agent: ${ua}`
            : 'It was loaded by an user (or an user on Discord).',
          fields: [
            {
              name: 'IP Address',
              value: ip,
              inline: false,
            },
          ],
          footer: {
            text: 'Requested page: ' + page.slice(0, 500),
          },
        },
      ],
    }),
  });

  if (source) {
    return NextResponse.rewrite(new URL('/mini.png', req.url));
  } else {
    return NextResponse.rewrite(new URL('/page.html', req.url));
  }
}
