const mongo = require('./mongo')
const profileSchema = require('./schemas/profile-schema')

module.exports = (client) => {
    client.on('message', (message) => {
        const { guild, member } = message
        if(message.author.bot) return;
        addXP(guild.id, member.id, Math.floor(Math.random() * 12) + 10, message)
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

             if(level == 3) {
                let role = message.guild.roles.cache.find(role => role.name == "Anfänger [3]")
                if (!role) await message.guild.roles.create({
                    data: {
                    name: "Anfänger [3]",
                    color: "GREY",
                   }
                }).catch(err => console.log(err))
                role = message.guild.roles.cache.find(role => role.name == "Anfänger [3]")
                if(message.member.roles.cache.has(role.id)) return
                else await message.member.roles.add(role.id)
            }
            if(level == 5) {
                let role = message.guild.roles.cache.find(role => role.name == "Erfahrender [5]")
                if (!role) await message.guild.roles.create({
                    data: {
                    name: "Erfahrender [5]",
                    color: "GREY",
                   }
                }).catch(err => console.log(err))
                role = message.guild.roles.cache.find(role => role.name == "Erfahrender [5]")
                if(message.member.roles.cache.has(role.id)) return
                else await message.member.roles.add(role.id)
            }
            if(level == 10) {
                let role = message.guild.roles.cache.find(role => role.name == "Master [10]")
                if (!role) await message.guild.roles.create({
                    data: {
                    name: "Master [10]",
                    color: "GREY",
                   }
                }).catch(err => console.log(err))
                role = message.guild.roles.cache.find(role => role.name == "Master [10]")
                if(message.member.roles.cache.has(role.id)) return
                else await message.member.roles.add(role.id)
            }
            if(level == 15) {
                let role = message.guild.roles.cache.find(role => role.name == "Lord [15]")
                if (!role) await message.guild.roles.create({
                    data: {
                    name: "Lord [15]",
                    color: "GREY",
                   }
                }).catch(err => console.log(err))
                role = message.guild.roles.cache.find(role => role.name == "Lord [15]")
                if(message.member.roles.cache.has(role.id)) return
                else await message.member.roles.add(role.id)
            }
            if(level == 25) {
                let role = message.guild.roles.cache.find(role => role.name == "XP Glitcher [25]")
                if (!role) await message.guild.roles.create({
                    data: {
                    name: "XP Glitcher [25]",
                    color: "GREY",
                   }
                }).catch(err => console.log(err))
                role = message.guild.roles.cache.find(role => role.name == "XP Glitcher [25]")
                if(message.member.roles.cache.has(role.id)) return
                else await message.member.roles.add(role.id)
            }
            if(level == 50) {
                let role = message.guild.roles.cache.find(role => role.name == "King of Chatting [50]")
                if (!role) await message.guild.roles.create({
                    data: {
                    name: "King of Chatting [50]",
                    color: "GREY",
                   }
                }).catch(err => console.log(err))
                role = message.guild.roles.cache.find(role => role.name == "King of Chatting [50]")
                if(message.member.roles.cache.has(role.id)) return
                else await message.member.roles.add(role.id)
            }

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
