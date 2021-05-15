const Discord = require('discord.js')

module.exports = {
    commands: ['ball', 'bl'],
    callback: async (message, args, text) => {
        console.log('Ball wurde ausgeführt!')
        if(!args[0])return message.reply('Bitte frag mich was richtiges!')
        let replies = ["Ja", "Nein", "Deine Mudda!", "Frag mich später nochmal!", "Nach ich hab jetzt keine Zeit, komm später wieder!", "Hmm ich muss überlegen!", "Piss dich!", "Vieleicht", "Defenitiv", "Nah ich hab momentan keine Lust mit dir zu Reden..", "Anstatt mir Fragen zu stellen, könntest du ganz einfach mal bei vAzoniq vorbei schauen!"]

        let result = Math.floor((Math.random() * replies.length))
        let question = args.slice().join(" ");

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`)
        .setColor("BLUE")
        .addField("Frage:", question)
        .addField("Antwort:", replies[result])

        message.channel.send(embed)
    },
}