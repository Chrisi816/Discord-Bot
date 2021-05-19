const Discord = require("discord.js");
const canvacord = require('canvacord')

module.exports = {
    commands:'beautiful',
    callback: async (message) => {
       const user = message.mentions.users.first() || message.author
       const avatar = user.displayAvatarURL({ format: "png", dynamic: false})
       const images = await canvacord.Canvas.beautiful(avatar);
       const attachment = new Discord.MessageAttachment(images, "beautiful.gif")
       return message.channel.send(attachment)
    } 
}