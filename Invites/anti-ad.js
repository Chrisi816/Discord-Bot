module.exports = (client) => {
    const isInvite = async (guild, code) => {
        return await new Promise((resolve) => {
          guild.fetchInvites().then((invites) => {
            for (const invite of invites) {
              if (code === invite[0]) {
                  resolve(true)
                  return
                }
              }
              resolve(false)
           })
        })
    }

    client.on('message', async (message) => {
        const { guild, member, content } = message

        const code = content.split('discord.gg/')[1]

        if (content.includes('discord.gg/')) {
            const isOurInvite = await isInvite(guild, code)
            if (!isOurInvite) {
                member.kick()
                message.delete()
            }
        }
    })
}