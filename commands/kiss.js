const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
module.exports = {
  name: 'kiss',
  dscription: "kisses <3",
  async execute( message, args) {
   //command

        const user = message.mentions.users.first();
        if(!user)
        return message.reply('Mention someone to kiss');

        async function work() {
        let owo = (await neko.sfw.kiss());

        const kissembed = new Discord.MessageEmbed()
        .setTitle(user.username + " You have been kissed! ")
        .setDescription((user.toString() + " got kissed by " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#000000`)
        .setURL(owo.url);
        message.channel.send(kissembed);

}

      work();
  }
}