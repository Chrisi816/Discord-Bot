const Discord = require('discord.js')
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    commands: ['hentai'],
    description: 'hentai',
    cooldown: 4,
    callback: async (message, discord) => {
        const image = await nsfw.hentai();
        const embed = new Discord.MessageEmbed()
          .setTitle(`Hantai`)
        .setColor("RANDOM")
       .setImage(image);
     message.channel.send(embed);
 }
}
      