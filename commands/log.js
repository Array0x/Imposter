module.exports = {
  name: 'log',
  description: "logs person",
  execute(message, args) {
  const fs = require('fs');
  const { MessageEmbed } = require('discord.js');
  const editJsonFile = require("edit-json-file");

let file = editJsonFile(`${__dirname}/log-file/log-file.json`);

file.set("planet", "Earth");
file.set("city\\.name", "anytown");
file.set("name.first", "Johnny");
file.set("name.last", "B.");
file.set("is_student", false);

file.append("classes", "fysics");

file.append("classes", { class: "Computer Science", where: "KULeuven" });

file.save();

console.log(file.toObject());

  const { guild } = message
            const embed = new MessageEmbed()
                .setAuthor(guild.name)
                .setTitle('Log!')
                .setDescription(`you have been added to the log file`)
                .setFooter(`Created by vinzy`, 'https://cdn.discordapp.com/avatars/773956587164270663/bd80551fa5a3e483b78d1b6178b53fca.webp?size=128')
                .setTimestamp()
                .setColor('RANDOM')
            message.reply(embed)
 
  }
}
