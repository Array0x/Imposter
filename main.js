
const mySecret = process.env['MONGODB']
const mySecret1 = process.env['DISCORD_TOKEN']
const Discord = require('discord.js')
const fs = require('fs');
const client = new Discord.Client();
const prefix = '-';
const express = require('express');
const mongoose = require('mongoose');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
})

client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
///////////////////////////////// CONSOLE LOG /////////////////////////////////
client.once("ready", () => {
  console.clear('');
  console.log('-----------------------| Welcome Imposter! |-----------------------');
  console.log('');
  console.log(' - Prefix -');
  console.log('-');
  console.log('');
  console.log(' - Version -');
  console.log('1.0.1');
  console.log('');
  console.log(' - Discord -');
  console.log('https://discord.gg/HeuVsU6Bq5');
  console.log('');
  console.log('Created with ♡ by disxc');
  

  client.user.setPresence({ activity: { type: "PLAYING", name: "Catching Imposters | -help for the commands"}, status: "dnd"})
});

///////////////////////////////// CONSOLE LOG /////////////////////////////////

client.on('message', message =>{
   if(!message.content.startsWith(prefix) || message.author.bot) return;

   const args = message.content.slice(prefix.length).split(/ +/);
   const command = args.shift().toLowerCase();

   if(command == 'ping'){
      client.commands.get('ping').execute(message, args);
   } else if (command == 'help'){
       client.commands.get('help').execute(message, args, Discord);
   } else if (command == 'say'){
       client.commands.get('say').execute(message, args);
   }  else if (command == 'log'){
       client.commands.get('log').execute(message, args, Discord);
   } else if (command == 'userinfo'){
       client.commands.get('userinfo').execute( message, args, Discord);
   } else if (command == 'serverinfo'){
       client.commands.get('serverinfo').execute( message, args);
   } else if (command == 'restart'){
       client.commands.get('restart').execute( message, args, client);
   } else if (command == 'invite'){
       client.commands.get('invite').execute( message, args);
   } else if (command == 'report'){
       client.commands.get('report').execute( message, args);
   } else if (command == 'avatar'){
       client.commands.get('avatar').execute( message, args);
   } else if (command == 'membercount'){
       client.commands.get('membercount').execute( message, args);
   } else if (command == 'terminal'){
       client.commands.get('terminal').execute( message, args);
   } else if (command == 'uptime'){
       client.commands.get('uptime').execute( message, args);
   } else if (command == '8ball'){
       client.commands.get('8ball').execute( message, args);
   } else if (command == 'ascii'){
       client.commands.get('ascii').execute( message, args);
   } else if (command == 'meme'){
       client.commands.get('meme').execute( message, args, client);
   } else if (command == 'urban'){
       client.commands.get('urban').execute( message, args, client);
   } else if (command == 'anime'){
       client.commands.get('anime').execute( message, args, client);
   } else if (command == 'cuddle'){
       client.commands.get('cuddle').execute( message, args, client);
   } else if (command == 'kiss'){
       client.commands.get('kiss').execute( message, args, client);
   } else if (command == 'tickle'){
       client.commands.get('tickle').execute( message, args, client);
   } else if (command == 'slap'){
       client.commands.get('slap').execute( message, args, client);
   } else if (command == 'wink'){
    client.commands.get('wink').execute( message, args, client);
   } else if (command == 'instagram'){
    client.commands.get('instagram').execute( message, args, client);
   } else if (command == 'yomomma'){
    client.commands.get('yomomma').execute( message, args, client);
   } else if (command == 'trump'){
    client.commands.get('trump').execute( message, args, client);
   } else if (command == 'anal'){
    client.commands.get('anal').execute( message, args, client);
   } else if (command == 'bj'){
    client.commands.get('bj').execute( message, args, client);
   } else if (command == 'yuri'){
    client.commands.get('yuri').execute( message, args, client);
   } else if (command == 'feet'){
    client.commands.get('feet').execute( message, args, client);
   } else if (command == 'warn'){
    client.commands.get('warn').execute( message, args, client);
   } else if (command == 'httpstatus'){
    client.commands.get('httpstatus').execute( message, args, client);
   }
   else {
     message.channel.send('Silly baka, This command does not exist')
   }
});

mongoose
.connect('mongodb://uzvz7jnvflynwnorarj8:4OrFPKtWXoljsGgULW5b@bud3f0i5qk7ubeo-mongodb.services.clever-cloud.com:27017/bud3f0i5qk7ubeo', {
  useNewUrlParser: true,
}).then(() => {
  console.log('');
})

client.login(mySecret1.DISCORD_TOKEN);