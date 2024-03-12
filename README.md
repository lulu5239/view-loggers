# Setting up

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flulu5239%2Fview-loggers&env=WEBHOOK_URL&envDescription=Paste%20your%20Discord%2FGuilded%20Webhook%20URL)

1. Make an account on [Vercel](https://vercel.com/);
2. Click on `Deploy` Button above to create the project on Vercel.
3. Give your Project a name and click on Create
4. It's now required to Put your `WEBHOOK_URL` before deploying the project.
5. Put your `WEBHOOK_URL` in the `Enviroment Variables` Dropdown as in the screenshot below ⬇️
6. ![image](https://github.com/Zaid-maker/view-loggers/assets/53424436/b0f1dbb6-304c-4719-a4e6-2adbba8a67ba)
7. That's it Click on Deploy and under 40 seconds the project will be deployed.
8. After that Verccel triggers the view-logger and send it to your webhook


## Usage

1. Send on Discord or Guilded the link to your subdomain (it can be any page, you can choose a page to recognize the view-logger);
2. Your webhook should send something whenever someone sees the view-logger.
   * In Discord, view-loggers seems to not trigger on every platform, it does for the Android mobile app but not the browser version for example. You may also need a bit of spacing between the invisible image of the view-logger and the bottom of the conversation, by adding a reaction on your message for example.
   * In Guilded, view-loggers can only trigger once every 4 hours.

* You can hide the link by using Markdown (like `[.](https://viewlog.lublox.xyz)`), but the invisible image has to be loaded/visible.

*This feature has been available since June 2023 on [Lulu5239's bots](https://discord.com/api/oauth2/authorize?client_id=760184483659251753&permissions=0&scope=applications.commands%20bot).*
