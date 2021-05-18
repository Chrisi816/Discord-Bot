const Discord = require("discord.js");
const canvacord = require('canvacord')

module.exports = {
    commands:'hit',
    callback: async (message) => {
       const user = message.mentions.users.first() || message.author
       const avatar = user.displayAvatarURL({ format: "png", dynamic: false})
       const images = await canvacord.Canvas.hitler(avatar);
       const attachment = new Discord.MessageAttachment(images, "hitler.png")
       return message.channel.send(attachment)
    } 
}