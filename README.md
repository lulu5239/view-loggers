## Setting up
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flulu5239%2Fview-loggers)
1. Make an account on [Vercel](https://vercel.com/);
2. Use [this link](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flulu5239%2Fview-loggers) to clone this GitHub repository;
3. In the repository it creates, edit the `middleware.js` file and add a webhook URL between the quotation marks;
4. Your project should be deployed after around 40 seconds, and the `vercel.app` subdomain you get should work.
*Vercel itself might trigger the view-logger by using pages of the website.*

## Usage
1. Send on Discord or Guilded the link to your subdomain (it can be any page, you can choose a page to recognize the view-logger);
2. Your webhook should send something whenever someone sees the view-logger.
   * In Discord, view-loggers seems to not trigger on every platform, it does for the Android mobile app but not the browser version for example. You may also need a bit of spacing between the invisible image of the view-logger and the bottom of the conversation, by adding a reaction on your message for example.
   * In Guilded, view-loggers can only trigger once every 4 hours.
* You can hide the link by using Markdown (like `[.](https://viewlog.lublox.xyz)`), but the invisible image has to be loaded/visible.

*This feature has been available since June 2023 on [Lulu5239's bots](https://discord.com/api/oauth2/authorize?client_id=760184483659251753&permissions=0&scope=applications.commands%20bot).*
