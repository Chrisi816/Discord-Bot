const Discord = require('discord.js')
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    commands: ['ass'],
    cooldown: 4,
    description: 'Ein Boobs bild wird gepostet!',
    callback: async (message, discord) => {
        const image = await nsfw.ass();
           const embed = new Discord.MessageEmbed()
             .setTitle(``)
           .setColor("RANDOM")
          .setImage(image);
        message.channel.send(embed);
    }
}
