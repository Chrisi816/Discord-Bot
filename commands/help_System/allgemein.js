const Discord = require('discord.js')

module.exports = {
    commands: 'hallgemein',
    callback: async(message) => {
        const { guild } = message
                const icon = guild.iconURL()
                const embed = new Discord.MessageEmbed()
                .setTitle(`**ALLGEMEINE COMMANDS**`)
                .setThumbnail(icon)
                .setColor(`ff0004`)
                .setFooter('Azoniq Bot 2021', icon)
                .addField('⠀ ', `
**!serverinfo** - Alle Informationen vom Server werden gepostet!
**!link** - Der Einladungslink vom Bot wird veröffentlicht!
**!member** - Anzahl der Aktuellen Member! 
**!level** - Sehe dein aktuelles Level!
**!covid** - Sehe dir den aktuellen stand des Coron viruses an! 
**!invites** - Eine Invite Rank Liste wird erstellt!
**!invite** - Überprüfe die Invites einer bestimmten Person!              
**!avatar** - Vergrößert ein Profilbild!
**!botinfo** - Es werden Alle einzelheiten des Bots veröffentlicht!
`)
                message.channel.send(embed)
            }
}