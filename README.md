# Setting up

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flulu5239%2Fview-loggers&env=WEBHOOK_URL&envDescription=Paste%20your%20Discord%2FGuilded%20Webhook%20URL)

1. Make an account on [Vercel](https://vercel.com/);
2. Click on the `Deploy` button above to create the project on Vercel;
3. Create a webhook and copy its URL;
4. Put your `WEBHOOK_URL` in the `Enviroment Variables` dropdown shown during the deployment:
   ![image](https://github.com/Zaid-maker/view-loggers/assets/53424436/b0f1dbb6-304c-4719-a4e6-2adbba8a67ba)
5. Deploy the project (it takes around 40 seconds).

*Vercel should trigger the view-logger a few times.*

You won't need to edit the files to enter your webhook URL, because you should have already entered it at step 4. *If needed, you can still edit it in the `.env` file.*

## Usage

1. Send on Discord or Guilded the link to your subdomain (it can be any page, you can choose a page to recognize the view-logger);
2. Your webhook should send something whenever someone sees the view-logger.
   * In Discord, view-loggers seems to not trigger on every platform, it does for the Android mobile app but not the browser version for example. You may also need a bit of spacing between the invisible image of the view-logger and the bottom of the conversation, by adding a reaction on your message for example.
   * In Guilded, view-loggers can only trigger once every 4 hours.

* You can hide the link by using Markdown (like `[.](https://viewlog.lublox.xyz)`), but the invisible image has to be loaded/visible.

*This feature has been available since June 2023 on [Lulu5239's bots](https://discord.com/api/oauth2/authorize?client_id=760184483659251753&permissions=0&scope=applications.commands%20bot).*
