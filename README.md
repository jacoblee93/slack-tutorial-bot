# Basic Autocode Slack Bot

### Deploy Now

[<img src="https://deploy.stdlib.com/static/images/deploy.svg?" width="192">](https://deploy.stdlib.com/)

This is a basic, easily extensible Slack bot example that you can install into your Slack workspace in just a few clicks by deploying it to [Autocode](https://autocode.com). Right out of the box, your bot will:

1. Respond to a [Slack slash command](https://api.slack.com/interactivity/slash-commands) called `hello` by sending a reply message from the bot containing whatever text follows the command.
1. Send a friendly welcome message to users who join a new channel in your Slack workspace.

This behavior is completely customizable by editing the bot code. The only things you'll need are an [Autocode account](https://autocode.com) and a Slack workspace!

## Hello Command

Once installed, typing `/cmd hello <text>` will trigger `/functions/events/slack/command/hello.js` and provide an output that look like this:

**Note:** Creating and linking your own custom Slack app rather than the official Autocode app will allow you to trigger this command as `/hello` (without the `/cmd`), but is a more complex process.

## Member Joined Channel Handler

When a member joins a public channel, your bot will respond to the resulting [member_joined_channel](https://api.slack.com/events/member_joined_channel) event from Slack by running `/functions/events/slack/member_joined_channel.js`. This will generate a message like this:

## Deploying This Slack Bot

## Thank You!

Please check out [Autocode](https://autocode.com) or follow us on Twitter, [@AutocodeHQ](https://twitter.com/AutocodeHQ).