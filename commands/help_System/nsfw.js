const Discord = require('discord.js')

module.exports = {
    commands: 'hnsfw',
    callback: async(message) => {
        const { guild } = message
                const icon = guild.iconURL()
                const embed = new Discord.MessageEmbed()
                .setTitle(`**NSFW COMMANDS**`)
                .setThumbnail(icon)
                .setColor(`ff0004`)
                .setFooter('Azoniq Bot 2021', icon)
                .addField('⠀ ', `
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
More Commands Soon `)
                message.channel.send(embed)
            }
}