exports.run = (client, message, args, level) => {
  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()

  embed.setTitle('NationStates bot')
  .addField('Invite the bot', '[here](https://discordapp.com/oauth2/authorize?client_id=461927693118865408&scope=bot&permissions=1610742849)')
  .addField('support sever', '[Here](https://discord.gg/h6squXy)')
  message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['support'],
  permLevel: "User"
};

exports.help = {
  name: "invite",
  category: "System",
  description: "Invite the bot or get to the support server",
  usage: "invite"
};
