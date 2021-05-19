const Discord = require('discord.js')

module.exports = {
    commands: 'hfun',
    callback: async(message) => {
        const { guild } = message
                const icon = guild.iconURL()
                const embed = new Discord.MessageEmbed()
                .setTitle(`**FUN COMMANDS**`)
                .setThumbnail(icon)
                .setColor(`ff0004`)
                .setFooter('Azoniq Bot 2021', icon)
                .addField('⠀ ', `
**!ball/bl** - Stelle dem Bot eine Frage, und er wird diese Weise beantworten!
**!suggestion/vorschlag** - Erstelle ein Vorschlag. (**!** Umfrage Channel muss vorhanden sein **!**)
**!iq** - Überpfrüfe deine Schlauheit
**!ssp** - Lust auf eine Runde Schere, Stein, Papier?
**!howgay** - Überprüfe ganz einfach wie Schwull du bist
**!kwitze** - Lust auf ein paar kurze Witze?

`)
                message.channel.send(embed)
            }
}