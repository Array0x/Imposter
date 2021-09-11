module.exports = {
  name: 'say',
  description: "a cool Say command",
  execute(message, args) {
    let saymsg = message.content
                message.channel.send(saymsg.replace("-say",""))
                message.delete(1)
  }
}