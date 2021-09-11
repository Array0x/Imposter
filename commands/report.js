module.exports = {
  name: 'report',
  description: "sussy",
  execute(message, args) {
    let user = message.mentions.users.first();
    user.send('Someone voted u out :)');
  }
}