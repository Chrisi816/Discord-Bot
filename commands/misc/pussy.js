const Discord = require('discord.js')
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    commands: ['pussy'],
    cooldown: 10,
    description: 'Ein Pussy Bild wird gepostet!',
    callback: async (message, discord) => {
        const image = await nsfw.pussy();
           const embed = new Discord.MessageEmbed()
             .setTitle(`Pussys <3`)
           .setColor("RANDOM")
          .setImage(image);
        message.channel.send(embed);
    }
}