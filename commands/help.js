module.exports = {
  name: 'help',
  description: "Help Command",
  execute(message, args, Discord) {
    let user = message.author
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle('Imposters')
    .setDescription('Please do not abuse these commands')
    .addFields (
      { name: 'Prefix:', value: "-"},
      { name: 'General Bot', value: "invite, about (coming soon)"},
      { name: 'Fun', value: "avatar, serverinfo, userinfo, uptime, terminal, say, log, kiss, cuddle, tickle, anime, ascii, 8ball, slap, urban, wink, meme, ping, osu, membercount, report, yomomma, trump"},
      { name: 'NSFW Commands', value: 'anal, bj, yuri, feet'},
      { name: 'Developers of Imposter Only', value: 'restart'},
      { name: 'Total amount of Commands:', value:'**30**'}
      
    )
    .setThumbnail('https://cdn.discordapp.com/avatars/882498147664932914/63de763f6075d4f233e29347ad64147e.webp?size=128')
    
    user.send(exampleEmbed)
    message.channel.send('I have sent the commands to you 😂')
  }
}