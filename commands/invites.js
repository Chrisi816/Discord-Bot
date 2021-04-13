module.exports = {
    commands: 'invites',
    callback: (message) => {
        const { guild } = message

        guild.fetchInvites().then((invites) => {
            const inviteCounter = {}

            invites.forEach((invite) => {
                const { uses, inviter } = invite
                const { username, discriminator } = inviter

                const name = `${username}#${discriminator}`

                inviteCounter[name] = (inviteCounter[name] || 0) + uses
            })

            let replyText = '**Das sind die Leute die am meisten Einladungen verschickt haben:**'

            const sortedInvites = Object.keys(inviteCounter).sort((a, b) => inviteCounter[b] - inviteCounter[a])

            console.log(sortedInvites)

            sortedInvites.length = 4

            for (const invite of sortedInvites) {
                const count = inviteCounter[invite]
                replyText += `\n**${invite}** hat ${count} Leute eingeladen!`
            }

            message.reply(replyText)
        })
    }
}