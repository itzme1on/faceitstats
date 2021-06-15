const config = require('../config.json')
const { log } = require('../functions/log')

module.exports = (bot, message) => {
    if (!message.guild) return
    if (message.author.bot) return
    if (message.content.indexOf(config.prefix) != 0) return
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    const cmd = bot.commands.get(command)
    if (!cmd) return
    cmd.run(bot, message, args)
    log(`${message.author.tag}: ${message.content}`, 'User', 'Command')
}