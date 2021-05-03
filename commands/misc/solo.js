const Discord = require('discord.js')
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    commands: ['solo'],
    description: 'solo',
    cooldown: 4,
    callback: async (message, discord) => {
        const image = await nsfw.solo();
        const embed = new Discord.MessageEmbed()
          .setTitle(`Du willst Animie Nudes? Hier...`)
        .setColor("RANDOM")
       .setImage(image);
     message.channel.send(embed);
 }
}
        