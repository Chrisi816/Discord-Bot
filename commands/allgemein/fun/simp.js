// Copyright by ꧁☬ℭ𝔥𝔯𝔦𝔰𝔦☬꧂#0001 \\

const economy = require('../../../mongo/econemy')
const discord = require("discord.js")

module.exports = {
    commands:'simp',
    callback: async(message) => {
        const target = message.mentions.users.first() || message.author
        const guildId = message.guild.id
        const userId = target.id
        var min = 100;
        var max = 440;
        const simpzahl = Math.floor(Math.random() * 100) + 1
        var coins = Math.floor(Math.random() * (max - min))
        const newCoins = await economy.addCoins(guildId, userId, coins)

        const nixsimpembed = new discord.MessageEmbed()
        .setTitle(`Du bist kein Simp, du hast alles gut gemacht`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/858761371582464021/858791938132148234/valid.png`)
        .setDescription(`${message.author} ist zu ${simpzahl}% ein Simp, als belohnung für deine Treue bekommst du ${coins} Coins, du hast Aktuell ${newCoins} Coins auf der Bank.  `)
        .setColor("BLACK")

        const simpembed = new discord.MessageEmbed()
        .setTitle(`Du bist ein Simp, geh dich vergraben!`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/858761371582464021/858791516860448798/flat750x075f-pad750x1000f8f8f8.jpg`)
        .setDescription(`${message.author} ist zu ${simpzahl}% ein Simp, ich würd dich zum Arzt schicken...`)
        .setColor('RED')
        if(simpzahl > 50) {
            message.channel.send(simpembed)
        } else {
            message.channel.send(nixsimpembed)
        }

    }
}