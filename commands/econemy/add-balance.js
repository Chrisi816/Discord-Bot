const economy = require('../../mongo/econemy')

module.exports = {
    commands: ['addcoins'],
    minArgs: 2, 
    maxArgs: 2, 
    expectedArgs: "<Sein @> <Coins Anzahl>",
    permissionError: 'Du musst Admin oder höher sein, um diesen Command zu nützen!',
    callback: async (message, arguments) => {
        const mention = message.mentions.users.first()

        if (!mention) {
            message.reply('Bitte Tage den User dem du die Coins geben willst!')
            return
        }

        const coins = arguments[1]
        if (isNaN(coins)) {
            message.reply('Bitte gebe eine zulässige Anzahl an Coins an!')
            return
        }

        const guildId = message.guild.id
        const userId = mention.id 

        const newCoins = await economy.addCoins(guildId, userId, coins)

        message.reply(`Du hast <@${userId}> ${coins} gegeben!Er hat jetzt ${newCoins} coins(s)!`)
    },
    permissions: 'ADMINISTRATOR',
}