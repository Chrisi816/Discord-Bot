const Discord = require ('discord.js')
module.exports = {
    commands: 'info',
    callback: async(message) => {
        const { guild } = message

        const { name, region, owner, memberCount , afkTimeout } = guild
        const icon = guild.iconURL()
        const members = message.guild.members.cache
       

        const embed = new Discord.MessageEmbed()
        .setTitle(`**Server Informationen**`)
        .setThumbnail(icon)
        .setColor('RANDOM')
        .setFooter (`Fresh diese`, icon)
        .addFields(
           {
              name: '🎫⠀Server Name',
              value: message.guild.name
           },
           {
               name: '👑⠀Inhaber',
               value: owner.user.tag,
           },
           {
               name: '🌎⠀Region',
               value: region,
           },
           {
               name: '👥⠀Member',
               value: memberCount,  
           }, 
           {
                name: '🤖⠀Bots ',
                value: members.filter(member => member.user.bot).size,
           },
           {
                name: '👤⠀Menschen',
                value: members.filter(member => !member.user.bot).size
           },
           {
               name: '💬⠀Alle Text Kanäle ',
               value: message.guild.channels.cache.filter(channel => channel.type === 'text').size,
           },
           {
               name: '🎤⠀Alle Voice Kanäle', 
               value: message.guild.channels.cache.filter(channel => channel.type === 'voice').size,
           },
           {
               name: '👔⠀Anzahl der Rollen',
               value: message.guild.roles.cache.size,
           },
           )   

        message.channel.send(embed)
    }
}