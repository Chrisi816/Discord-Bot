const discord = require('discord.js')

module.exports = {
    commands:["antislowmode", "asm"],
    callback: async(message, args) => {

        message.channel.setRateLimitPerUser(0)

        const embed = new discord.MessageEmbed()
                 .setTitle('**Slowmode**')
                 .addField(`Infos`, `Dieser Channel wurde wieder dem Slowmode erlöst.`)

                 message.channel.send(embed)
    },
    permissions: 'ADMINISTRATOR'
}