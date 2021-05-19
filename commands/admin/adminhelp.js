const Discord = require('discord.js')

module.exports = {
    commands: 'admin',
    callback: async(message) => {
        const { guild } = message
        const icon = guild.iconURL()
        const embed = new Discord.MessageEmbed()

        .setTitle(`**Admin-Command Hilfe**`)
        .setThumbnail(icon)
        .setColor(`ff0004`)
        .setFooter('Azoniq Bot 2021', icon)
        .addFields(
            {
                name: '**Moderation Commands**',
                value: `
**!ban** <@name> - Bannt den ausgewählten Nutzer! 
**!kick** <@name> - Kickt den ausgewählten Nutzer!
**!warn** <@name> - Warnt den ausgewählten Nutzer!
**!warnlist** - Alle Einträge einer Person werden gepostet!
**!clear** 10,50,100 - Cleart die Letzten 10/50/100 Nachrichten!`
            },
            {
                name: '**Allgemeine Admin Commands**',
                value: `
**!giveaway <Zeit s,h,d,m> <Gewinner Anzahl> <Preis> - Erstellt ein Giveaway!  
**!createwelcomechannel** <Nachricht> - Ein Welcomechannel wird festgellegt + Nachricht was beim beitreten stehen soll!
**!createtext** - Erstelle ganz einfach einen Text Channel!
**!createvoice** - Erstelle ganz einfach einen Voice Channel!
**!addcoins** <@> <Anzahl> - Gebe eine bestimmte Azahl an Coins an User! 
`
            }
        )
        message.channel.send(embed)
    },
    permissions: 'ADMINISTRATOR'
}