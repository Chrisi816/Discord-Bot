module.exports = {
    commands: 'banned',
    callback: async (message, args, client) => {
       const fetchBans = message.guild.fetchBans()
       const bannedMembers = (await fetchBans)
       .map((member) => member.user.tag)
       .join(", ")
       message.channel.send(bannedMembers)
    },
    permissions: 'ADMINISTRATOR'
}