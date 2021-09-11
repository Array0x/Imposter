const client = require('discord.js');
module.exports = {
  name: 'ping',
  description: 'ping pong',
  async execute( message, args) {
    const msg = await message.channel.send(`🏓 Pong!`);

        msg.edit(`🏓 Pong!
        API Latency is ${Math.round(client.ws.ping)}ms`);
  }
}