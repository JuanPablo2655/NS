exports.run = (client, message, args) => {
  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()

  embed.setColor('RANDOM')
  .setTitle('NSbot Help Menu')
  .addField('Help, Govt, More, Nation, Ping, Region, World', 'Hi!')
  message.channel.send({embed});
}
