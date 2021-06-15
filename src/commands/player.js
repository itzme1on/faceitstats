const config = require('../config.json')
const Faceit = require('faceit-js-api')
const faceit = new Faceit(config.faceitapitoken)
const discord = require('discord.js')

exports.run = async (bot, message) => {
    const args = message.content.split(' ').slice(1)
    if (args.length == 0) {
        var noArgsEmbed = new discord.MessageEmbed()
            .setColor('#d76844')
            .setDescription('You must enter a nickname')
        message.channel.send(noArgsEmbed)
        return
    }
    faceit.getPlayerInfo(args.join(' ')).then(function (player) {
        new Promise(function (resolve) {
            getStats(args.join(' '), resolve, message)
        }).then(function (playerstats) {
            let player = playerstats[0]
            var shortPlayerInfoEmbed = new discord.MessageEmbed()
                .setColor('#d76844')
                .setAuthor(player.nickname, player.avatar, player.faceitUrl)
                .addFields(
                    { name: 'Country', value: player.country, inline: true },
                    { name: 'Skill Level', value: `${player.games.csgo.skillLevel} LVL`, inline: true },
                    { name: 'Current ELO', value: player.games.csgo.faceitElo, inline: true })
                .setFooter('You can also use fs!stats \[nickname\] for all statistic')
            message.channel.send(shortPlayerInfoEmbed)
        })
    }).catch(function (playerstats) {
        if (message) {
            var notRegisteredOnFaceit = new discord.MessageEmbed()
                .setColor('#d76844')
                .setDescription('Oops... This user is not registered on Faceit')
            message.channel.send(notRegisteredOnFaceit)
        }
    })

    function getStats(nickname, resolve, message) {
        faceit.getPlayerInfo(nickname).then(function (player) {
            player.games.csgo.getStats().then(function (stats) {
                if (resolve != 'undefined')
                    resolve([player, stats])
                return [player, stats]
            })
        }).catch(function (error) {
            if (message) {
                var notPlayedCSGO = new discord.MessageEmbed()
                    .setColor('#d76844')
                    .setDescription('This user didn\'t play CS:GO on Faceit')
                message.channel.send(notPlayedCSGO)
            }
        })
    }
}