const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

/**
* An HTTP endpoint that acts as a webhook for Slack command event
* @param {object} event
* @returns {object} result Your return value
*/
module.exports = async (event) => {
  let result = {slack: {}};

  console.log(`Running [Slack → Retrieve Channel, DM, or Group DM by id]...`);
  result.slack.channel = await lib.slack.conversations['@0.2.14'].info({
    id: `${event.channel_id}`
  });

  console.log(`Running [Slack → Retrieve a User]...`);
  result.slack.user = await lib.slack.users['@0.3.34'].retrieve({
    user: `${event.user_id}`
  });

  console.log(`Running [Slack → Send a Message to a Channel]...`);
  result.slack.messageResponse = await lib.slack.channels['@0.6.7'].messages.create({
    channel: `#${result.slack.channel.name}`,
    text: `Hello <@${result.slack.user.name}>! You said: *${event.text}*`
  });

  return result;
};