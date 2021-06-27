// Copyright by ꧁☬ℭ𝔥𝔯𝔦𝔰𝔦☬꧂#0001 \\

const discord = require('discord.js')
const client = new discord.Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION']})

module.exports = {
    commands:"lockdown",
    callback: async(message, args) => {

    const channel = client.channels.cache.find(channel => channel.name === channelName)
    const id = message.guild.defaultRole
    const ow = message.channel.permissionOverwrites.get(id)

    channels.setName(`🔐 ${channelName}`)
    channels.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"), {
        SEND_MESSAGES: false
    })
    const embed = new discord.MessageEmbed()
                 .setTitle('**Lockdown**')
                 .addField(`Infos`, `Dieser Channel wurde in den Lockdown geschickt!`)
                 .setThumbnail("https://cdn.discordapp.com/attachments/854384526558101554/857272778381590568/1603966905164swr2-impuls-lockdown-themenbild-corona-100__v-16x92dL_-6c42aff4e68b43c7868c3240d3ebfa29.jpg")
                 .setColor('GREEN')

        message.channel.send(embed)
    }
}
                        
