const economy = require('../../econemy')

module.exports = {
    commands: ['balance'],
    maxArgs: 1, 
    expectedArgs: "[KEKW]",
    callback: async (message) => {
        const target = message.mentions.users.first() || message.author
        const targetId = target.id

        const guildId = message.guild.id
        const userId = target.id

        const coins = await economy.getCoins(guildId, userId)

        message.reply(`Du hast ${coins} coins!`)
    }
}