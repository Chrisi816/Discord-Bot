// Copyright by ꧁☬ℭ𝔥𝔯𝔦𝔰𝔦☬꧂#0001 \\
const Discord = require ('discord.js')

module.exports = {
    commands:'say',
    callback: async(message, args) => {
        const embed = new Discord.MessageEmbed()
        .setTitle(`**Neue Nachricht**`)
        .setDescription(`${message.author.tag} sagte ${args.join(" ")}`)
        .setTimestamp()
        .setColor("BLUE")

    message.channel.send(embed) 
    }
}