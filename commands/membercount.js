const { MessageEmbed } = require('discord.js');
module.exports = {
  name: 'membercount',
  description: "Member Count of a Server",
  execute(message, args) {
    const { guild } = message
            const embed = new MessageEmbed()
                .setAuthor(guild.name)
                .setTitle('Member Count!')
                .setDescription(`**${guild.name}** has a total of \`${guild.memberCount}\` members.`)
                .setFooter(`Created by FexorDEV`, 'https://cdn.discordapp.com/avatars/881314811378556960/bd80551fa5a3e483b78d1b6178b53fca.webp?size=128')
                .setTimestamp()
                .setColor('RANDOM')
            message.reply(embed)
        }
  }
