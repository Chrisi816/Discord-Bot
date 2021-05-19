const level = require('../../mongo/level')
const Discord = require('discord.js')
const profileSchema = require('../../mongo/schemas/profile-schema')
const Canvacord = require('canvacord')

module.exports = {
    commands: 'level',
    cooldown: '0',
    callback: async(message, args) => {
        const user = message.mentions.users.first() || message.author        
        const target = message.mentions.users.first() || message.author
        const guildId = message.guild.id
        const userId = target.id
        const result = await profileSchema.findOneAndUpdate(
            {
               guildId,
               userId
            }, {
                guildId,
                userId,
            }, {
                upsert: true,
                new: true
            })
        

        var getNeededXP = (level) => level * level * 70
        let { xp, level } = result
        const needed = getNeededXP(level)

         if (xp >= needed) {
             ++level
             xp -= needed
         }
        const rankcard = new Canvacord.Rank()
        .setAvatar(user.displayAvatarURL({format: 'png', dynamic: true}))
        .setCurrentXP(xp)
        .setRequiredXP(getNeededXP(level))
        .setStatus(user.presence.status)
        .setLevel(level)
        .setRank(1, 'RANK', false)
        .setProgressBar("#a81d16", "COLOR")
        .setOverlay("#000000")
        .setUsername(user.username)
        .setDiscriminator(user.discriminator)
        .setBackground("IMAGE", "https://s20.directupload.net/images/210517/y8obpn85.png")
        rankcard.build()
        .then(data => {
            const atta = new Discord.MessageAttachment(data, "rank.png")
            message.channel.send(atta)
        })
    }
}