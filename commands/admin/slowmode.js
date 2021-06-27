// Copyright by ꧁☬ℭ𝔥𝔯𝔦𝔰𝔦☬꧂#0001 \\

const discord = require('discord.js')
const { permissions } = require('./clear50')

module.exports = {
    commands:"slowmode",
    callback: async(message, args) => {

        const time = args[0]
        const grund = args[1]
        if(!time) return message.channel.send("Bitte gebe eine Zeit in Sekunden an.")
        if(isNaN(time)) return message.channel.send("Bitte gebe eine ordnungsgemäße Sekunden Anzahl an!")
        if(!grund) return message.channel.send("Bitte geben sie ein Grund an.")

        message.channel.setRateLimitPerUser(time, 'No Reason')

        const embed = new discord.MessageEmbed()
                 .setTitle('**Slowmode**')
                 .addField(`Infos`, `Dieser Channel wurde in den Slowmode gesetzt da ${grund}, ihr könnt jetzt alle ${time}s etwas  schreiben.`)

                 message.channel.send(embed)
    },
    permissions: 'ADMINISTRATOR'
}