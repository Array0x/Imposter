const fetch = require("node-fetch");
module.exports = {
  name: 'trump',
  description: "suck on deez nuts",
  async execute(message, args) {
    user = message.mentions.users.first()
 const { value } = await fetch("https://api.tronalddump.io/random/quote")
      .then((res) => res.json());
    return user.send(value);
  }
  
}