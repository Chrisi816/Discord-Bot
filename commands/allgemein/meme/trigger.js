const Discord = require("discord.js");
const canvacord = require('canvacord')

module.exports = {
    commands:'trigger',
    callback: async (message) => {
       const user = message.mentions.users.first() || message.author
       const avatar = user.displayAvatarURL({ format: "png", dynamic: false})
       const images = await canvacord.Canvas.trigger(avatar);
       const attachment = new Discord.MessageAttachment(images, "trigger.gif")
       return message.channel.send(attachment)
    } 
}