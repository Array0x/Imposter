const fetch = require("node-fetch");
const { MessageEmbed } = require('discord.js');
module.exports = {
  name: 'yuri',
  description: "Yuri Hentai",
  async execute(message, args) {
    const { url } = await fetch("https://nekos.life/api/v2/img/yuri")
      .then((res) => res.json());

    const embed = new MessageEmbed()
      .setTitle("Yuri Hentai")
      .setImage(url)
      .setFooter(`Requested by: ${message.author.tag} | Powered by Replit`, message.author.displayAvatarURL({ size: 32 }));

    return message.channel.send({ embed });
  }
}