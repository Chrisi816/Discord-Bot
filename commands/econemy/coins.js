const economy = require('../../mongo/econemy')
const Discord = require('discord.js')

module.exports = {
    commands: ['coins'],
    maxArgs: 1, 
    callback: async (message) => {
        const { guild } = message
        const member = message.mentions.users.first() || message.author
        const target = message.mentions.users.first() || message.author
        const targetId = target.id

        const guildId = message.guild.id
        const userId = target.id
        
        const icon = guild.iconURL()
        const coins = await economy.getCoins(guildId, userId)
        
        let embed = new Discord.MessageEmbed()
            .setThumbnail(icon)
            .setDescription(`💰💰 **Coins von ${member}** 💰💰`)
            .addField("**Deine Aktuellen Coins:**", `${coins} 💰`)
            .setColor("YELLOW")

        message.channel.send(embed);
    }
}