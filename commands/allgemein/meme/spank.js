const Discord = require("discord.js");
const canvacord = require('canvacord')

module.exports = {
    commands:'spank',
    callback: async (message) => {
       const user = message.mentions.users.first() 
       const avatar = message.author.displayAvatarURL({ format: "png", dynamic: false})
       const avatar1 = user.displayAvatarURL({ format: "png", dynamic: false})
       const images = await canvacord.Canvas.spank(avatar, avatar1);
       const attachment = new Discord.MessageAttachment(images, "spank.gif")
       return message.channel.send(attachment)
    } 
}