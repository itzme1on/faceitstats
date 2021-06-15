const discord = require('discord.js')

exports.run = async (bot, message) => {
    var helpMsgEmbed = new discord.MessageEmbed()
        .setColor('#d76844')
        .setAuthor('Help section', 'https://assets.faceit-cdn.net/third_party/applications/cards/80a9a91e-7bd1-4200-adf8-fa13dc8a8e18-1623339995610.jpg')
        .setTitle('Commands:')
        .setDescription('+ **fs!help** - Open help section and displays all the bot commands\n' + '+ **fs!player** \`[nickname]\` - Display short player statistic\n' + '+ **fs!stats** \`[nickname]\` - Display detailed player statistic')
        .setFooter('This bot supports statistics from CS:GO only, but in the future statistics from other games and new features will be added :)')
    message.channel.send(helpMsgEmbed)
}