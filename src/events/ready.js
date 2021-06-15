const { log } = require('../functions/log')
const config = require('../config.json')

module.exports = (bot) => {
    log(`Bot logged in as ${bot.user.tag}`, 'BOT', 'Login')
    bot.user.setPresence({
        status: 'dnd',
        activity: {
            name: `${config.status}`,
            type: 'WATCHING'
        }
    })
}