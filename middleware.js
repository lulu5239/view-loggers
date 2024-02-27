import { NextRequest, NextResponse, userAgent } from 'next/server';

export async function middleware(req) {
  const ua = userAgent(req);

  // Check if user agent matches your criteria
  if (true) {
    // Return the image directly
    return NextResponse.rewrite(new URL("./public/empty.png",req.url))
  } else {
    // Make a request to the other website and return the response
    const response = await fetch('https://lublox/image.jpg');
    return NextResponse.rewrite("Text.");
  }
}
