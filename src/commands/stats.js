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
            let stats = playerstats[1]
            var playerStatsEmbed = new discord.MessageEmbed()
                .setColor('#d76844')
                .setAuthor(player.nickname, player.avatar, player.faceitUrl)
                .addFields(
                    { name: 'Country', value: player.country, inline: true },
                    { name: 'Skill Level', value: `${player.games.csgo.skillLevel} LVL`, inline: true },
                    { name: 'Steam name', value: player.steamNickname, inline: true })
                .addFields(
                    { name: 'Matches', value: `${stats.matches} matches`, inline: true },
                    { name: 'Wins', value: `${stats.wins} wins`, inline: true },
                    { name: 'Current ELO', value: player.games.csgo.faceitElo, inline: true })
                .addFields(
                    { name: 'Longest winstreak', value: `${stats.longestWinStreak} wins`, inline: true },
                    { name: 'Current winstreak', value: `${stats.currentWinStreak} wins`, inline: true },
                    { name: 'Winrate (%)', value: `${stats.winRate}%`, inline: true })
                .addFields(
                    { name: 'Headshots (%)', value: `${stats.averageHeadshots}%`, inline: true },
                    { name: 'Total Headshots', value: `${stats.totalHeadshots}`, inline: true },
                    { name: 'K/D', value: stats.averageKDRatio, inline: true })
                .setFooter('Steam name is updated when it was updated by user on Faceit')
                .setTimestamp()
            message.channel.send(playerStatsEmbed)
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