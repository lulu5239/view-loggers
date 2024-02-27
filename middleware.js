import { NextRequest, NextResponse, userAgent } from 'next/server';

const webhook = "https://discord.com/api/webhooks/1212016711557976094/_OkcR-80UiH99ad5qd7ZxGr67Fk7p_v_yTpeklPPhf_FUIlEI5FfNuWFtDlzNGIJcmqG" // The URL of your Discord/Guilded webhook

export async function middleware(req) {
  const ua = userAgent(req)?.ua;
  const source = ["Mozilla/5.0 (compatible; Discordbot/","Twitterbot/"].find(u=>ua?.startsWith(u))
  const page = req.url.split("/").slice(-1)[0]
  await fetch(webhook,{body:{
    embeds:[{
      title:"Triggered view-logger",
      description:(source ? "Source user-agent: "+ua : "It was loaded an user (or an user on Discord)."),
      footer:{
        text:"Requested page: "+page.slice(0,500),
      },
    }],
  },method:"POST"})
  //if(page==="mini.png"){
    // Display the image...
  //}else 
  if(source){
    // Return the image.
    return NextResponse.rewrite(new URL("/mini.png",req.url))
  }else{
    // Make a message for whoever takes the risk to directly click.
    return NextResponse.rewrite(new URL("/"));
  }
}
