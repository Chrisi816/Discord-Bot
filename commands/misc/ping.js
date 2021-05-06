const Discord = require('discord.js')

module.exports = {
    commands: 'ping',
    description: 'Pingtest',
    callback: (message, arguments, text, client, Discord) => {
        message.reply('Berechnung läuft...').then((resultMessage) => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp

            resultMessage.edit(`⏱ Bot Latenz: ${ping},\n⏱ API Latenz: ${client.ws.ping}`)
        })
    }, 
}