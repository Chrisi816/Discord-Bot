const discord = require('discord.js')

module.exports = {
    commands: 'reaktionrole',
    callback: async (message, client) => {
        const embed = new discord.MessageEmbed()
        .setTitle('Social Media Pings ')
        .setDescription(`
        📢 Du wirst für alles was unten Folgt Gepingt \n\n
        📱 Du wirst bei neuen Twitter Posts von vAzoniq gepingt \n\n 
        🎬 Bei neuen Streams wirst du immer gepingt 😎 \n\n
        🎮 Du willst bei Turnieren dabei sein? Dann reagier am besten! \n\n
        ❗ Bekommst Random Pings :D \n\n
        `)
        .setColor('GREEN')

        const msg = await message.channel.send(embed)
        await msg.react("📢")
        await msg.react("📱")
        await msg.react("🎬")
        await msg.react("🎮")
        await msg.react("❗")
    }
}