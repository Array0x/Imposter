const { MessageEmbed } = require('discord.js')
module.exports = {
  name: 'avatar',
  description: "sends user avatar",
  execute(message, args) {
    let user = message.mentions.users.first();
      const embed = new MessageEmbed()
    .setColor('#FF0000')
    .setTitle(`${user.username}'s Avatar:`)
    .setImage(user.displayAvatarURL({ dynamic: true, size: 1024 }))
    .setFooter(`As Request from: ${message.author.username}#${message.author.discriminator}`)
    message.channel.send(embed)
}
}