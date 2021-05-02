const Discord = require('discord.js')
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    commands: ['4k'],
    description: '4k',
    cooldown: 3,
    callback: async (message, discord) => {
        const image = await nsfw.fourk();
           const embed = new Discord.MessageEmbed()
             .setTitle(`nsfw`)
           .setColor("RANDOM")
          .setImage(image);
        message.channel.send(embed);
    }
}
