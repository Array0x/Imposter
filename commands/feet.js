const fetch = require("node-fetch");
const { MessageEmbed } = require('discord.js');
module.exports = {
  name: 'feet',
  description: "Feet",
  async execute(message, args) {
   const { url } = await fetch("https://nekos.life/api/v2/img/feet")
      .then((res) => res.json());

    const embed = new MessageEmbed()
      .setTitle("Hentai Feet")
      .setImage(url)
      .setFooter(`Requested by: ${message.author.tag} | Powered by Replit`, message.author.displayAvatarURL({ size: 32 }));

    return message.channel.send({ embed });
  }
}