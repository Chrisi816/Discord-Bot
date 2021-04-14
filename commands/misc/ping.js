module.exports = {
    commands: 'ping',
    callback: (message, arguments, text, client) => {
        message.reply('Berechnung läuft...').then((resultMessage) => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp

            resultMessage.edit(`Bot Latenz: ${ping}, API Latenz: ${client.ws.ping}`)
        })
    }, 
}