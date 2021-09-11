const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
module.exports = {
  name: 'cuddle',
  dscription: "cuddles <3",
  async execute( message, args) {
     //command

        let user = message.mentions.users.first();
        if(!user)
        return message.reply('Mention someone to cuddle');

        async function work() {
        let owo = (await neko.sfw.cuddle());

        const cuddleembed = new Discord.MessageEmbed()
        .setTitle(user.username + " You just got a cuddle! ")
        .setDescription((user.toString() + " got a cuddle from " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#000000`)
        .setURL(owo.url);
        message.channel.send(cuddleembed);

}

      work();

  }
}