const client = require('discord.js')
module.exports = {
  name: 'warn',
  description: "warns user",
  async execute(message, args) {
    const user = message.mentions.users.first()
    if(user.id === message.author.id) return message.send("Baka! You can't warn yourself.");
    if(user.bot) return message.send("Baka! You can't warn bots.");
    if(user.id === message.guild.ownerID) return message.send("Baka! You can't warn the owner.");
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Unauthorized use");

    try {
      await user.send(`You've been warned in **${message.guild.name}** by **${message.author.tag}**`);
      return message.channel.send(`I've warned **${user.tag}**`);
    } catch(err) {
      return message.channel.send("I couldn't DM the user, maybe they have DMs blocked.");
    }
  }
}