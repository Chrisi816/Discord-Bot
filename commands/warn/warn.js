const mongo = require('../../mongo/mongo')
const warnSchema = require('../../mongo/schemas/warn-schema')
const Discord = require('discord.js')
const mongoose = require('mongoose')

module.exports = {
    commands: 'warn',
    minArgs: 1,
    expectedArgs: "<Target user's @> <reasons>",
    callback: async (message, arguments) => {
        const target = message.mentions.users.first()
        if (!target) {
            message.reply('Bitte Tage jemanden zum warnen!')
            return;
        }
 
        arguments.shift()

        const user = message.mentions.users.first()  
        const guildId = message.guild.id
        const userId = message.member.id 
        const reason = arguments.join(' ')

        const warning = {
            author: message.member.user.tag,
            timestamp: new Date().getTime(),
            reason
        }

        const embed = new Discord.MessageEmbed()
        .setTitle(`**!! WARN !!**`)
        .setColor(`RED`)
        .setDescription(`${user} Du wurdest Verwarnt!`)
        message.channel.send(embed)

        await mongo().then(async mongoose => {
            try {
                await warnSchema.findOneAndUpdate({
                    guildId,
                    userId,
                },
                {
                    guildId,
                    userId,
                    $push: {
                        warnings: warning
                    }
                },
                {
                    upsert: true
                })
            } finally {
                mongoose.connection.close()
            }
        })

    },
    permissions: 'MANAGE_ROLES',
}