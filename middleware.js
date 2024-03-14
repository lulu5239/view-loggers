import { NextRequest, NextResponse, userAgent } from 'next/server'

const webhook = process.env.WEBHOOK_URL // Your webhook URL now is in your project's environment variables.

// This format allows for multiple different useragent tags to be added per source
// TODO: Add more sources to this object
const sourcesToUserAgentTag = {
  'Discord': ['Discordbot'],
  'Twitter': ['Twitterbot']
}

export async function middleware(req) {
  const userAgentString = userAgent(req)?.ua

  for (const [sourceName, sourceUserAgentTags] of Object.entries(sourcesToUserAgentTag)) {
    if (sourceUserAgentTags.some(tag => userAgentString.includes(tag))) {
      var source = sourceName
      break
    }
  }

  // Only send a webhook and image if it's a verified source
  if (typeof source !== 'undefined') {
    await fetch(webhook, {
      body: JSON.stringify({
        embeds: [{
          title: 'Triggered view-logger',
          description: 'A user just viewed your message!',
          footer: {
            text: `Source: ${source}\nPage: ${req.nextUrl.pathname}`,
          },
        }],
      }), headers: { 'content-type': 'application/json' }, method: 'POST'
    })

    // Return the image.
    return NextResponse.rewrite(new URL('/mini.png', req.url))
  } else {
    // Make a message for whoever takes the risk to directly click.
    return NextResponse.rewrite(new URL('/page.html', req.url))
  }
}