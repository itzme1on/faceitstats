const fs = require('fs')
const config = require('./config.json')
const discord = require('discord.js')
const { log } = require('./functions/log.js')
const bot = new discord.Client()
bot.commands = new discord.Collection()

// Get events
fs.readdir('./events/', (err, files) => {
    if (err)
        return console.error(err)
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        let event = require(`./events/${file}`)
        let eventName = file.split('.')[0]
        log(`Event \"${eventName}\" successfully loaded!`, 'BOT', 'EventsLoader')
        bot.on(eventName, event.bind(null, bot))
    })
})

// Get commands
fs.readdir('./commands/', (err, files) => {
    if (err)
        return console.error(err)
    files.forEach((file) => {
        if (!file.endsWith('.js')) return
        let command = require(`./commands/${file}`)
        let commandName = file.split('.')[0]
        bot.commands.set(commandName, command)
        log(`Command \"${commandName}\" successfully loaded!`, 'BOT', 'CommandsLoader')
    })
})

// Login
bot.login(config.token)