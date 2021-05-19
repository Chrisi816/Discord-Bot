const Discord = require('discord.js')

module.exports = {
    commands: 'help',
    callback: async(message) => {
        const { guild } = message
                const icon = guild.iconURL()
                const embed = new Discord.MessageEmbed()
                .setTitle(`**Hilfe**`)
                .setDescription(`**Übersicht über alle Command Themen**`)
                .setThumbnail(icon)
                .setColor(`ff0004`)
                .setFooter('Azoniq Bot 2021', icon)
                .addFields(
                    {
                        name: '⠀ ',
                        value: `
                        !hallgemein - Allgemeine Commands
                        !hmusik - Musik Commands
                        !hfun - Fun Commands
                        !heco - Econemy Commands
                        !hmeme - Meme Commands
                        !nsfw - Nsfw Commands
                    `})
        message.channel.send(embed)
    }
}