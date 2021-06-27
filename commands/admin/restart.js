// Copyright by ꧁☬ℭ𝔥𝔯𝔦𝔰𝔦☬꧂#0001 \\

module.exports = {
    commands:"restart",
    callback: async(message, args) => {
        if (message.author.id == ['816076557336313856', '784076542480875561']) {
            return message.channel.send('Du kannst diesen Command nicht benutzen!')
        }

        await message.channel.send('Restarting the Bot...')

        process.exit()
    }
}