const { STATUS_CODES } = require("http");
const { MessageEmbed } = require('discord.js');
module.exports = {
  name: 'httpstatus',
  description: "funny",
  async execute(message, args) {
    if(status !== "599" && !STATUS_CODES[status]) return message.send("Baka! That's an invalid http status code.");
    return message.send(new MessageEmbved()
      .setTitle("HTTP Cat")
      .setImage(`https://http.cat/${status}.jpg`)
      .setDescription(status === "599" ? "Network Connect Timeout Error" : STATUS_CODES[status])
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ size: 64 })));
  }
  
}