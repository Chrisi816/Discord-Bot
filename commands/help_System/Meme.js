const Discord = require('discord.js')

module.exports = {
    commands: 'hmeme',
    callback: async(message) => {
        const { guild } = message
                const icon = guild.iconURL()
                const embed = new Discord.MessageEmbed()
                .setTitle(`** MEME COMMANDS**`)
                .setThumbnail(icon)
                .setColor(`ff0004`)
                .setFooter('Azoniq Bot 2021', icon)
                .addField('⠀ ', `
**!meme** - Ein Random Reddit Meme wird erscheinen.
**!beautiful** - Spieglein, Spieglein an der Wand, wer is die schönst in diesem Land...
**!bed** - Hat dich dein Bruder wieder geärgert?
**!jail** - Was machst du im Knast?
**!kiss** - Ein küsschen gefällig?
**!hit** - Ehm ja gut..
**!rip** - Ruhe im Frieden...
**!shit** - Ohh da ist jemand ausversehen in Scheiße getreten..
**!spank** - Schläge? HMMMM
**!trash** - Kurz mal jemanden mit der Mülltonne verwächselt.. Kann mal passieren! 
**!trigger** - Bist du getriggert?
**!wanted** - Holl dir das Geld!
**!wasted** - F an den gefallenden Bruder..`)

                message.channel.send(embed)
            }
}