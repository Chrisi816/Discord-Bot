const Discord = require('discord.js')

module.exports = {
    commands: 'heco',
    callback: async(message) => {
        const { guild } = message
                const icon = guild.iconURL()
                const embed = new Discord.MessageEmbed()
                .setTitle(`**ECONEMY COMMANDS**`)
                .setThumbnail(icon)
                .setColor(`ff0004`)
                .setFooter('Azoniq Bot 2021', icon)
                .addField('⠀ ', `
**!daily** - Holle dir alle 24Std einen kleinen Bonus!
**!work** - Holl dir alle 30 Min deine Auzhalung von Jobcenter ab!
**!coins** - Anzahl der Coins die du besitzt!
**!search** - Suche an stellen um Geld zu verdienen!
`)
                message.channel.send(embed)
            }
}