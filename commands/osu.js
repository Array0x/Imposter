const client = require('discord.js')
module.exports = {
  name: 'osu',
  description: "osu",
  execute(message, args) {
    const osu = require('node-osu');
    const api = new osu.Api("YOUR KEY HERE!" , {
// END OF OSU API KEY
    notFoundAsError: true,
    completeScores: false 
})

let username = args[0]
  
  
if (!args[0]) return message.channel.send('Please, provide a valid user\'s nickname! (osu!)')

api.getUser({u: username}).then(user => {
const osu = new Discord.MessageEmbed()
.setTitle('User Osu Search System')
.setThumbnail(`http://s.ppy.sh/a/${user.id}}`)
.setColor("#D0436A")
.addField('Nickname', user.name)
.addField('PP', Math.round(user.pp.raw))
.addField('Rank', user.pp.rank)
.addField('Level', Math.round(user.level))
.addField('Country', user.country)
.addField('Country Rank', user.pp.countryRank)
.addField('Playcount', user.counts.plays)
.addField('Accuracy', `${user.accuracyFormatted}`)
.setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
message.channel.send(osu)

})
  }
}