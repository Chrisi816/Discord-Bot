const mongo = require('./mongo')
const profileSchema = require('./schemas/profile-schema')

module.exports = (client) => {
    client.on('message', (message) => {
        const { guild, member } = message

        addXP(guild.id, member.id, Math.floor(Math.random() * 15) + 13, message)
    })
}

const getNeededXP = (level) => level * level * 70

const addXP = async (guildId, userId, xpToAdd, message) => {
   await mongo().then(async (mongoose) => {
       try{
         const result = await profileSchema.findOneAndUpdate(
         {
            guildId,
            userId
         }, {
             guildId,
             userId,
             $inc: {
                 xp: xpToAdd
             }
         }, {
             upsert: true,
             new: true
         })

         let { xp, level } = result
         const needed = getNeededXP(level)

         if (xp >= needed) {
             ++level
             xp -= needed

             message.reply(`Du bist jetzt Level ${level}! Du brauchst ${getNeededXP(level)} XP um Aufzusteigen!`)

             await profileSchema.updateOne({
                 guildId,
                 userId
             }, {
             level,
             xp
             })
         }
       } finally {
           mongoose.connection.close()
       }
   })
}

module.exports.addXP = addXP