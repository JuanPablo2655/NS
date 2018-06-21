exports.run = (client, message, args) => {
  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()

  embed.setTitle('NationStates bot')
  .addField('Invite the bot', 'Invite here')
  .addField('support sever', '[Here](https://discord.gg/h6squXy)')
  message.channel.send({embed});
}
