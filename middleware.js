import { NextRequest, NextResponse, userAgent } from 'next/server';
const webhook = process.env.WEBHOOK_URL;
export async function middleware(req){
  const ua = userAgent(req)?.ua;
  const discordbot = ["Mozilla/5.0 (compatible; Discordbot/", "Mozilla/5.0 (Macintosh; Intel Mac OS X 11.6; rv:92.0) Gecko/20100101 Firefox/92.0", "Twitterbot/"].find(u=>ua?.startsWith(u));
  const vercelbot = ["vercel-", "Vercelbot/"].find(u => ua?.startsWith(u));
  const path = req.nextUrl.pathname;
  const favicon = path.startsWith("/favicon");
  const img = req.nextUrl.searchParams.get('img');
  const redirect = req.nextUrl.searchParams.get('red');
  const body = {
    "embeds":[{
      "title":"Triggered view-logger V2",
      "fields":[{name:"Source", value:(discordbot ? "Discord" : "User"), inline: true},{name:"Path", value: path, inline: true},{name:"IP", value: req.ip, inline: true}, {name: "User agent", value: ua, inline: false}]
    }],
  };
  
  if(vercelbot) return NextResponse.rewrite(new URL("/vercel.html",req.url));
  if(favicon) return;
  
  await fetch(webhook,{body: JSON.stringify(body), headers:{"content-type":"application/json"}, method:"POST"});
  
  if(discordbot) return img ? NextResponse.rewrite(new URL(img.startsWith("https://") ? img : ("https://" + img))) : NextResponse.rewrite(new URL("/mini.png", req.url));
  return redirect ? NextResponse.redirect(new URL(redirect.startsWith("https://") ? redirect : ("https://" + redirect))) : NextResponse.rewrite(new URL("/page.html", req.url));
}
