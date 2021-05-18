const mongo = require('./mongo')
const profileSchema = require('./schemas/profile-schema')

module.exports = (client) => {
    client.on('message', (message) => {
        const { guild, member } = message
        if(message.author.bot) return;
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

             message.reply(`Du bist jetzt Level ${level}!`)

             await profileSchema.updateOne({
                 guildId,
                 userId
             }, {
             level,
             xp
             })
             if(user.level == 1) {
                const role = message.guild.roles.cache.find(role => role.name == "Level 1 ")
                if(!role) await message.guild.roles.create({
                    name: "Level 1 ",
                    color: "#2f3134",
                }).catch(err => console.log(err))
                if (message.member.roles.cache.has(role.id)) return;
                else await message.member.roles.add(role.id)
            }
         }
       } finally {
           mongoose.connection.close()
       }
   })
}

module.exports.addXP = addXP