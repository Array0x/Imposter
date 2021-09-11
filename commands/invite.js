const { MessageEmbed } = require('discord.js')
module.exports = {
  name: 'invite',
  description: "sends sussy invite",
  execute(message, args) {
     let user = message.author
    const embed = new MessageEmbed()
    .setColor('#FF0000')
    .setTitle('Invite The Imposter')
    .setURL('http://fexor.xyz')
    .setDescription('You can invite me at\n\n https://discord.com/api/oauth2/authorize?client_id=882498147664932914&permissions=8&scope=bot')
    .setThumbnail('https://cdn.discordapp.com/avatars/882498147664932914/63de763f6075d4f233e29347ad64147e.webp?size=128')
    user.send(embed)
     
  }
}