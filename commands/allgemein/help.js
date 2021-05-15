const Discord = require('discord.js')

module.exports = {
    commands: 'help',
    callback: async(message) => {
        const { guild } = message
                const icon = guild.iconURL()
                const embed = new Discord.MessageEmbed()
                .setTitle(`**Command Hilfe**`)
                .setThumbnail(icon)
                .setColor(`ff0004`)
                .setFooter('Azoniq Bot 2021', icon)
                .addFields(
                    {
                        name: 'Allgemeine Commands:',
                        value: `
**!serverinfo** - Alle Informationen vom Server werden gepostet!
**!link** - Der Einladungslink vom Bot wird veröffentlicht!
**!member** - Anzahl der Aktuellen Member! 
**!level** - Sehe dein aktuelles Level!
**!covid** - Sehe dir den aktuellen stand des Coron viruses an! 
**!invites** - Eine Invite Rank Liste wird erstellt!
**!invite** - Überprüfe die Invites einer bestimmten Person!              
**!avatar** - Vergrößert ein Profilbild!
**!botinfo** - Es werden Alle einzelheiten des Bots veröffentlicht!
                    `},
                    {
                        name: 'Glückspiel Commands:',
                        value: `
**!Coins** - Anzahl der Coins die du besitzt!
**!flip** <Anzahl der Coins> <Zahl oder Kopf> - Du kannst eine Münze werfen und dein Einsatz verdoppeln oder verlieren!
**!buyrank** - Kaufe dir für deine Erspielten Coins, besondere Ränge! `
                    },
                    {
                        name: `Fun Commands`,
                        value: `
**!ball/bl** - Stelle dem Bot eine Frage, und er wird diese Weise beantworten!
**!meme** - Ein Random Reddit Meme wird erscheinen.
**!suggestion/vorschlag** - Erstelle ein Vorschlag. (**!** Umfrage Channel muss vorhanden sein **!**)
**!iq** - Überpfrüfe deine Schlauheit
**!ssp** - Lust auf eine Runde Schere, Stein, Papier?
**!howgay** - Überprüfe ganz einfach wie Schwull du bist
**!kwitze** - Lust auf ein paar kurze Witze?
`
                    },
                    {
                        name:`Musik Commands`, 
                        value: `
**!play** <Link> - Spielt Musik ab 
**!leave** - Der Bot verlässt den Aktuellen Channel
**!skip** - Der Bot skipt das laufende Lied`
                    },
                    {
                        name:`Nsfw Command (**!** Adult Content **!**)`,
                        value:`
**!4k** - Sehe dir ein paar 4k Nudes an!
**!anal** - Ehm ja, wierdo...
**!ass** - Bissel Arsch? 
**!boobs** - Ein Paar Boobies Schaden nie?!
**!gwild** - Actelly wylde Nudes
**!hentai** - Du magst Animies? Ach ok Perfekt...
**!porn** - Eigentlich ein Porno aber halt als Gif!
**!pussy** - Du willst paar Katzen? Spaß
**!solo** - Animie Nudes?!
**!thigh** - Naja, ein Paar Schenkel... 
**!wallpaper** - Animie Wallpapers? 
More Commands Soon `                        
                    },
                   
                )
        message.channel.send(embed)
    }
}