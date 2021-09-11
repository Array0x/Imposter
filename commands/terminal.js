module.exports = {
  name: 'terminal',
  description: "Terminal",
  execute(message, args) {
    const command = args.join(" ");
    const terminal = require('../config/terminal.json');

    if(command == "version") {
      message.channel.send(`Version: ${terminal.version}`)
    } else if(command == "Test") {
      message.channel.send('test')
    }
    else { message.channel.send (`${command} is not a real command.`)}
  }
 }