const Discord = require("discord.js");
const canvacord = require('canvacord');

module.exports = {
    commands:'bed',
    callback: async (message) => {
       const user = message.mentions.users.first() || message.author
       const avatar = message.author.displayAvatarURL({ format: "png", dynamic: false})
       const avatar1 = user.displayAvatarURL({ format: "png", dynamic: false})
       const images = await canvacord.Canvas.bed(avatar, avatar1);
       const attachment = new Discord.MessageAttachment(images, "bed.gif")
       return message.channel.send(attachment)
    } 
}