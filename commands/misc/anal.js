const Discord = require('discord.js')
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    commands: ['anal'],
    description: 'anal',
    cooldown: 10,
    callback: async (message, discord) => {
        const image = await nsfw.anal();
        const embed = new Discord.MessageEmbed()
          .setTitle(`Anal`)
        .setColor("RANDOM")
       .setImage(image);
     message.channel.send(embed);
 }
}
        