module.exports = {
    commands:'member',
    callback: async(message) => {
        message.channel.send(
            `${message.guild.name} hat ${message.guild.memberCount} Member!`
        )
    }
}