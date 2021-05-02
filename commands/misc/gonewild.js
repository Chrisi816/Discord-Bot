const Discord = require('discord.js')
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    commands: ['gwild'],
    description: '!',
    cooldown: 10,
    callback: async (message, discord) => {
        const image = await nsfw.gonewild();
           const embed = new Discord.MessageEmbed()
             .setTitle(``)
           .setColor("RANDOM")
          .setImage(image);
        message.channel.send(embed);
    }
}