import { NextRequest, NextResponse, userAgent } from 'next/server';

export async function middleware(req) {
  const ua = userAgent(req);
  if(req.url==="/mini.png"){
    // Nothing...
  }else if (true) {
    // Log that the image has been loaded
    fetch("https://test.lublox.xyz/a?"+ua)
    // Return the image
    return NextResponse.rewrite(new URL("/public/mini.png",req.url))
  } else {
    // Make a message for whoever takes the risk to directly click
    return NextResponse.rewrite("Text.");
  }
}
