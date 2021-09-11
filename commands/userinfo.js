const { MessageEmbed } = require('discord.js');
const moment = require("moment");
require('moment-duration-format')
module.exports = {
  name: 'userinfo',
  description: "Grabs UserInfo and spits it out",
  execute(message, args, Discord) {
    let member = message.mentions.users.first();
    let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member 
    const roles = mentionedMember.roles.cache 
    .sort((a, b) => b.position - a.position)
    .map(role => role.toString())
    .slice(0, -1);

    let displayRoles;

    if(roles.length < 25) {
        displayRoles = roles.join(' ')
        if(roles.length < 1) displayRoles = "None" 

    } else {

        
        displayRoles = roles.slice(20).join(' ')
    }
    const Embed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle('User Information')
    .setThumbnail(member.displayAvatarURL({ dynamic: true, size: 1024 }))
    .addField(`**Tag: **`, `${mentionedMember.user.tag}`) 
     .addField(`**Username: **`, mentionedMember.user.username || "None")  
     .addField(`**ID: **`, `${mentionedMember.id}`) 
    .addField(`**Avatar: **`, `[Click here to view Avatar](${mentionedMember.user.displayAvatarURL({ dynamic: true})})`)
    .addField(`**Roles: [${roles.length}]**`, `${displayRoles}`) 
    .addField(`**Account Created At: **`, `${moment(mentionedMember.user.createdAt).format("DD-MM-YYYY [at] HH:mm")}`)
    .addField("Status", `${member.presence.status}`, true)
    .setFooter('Created by FexorDEV', 'https://cdn.discordapp.com/avatars/881314811378556960/3ecc84bea5ae4f11f1db603dc60daed4.webp?size=128')
    if (message.author.id == '')
    {
      message.channel.send('You have been banned from using the bot')
      return;
    }
    else {
    message.channel.send(Embed)
    }
  }
}