const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

/**
* An HTTP endpoint that acts as a webhook for Slack member_joined_channel event
* @param {object} event
* @returns {object} result Your return value
*/
module.exports = async (event) => {
  let result = {slack: {}};

  console.log(`Running [Slack → Retrieve Channel, DM, or Group DM by id]...`);
  result.slack.channel = await lib.slack.conversations['@0.2.14'].info({
    id: `${event.event.channel}`
  });

  console.log(`Running [Slack → Retrieve a User]...`);
  result.slack.user = await lib.slack.users['@0.3.34'].retrieve({
    user: `${event.event.user}`
  });

  console.log(`Welcoming the user to the joined channel`)
  result.slack.messageResponse = await lib.slack.channels['@0.6.7'].messages.create({
    channel: `#${result.slack.channel.name}`,
    text: `Welcome to channel <#${result.slack.channel.id}>, <@${result.slack.user.name}>!`
  });

  return result;
};