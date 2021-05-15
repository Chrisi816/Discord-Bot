module.exports = {
    commands: 'ban',
    callback: async(message) => {
        const { member, mentions } = message

        const tag = `<@${member.id}>`
            const target = mentions.users.first()
            if (target) {
                const targetMember = message.guild.members.cache.get(target.id)
                targetMember.ban()
                message.channel.send(`${tag} Dieser User wurde gebannt!`)
            } else {
                message.channel.send(` ${tag} Bitte Tagge jemanden zum Bannen!`)
        }
    },
    permissions: 'ADMINISTRATOR',
}
