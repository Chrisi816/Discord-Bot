module.exports = {
    commands: 'ping',
    description: 'Pingtest',
    callback: (message, arguments, text, client) => {
        message.reply('Berechnung läuft...').then((resultMessage) => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp

            resultMessage.edit(`Bot Latenz: ${ping},\nAPI Latenz: ${client.ws.ping}`)
        })
    }, 
}