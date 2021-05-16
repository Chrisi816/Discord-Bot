const economy = require('../../econemy')
const Discord = require('discord.js')

module.exports = {
    commands: 'daily',
    cooldown: '86400',
    callback: async(message, args) => {
        const target = message.mentions.users.first() || message.author
        const targetId = target.id
        const guildId = message.guild.id
        const userId = target.id
        var min = 10;
        var max = 150;
        var coins = Math.floor(Math.random() * (max - min))
        
        const newCoins = await economy.addCoins(guildId, userId, coins)
        
        const embed = new Discord.MessageEmbed()
        .setDescription(`Tagesbonus!`)
        .addField(`Hier hast du deinen Tagesbonus:`, coins)
        .addField(`Dein neuer Kontostand:`, newCoins)
        .setColor(`YELLOW`)
        .setFooter(`Komm morgen wieder um weitere Coins zu erhalten!`)
        message.channel.send(embed)
    }
}