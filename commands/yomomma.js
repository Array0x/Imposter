const fetch = require("node-fetch");
module.exports = {
  name: 'yomomma',
  description: "suck on deez nuts",
  async execute(message, args) {
    user = message.mentions.users.first()

    const { joke } = await fetch("http://api.yomomma.info")
      .then((res) => res.json());

    return user.send(`${user}, ${joke}`);
  }
  
}