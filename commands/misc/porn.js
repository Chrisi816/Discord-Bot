const Discord = require('discord.js')
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    commands: ['porn'],
    cooldown: 4,
    description: 'Ein Pussy Bild wird gepostet!',
    callback: async (message, discord) => {
        const image = await nsfw.pgif();
           const embed = new Discord.MessageEmbed()
             .setTitle(`Pornos <3`)
           .setColor("RANDOM")
          .setImage(image);
        message.channel.send(embed);
    }
}