const Discord = require('discord.js')

module.exports = {
    commands: 'hmusik',
    callback: async(message) => {
        const { guild } = message
                const icon = guild.iconURL()
                const embed = new Discord.MessageEmbed()
                .setTitle(`**FUN COMMANDS**`)
                .setThumbnail(icon)
                .setColor(`ff0004`)
                .setFooter('Azoniq Bot 2021', icon)
                .addField('⠀ ', `
**!play** <Link> - Spielt Musik ab 
**!leave** - Der Bot verlässt den Aktuellen Channel
**!skip** - Der Bot skipt das laufende Lied

`)
                message.channel.send(embed)
            }
}