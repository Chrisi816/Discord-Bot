const mongo = require('../../mongo')
const warnSchema = require('../../schemas/warn-schema')

module.exports = {
    commands: ['warlist'],
    minArgs: 1,
    expectedArgs: "<Target user's @>",
    permissions: 'ADMINISTRATOR',
    callback: async (message, arguments, text) => {
        const target = message.mentions.users.first()
        if (!target) {
            message.reply('Bitte Tage den User, dessen Regelverstöße du sehen willst!')
            return
        }

        const guildId = message.guild.id
        const userId = message.member.id

        await mongo().then(async mongoose => {
            try {
                const results = await warnSchema.findOneAndUpdate({
                    guildId,
                    userId,
                })

                let reply = `Ältere Gründe für Warns von <@${userId}>:\n\n`

                for (const warning of results.warnings) {
                    const { author, timestamp, reason} = warning

                    reply += `Von ${author} um ${new Date(timestamp).toLocaleDateString()} für "${reason}"\n\n`
                }

                message.reply(reply)
            } finally {
                mongoose.connection.close()
            }
        })

    }
}