const discord = require('discord.js')

module.exports = {
    commands: 'love',
    description: 'Shipe jemanden',
    callback: (message, arguments, text, client, Discord) => {
        const user = message.mentions.users.first()
        const random = Math.floor(Math.random() * 100) + 1

        if(!user) return message.channel.send(`Bitte wähle jemanden aus.`)
        if(user === message.author) return message.channel.send(`Du kannst mit dir selber kein Liebestest durchführen!`)

        const nixloveembed = new discord.MessageEmbed()
        .setTitle(`Das is keine Liebe!`)
        .setThumbnail(`https://media.discordapp.net/attachments/854384526558101554/856940342201155584/istockphoto-920398820-170667a.jpg`)
        .setDescription(`${message.author} hat einen Liebestest mit ${user} gemacht, ihr liebt euch zu ${random}%.`)
        .setColor("BLACK")

        const loveembed = new discord.MessageEmbed()
        .setTitle(`Das is Liebe, ihr seit füreinander bestimmt!`)
        .setThumbnail(`https://media.discordapp.net/attachments/854384526558101554/856940328095318026/zwei-romantische-herzen-miteinander-verbunden_1017-23448.jpg`)
        .setDescription(`${message.author} hat einen Liebestest mit ${user} gemacht, ihr liebt euch zu ${random}%.`)
        .setColor('RED')
        if(random > 50) {
            message.channel.send(loveembed)
        } else {
            message.channel.send(nixloveembed)
        }

    }, 
}