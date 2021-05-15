module.exports = {
    commands:'',
    callback: async(message) => {
        message.channel.send(
            `${message.guild.name} hat ${message.guild.memberCount} Member!`
        )
    }
}