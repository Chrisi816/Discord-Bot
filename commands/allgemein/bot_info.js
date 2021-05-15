const discord = require('discord.js'); 
const moment = require(`moment`) 

module.exports = {
    commands: 'botinfo',
    callback: async (message, args, prefix, Client) => { 
    if(!message.content.startsWith(prefix)) return

    var botEmbed = new discord.MessageEmbed() 
    .setColor(`BLUE`) 
    .setTitle(`Bot Info`)
    .setThumbnail(Client.user.displayAvatarURL()) 
    .addField(`**Allgemeines**`, [ 
        `**Name:** ${Client.user.username}`, 
        `**Tag:** ${Client.user.tag}`, 
        `**ID:** ${Client.user.id}`, 
        `**Erstellt am:** ${moment(Client.user.createdAt).format("DD-MM-YYYY [um] HH:mm")}`, 
        `**Besitzer:** ꧁☬ℭ𝔥𝔯𝔦𝔰𝔦☬꧂#5686 `, 
        `Einladungs Link:`,
        '\u200b'
    ])
    .addField(`**Statistiken**`,[ 
        `**Server:** ${Client.guilds.cache.size}`, 
        `**Channels:** ${Client.channels.cache.size}`, 
        `**Users:** ${Client.users.cache.size}`, 
        `**Discord.js Version:** 12.5.3`,
        `**Node.js Version:** 14.17.0` 
    ])
    message.channel.send(botEmbed) 
}
}

