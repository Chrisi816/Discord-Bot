const Discord = require('discord.js')
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    commands: ['thigh'],
    description: 'thigh',
    cooldown: 10,
    callback: async (message, discord) => {
        const image = await nsfw.thigh();
        const embed = new Discord.MessageEmbed()
          .setTitle(`thigh`)
        .setColor("RANDOM")
       .setImage(image);
     message.channel.send(embed);
    }
}
        
        
        
        