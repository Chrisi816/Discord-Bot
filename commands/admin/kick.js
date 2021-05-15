module.exports = {
    commands: 'kick',
    callback: async(message) => {
        const { member, mentions } = message

        const tag = `<@${member.id}>`
    
            const target = mentions.users.first()
            if (target) {
                const targetMember = message.guild.members.cache.get(target.id)
                targetMember.kick()
                message.channel.send(`${tag} Dieser User wurde gekickt!`)
            } else {
                message.channel.send(`${tag} Bitte Tagge jemanden zum Kicken!`)
         }
    },
    permissions: "ADMINISTRATOR"
}