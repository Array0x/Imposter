const Discord = require("discord.js")
const mySecret = process.env['DISCORD_TOKEN']

module.exports = {
  name: 'restart',
  description: "Daddy fuck me harder",
  execute(message, args, client) {
    if(message.author.id !== "881314811378556960")  return message.channel.send('Not a developer :)')

    client.destroy()
    client.login(mySecret.DISCORD_TOKEN)

    message.channel.send('Restarted!') 

  }
}