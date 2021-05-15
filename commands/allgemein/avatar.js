const discord = require('discord.js')
module.exports = {
    commands: 'Avatar',
    callback: async ( message, args, prefix, Client) => {

    let user = message.mentions.users.first() || message.author;

    let avatar = user.displayAvatarURL({size: 4096, dynamic: true})

    const embed = new discord.MessageEmbed()
    .setTitle(`${user.tag}'s Avatar`)
    .setURL(avatar)
    .setImage(avatar)
    .setColor('RANDOM')
   message.channel.send(embed);
    }
}